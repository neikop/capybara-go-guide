"""Build a standalone guide, keeping the original browser URL working."""
import html
import json
import pathlib
import re
import subprocess
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]
OUT = ROOT / 'outputs'
subprocess.run([sys.executable, str(HERE / 'build_skill_tiers.py')], check=True, capture_output=True)
guide = json.loads((HERE / 'guide-content.json').read_text())
skills = json.loads((OUT / 'WHISPERER_SKILL_TIER_LIST.json').read_text())
esc = lambda value: html.escape(str(value), quote=True)

def link(url, title):
    return f'<a href="{esc(url)}" target="_blank" rel="noopener noreferrer">{esc(title)} <span aria-hidden="true">↗</span></a>'

def render(block):
    t = block['type']
    if t == 'p':
        return f'<p>{esc(block["text"])}</p>'
    if t == 'h':
        return f'<h2>{esc(block["text"])}</h2>'
    if t == 'list':
        return '<ul class="prose-list">' + ''.join(f'<li>{esc(s)}</li>' for s in block['items']) + '</ul>'
    if t == 'table':
        return '<div class="table-wrap" role="region" aria-label="Bảng hướng dẫn" tabindex="0"><table><thead><tr>' + ''.join(f'<th scope="col">{esc(s)}</th>' for s in block['headers']) + '</tr></thead><tbody>' + ''.join('<tr>' + ''.join(f'<td data-label="{esc(block["headers"][j])}">{esc(s)}</td>' for j,s in enumerate(row)) + '</tr>' for row in block['rows']) + '</tbody></table></div>'
    if t == 'callout':
        return f'<aside class="callout"><span class="callout-mark" aria-hidden="true">↳</span><div><strong>{esc(block["title"])}</strong><p>{esc(block["text"])}</p></div></aside>'
    if t == 'cards':
        return '<div class="cards">' + ''.join('<article class="card"><h2>' + esc(c['title']) + '</h2><p>' + esc(c['text']) + '</p>' + (f'<a class="text-link" href="#{esc(c["target"])}">Xem hướng dẫn <span aria-hidden="true">→</span></a>' if c.get('target') else '') + '</article>' for c in block['items']) + '</div>'
    if t == 'checklist':
        return '<div class="checklist"><div class="check-top"><span id="check-progress" role="status"></span><button class="quiet" id="reset-checks" type="button">Bỏ chọn hôm nay</button></div>' + ''.join(f'<label class="check-item"><input type="checkbox" data-check="{i}"><span>{esc(s)}</span></label>' for i, s in enumerate(block['items'])) + '</div>'
    if t == 'skills':
        options = ''.join(f'<option value="{k}">{k} — {esc(v)}</option>' for k, v in skills['tier_labels'].items())
        legend = ''.join(f'<span><b class="badge {k}">{k}</b> {esc(v)}</span>' for k,v in skills['tier_labels'].items())
        return '''<div class="skill-browser"><div class="skill-tools"><label>Tìm skill<input id="skill-search" type="search" placeholder="Basic Attack, dagger, hồi máu…" autocomplete="off"></label><label>Tier<select id="skill-tier"><option value="">Tất cả tier</option>''' + options + '''</select></label><label>Nhóm<select id="skill-scope"><option value="Story / nâng cấp">Story / nâng cấp</option><option value="Synergy Lv1">Synergy Lv1</option><option value="Hệ mở sau / nguồn khác">Hệ mở sau / nguồn khác</option><option value="">Toàn bộ bản tra cứu</option></select></label></div><div class="skill-presets" aria-label="Tìm nhanh"><button type="button" data-skill="Basic Attack">Basic Attack</button><button type="button" data-skill="Dagger">Dagger</button><button type="button" data-skill="hồi">Hồi phục</button><button type="button" data-skill="">Bỏ bộ lọc</button></div><div class="tier-legend">''' + legend + '''</div><p id="skill-stats" role="status"></p><div class="table-wrap skill-table" tabindex="0" aria-label="Tier list skill"><table><thead><tr><th scope="col">Tier</th><th scope="col">Skill</th><th scope="col">English description</th><th scope="col">Khi nên chọn</th></tr></thead><tbody id="skill-body"></tbody></table><p id="skill-empty" hidden>Không có kết quả. Thử bỏ tier hoặc chọn “Toàn bộ bản tra cứu”.</p></div></div>'''
    if t == 'budget':
        return '''<div class="budget"><div><span class="eyebrow">TỰ CÂN ĐỐI</span><h2>Sau khoản chi này, còn bao nhiêu gems?</h2><p>Phép trừ ngân sách; không dự đoán tỷ lệ quay hoặc phần thưởng.</p></div><div class="budget-inputs"><label>Gems đang có<input id="gem-balance" type="number" min="0" step="1" inputmode="numeric" placeholder="Nhập số dư"></label><label>Quỹ muốn giữ<input id="gem-reserve" type="number" min="0" step="1" inputmode="numeric" value="32000"></label><label>Khoản chi dự kiến<input id="gem-spend" type="number" min="0" step="1" inputmode="numeric" placeholder="Nhập chi phí"></label></div><output id="gem-result" aria-live="polite">Nhập số dư và khoản chi để tính.</output></div>'''
    if t == 'downloads':
        return '<h2>Tài liệu đi kèm</h2><div class="download-links"><a href="CAPYBARA_GO_MEMORY.md">Bản tổng hợp toàn game (.md)</a><a href="WHISPERER_14_NGAY_DAU.md">Kế hoạch 14 ngày (.md)</a><a href="WHISPERER_SKILL_TIER_LIST.json" download>Dữ liệu skills (.json)</a><a href="WHISPERER_SKILL_TIER_LIST.md">Bảng skills (.md)</a><a href="CAPYBARA_GO_GUIDE.html" download>Tải website dùng offline (.html)</a><a href="GUIDE_MAINTENANCE.md">Cách cập nhật trang</a></div><p class="small muted">Các bản Markdown là tài liệu nền ngày 16/09; các phần bổ sung ngày 17/09 nằm trong website. Khi tải riêng HTML, nội dung guide và bộ lọc skill vẫn hoạt động; các file đi kèm cần tải riêng.</p>'
    if t == 'sources':
        text = (OUT / 'CAPYBARA_GO_MEMORY.md').read_text()
        refs = re.findall(r'^\d+\. \[([^\]]+)\]\((https://[^)]+)\)', text, flags=re.M)
        assert len(refs) == 51, len(refs)
        return '<h2>Chỉ mục 51 nguồn MeowDB</h2><ol class="source-list">' + ''.join('<li>' + link(url,title) + '</li>' for title,url in refs) + '</ol>'
    raise ValueError(t)

nav=[]
sections=[]
for i, section in enumerate(guide['sections'], 1):
    sid=section['id']
    nav.append(f'<a href="#{sid}" data-nav="{sid}"><span class="nav-num">{i:02d}</span><span>{esc(section["title"])}</span></a>')
    source_links=' · '.join(link(guide['sources'][s]['url'],guide['sources'][s]['title']) for s in section['sources'])
    opening = ''
    if sid == 'overview':
        opening = '<div class="hero-art" aria-hidden="true"><span class="sun"></span><svg viewBox="0 0 260 170" fill="none"><path d="M21 143h225M31 153h198" stroke="currentColor" opacity=".24" stroke-linecap="round"/><path d="M51 122c-8-54 21-80 67-74 17-29 64-28 87 1 21 3 28 17 21 36-4 12-15 18-32 17l-6 34h-28l-5-23h-49l-8 23H66l-1-14z" fill="currentColor"/><circle cx="166" cy="38" r="13" fill="currentColor"/><path d="M163 33l7 4" stroke="#c5d7a8" stroke-width="4" stroke-linecap="round"/><circle cx="190" cy="63" r="4" fill="#e9edce"/><path d="M216 77h9M200 90h10" stroke="#e9edce" stroke-width="3" stroke-linecap="round"/><path d="M34 133v-24m0 12-10-9m10 2 8-12M235 138v-19m0 7 9-7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg><span class="art-caption">BUILD SLOW. PICK SMART.</span></div>'
    head=f'<header class="section-head {"hero" if sid=="overview" else ""}"><div><span class="eyebrow">{esc(section["kicker"])}</span><h1>{"Chơi có hướng.<br>Tiến xa hơn." if sid=="overview" else esc(section["title"])}</h1><p class="section-summary">{esc(section["summary"])}</p></div>{opening}</header>'
    content=''.join(render(b) for b in section['blocks'])
    sections.append(f'<section class="guide-section" id="{sid}" data-title="{esc(section["title"])}" {"hidden" if sid!="overview" else ""}>{head}{content}<footer class="section-source"><strong>Nguồn của mục này</strong><br>{source_links}<p>Khuyến nghị được tổng hợp theo điều kiện build; mô tả và luật trong game có quyền ưu tiên.</p></footer></section>')

template=(HERE/'guide-template.html').read_text()
payload=json.dumps(skills, ensure_ascii=False).replace('</','<\\/')
for name,value in {'NAV':''.join(nav),'SECTIONS':''.join(sections),'SKILLS':payload,'CSS':(HERE/'guide.css').read_text(),'JS':(HERE/'guide.js').read_text(),'VERSION':esc(guide['meta']['version']),'UPDATED':esc(guide['meta']['updated']),'FOCUS':esc(guide['meta']['focus']),'SECTION_COUNT':str(len(sections))}.items():
    template=template.replace('{{'+name+'}}',value)
assert '{{' not in template
for filename in ['CAPYBARA_GO_GUIDE.html','WHISPERER_SKILL_TIER_LIST.html']:
    (OUT/filename).write_text(template)
print(f'Built {len(sections)} sections, {len(skills["rows"])} skill descriptions; standalone HTML and legacy URL updated.')

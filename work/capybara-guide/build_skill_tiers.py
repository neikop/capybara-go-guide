import collections
import datetime
import html
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[2]
SOURCE = pathlib.Path(__file__).with_name('skills-source-2026-09-16.json')
OUT = ROOT / 'outputs'
OUT.mkdir(exist_ok=True)
source = json.loads(SOURCE.read_text())

# General Whisperer PvE recommendations with explicit build conditions.
RULES = {}
def add(tier, names, note):
    for name in names.split('|'):
        assert name not in RULES, name
        RULES[name] = (tier, note)

add('S', 'Combo Mastery', 'Ưu tiên chủ lực: tăng combo và cộng dồn ATK trong trận. Cần thực sự kích hoạt combo; không cộng dồn xuyên mọi trận của chapter.')
add('S', 'Rage Dagger', 'Ưu tiên khi nộ chưa đều. Nhiều dagger tạo thêm cơ hội hồi nộ; giảm ưu tiên khi vòng nộ đã đủ. Đây là skill, không phải gem.')
add('S', 'Combo Dagger', 'Tăng số dagger, phối hợp với Rage/Healing/Fire/Bolt Dagger và Dagger Proficiency. Không phải tăng Combo DMG.')
add('S', 'Revive', 'Ưu tiên khi đang đẩy ải và có nguy cơ chết. Hiệu ứng chỉ một lần theo mô tả; nếu không chết thì chọn damage.')
add('S', 'Super ATK', 'Tăng mạnh ATK, hữu ích cho nhiều nguồn damage tính theo ATK. So lựa chọn thực tế; S không có nghĩa luôn thắng mọi skill khác.')
add('A', 'ATK|Huge ATK|Royal Crown', 'Lựa chọn nền tốt; ATK tăng nhiều nguồn damage, khác Basic Attack DMG chỉ tăng loại damage tương ứng.')
add('A', 'Heavy Attack (Heavy Blow)|CRIT Mastery', 'Ưu tiên khi thiếu basic/weapon crit để Whisperer tạo dagger. Hạ ưu tiên nếu đã crit ổn định.')
add('A', 'Combo|Trinity Force', 'Bù combo/crit đang thiếu. Hạ ưu tiên phần tỷ lệ đã đủ; Trinity Force còn có counter.')
add('A', 'War Veteran', 'Tăng ATK qua các lượt, hữu ích khi boss sống lâu; giá trị thấp hơn ở trận rất ngắn.')
add('A', 'Combo Spirit', 'Tăng combo và giới hạn số lần combo theo đúng bản mô tả. Bản thường có giảm DMG; không đọc “up to 2” thành cộng thêm 2. Cân nhắc giới hạn combo sẵn có.')
add('A', 'Rage Proficiency', 'Có thể lên S khi thêm nộ giúp dùng rage sớm/đều hơn. Bản thường giảm Basic Attack DMG; khi đã dư nộ thì giảm ưu tiên.')
add('A', 'Dagger Proficiency', 'Rất tốt khi nhiều dagger trong cùng lượt; có thể lên S khi đã có Combo Dagger và lượng dagger ổn định.')
add('S', 'Fire Dagger', 'Ưu tiên cao khi đã tạo nhiều dagger: thêm Fire Strike từ mọi dagger. Hiệu quả còn phụ thuộc Burn/Fire và các synergy; không đồng nghĩa phải lấy mọi skill nhánh Burn.')
add('A', 'Bolt Dagger', 'Thêm Bolt từ mọi dagger; mạnh hơn khi tạo nhiều dagger và có bộ hỗ trợ lightning. Có thể lên S trong run đúng bộ; khác việc mở nhánh Bolt rời rạc.')
add('A', 'Healing Dagger|Lifesteal|Rage Heal', 'Có thể lên S khi thiếu hồi phục. Healing Dagger cần nhiều dao; Rage Heal cần dùng rage đều. Đủ hồi máu thì quay lại damage.')
add('A', 'Hardened|Shrink Spell|Battle-Hardened', 'Ưu tiên khi đang chết vì damage. Battle-Hardened cần thời gian tích lũy; Shrink là hiệu ứng có xác suất. Đủ sống thì giảm ưu tiên.')
add('A', 'Rage Shield|Basic Attack Shield', 'Tốt khi cần chống chết. Rage Shield cần vòng nộ, Basic Attack Shield cần số lần đánh và xác suất kích hoạt.')
add('A', 'Super HP', 'Có thể lên S để cứu run đang thiếu HP: tăng HP và hồi đầy theo mô tả. Đủ sống thì ưu tiên damage.')
add('A', 'Basic Attack Icy Spikes|Rage Icy Spikes', 'Phòng thủ qua Freeze. Chọn nguồn phù hợp nhịp đánh/nộ; hiệu ứng có xác suất và có thể gặp miễn nhiễm.')
add('A', 'Spell Master', 'Tốt khi dagger/rage/skill chiếm phần lớn damage. Đổi Basic Attack DMG lấy Skill DMG; khác Wizard! vốn làm giảm combo/counter.')
add('A', 'Stance · Insight', 'Cân nhắc nếu đã mở và đòn đánh thường có đóng góp đáng kể. Không phải điều kiện phải có trong 14 ngày đầu.')
add('A', 'Secret Art · Blade Cyclone', 'Nếu đã mở/được đưa ra: thêm hiệu ứng theo dagger hit và damage dựa HP mục tiêu. Cần đúng điều kiện mở của game.')
add('B', 'HP|Huge HP|DEF|Huge DEF|Super DEF', 'Lấy theo nhu cầu chịu đòn; HP/DEF không phải cùng cơ chế với Damage Reduction. Đủ sống thì ưu tiên damage.')
add('B', 'Dodge|Resilience', 'Phòng thủ/hồi phục có xác suất. Có thể lên A khi thiếu sống sót; không cứu chắc chắn một đòn kết liễu.')
add('B', 'Counter Rate|Swift Revenge', 'Có thể tạo thêm đánh trả và hỗ trợ vòng nộ, nhưng phụ thuộc bị đánh. Không chủ động chuyển toàn bộ build sang counter.')
add('B', 'Enhanced Basic Attack|Enhanced Combo|Enhanced Rage Skill', 'Lựa chọn tăng damage tạm. Enhanced Basic/Combo không tự tăng dagger; Enhanced Rage chỉ tăng phần Rage DMG tương ứng.')
add('B', 'Enhanced Recovery', 'Chỉ tăng hiệu quả nguồn hồi phục đã có; không tự tạo nguồn hồi máu. Lên A nếu hồi phục hiện tại chưa đủ.')
add('B', 'Battle Cry|Doubled ATK|Rage Mastery', 'Thiên về khởi đầu trận/burst. Thường kém skill tích lũy ở boss dài; lên A nếu cần vượt đoạn đầu trận.')
add('B', 'Critical Frenzy|Critical Recovery|Critical Shield|Critical Dodge|Last Stand', 'Tốt khi điều kiện HP thấp thực sự xảy ra và vẫn sống. Không chủ động giữ máu thấp; Critical ở đây không có nghĩa cần đánh crit.')
add('B', 'Counter Mastery|Counter Shield|Counter Soul', 'Có thể lên A để sống sót khi counter thường xuyên. Hiệu quả thấp nếu ít counter hoặc chết trước khi tích lũy.')
add('B', 'Rage Combo', 'Có thể lên A khi dùng rage đều và hiệu ứng đi kèm bù được giảm damage. Không mặc định là nhân đôi tổng damage.')
add('B', 'Indestructible', 'Lấy khi phần giảm sát thương nhận vào giúp sống; đổi lại mất damage. So đúng bản mô tả, không mặc định luôn tốt.')
add('B', 'Firecracker', 'Giúp vượt lượt đầu. Giá trị khác giữa bản chỉ stun và bản có giảm ATK nếu địch miễn stun.')
add('B', 'Dagger|Poison Dagger|Dagger Cooldown', 'Lựa chọn bổ sung hoặc mở nhánh. Cooldown tác động CD của skill dagger, không mặc định tăng gấp đôi mọi dagger do vũ khí tạo ra.')
add('B', 'Dagger Mastery', 'Có thể lên A khi dagger chiếm phần lớn damage. Tăng Dagger DMG nhưng có giảm DMG tổng; khác Proficiency.')
add('B', 'Poisoned Weapon', 'Nguồn Poison giúp ghép Alchemist hoặc đối phó hồi máu; không bắt buộc nếu đã có nguồn Poison khác.')
add('B', 'Alchemist', 'Có thể lên A khi đã gây Poison đều. Không có Poison thì hạ C; không tự tạo Poison.')
add('B', 'Ghostly Fuse', 'Có thể lên A khi Burn duy trì đều, nhất là đã có Fire Dagger. Không có nguồn Burn thì hạ C.')
add('B', 'Frostbite|Killing Freeze|Deadly Spikes', 'Có thể lên A khi có nguồn Icy Spikes ổn định. Chưa có nguồn thì không ưu tiên chỉ để chờ ghép.')
add('B', 'Frozen Touch|Ice Storm', 'Phụ trợ nhánh Ice. Không coi execute quái yếu là bảo đảm kết liễu boss; cân nhắc nguồn Ice đang có.')
add('B', 'Round Bolt (Turn Lightning)|Rage Bolt|Basic Attack Bolt|Round Fire Strike|Rage Fire Strike|Fire Guard', 'Nguồn damage phụ. Có thể lên A khi đã có nhiều tương tác đúng nhánh, nhưng ưu tiên xây dagger trước.')
add('B', 'Combo Bleeding', 'Bleed thêm từ đòn thường/combo. Lựa chọn phụ, tốt hơn khi đã có hiệu ứng hỗ trợ Bleed.')
add('B', 'Stance · Water-Slicing Flow', 'Có thể lên A nếu duy trì khiên lớn, vì chuyển khiên sang ATK. Không có khiên thì thấp.')
add('B', 'Vampire!', 'Có thể lên A/S để cứu sống nhờ lifesteal; xem mức giảm elemental damage và nguồn damage thực tế của run.')
add('B', 'Golden Egg|Broken Bird Egg', 'Lên A nếu xuất hiện sớm và còn nhiều trận để tích lũy; xuất hiện gần cuối ải thì giảm ưu tiên.')
add('C', 'Enhanced Counterattack|Bleeding Mastery', 'Chỉ nâng khi nguồn counter/Bleed đã đóng góp rõ. Không phải hướng ưu tiên của Whisperer hướng dagger.')
add('C', 'Lightning From Above|Thunderbolt|Static Shield|Thunderstorm|Super Bolt', 'Ưu tiên thấp nếu chưa xây lightning. Thunderbolt+ khác nhiều bản thường; có thể tăng tier nếu có vòng sét tốt.')
add('C', 'Bolt Mastery|Multiple Bolt|Shock Discharge|Lightning Charge|Secret Art · Surge|Secret Art: Divine Lightning|Secret Art · Thunderclap', 'Skill theo nhánh lightning; có thể lên A/S ở run chuyên lightning, nhưng không tự động mạnh nếu chưa có nguồn lightning. Kiểm tra hiệu ứng đánh đổi và điều kiện mở.')
add('C', 'Flames From Above|Burn Mastery|Triple Burn|Magical Flames|Pyromancer|Heat Explosion|Ultimate: Ashen Envoy|Ultimate: Flame Storm', 'Chỉ đầu tư khi có build Burn/Fire đủ nguồn kích hoạt. Fire Dagger mạnh không đồng nghĩa phải lấy tất cả skill Burn.')
add('C', 'Basic Attack Sword Chi (Basic Attack Sword Aura)|Rage Attack Sword Chi|Recovery Sword Chi|Super Sword Chi|Sword Aura Mastery|Sword Rain|Sword Rain Mastery|Arcane Skill: Tempest|Stance · Moon Sword', 'Nhánh Sword Chi. Có thể dùng nếu đã vô tình ghép đủ, nhưng không ưu tiên mở thêm nhánh này trên Whisperer.')
add('C', 'Start Light Spear|Round Light Spear (Turn Light Spear)|Counter Light Spear|Rage Light Spear|Light Spear Flame Wave|Light Spear Mastery|Light Spear Shield|Demonic Spear|Light Spear Quake|Earthquake Stun|Stance · Spear Soul', 'Nhánh Light Spear/counter. Phụ thuộc nhiều nguồn kích hoạt; ưu tiên thấp cho hướng dagger nếu chưa có bộ spear.')
add('C', 'Holy Spear Decree', 'Có thể lên A/S nếu đã có rất nhiều Light Spear vì tăng ATK; chưa có nguồn spear thì không ưu tiên.')
add('C', 'Combo X2|Combo X3', 'Chỉ có tác dụng khi đạt số combo cần thiết. Không tự tăng số lần combo; thường thấp hơn Combo Mastery và bộ dagger.')
add('C', 'Oath', 'Đổi HP lấy khiên; không tự hồi HP. Chỉ cân nhắc khi có synergy khiên rõ ràng và chịu được phần HP mất đi.')
add('C', 'Tyrant', 'Tăng ATK đổi Max HP. Có thể lên A nếu đang thiếu damage và chắc chắn sống; không ưu tiên khi đẩy ải hay chết.')
add('C', 'Werewolf!|Succubus!', 'Biến đổi hướng damage; đọc đúng phiên bản. Không phải lựa chọn mặc định cho dagger Whisperer hướng dagger.')
add('C', 'Stance · Blood Sword', 'Chỉ đáng lấy nếu đã có nguồn Bleed và combo đủ tốt. Không ưu tiên xây thêm nhánh chỉ vì thấy skill này.')
add('C', 'Secret Art · Return to Origin', 'Hợp nhất dagger đã học trong trận. Chưa kiểm được toàn bộ tương tác với dagger vũ khí và các hiệu ứng đi kèm; không khuyến nghị chọn tự động.')
add('D', 'Berserker', 'Thường tránh với hướng dagger: đổi Skill DMG để tăng Basic Attack DMG, làm yếu phần dagger/skill.')
add('D', 'Smelly Dagger', 'Tránh khi đang dựa vào Rage/Healing/Fire/Bolt Dagger: mô tả loại bỏ các hiệu ứng đi kèm. Có ngoại lệ build/AoE về sau.')
add('D', 'Wizard!', 'Thường tránh khi phụ thuộc combo: mất nhiều Combo/Counter Rate. Không nhầm với Spell Master.')
add('D', 'Orc!', 'Tránh: không thể hồi Rage, phá hướng vận hành vòng nộ của Whisperer.')
add('D', 'Glass Cannon', 'Không khuyên dùng khi mới đẩy ải dễ chết. Database có hai bản điều kiện HP khác nhau; chỉ cân nhắc nếu đã kiểm tra bản thẻ và dư sống sót.')
add('D', 'Stance · Vengeance', 'Tránh: cấm normal/rage attacks, chuyển sang hướng counter; không phù hợp hướng combo/dagger/rage.')
add('X', 'Spawn of Evil|Angel Power', 'Mô tả trong bảng nguồn không giải thích đầy đủ “protection”. Cần tooltip chi tiết hoặc ảnh thẻ để xếp chắc; không tự bịa hiệu ứng hay auto-pick.')

ALIASES = {'Counter Move':'Counter Rate','Tenacity':'Resilience','Combo Enhance':'Enhanced Combo','Combo Enhancement':'Enhanced Combo','Counterattack Enhancement':'Enhanced Counterattack','Multi Burn':'Triple Burn','Light Spear Earthquake':'Light Spear Quake','Combo ×3':'Combo X3'}
def canon(name):
    name=name.replace('+','').strip()
    name=re.sub(r'\s+', ' ', name)
    return ALIASES.get(name,name)

SYNERGY = {
 'Pig Smash Lv1': ('A','Nếu đã mở: thêm cơ hội stun; không cần mua chỉ để lấy skill này.'),
 'Drunken Fist Lv1': ('A','Có thể lên S nếu đã mở và cần né/sống sót. Không giả định mua Panda lập tức mở đầy đủ synergy.'),
 'War Maniac Lv1': ('D','Bản Lv1 giảm Skill DMG, thường tránh với dagger. Lv5/spec/adventurer khác có thể đổi đánh giá.'),
 'Undying Dragon Lv1': ('B','Cần điều kiện HP thấp; chỉ xét khi synergy đã mở.'),
 'Endless Battle Lv1': ('C','Thiên về counter, không phải hướng ưu tiên của dagger.'),
 'Resonance Lv1': ('A','Thêm damage sau rage; tốt khi vòng nộ ổn định và synergy đã mở.'),
 'Mind Focus Lv1': ('B','Phòng thủ và control immunity; chọn theo đối thủ và sống sót.'),
 'Rage Burst Lv1': ('B','Cứu nguy khi lần đầu HP thấp; không bảo đảm sống qua một đòn kết liễu.'),
 'First Aid Device Lv1': ('B','Có thể lên A khi có nguồn hồi máu đều; cần hồi phục để tạo khiên.'),
 'Optimist Lv1': ('B','Hồi phần HP đã mất theo xác suất; có thể lên A khi bị bào máu.')
}

rows=[]
for i,r in enumerate(source['descriptions']):
    name,desc=r[:2]; key=canon(name)
    scope='Story / nâng cấp' if i<282 else 'Hệ mở sau / nguồn khác'
    if key in RULES:
        tier,note=RULES[key]
    else:
        assert i>=282,(i,name,key)
        tier='X'; note='Database gắn nhãn chung nhưng mô tả phụ thuộc hệ/nhân vật/trang bị riêng. Chưa xác nhận có trong pool chọn skill Story thông thường; không áp tier Story thông thường.'
    if key=='Combo Spirit' and 'DMG' not in desc:
        note+=' Bản mô tả này không ghi giảm DMG; không gán nhược điểm của bản khác.'
    if name=='Thunderbolt+':
        note+=' Bản + bắn mỗi lượt từ lượt 5, khác bản chỉ bắn ở lượt 5.'
    rows.append(dict(name=name,description=desc,tier=tier,note=note,scope=scope,key=key))
for name,desc,tag in source['synergy_lv1']:
    tier,note=SYNERGY[name]
    rows.append(dict(name=name,description=desc,tier=tier,note=note,scope='Synergy Lv1',key=name))

counts=collections.Counter(r['name'] for r in rows)
seen=collections.Counter()
for row in rows:
    seen[row['name']]+=1
    row['variant']=f"Description {seen[row['name']]}/{counts[row['name']]}" if counts[row['name']]>1 else ''

META={
 'title':'Whisperer — Skill tier list PvE theo điều kiện build',
 'checked':'2026-09-16',
 'context':'Whisperer • PvE có chọn skill • ưu tiên Story • dùng theo điều kiện build, không giới hạn ngày chơi',
 'source':source['source'],
 'tier_source':'https://meowdb.com/db/capybara-go/skills-tier-list#whisperer-elres-whisper-skill-tier-list',
 'build_source':'https://meowdb.com/db/capybara-go/whisperer-elres-ultimate-build-guide',
 'reviewed':1133,
}
TIERS={'S':'Ưu tiên rất cao khi đúng nhu cầu','A':'Tốt, hợp build hoặc giải quyết điểm yếu','B':'Dùng được / phụ thuộc run','C':'Ưu tiên thấp; cần bộ hỗ trợ','D':'Thường tránh với hướng dagger','X':'Chưa đủ điều kiện để xếp chắc'}
data={'meta':META,'tier_labels':TIERS,'rows':rows}
(OUT/'WHISPERER_SKILL_TIER_LIST.json').write_text(json.dumps(data,ensure_ascii=False,indent=2))

intro='''Đây là tier đề xuất chung cho Whisperer ở PvE có chọn skill, ưu tiên Story. Không phải tier chung cho mọi vũ khí hoặc PvP, cũng không phải chép nguyên tier endgame của MeowDB. Tier trong cùng nhóm không có thứ tự tuyệt đối.

- S: ưu tiên rất cao; A: tốt; B: dùng được; C: ưu tiên thấp hoặc cần ghép bộ; D: thường tránh; X: chưa đủ dữ kiện/chưa xác nhận thuộc pool Story thông thường.
- Sống không tới boss: ưu tiên hồi phục, HP, giảm damage hoặc khiên. Sống hết trận nhưng thiếu damage: ưu tiên bộ combo/dagger/rage.
- Bộ lõi: Combo Mastery + Rage Dagger + Combo Dagger; thêm Healing Dagger/Lifesteal khi cần, Dagger Proficiency khi nhiều dao mỗi lượt.
- Fire Dagger và Bolt Dagger ảnh hưởng mọi dagger theo mô tả. Chúng không cùng mức ưu tiên với việc mở bừa nhánh Fire/Bolt.
- ATK khác Basic Attack DMG. Combo Dagger khác Enhanced Combo. Dagger Mastery khác Dagger Proficiency. Spell Master khác Wizard!.
- Bản + không mặc định đáng chọn hơn một skill khác chưa có +. Đọc điều kiện kích hoạt và phần đánh đổi.
- Không học nhiều nhánh chỉ để chờ skill mạnh về sau: prerequisite có thể mở thêm lựa chọn làm loãng pool.
- Description giữ nguyên tiếng Anh từ bảng nguồn, kể cả cách viết và dấu mũi tên. Bảng nguồn tự ghi Version 1.7; build guide ghi May 2026. Không khẳng định tất cả số liệu là bản game hiện tại.
- Cùng tên có thể có nhiều description mâu thuẫn. Giữ riêng từng bản, không tự gán chúng cho rarity/spec nếu bảng chưa chỉ rõ; mô tả trên thẻ trong game là căn cứ quyết định.
- Đã rà 23 trang / 1.133 bản ghi. Tài liệu giữ 366 description khác nhau của nhóm nhãn “—” / “Skill Locked” (bỏ hàng “Core skill”), cùng 10 mẫu synergy Lv1. Không có nghĩa cả 376 dòng đều thuộc pool Story thông thường hay đều được mở sẵn.
- Nhóm “Hệ mở sau / nguồn khác” giữ để tra tên; không xếp bừa tier cho mount/artifact hay nâng cấp hệ khác. Synergy Lv1 chỉ là mẫu đầu cấp, không bao phủ mọi cấp synergy.
'''
lines=['# '+META['title'],'',META['context'],'','Đối chiếu nguồn: '+META['checked'],'',intro,'','## Skill Story / nâng cấp','']
for tier in TIERS:
    subset=[r for r in rows if r['tier']==tier and r['scope']=='Story / nâng cấp']
    if not subset: continue
    lines += ['### '+tier+' — '+TIERS[tier],'','| Skill | English description | Ghi chú |','|---|---|---|']
    for r in subset:
        name=r['name']+(f" ({r['variant']})" if r['variant'] else '')
        lines.append('| '+name+' | '+r['description'].replace('|','\\|')+' | '+r['note']+' |')
    lines.append('')
for scope in ['Synergy Lv1','Hệ mở sau / nguồn khác']:
    lines += ['## '+scope,'','| Tier | Skill | English description | Ghi chú |','|---|---|---|---|']
    for r in rows:
        if r['scope']==scope:
            name=r['name']+(f" ({r['variant']})" if r['variant'] else '')
            lines.append('| '+r['tier']+' | '+name+' | '+r['description'].replace('|','\\|')+' | '+r['note']+' |')
    lines.append('')
lines += ['## Nguồn và cách cập nhật','',f"- [Skills Database]({META['source']})",f"- [Skills tier list]({META['tier_source']})",f"- [Whisperer guide]({META['build_source']})",'', 'Dữ liệu gốc: `work/capybara-guide/skills-source-2026-09-16.json`. Quy tắc tier: `work/capybara-guide/build_skill_tiers.py`. Khi cập nhật, kiểm lại description, điều kiện unlock và trạng thái account; sửa quy tắc rồi chạy script. Các tier là khuyến nghị biên tập, không phải kết quả đo damage trong tài khoản.']
(OUT/'WHISPERER_SKILL_TIER_LIST.md').write_text('\n'.join(lines)+'\n')

template='''<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Whisperer • Skill tier list</title>
<style>
:root{--ink:#20362f;--muted:#5b6f66;--line:#dce4db;--paper:#f5f6ef;--green:#245c43}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.6 system-ui,-apple-system,sans-serif}main{max-width:1440px;margin:auto;padding:32px 28px 64px}h1{font-size:clamp(28px,4vw,42px);line-height:1.15;margin:12px 0}p{max-width:1050px;margin:12px 0}.eyebrow{font-size:12px;letter-spacing:1.8px;font-weight:750;color:var(--green)}.meta,.hint{color:var(--muted);font-size:14px}.lead{background:#e5edde;border:1px solid #cddcc4;padding:18px 22px;border-radius:14px;margin:24px 0}.lead strong{color:#224a31}.toolbar{position:sticky;top:0;z-index:2;background:var(--paper);padding:16px 0;border-bottom:1px solid var(--line);display:grid;grid-template-columns:1fr 240px 230px;gap:12px}input,select{width:100%;border:1px solid #bbcbbd;background:white;border-radius:9px;padding:12px;font:inherit;color:var(--ink)}label{font-size:12px;font-weight:650;display:block}label span{display:block;margin-bottom:4px}.legend{display:flex;gap:12px;flex-wrap:wrap;margin:20px 0;font-size:13px}.badge{display:inline-flex;justify-content:center;min-width:30px;border-radius:6px;font-weight:800;padding:3px 8px;background:#e7e9e7}.S{background:#d6e9ce;color:#244d25}.A{background:#dbeada;color:#365335}.B{background:#f3e8bd;color:#67551e}.C{background:#f8dfc4;color:#814d20}.D{background:#f2d5d2;color:#812f29}.X{background:#e1e5e9;color:#48535d}.tablewrap{overflow:auto;background:white;border:1px solid var(--line);border-radius:12px}table{border-collapse:collapse;width:100%;min-width:760px}th{text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:.8px;background:#edf1e9;color:var(--muted)}th,td{padding:15px 18px;border-bottom:1px solid var(--line);vertical-align:top}th:first-child{width:66px}th:nth-child(2){width:23%}th:nth-child(3){width:35%}td:nth-child(3){font-size:15px;color:#273b35}td:nth-child(4){font-size:14px;color:#58685e}td strong{font-size:15px}.variant{display:block;font-size:11px;color:#826b4c;margin-top:4px}.scope{display:block;font-size:11px;color:#7b8781}details{margin:20px 0;background:#edf1e8;border-radius:9px;padding:15px 20px}summary{cursor:pointer;font-weight:650}details li{margin:7px 0}a{color:#245c43}footer{font-size:13px;color:var(--muted);margin-top:25px}.empty{padding:30px;text-align:center}button{border:1px solid #b9c8b7;border-radius:8px;padding:8px 12px;background:#fff;color:var(--ink);cursor:pointer}#stats{margin:15px 0;font-size:14px;color:var(--muted)}@media(max-width:800px){main{padding:20px 14px}.toolbar{grid-template-columns:1fr 1fr}.toolbar label:first-child{grid-column:1/-1}th,td{padding:12px}h1{font-size:30px}}@media print{.toolbar,button{display:none}.tablewrap{overflow:visible}table{min-width:0}body{background:white}main{padding:0}.lead{break-inside:avoid}tr{break-inside:avoid}}
</style></head><body><main>
<div class="eyebrow">CAPYBARA GO · WHISPERER · STORY</div><h1>Chọn skill khi đi ải</h1>
<p class="meta">Whisperer · PvE / Story · Không giới hạn ngày chơi · Đối chiếu nguồn 16/09/2026</p>
<div class="lead"><strong>Ưu tiên bộ combo → dagger → rage.</strong><br>Combo Mastery + Rage Dagger + Combo Dagger. Thiếu hồi máu: Healing Dagger / Lifesteal. Nhiều dagger mỗi lượt: Dagger Proficiency. Tier chỉ có nghĩa khi điều kiện của skill được đáp ứng.</div>
<p>Giữ nguyên <strong>tên và description tiếng Anh</strong> để đối chiếu với thẻ trong game. Tier có điều kiện theo build: thiếu crit, thiếu nộ, cần sống sót hay đã có bộ hỗ trợ. Không áp chung cho mọi vũ khí.</p>
<details><summary>Cách đọc bảng và giới hạn nguồn</summary><ul>__INTRO__</ul></details>
<div class="legend">__LEGEND__</div>
<div class="toolbar"><label><span>Tìm tên, description hoặc ghi chú</span><input id="search" type="search" placeholder="Ví dụ: Basic Attack, Shield, dagger, hồi nộ…" autocomplete="off"></label><label><span>Tier</span><select id="tier"><option value="">Tất cả tier</option>__OPTIONS__</select></label><label><span>Nhóm</span><select id="scope"><option value="Story / nâng cấp">Story / nâng cấp</option><option value="Synergy Lv1">Synergy Lv1</option><option value="Hệ mở sau / nguồn khác">Hệ mở sau / nguồn khác</option><option value="">Toàn bộ bản tra cứu</option></select></label></div>
<div id="stats" aria-live="polite"></div><div class="tablewrap"><table><thead><tr><th>Tier</th><th>Skill</th><th>English description</th><th>Khi nên chọn</th></tr></thead><tbody id="body"></tbody></table><div id="empty" class="empty" hidden>Không có kết quả trong nhóm hiện tại. Thử “Toàn bộ bản tra cứu”.</div></div>
<footer>Nguồn: <a href="https://meowdb.com/db/capybara-go/capybara-go-skills-database">Skills Database</a> · <a href="https://meowdb.com/db/capybara-go/skills-tier-list#whisperer-elres-whisper-skill-tier-list">Skill tier list</a> · <a href="https://meowdb.com/db/capybara-go/whisperer-elres-ultimate-build-guide">Whisperer guide</a><br>Database tự ghi Version 1.7; guide ghi May 2026. Mô tả trên thẻ trong game có quyền ưu tiên. Tier là đề xuất, chưa đo damage trong tài khoản của bạn.</footer>
</main><script id="data" type="application/json">__DATA__</script><script>
const data=JSON.parse(document.getElementById('data').textContent);const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const fold=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();const search=document.getElementById('search'),tier=document.getElementById('tier'),scope=document.getElementById('scope');function render(){const q=fold(search.value.trim());const rs=data.rows.filter(r=>(!tier.value||r.tier===tier.value)&&(!scope.value||r.scope===scope.value)&&(!q||fold(r.name+' '+r.description+' '+r.note).includes(q))).sort((a,b)=>'SABCDX'.indexOf(a.tier)-'SABCDX'.indexOf(b.tier)||a.name.localeCompare(b.name));document.getElementById('body').innerHTML=rs.map(r=>'<tr><td><span class="badge '+r.tier+'">'+r.tier+'</span></td><td><strong>'+esc(r.name)+'</strong><span class="variant">'+esc(r.variant)+'</span><span class="scope">'+esc(r.scope)+'</span></td><td lang="en">'+esc(r.description)+'</td><td>'+esc(r.note)+'</td></tr>').join('');document.getElementById('stats').textContent=rs.length+' descriptions hiển thị · '+new Set(rs.map(r=>r.name)).size+' tên skill · '+data.rows.length+' descriptions trong bản tra cứu';document.getElementById('empty').hidden=rs.length>0;}[search,tier,scope].forEach(e=>e.addEventListener('input',render));render();
</script></body></html>'''
template=template.replace('__INTRO__',''.join('<li>'+html.escape(x[2:])+'</li>' for x in intro.splitlines() if x.startswith('- ')))
template=template.replace('__LEGEND__',''.join('<span><b class="badge '+k+'">'+k+'</b> '+v+'</span>' for k,v in TIERS.items()))
template=template.replace('__OPTIONS__',''.join('<option value="'+k+'">'+k+' — '+v+'</option>' for k,v in TIERS.items()))
template=template.replace('__DATA__',json.dumps(data,ensure_ascii=False).replace('</','<\\/'))
(OUT/'WHISPERER_SKILL_REFERENCE.html').write_text(template)
print(json.dumps({'rows':len(rows),'scopes':dict(collections.Counter(r['scope'] for r in rows)),'tiers':dict(collections.Counter(r['tier'] for r in rows)),'files':[str(OUT/f'WHISPERER_SKILL_TIER_LIST.{s}') for s in ['md','html','json']]},ensure_ascii=False,indent=2))

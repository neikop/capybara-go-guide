(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const data = JSON.parse($('skill-data').textContent);
  const sections = [...document.querySelectorAll('.guide-section')];
  const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fold = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g,'d');
  const index = sections.map(s => ({id:s.id,title:s.dataset.title,text:s.innerText || s.textContent}));
  let active = '';
  const mobile=window.matchMedia('(max-width:800px)');
  function closeMenu() { $('sidebar').classList.remove('open'); $('sidebar').inert=mobile.matches; $('backdrop').hidden=true; $('menu-button').setAttribute('aria-expanded','false'); }
  mobile.addEventListener('change',closeMenu);
  function route() {
    const id = location.hash.slice(1);
    if(id==='main') { $('main').focus({preventScroll:true}); return; }
    const selected = sections.find(s=>s.id===id) || sections[0];
    sections.forEach(s=>s.hidden=s!==selected);
    document.querySelectorAll('[data-nav]').forEach(a=>a.dataset.nav===selected.id?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
    $('current-title').textContent=selected.dataset.title;
    document.title=selected.dataset.title+' · Capybara Go';
    const n=sections.indexOf(selected);
    $('page-position').textContent=`${String(n+1).padStart(2,'0')} / ${sections.length} mục`;
    [['prev-section',n-1,'← '],['next-section',n+1,'Tiếp: ']].forEach(([el,i,prefix])=>{
      $(el).hidden=!sections[i];
      if(sections[i]) { $(el).href='#'+sections[i].id; $(el).textContent=prefix+sections[i].dataset.title+(el==='next-section'?' →':''); }
    });
    closeMenu();
    if(active!==selected.id) { window.scrollTo({top:0,behavior:'instant'}); active=selected.id; }
  }
  window.addEventListener('hashchange',route);
  $('menu-button').addEventListener('click',()=>{
    const open=$('sidebar').classList.toggle('open');
    $('sidebar').inert=!open&&mobile.matches;
    $('backdrop').hidden=!open; $('menu-button').setAttribute('aria-expanded',String(open));
  });
  $('backdrop').addEventListener('click',closeMenu);
  document.querySelectorAll('[data-nav]').forEach(a=>a.addEventListener('click',closeMenu));
  const search=$('skill-search'),tier=$('skill-tier'),scope=$('skill-scope');
  function renderSkills(all=false) {
    const q=fold(search.value.trim());
    const rows=data.rows.filter(r=>all || ((!tier.value||r.tier===tier.value)&&(!scope.value||r.scope===scope.value)&&(!q||fold(r.name+' '+r.description+' '+r.note).includes(q)))).sort((a,b)=>'SABCDX'.indexOf(a.tier)-'SABCDX'.indexOf(b.tier)||a.name.localeCompare(b.name));
    $('skill-body').innerHTML=rows.map(r=>`<tr><td data-label="Tier"><span class="badge ${r.tier}">${r.tier}</span></td><td data-label="Skill"><span lang="en">${escape(r.name)}</span><span class="variant">${escape(r.variant)}</span><span class="scope">${escape(r.scope)}</span></td><td data-label="English description" lang="en">${escape(r.description)}</td><td data-label="Khi nên chọn">${escape(r.note)}</td></tr>`).join('');
    $('skill-stats').textContent=`${rows.length} descriptions · ${new Set(rows.map(r=>r.name)).size} tên skill · Tổng ${data.rows.length} descriptions`;
    $('skill-empty').hidden=rows.length>0;
  }
  [search,tier,scope].forEach(el=>el.addEventListener('input',()=>renderSkills()));
  document.querySelectorAll('[data-skill]').forEach(b=>b.addEventListener('click',()=>{search.value=b.dataset.skill;tier.value='';scope.value='Story / nâng cấp';renderSkills();}));
  const global=$('global-search');
  function closeSearch(){ $('search-results').hidden=true;global.setAttribute('aria-expanded','false'); }
  function showSearch(){
    const q=fold(global.value.trim());
    if(!q){closeSearch();return;}
    const hits=index.filter(s=>fold(s.title+' '+s.text).includes(q));
    const skillHits=data.rows.filter(s=>fold(s.name+' '+s.description+' '+s.note).includes(q));
    const names=[...new Set(skillHits.map(s=>s.name))];
    const guideResults=hits.slice(0,6).map(s=>`<a href="#${s.id}" data-result><span class="result-type">HƯỚNG DẪN</span><strong>${escape(s.title)}</strong></a>`);
    const skillResults=names.slice(0,6).map(name=>`<button type="button" data-result-skill="${escape(name)}"><span class="result-type">SKILL · ENGLISH DESCRIPTION</span><strong>${escape(name)}</strong><small>${escape(skillHits.find(s=>s.name===name).description).slice(0,210)}</small></button>`);
    $('search-items').innerHTML=guideResults.concat(skillResults).join('');
    $('search-status').textContent=hits.length+` mục hướng dẫn · ${names.length} tên skill`+(hits.length>6||names.length>6?' · Hiển thị tối đa 6 kết quả mỗi nhóm':'')+(!hits.length&&!names.length?' — Thử tên tiếng Anh hoặc từ ngắn hơn.':'');
    $('search-results').hidden=false; global.setAttribute('aria-expanded','true');
    $('search-items').querySelectorAll('[data-result]').forEach(a=>a.addEventListener('click',closeSearch));
    $('search-items').querySelectorAll('[data-result-skill]').forEach(b=>b.addEventListener('click',()=>{
      search.value=b.dataset.resultSkill;tier.value='';scope.value='';renderSkills();location.hash='skills';closeSearch();route();
      search.scrollIntoView({block:'center'});search.focus({preventScroll:true});
    }));
  }
  global.addEventListener('input',showSearch);
  global.addEventListener('focus',()=>{if(global.value.trim())showSearch();});
  document.addEventListener('click',e=>{if(!e.target.closest('.global-search')&&!e.target.closest('.search-results'))closeSearch();});
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){closeSearch();closeMenu();}
    if(e.key==='/'&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)){e.preventDefault();global.focus();}
  });
  function budget(){
    const inputs=['gem-balance','gem-reserve','gem-spend'].map($);
    const values=inputs.map(i=>Number(i.value));
    const result=$('gem-result');delete result.dataset.state;
    if(inputs.some(i=>i.value.trim()==='')){result.textContent='Nhập số dư, quỹ dự trữ và khoản chi để tính.';return;}
    if(values.some(n=>!Number.isSafeInteger(n)||n<0)){result.textContent='Nhập số gems nguyên, không âm và trong khoảng hợp lệ.';result.dataset.state='warn';return;}
    const [balance,reserve,spend]=values;const remaining=balance-spend;const fmt=n=>n.toLocaleString('vi-VN');
    if(remaining<0){result.textContent=`Thiếu ${fmt(-remaining)} gems để chi khoản này. Chưa tính lượt miễn phí hay thu nhập tương lai.`;result.dataset.state='warn';}
    else if(remaining<reserve){result.textContent=`Còn ${fmt(remaining)} gems sau chi — thấp hơn quỹ muốn giữ ${fmt(reserve-remaining)} gems. Cân nhắc chờ hoặc giảm khoản chi.`;result.dataset.state='warn';}
    else{result.textContent=`Còn ${fmt(remaining)} gems sau chi; trên quỹ dự trữ ${fmt(remaining-reserve)} gems. Vẫn cần kiểm phần thưởng và mốc bảo đảm trước khi dùng.`;}
  }
  ['gem-balance','gem-reserve','gem-spend'].forEach(id=>$(id).addEventListener('input',budget));
  const checks=[...document.querySelectorAll('[data-check]')];
  let checkDate='',done=[];
  function today(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
  function loadChecks(){
    checkDate=today();done=[];
    try{const saved=JSON.parse(localStorage.getItem('capy-guide-daily-v1')||'null');if(saved&&saved.date===checkDate&&Array.isArray(saved.done))done=saved.done;}catch{}
    checks.forEach(c=>c.checked=done.includes(c.dataset.check));updateChecks(false);
  }
  function updateChecks(save=true){
    done=checks.filter(c=>c.checked).map(c=>c.dataset.check);
    $('check-progress').textContent=`${done.length}/${checks.length} hoàn thành · ${checkDate.split('-').reverse().join('/')}`;
    if(save)try{localStorage.setItem('capy-guide-daily-v1',JSON.stringify({date:checkDate,done}));}catch{}
  }
  checks.forEach(c=>c.addEventListener('change',()=>{if(today()!==checkDate){const changed=c.dataset.check,wanted=c.checked;loadChecks();checks.find(x=>x.dataset.check===changed).checked=wanted;}updateChecks();}));
  $('reset-checks').addEventListener('click',()=>{checkDate=today();checks.forEach(c=>c.checked=false);updateChecks();});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&today()!==checkDate)loadChecks();});
  window.addEventListener('focus',()=>{if(today()!==checkDate)loadChecks();});
  setInterval(()=>{if(today()!==checkDate)loadChecks();},60000);
  $('print-guide').addEventListener('click',()=>window.print());
  window.addEventListener('beforeprint',()=>renderSkills(true));
  window.addEventListener('afterprint',()=>renderSkills());
  renderSkills();loadChecks();route();
})();

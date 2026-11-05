const $ = (s) => document.querySelector(s);
const language = 'ko';
const icons = {
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 moon:'<path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/>',
 spark:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>',
 people:'<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-2-4"/>',
 flag:'<path d="M5 21V3m0 0c5-4 9 4 14 0v11c-5 4-9-4-14 0"/>',
 building:'<path d="M3 21V9l6 3V6l6 4V3h6v18ZM7 17h1m4 0h1m4 0h1"/>',
 award:'<circle cx="12" cy="8" r="5"/><path d="m8 12-2 10 6-3 6 3-2-10"/>',
 cert:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8m-8 4h5m-5 4h3"/>'
};
const svg = name => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
const text = item => item[language];
const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function render() {
 document.documentElement.lang = language;
 document.querySelectorAll('[data-ko]').forEach(el => { el.innerHTML = el.dataset[language]; });
 const sections = [['home','홈','Home'],['about','소개','About Me'],['skills','배운 기술','Skills'],['experience','경험','Experience'],['portfolio','Portfolio','Portfolio'],['awards','수상 경력','Awards'],['certifications','자격증','Certifications'],['contact','연락','Contact']];
 $('#navigation').innerHTML = sections.map(([id,ko,en]) => `<a href="#${id}">${language === 'ko' ? ko : en}</a>`).join('');
 $('#navigation').setAttribute('aria-label', language === 'ko' ? '주요 메뉴' : 'Main navigation');
 document.querySelectorAll('.brand').forEach(el => el.setAttribute('aria-label', language === 'ko' ? '홈으로 이동' : 'Go to home'));
 const labels = [
  ['.hero-top .eyebrow','<i></i> 저를 소개합니다','<i></i> A LITTLE ABOUT ME'],
  ['.issue','권정달 · 개인 소개 웹사이트','KWON JEONGDAL · PERSONAL WEBSITE'],
  ['#about .section-label','01 / 소개','01 / ABOUT ME'],
  ['#skills .section-label','02 / 배운 기술','02 / SKILLS'],
  ['#experience .section-label','03 / 경험','03 / EXPERIENCE'],
  ['#awards .section-label','05 / 수상 경력','05 / AWARDS'],
  ['#certifications .section-label','06 / 자격증','06 / CERTIFICATIONS'],
  ['#contact .section-label','07 / 연락','07 / CONTACT'],
  ['#contact > .eyebrow','새로운 이야기의 시작','THE NEXT CHAPTER'],
  ['.hero-bottom > a','<span class="scroll-line"></span> 아래로 둘러보기','<span class="scroll-line"></span> SCROLL TO EXPLORE'],
  ['.visual-note','<span class="note-dot"></span> 늘 호기심을 갖고.<br><span class="note-line">조금씩 성장하는 중.</span>','<span class="note-dot"></span> ALWAYS CURIOUS.<br><span class="note-line">ALWAYS GROWING.</span>']
 ];
 labels.forEach(([selector,ko,en]) => { $(selector).innerHTML = language === 'ko' ? ko : en; });
 $('#intro').textContent = text(siteData.intro);
 $('#values').innerHTML = siteData.values.map(v => `<span><i>↗</i>${escapeHTML(text(v))}</span>`).join('');
 $('#skill-grid').innerHTML = siteData.skills.map(s => `<article class="skill"><span class="skill-icon" style="--icon:${s.color}" aria-hidden="true">${escapeHTML(s.symbol)}</span><div><h3>${escapeHTML(s.name)}</h3><span>${escapeHTML(s.type)}</span></div></article>`).join('');
 $('#experience-list').innerHTML = siteData.experiences.map((e,i) => `<article class="experience${e.image?' with-photo':''}"><div class="exp-number">${String(i+1).padStart(2,'0')}</div><div class="exp-icon">${svg(e.icon)}</div><div class="exp-copy"><span class="eyebrow">${['아이디어를 현실로','함께 만드는 경험','새로운 도전','교실 밖에서 배운 것','전시에서 만난 새로운 경험'][i] || '새로운 경험'}</span><h3>${escapeHTML(text(e.title))}</h3><p class="muted">${escapeHTML(text(e.description))}</p><div class="lesson"><span>↳ 배운 점</span><p>${escapeHTML(text(e.lesson))}</p></div></div>${e.image?`<figure class="exp-photo${e.imageHeight>e.imageWidth?' portrait':''}"><a href="${escapeHTML(e.image)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(text(e.title))} 사진 원본 보기 (새 탭)"><img src="${escapeHTML(e.image)}" alt="${escapeHTML(text(e.title))} 활동 사진" width="${e.imageWidth}" height="${e.imageHeight}" loading="lazy" decoding="async"><span class="photo-open" aria-hidden="true">사진 보기 ↗</span></a></figure>`:''}</article>`).join('');
 $('#award-list').innerHTML = siteData.awards.map(a => `<article class="award-card${a.image?' has-photo':''}">${a.image?`<figure class="award-photo${a.imageWidth < a.imageHeight ? ' portrait' : ''}"><a href="${escapeHTML(a.image)}" target="_blank" rel="noopener noreferrer" aria-label="활동 사진 원본 보기 (새 탭)"><img src="${escapeHTML(a.image)}" alt="${escapeHTML(a.imageAlt || '수상 기념 사진')}" width="${a.imageWidth || 1280}" height="${a.imageHeight || 853}" loading="lazy" decoding="async"><span class="photo-open" aria-hidden="true">원본 보기 ↗</span></a><figcaption>${escapeHTML(a.imageCaption || '함께한 도전, 오래 기억할 순간')}</figcaption></figure>`:''}<div class="award-details"><div class="award-top"><span class="award-icon">${svg('award')}</span><span>${a.year ? escapeHTML(a.year) : ''}</span></div><p>${escapeHTML(text(a.title))}</p><h3>${escapeHTML(text(a.distinction))}</h3><span class="award-caption">도전이 남긴 소중한 배움과 기억</span></div></article>`).join('');
 $('#certification-list').innerHTML = siteData.certifications.map(c => `<article class="cert-card"><span class="cert-icon">${svg('cert')}</span><h3>${escapeHTML(text(c.title))}</h3><span class="grade">${escapeHTML(text(c.grade))}</span></article>`).join('');
 $('#contact-list').innerHTML = siteData.contacts.filter(c=>c.label && /^(https:\/\/[^\s]+|mailto:[^\s@]+@[^\s@]+\.[^\s@]+)$/i.test(c.url || '')).map(c=>`<a class="contact-link" href="${escapeHTML(c.url)}" ${c.url.startsWith('https:')?'target="_blank" rel="noopener noreferrer"':''}>${escapeHTML(c.label)} <span>↗</span></a>`).join('');
 updateLabels(); updateScroll();
}
function persist(key,value) { try {localStorage.setItem(key,value);} catch {} }
function updateLabels(){
 const dark=document.documentElement.dataset.theme==='dark';
 $('meta[name="theme-color"]').content=dark?'#101214':'#f6faff';
 $('#theme').innerHTML=svg(dark?'sun':'moon');
 $('#theme').setAttribute('aria-label',language==='ko'?(dark?'라이트 모드로 전환':'다크 모드로 전환'):(dark?'Switch to light mode':'Switch to dark mode'));
 $('#menu').setAttribute('aria-label',language==='ko'?($('#menu').getAttribute('aria-expanded')==='true'?'메뉴 닫기':'메뉴 열기'):($('#menu').getAttribute('aria-expanded')==='true'?'Close menu':'Open menu'));
 $('#back-top').setAttribute('aria-label',language==='ko'?'맨 위로 이동':'Back to top');
 $('.visual').setAttribute('aria-label',language==='ko'?'생각을 만들고 경험을 쌓아가는 여정을 표현한 추상 그래픽':'An abstract illustration of curiosity and growth');
}
try{document.documentElement.dataset.theme=localStorage.getItem('jd-theme')==='dark'?'dark':'light';}catch{}
// The entire four-click sequence must fit inside one two-second window.
let themeClicks = [];
function registerThemeClick(now) {
 themeClicks = themeClicks.filter(time => now - time <= 2000);
 themeClicks.push(now);
 if (themeClicks.length >= 4) { themeClicks = []; return true; }
 return false;
}
$('#theme').addEventListener('click',()=>{
 document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
 persist('jd-theme',document.documentElement.dataset.theme); updateLabels();
 if(registerThemeClick(performance.now())) window.location.assign('game.html');
});
function closeMenu(){ $('#menu').setAttribute('aria-expanded','false');$('.header').classList.remove('menu-open');updateLabels(); }
$('#menu').addEventListener('click',()=>{const open=$('#menu').getAttribute('aria-expanded')!=='true';$('#menu').setAttribute('aria-expanded',String(open));$('.header').classList.toggle('menu-open',open);updateLabels();});
$('#navigation').addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
window.matchMedia('(min-width: 1101px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
$('#back-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
function updateScroll(){const height=document.documentElement.scrollHeight-innerHeight;$('.progress').style.width=`${height>0?scrollY/height*100:0}%`;$('#back-top').classList.toggle('visible',scrollY>550);$('.header').classList.toggle('scrolled',scrollY>20);const links=[...document.querySelectorAll('#navigation a')];let current='home';links.forEach(a=>{const el=$(a.getAttribute('href'));if(el && el.getBoundingClientRect().top<=150)current=el.id;});links.forEach(a=>{if(a.hash==='#'+current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
let ticking=false;window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{updateScroll();ticking=false;});ticking=true;}},{passive:true});window.addEventListener('resize',updateScroll);
render();
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}}),{threshold:0.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('will-reveal');observer.observe(el);});}

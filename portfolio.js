'use strict';
(() => {
 const $ = selector => document.querySelector(selector);
 const escape = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
 const number = id => String(id).padStart(2,'0');
 const tags = values => values.map(value=>`<span>${escape(value)}</span>`).join('');
 const paragraphs = values => (values||[]).map(value=>`<p>${escape(value)}</p>`).join('');
 const list = values => `<ul class="detail-list">${values.map(value=>`<li>${escape(value)}</li>`).join('')}</ul>`;
 const imageURL = image => `assets/portfolio/${image.file}.jpg`;
 const dimensions = file => {const m=portfolioImageMeta[file];return m ? `width="${m.width}" height="${m.height}"` : '';};
 const section = (id,label,title,content) => `<section id="${id}" class="detail-section"><div class="detail-section-heading"><span>${label}</span><h2>${title}</h2></div>${content}</section>`;
 const itemCards = values => `<div class="detail-feature-grid">${values.map((value,i)=>`<article class="detail-feature"><span>${number(i+1)}</span><h3>${escape(value.title)}</h3><p>${escape(value.text)}</p></article>`).join('')}</div>`;
 const grid = $('#portfolio-grid');
 if(grid) {
  grid.innerHTML = portfolioData.map(project => `<a class="portfolio-card" href="portfolio.html?id=${encodeURIComponent(project.id)}" aria-label="${escape(project.title)} 자세히 보기"><div class="portfolio-card-image"><img src="${escape(project.thumbnail)}" alt="${escape(project.title)} 대표 이미지" ${dimensions(project.thumbnail.split('/').pop().replace('.jpg',''))} loading="lazy" decoding="async"><span class="portfolio-number">${number(project.id)}</span></div><div class="portfolio-card-copy"><span class="portfolio-category">${escape(project.category)}</span><h3>${escape(project.title)}</h3><p>${escape(project.subtitle)}</p><time>${escape(project.period)}</time><div class="portfolio-tags">${tags(project.technologies.slice(0,3))}</div><span class="portfolio-card-link">자세히 보기 <span aria-hidden="true">↗</span></span></div></a>`).join('');
 }
 const detail = $('#portfolio-detail');
 if(!detail) return;

 // The detail page runs independently of the main site's scripts.
 try {document.documentElement.dataset.theme=localStorage.getItem('jd-theme')==='dark'?'dark':'light';}catch{}
 function updateTheme(){const dark=document.documentElement.dataset.theme==='dark';$('#detail-theme').textContent=dark?'☀':'☾';$('#detail-theme').setAttribute('aria-label',dark?'라이트 모드로 전환':'다크 모드로 전환');$('meta[name="theme-color"]').content=dark?'#101214':'#f6faff';}
 let clicks=[];
 $('#detail-theme').addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('jd-theme',document.documentElement.dataset.theme);}catch{}updateTheme();const now=performance.now();clicks=clicks.filter(time=>now-time<=2000);clicks.push(now);if(clicks.length>=4){clicks=[];location.assign('game.html');}});
 updateTheme();
 const id = new URLSearchParams(location.search).get('id');
 const index = portfolioData.findIndex(project => String(project.id)===id);
 if(index<0){document.title='프로젝트를 찾을 수 없어요 · 권정달';detail.innerHTML='<div class="portfolio-empty"><span>404 / PROJECT</span><h1>이 이야기를 찾을 수 없어요.</h1><p>포트폴리오 목록에서 프로젝트를 선택해 주세요.</p><a class="button" href="index.html#portfolio">목록으로 돌아가기 ↗</a></div>';return;}
 const p=portfolioData[index];
 document.title=`${p.title} · 권정달`;
 $('meta[name="description"]').content=p.subtitle;
 const previous=portfolioData[index-1],next=portfolioData[index+1];
 const heroFile=p.thumbnail.split('/').pop().replace('.jpg','');
 const heroIndex=p.images.findIndex(image=>imageURL(image)===p.thumbnail);
 const gallery = `<div class="project-gallery">${p.images.map((image,i)=>`<figure class="project-image${image.type==='diagram'?' diagram':''}"><button type="button" data-image="${i}" aria-label="${escape(image.caption)} 확대 보기"><img src="${imageURL(image)}" alt="${escape(image.caption)}" ${dimensions(image.file)} loading="lazy" decoding="async"><span class="gallery-zoom" aria-hidden="true">크게 보기 ↗</span></button><figcaption><span>${escape(image.caption)}</span><small>PDF ${image.page}쪽</small></figcaption></figure>`).join('')}</div>`;
 const related = p.achievements?.length ? section('achievement','RECOGNITION','도전이 남긴 기록',`<div class="project-achievements">${p.achievements.map(a=>`<article><span class="achievement-icon" aria-hidden="true">✦</span><div><p>${escape(a.title)}</p>${a.distinction?`<h3>${escape(a.distinction)}</h3>`:''}<small>${escape(a.source||'')}</small></div></article>`).join('')}</div>`) : '';
 const limitations=p.limitations?.length ? `<div><h3 class="improvement-title">현재의 한계</h3>${itemCards(p.limitations)}</div>` : '';
 const improvements=p.improvements?.length ? `<div><h3 class="improvement-title">앞으로의 방향</h3>${itemCards(p.improvements)}</div>` : '';
 detail.innerHTML = `
 <div class="project-breadcrumb"><a href="index.html">홈</a><span>/</span><a href="index.html#portfolio">Portfolio</a><span>/</span><span>${number(p.id)}</span></div>
 <section class="project-hero"><div class="project-kicker"><span>PORTFOLIO ${number(p.id)}</span><span>${escape(p.category)}</span></div><h1>${escape(p.title)}</h1><p class="project-subtitle">${escape(p.subtitle)}</p><div class="project-summary"><div><span>개발 기간</span><strong>${escape(p.period)}</strong>${p.periodNote?`<small>${escape(p.periodNote)}</small>`:''}</div><div><span>담당 역할</span><strong>${escape(p.role)}</strong></div><div><span>주요 기술</span><div class="portfolio-tags">${tags(p.technologies)}</div></div></div><button class="project-hero-image" type="button" data-image="${heroIndex>=0?heroIndex:0}" aria-label="${escape(p.title)} 대표 이미지 확대"><img src="${escape(p.thumbnail)}" ${dimensions(heroFile)} alt="${escape(p.title)} 대표 화면" fetchpriority="high"><span class="gallery-zoom" aria-hidden="true">이미지 크게 보기 ↗</span></button></section>
 <div class="project-layout"><aside class="project-toc" aria-label="상세 내용 바로가기"><span>이 프로젝트의 이야기</span><a href="#motivation">시작하게 된 이유</a><a href="#overview">프로젝트 소개</a><a href="#role">내가 맡은 일</a><a href="#technologies">사용한 도구들</a><a href="#gallery">사진과 다이어그램</a>${p.learned?.length?'<a href="#learning">배움과 경험</a>':''}${limitations||improvements?'<a href="#improvement">한계와 다음 단계</a>':''}<a href="#reflection">돌아보며</a>${p.achievements?.length?'<a href="#achievement">관련 기록</a>':''}</aside><div class="project-content">
 ${section('motivation','01 / WHY','시작하게 된 이유',paragraphs(p.motivation))}
 ${section('overview','02 / WHAT','이렇게 만들었습니다',paragraphs(p.description)+itemCards(p.features||[])+(p.workflow?.length?`<div class="project-workflow"><span>서비스의 흐름</span>${paragraphs(p.workflow)}</div>`:''))}
 ${section('role','03 / MY ROLE','내가 맡은 일',`<p class="role-lead">${escape(p.role)}</p>${list(p.activities||[])}${p.roleNote?`<p class="source-note">${escape(p.roleNote)}</p>`:''}`)}
 ${section('technologies','04 / TOOLS','생각을 구현한 도구들',`<div class="technology-group"><h3>언어 · 기술</h3><div class="portfolio-tags large">${tags(p.technologies)}</div></div><div class="technology-group"><h3>개발 · 협업 도구</h3><div class="portfolio-tags large">${tags(p.tools||[])}</div></div>`)}
 ${section('gallery','05 / GALLERY','화면과 과정의 기록',`<p class="gallery-intro">발표 자료에 담긴 실제 화면과 사진입니다. 이미지를 누르면 크게 볼 수 있어요.</p>${gallery}`)}
 ${p.learned?.length?section('learning','LEARNING','경험이 배움이 될 때',list(p.learned)):''}
 ${limitations||improvements?section('improvement','NEXT STEP','더 나아지기 위한 생각',`<div class="project-improvements">${limitations}${improvements}</div>`):''}
 ${section('reflection','REFLECTION','프로젝트를 돌아보며',`<div class="reflection-card"><span aria-hidden="true">“</span>${paragraphs(p.reflection)}</div>`)}
 ${related}
 <p class="project-source">내용·이미지 출처: 「AI 동고동락 대회 PPT.pdf」 ${escape(p.sourcePages)}쪽${p.id===2?' · 경력 정보 3쪽':''}. 원문의 표현은 읽기 편하게 정리했습니다.</p>
 </div></div>
 <nav class="project-pagination" aria-label="프로젝트 이동">${previous?`<a href="portfolio.html?id=${previous.id}"><span>← 이전 이야기</span><strong>${escape(previous.title)}</strong></a>`:'<div></div>'}<a class="pagination-list" href="index.html#portfolio">전체 목록 <span>↗</span></a>${next?`<a class="pagination-next" href="portfolio.html?id=${next.id}"><span>다음 이야기 →</span><strong>${escape(next.title)}</strong></a>`:'<div></div>'}</nav>`;

 // Native dialog provides keyboard focus containment and Escape to close.
 const viewer=$('#image-viewer');let activeImage=0;let previousOverflow='';
 function showImage(index){activeImage=(index+p.images.length)%p.images.length;const image=p.images[activeImage];$('#viewer-image').src=imageURL(image);$('#viewer-image').alt=image.caption;$('#viewer-caption').textContent=`${image.caption} · PDF ${image.page}쪽`;$('#viewer-count').textContent=`${activeImage+1} / ${p.images.length}`;}
 detail.addEventListener('click',event=>{const trigger=event.target.closest('[data-image]');if(!trigger)return;showImage(Number(trigger.dataset.image));previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';viewer.showModal();});
 $('#viewer-close').addEventListener('click',()=>viewer.close());
 viewer.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;});
 viewer.addEventListener('click',event=>{if(event.target===viewer)viewer.close();});
 $('#viewer-prev').addEventListener('click',()=>showImage(activeImage-1));$('#viewer-next').addEventListener('click',()=>showImage(activeImage+1));
 viewer.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();showImage(activeImage-1);}if(event.key==='ArrowRight'){event.preventDefault();showImage(activeImage+1);}});
 function updateScroll(){const height=document.documentElement.scrollHeight-innerHeight;$('.progress').style.width=`${height>0?scrollY/height*100:0}%`;$('#detail-top').classList.toggle('visible',scrollY>550);$('.header').classList.toggle('scrolled',scrollY>20);let current='motivation';document.querySelectorAll('.detail-section').forEach(el=>{if(el.getBoundingClientRect().top<170)current=el.id;});document.querySelectorAll('.project-toc a').forEach(link=>{if(link.hash==='#'+current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
 let scheduled=false;window.addEventListener('scroll',()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{updateScroll();scheduled=false;});},{passive:true});window.addEventListener('resize',updateScroll);
 $('#detail-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}}),{threshold:.04});document.querySelectorAll('.detail-section').forEach(el=>{el.classList.add('will-reveal');observer.observe(el);});}
 updateScroll();
})();

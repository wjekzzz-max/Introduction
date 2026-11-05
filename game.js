'use strict';

// Pure rules: no DOM, storage or animation dependencies.
const Puzzle = (() => {
 const size = 8;
 const shapes = [ [[0,0]], [[0,0],[0,1]], [[0,0],[1,0]], [[0,0],[0,1],[0,2]], [[0,0],[1,0],[2,0]], [[0,0],[0,1],[1,0],[1,1]], [[0,0],[1,0],[2,0],[2,1]], [[0,1],[1,1],[2,0],[2,1]], [[0,0],[0,1],[0,2],[1,1]], [[0,1],[1,0],[1,1],[1,2]], [[0,0],[1,0],[1,1]], [[0,0],[0,1],[1,1],[1,2]], [[0,1],[0,2],[1,0],[1,1]], [[0,0],[0,1],[0,2],[0,3]], [[0,0],[1,0],[2,0],[3,0]], [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2]], [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]] ];
 const colors = ['#4d8eee','#edaa42','#a47ae3','#e97791','#45b5ab','#6481db'];
 const empty = () => Array.from({length:size},()=>Array(size).fill(null));
 const canPlace = (board,shape,row,col) => shape.every(([r,c]) => row+r>=0 && row+r<size && col+c>=0 && col+c<size && !board[row+r][col+c]);
 const canFit = (board,shape) => board.some((line,r)=>line.some((_,c)=>canPlace(board,shape,r,c)));
 const isOver = (board,pieces) => !pieces.some(p=>p && canFit(board,p.shape));
 function lines(board) {
  const rows=[],cols=[];
  for(let i=0;i<size;i++){if(board[i].every(Boolean))rows.push(i);if(board.every(row=>Boolean(row[i])))cols.push(i);}
  const cells=[];
  for(let r=0;r<size;r++)for(let c=0;c<size;c++)if(rows.includes(r)||cols.includes(c))cells.push([r,c]);
  return {rows,cols,cells,count:rows.length+cols.length};
 }
 function place(board,piece,row,col){
  if(!canPlace(board,piece.shape,row,col))return null;
  const next=board.map(line=>line.slice());piece.shape.forEach(([r,c])=>{next[row+r][col+c]=piece.color;});
  const cleared=lines(next);const result=next.map(line=>line.slice());cleared.cells.forEach(([r,c])=>{result[r][c]=null;});
  return {beforeClear:next,board:result,cleared,points:piece.shape.length*10+cleared.count*100+Math.max(0,cleared.count-1)*50};
 }
 function deal(random=Math.random){return Array.from({length:3},()=>({shape:shapes[Math.floor(random()*shapes.length)],color:colors[Math.floor(random()*colors.length)]}));}
 return {size,shapes,empty,canPlace,canFit,isOver,lines,place,deal};
})();

// UI: pointer interaction, keyboard access, rendering and persistence.
(() => {
 const $=selector=>document.querySelector(selector);
 const boardEl=$('#board'),tray=$('#tray'),ghost=$('#drag-ghost');
 let board=Puzzle.empty(),pieces=[],score=0,best=0,selected=null,drag=null,busy=false,over=false,epoch=0;
 let cursor={row:0,col:0};
 try{const saved=Number(localStorage.getItem('jd-block-best'));best=Number.isFinite(saved)&&saved>0?Math.floor(saved):0;document.documentElement.dataset.theme=localStorage.getItem('jd-theme')==='dark'?'dark':'light';}catch{}
 function setTheme(){const dark=document.documentElement.dataset.theme==='dark';$('#game-theme').textContent=dark?'☀':'☾';$('#game-theme').setAttribute('aria-label',dark?'라이트 모드로 전환':'다크 모드로 전환');$('meta[name="theme-color"]').content=dark?'#101e38':'#e8f2ff';}
 $('#game-theme').addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('jd-theme',document.documentElement.dataset.theme);}catch{}setTheme();});setTheme();
 const cellEls=[];
 for(let r=0;r<8;r++)for(let c=0;c<8;c++){const el=document.createElement('div');el.className='cell';el.setAttribute('role','gridcell');el.dataset.row=r;el.dataset.col=c;el.tabIndex=r===0&&c===0?0:-1;boardEl.append(el);cellEls.push(el);}
 const cellAt=(r,c)=>cellEls[r*8+c];
 function drawBoard(){cellEls.forEach((el,i)=>{const value=board[Math.floor(i/8)][i%8];el.className='cell'+(value?' filled':'');el.style.setProperty('--block',value||'transparent');el.setAttribute('aria-label',`${Math.floor(i/8)+1}행 ${i%8+1}열, ${value?'블록 있음':'빈칸'}`);});}
 function shapeHTML(piece){const h=Math.max(...piece.shape.map(x=>x[0]))+1,w=Math.max(...piece.shape.map(x=>x[1]))+1;let html='';for(let r=0;r<h;r++)for(let c=0;c<w;c++)html+=`<span class="mini-cell${piece.shape.some(([a,b])=>a===r&&b===c)?' filled':''}" style="--block:${piece.color}"></span>`;return `<span class="piece-shape" style="grid-template-columns:repeat(${w},1fr)">${html}</span>`;}
 function drawTray(){tray.innerHTML='';pieces.forEach((piece,i)=>{const button=document.createElement('button');button.className='piece-slot'+(selected===i?' selected':'');button.dataset.index=i;button.disabled=!piece||busy||over;button.setAttribute('aria-label',piece?`${i+1}번 블록, ${piece.shape.length}칸. 선택 후 보드에 배치`:`${i+1}번 블록 사용 완료`);button.setAttribute('aria-pressed',selected===i?'true':'false');if(piece)button.innerHTML=shapeHTML(piece);tray.append(button);});}
 function updateScore(){best=Math.max(best,score);$('#score').textContent=score.toLocaleString();$('#best').textContent=best.toLocaleString();try{localStorage.setItem('jd-block-best',String(best));}catch{}}
 function clearPreview(){cellEls.forEach(el=>el.classList.remove('preview','invalid'));}
 function preview(row,col){clearPreview();const piece=pieces[selected];if(!piece||busy||over)return;const valid=Puzzle.canPlace(board,piece.shape,row,col);piece.shape.forEach(([r,c])=>{r+=row;c+=col;if(r>=0&&r<8&&c>=0&&c<8){const el=cellAt(r,c);el.classList.add(valid?'preview':'invalid');el.style.setProperty('--preview',piece.color);}});}
 function endCheck(){over=Puzzle.isOver(board,pieces);if(over){$('#game-over').hidden=false;$('#final-score').textContent=score.toLocaleString();$('#status').textContent='더 놓을 수 있는 블록이 없어요. 다시 도전해 보세요.';drawTray();$('#play-again').focus();}}
 async function commit(index,row,col){
  if(busy||over||!pieces[index])return false;
  const piece=pieces[index],result=Puzzle.place(board,piece,row,col);if(!result){$('#status').textContent='이곳에는 놓을 수 없어요. 다른 빈칸을 찾아보세요.';clearPreview();return false;}
  busy=true;const currentEpoch=epoch;selected=null;pieces[index]=null;board=result.beforeClear;drawBoard();drawTray();piece.shape.forEach(([r,c])=>cellAt(row+r,col+c).classList.add('placed'));
  score+=result.points;updateScore();
  if(result.cleared.count){result.cleared.cells.forEach(([r,c])=>cellAt(r,c).classList.add('clearing'));$('#combo').textContent=result.cleared.count>1?`${result.cleared.count}줄 동시 완성!`:'한 줄 완성!';$('#combo').classList.remove('show');void $('#combo').offsetWidth;$('#combo').classList.add('show');await new Promise(resolve=>setTimeout(resolve,320));}
  else await new Promise(resolve=>setTimeout(resolve,180));
  if(currentEpoch!==epoch)return true;
  board=result.board;busy=false;drawBoard();if(pieces.every(p=>!p))pieces=Puzzle.deal();drawTray();$('#status').textContent=result.cleared.count?`${result.cleared.count}줄을 지웠어요! +${result.points}점`:`잘 놓았어요! +${result.points}점`;endCheck();return true;
 }
 function cleanupDrag(){if(drag){const button=drag.button;try{if(button.hasPointerCapture(drag.id))button.releasePointerCapture(drag.id);}catch{}}drag=null;ghost.classList.remove('active');clearPreview();document.querySelectorAll('.dragging').forEach(el=>el.classList.remove('dragging'));}
 function reset(){epoch++;cleanupDrag();board=Puzzle.empty();pieces=Puzzle.deal();score=0;selected=null;busy=false;over=false;$('#game-over').hidden=true;$('#combo').classList.remove('show');$('#status').textContent='블록을 끌어서 보드에 놓아주세요.';drawBoard();drawTray();updateScore();}
 $('#restart').addEventListener('click',reset);$('#play-again').addEventListener('click',reset);
 function geometry(){const first=cellAt(0,0).getBoundingClientRect(),second=cellAt(0,1).getBoundingClientRect();return {first,step:second.left-first.left,cell:first.width};}
 function moveDrag(e){if(!drag||e.pointerId!==drag.id)return;const g=geometry();if(!drag.moved&&Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)<6)return;drag.moved=true;drag.button.classList.add('dragging');const piece=pieces[drag.index];if(!piece)return;const w=Math.max(...piece.shape.map(x=>x[1]))+1,h=Math.max(...piece.shape.map(x=>x[0]))+1;const left=e.clientX-(w*g.step-5)/2,top=e.clientY-(h*g.step-5)/2-(e.pointerType==='touch'?85:12);ghost.style.transform=`translate3d(${left}px,${top}px,0)`;ghost.style.gridTemplateColumns=`repeat(${w},${g.cell}px)`;ghost.style.gridAutoRows=`${g.cell}px`;ghost.style.gap=`${g.step-g.cell}px`;ghost.classList.add('active');drag.row=Math.round((top-g.first.top)/g.step);drag.col=Math.round((left-g.first.left)/g.step);preview(drag.row,drag.col);}
 tray.addEventListener('pointerdown',e=>{const button=e.target.closest('.piece-slot');if(!button||button.disabled||busy||over||drag||e.button>0)return;const index=Number(button.dataset.index);selected=index;tray.querySelectorAll('.piece-slot').forEach((el,i)=>{el.classList.toggle('selected',i===index);el.setAttribute('aria-pressed',String(i===index));});const piece=pieces[index],w=Math.max(...piece.shape.map(x=>x[1]))+1,h=Math.max(...piece.shape.map(x=>x[0]))+1;ghost.innerHTML=Array.from({length:w*h},(_,i)=>`<span class="${piece.shape.some(([r,c])=>r===Math.floor(i/w)&&c===i%w)?'ghost-cell':'ghost-empty'}" style="--block:${piece.color}"></span>`).join('');drag={id:e.pointerId,index,button,startX:e.clientX,startY:e.clientY,moved:false,row:-10,col:-10};button.setPointerCapture(e.pointerId);$('#status').textContent='블록을 끌거나, 놓을 칸을 눌러주세요.';});
 window.addEventListener('pointermove',moveDrag,{passive:true});
 window.addEventListener('pointerup',e=>{if(!drag||drag.id!==e.pointerId)return;moveDrag(e);const {index,row,col,moved}=drag;cleanupDrag();if(moved){commit(index,row,col);selected=null;drawTray();}else preview(cursor.row,cursor.col);});
 window.addEventListener('pointercancel',cleanupDrag);window.addEventListener('blur',cleanupDrag);window.addEventListener('resize',cleanupDrag);
 tray.addEventListener('lostpointercapture',e=>{if(drag&&e.pointerId===drag.id)cleanupDrag();});
 tray.addEventListener('click',e=>{if(e.detail!==0)return;const button=e.target.closest('.piece-slot');if(!button||button.disabled)return;selected=Number(button.dataset.index);drawTray();preview(cursor.row,cursor.col);cellAt(cursor.row,cursor.col).focus();});
 boardEl.addEventListener('pointermove',e=>{if(drag||selected===null)return;const el=e.target.closest('.cell');if(el)preview(Number(el.dataset.row),Number(el.dataset.col));});boardEl.addEventListener('pointerleave',()=>{if(!drag)clearPreview();});
 boardEl.addEventListener('click',e=>{if(drag||selected===null)return;const el=e.target.closest('.cell');if(el){cursor={row:Number(el.dataset.row),col:Number(el.dataset.col)};commit(selected,cursor.row,cursor.col);}});
 boardEl.addEventListener('keydown',e=>{const directions={ArrowUp:[-1,0],ArrowDown:[1,0],ArrowLeft:[0,-1],ArrowRight:[0,1]};if(directions[e.key]){e.preventDefault();const [r,c]=directions[e.key];cursor={row:Math.max(0,Math.min(7,cursor.row+r)),col:Math.max(0,Math.min(7,cursor.col+c))};cellEls.forEach(el=>el.tabIndex=-1);const target=cellAt(cursor.row,cursor.col);target.tabIndex=0;target.focus();preview(cursor.row,cursor.col);}else if(e.key==='Enter'||e.key===' '){e.preventDefault();if(selected!==null)commit(selected,cursor.row,cursor.col);}else if(e.key==='Escape'){selected=null;clearPreview();drawTray();}});
 reset();
})();

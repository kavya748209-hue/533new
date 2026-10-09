import './styles.css';
import { inject } from '@vercel/analytics';
inject(); // Vercel Web Analytics

const IM=["/images/vent-1.jpg", "/images/vent-2.jpg", "/images/vent-3.jpg", "/images/before-after.jpg", "/images/knob-1.jpg", "/images/knob-dimensions.jpg", "/images/knob-install.jpg", "/images/knob-2.jpg", "/images/logo.jpg"];
const bar=document.getElementById('bar');const WA='917409768581',IG='https://www.instagram.com/5three3three_/';
const P={vent:{n:'10-Pack Car AC Vent Outlet Trim Strip',c:'Interior Trim',p:149,m:299,im:[0,1,2,3],d:'Electroplated red-and-black flexible strips that clip into AC vent gaps. Cut to size, bend around curves, no tools needed.',s:[['Pack','10 strips'],['Width','≈ 8 mm'],['Finish','Electroplated red'],['Fit','Universal'],['Install','Cut + press in']]},
knob:{n:'5-Speed Leather & Chrome Gear Shift Knob',c:'Shift Knobs',p:699,m:999,im:[4,7,5,6],d:'Textured leather with red cross-stitching, chrome trim and a gloss black shift-pattern plate. Includes 3 adapters, Allen key and set screws.',s:[['Pattern','5-speed + R'],['Height','97 mm / 3.82"'],['Width','55 mm / 2.17"'],['Bore','16 mm / 0.63"'],['In the box','3 adapters, key, screws']]}};
let C={},cur='vent',gi=0;const $=s=>document.querySelector(s),R=n=>'₹'+n.toLocaleString('en-IN');
document.querySelectorAll('[data-i]').forEach(e=>e.src=IM[e.dataset.i]);document.querySelectorAll('[data-bg]').forEach(e=>e.style.backgroundImage=`url(${IM[e.dataset.bg]})`);
$('#igg').innerHTML=[0,4,1,7,2,5,3,8].map(i=>`<a href="${IG}" target="_blank" rel="noopener"><img src="${IM[i]}" alt=""></a>`).join('');
$('#bs').innerHTML=Object.entries(P).map(([k,v],i)=>`<div class="pc gl tilt"><span class="bd">${i?'TOP RATED':'BEST SELLER'}</span><div class="pi"><img src="${IM[v.im[i?1:0]]}" alt="${v.n}"></div><h3>${v.n}</h3><div class="pr">${R(v.p)}<s>${R(v.m)}</s></div><button class="btn" onclick="add('${k}')">Add to cart</button> <button class="btn gh" onclick="go('${k}')">Details</button></div>`).join('');
function show(){const v=P[cur],g=gi;$('#tb').innerHTML=Object.entries(P).map(([k,x])=>`<button class="${k==cur?'on':''}" onclick="setTab('${k}')">${x.c}</button>`).join('');
$('#sh').innerHTML=`<div><div class="mn"><img id="mi" src="${IM[v.im[g]]}"></div><div class="th">${v.im.map((x,i)=>`<img class="${i==g?'on':''}" src="${IM[x]}" onclick="setG(${i})">`).join('')}</div></div><div class="sp gl"><div class="eye">${v.c}</div><h3>${v.n}</h3><div class="pr">${R(v.p)}<s>${R(v.m)}</s></div><p style="color:var(--m)">${v.d}</p><ul>${v.s.map(a=>`<li><span>${a[0]}</span><b>${a[1]}</b></li>`).join('')}</ul><div class="q"><button class="btn" onclick="add('${cur}')">Add to cart</button><button class="btn gh" onclick="add('${cur}');co(1)">Buy now</button></div></div>`}
function go(k){cur=k;gi=0;show();$('#shop').scrollIntoView()}show();
function by(y,b){bar.style.setProperty('--y',y+'%');b.parentNode.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x==b))}
function tot(){return Object.entries(C).reduce((a,[k,q])=>a+P[k].p*q,0)}
function rc(){const e=Object.entries(C);$('#cn').textContent=e.reduce((a,[,q])=>a+q,0);$('#ct').textContent=R(tot());$('#ft').textContent=R(tot());
$('#cl').innerHTML=e.length?e.map(([k,q])=>`<div class="ci"><img src="${IM[P[k].im[0]]}"><div><b>${P[k].n}</b><br><small>${R(P[k].p)} each</small><div class="qt"><button onclick="ch('${k}',-1)">−</button><span>${q}</span><button onclick="ch('${k}',1)">+</button></div></div><b>${R(P[k].p*q)}</b></div>`).join(''):'<p style="color:var(--m)">Your cart is empty.</p>'}
function ch(k,d){C[k]=(C[k]||0)+d;if(C[k]<=0)delete C[k];rc()}
function add(k){ch(k,1);toast('Added to cart ✓')}
function toast(t){const e=$('#ts');e.textContent=t;e.classList.add('on');setTimeout(()=>e.classList.remove('on'),2200)}
function dr(o){$('#dr').classList.toggle('on',!!o);$('#ov').classList.toggle('on',!!o)}
function co(o){if(o&&!tot()){toast('Cart is empty');return}$('#co').classList.toggle('on',!!o);$('#ov').classList.toggle('on',!!o);if(o)$('#dr').classList.remove('on')}
function ord(e){e.preventDefault();const id='5G'+Date.now().toString().slice(-6);
const l=Object.entries(C).map(([k,q])=>`• ${P[k].n} x${q} = ${R(P[k].p*q)}`).join('\n');
const m=`🔥 NEW ORDER ${id} — 5333 GARAGE\n\n${l}\n\nTotal: ${R(tot())}\nPayment: ${$('#fy').value}\n\nName: ${$('#fn').value}\nPhone: ${$('#fp').value}\nAddress: ${$('#fa').value}, ${$('#fc').value}`;
window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`,'_blank');C={};rc();co(0);toast('Order '+id+' — send it on WhatsApp to confirm');return false}
function cmp(e){e.preventDefault();window.open(`https://wa.me/${WA}?text=${encodeURIComponent('💬 Compliment for 5333 GARAGE from '+$('#cn1').value+':\n'+$('#cm').value)}`,'_blank');e.target.reset();return false}
document.querySelectorAll('.tilt').forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*18}deg) rotateX(${-y*18}deg)`};c.onmouseleave=()=>c.style.transform=''});
const io=new IntersectionObserver(a=>a.forEach(x=>x.isIntersecting&&x.target.classList.add('on')),{threshold:.12});document.querySelectorAll('.rev').forEach(e=>io.observe(e));
addEventListener('scroll',()=>{const y=scrollY;document.querySelectorAll('[data-p]').forEach(e=>e.style.marginTop=(y*e.dataset.p)+'px');$('.grid').style.opacity=Math.max(0,1-y/700)},{passive:true});rc();

const setTab=k=>{cur=k;gi=0;show()},setG=i=>{gi=i;show()};
Object.assign(window,{IG,go,by,add,ch,dr,co,ord,cmp,setTab,setG});
// ---- premium extras
const pg=$('#pg'),cg=$('#cg'),fine=matchMedia('(pointer:fine)').matches;
addEventListener('scroll',()=>{pg.style.width=(scrollY/(document.body.scrollHeight-innerHeight)*100)+'%'},{passive:true});
if(fine)addEventListener('mousemove',e=>{cg.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
document.addEventListener('mousemove',e=>{const g=e.target.closest&&e.target.closest('.gl');if(g){const r=g.getBoundingClientRect();g.style.setProperty('--mx',(e.clientX-r.left)+'px');g.style.setProperty('--my',(e.clientY-r.top)+'px')}});
document.querySelectorAll('.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
const cio=new IntersectionObserver(a=>a.forEach(x=>{if(!x.isIntersecting)return;cio.unobserve(x.target);const el=x.target,n=+el.dataset.count,t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1400);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+(el.dataset.suf||'');if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(e=>cio.observe(e));
$('#mb').onclick=()=>$('.nl').classList.toggle('on');document.querySelectorAll('.nl a').forEach(a=>a.onclick=()=>$('.nl').classList.remove('on'));
const hide=()=>$('#pre').classList.add('off');addEventListener('load',()=>setTimeout(hide,350));setTimeout(hide,3000);

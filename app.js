const LOGO=`<div class="logo3d"><img class="em" alt="" src="data:image/png;base64,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"><img class="wm" alt="ENTASI" src="data:image/png;base64,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"></div>`;
const IC={users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
'bell-ringing':'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M2 8c0-2.2.7-4.3 2-6M22 8a10 10 0 0 0-2-6"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>',
moon:'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',plus:'<path d="M12 5v14M5 12h14"/>',
'arrow-left':'<path d="M19 12H5M12 19l-7-7 7-7"/>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
check:'<path d="M20 6 9 17l-5-5"/>',trash:'<path d="M3 6h18M19 6l-1 14H6L5 6M8 6V4h8v2"/>',
upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
route:'<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>',
edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
'file-type-pdf':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 15h1.5a1.5 1.5 0 0 0 0-3H9v5"/>',
photo:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
'arrows-maximize':'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>'};
const ic=n=>`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]||''}</svg>`;
'use strict';
/* ENTASI · app connectada a Supabase */
const SUPA_URL='https://sxctqxkltvkviscddtyt.supabase.co';
const SUPA_KEY='sb_publishable_yg6rtmK0WiZHcQTySI1Xlg_Jy07Mb7j';
const sb=window.supabase.createClient(SUPA_URL,SUPA_KEY);

IC.download='<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>';
IC.logout='<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>';
IC.wifi='<path d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01"/>';

/* ---------- utilitats ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today=()=>new Date().toISOString().slice(0,10);
const fmt=d=>d?new Date(d+'T00:00').toLocaleDateString('ca-ES',{day:'numeric',month:'short'}):'';
const ok=r=>{if(r.error)throw r.error;return r.data};

/* ---------- preferències i memòria cau (al dispositiu) ---------- */
const PK='entasi.pref',CK='entasi.cache';
const defPref={theme:'dark',notif:{on:false,time:'07:30',last:''}};
let pref=(()=>{try{return Object.assign({},defPref,JSON.parse(localStorage.getItem(PK))||{})}catch(e){return{...defPref}}})();
const savePref=()=>{try{localStorage.setItem(PK,JSON.stringify(pref))}catch(e){}};
let projects=(()=>{try{return JSON.parse(localStorage.getItem(CK))||[]}catch(e){return[]}})();
const saveCache=()=>{try{localStorage.setItem(CK,JSON.stringify(projects))}catch(e){}};
let user=null,view={name:'home'},tab='tasks',sub='certs',offline=false,cached=new Set();
const P=id=>projects.find(p=>p.id===id);
const eur=n=>new Intl.NumberFormat('ca-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(+n||0);
/* progrés: % executat = certificat acumulat / pressupost; % termini = temps passat / durada */
function stats(p){
  const bud=+p.budget||0,cert=(p.certs||[]).reduce((s,c)=>s+(+c.amount||0),0);
  const exec=bud>0?cert/bud*100:null;
  let time=null;
  if(p.start_date&&p.end_date){const a=new Date(p.start_date+'T00:00'),b=new Date(p.end_date+'T00:00'),n=new Date();if(b>a)time=Math.max(0,Math.min(100,(n-a)/(b-a)*100))}
  const late=exec!==null&&time!==null&&time-Math.min(exec,100)>=10&&p.status!=='Acabada';
  return{bud,cert,exec,time,late};
}

/* fitxers dels plànols guardats al dispositiu (per veure'ls sense cobertura) */
const DB=new Promise((res,rej)=>{const r=indexedDB.open('entasi-files',1);r.onupgradeneeded=()=>r.result.createObjectStore('f');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
async function fput(k,b){const db=await DB;return new Promise((res,rej)=>{const t=db.transaction('f','readwrite');t.objectStore('f').put(b,k);t.oncomplete=res;t.onerror=()=>rej(t.error)})}
async function fget(k){const db=await DB;return new Promise(res=>{const r=db.transaction('f').objectStore('f').get(k);r.onsuccess=()=>res(r.result);r.onerror=()=>res(null)})}
async function fdel(k){const db=await DB;return new Promise(res=>{const t=db.transaction('f','readwrite');t.objectStore('f').delete(k);t.oncomplete=res;t.onerror=res})}
async function fkeys(){const db=await DB;return new Promise(res=>{const r=db.transaction('f').objectStore('f').getAllKeys();r.onsuccess=()=>res(r.result);r.onerror=()=>res([])})}

/* ---------- tema ---------- */
function applyTheme(){document.documentElement.dataset.theme=pref.theme;document.documentElement.dataset.style=pref.style||'default';const m=document.querySelector('meta[name=theme-color]');if(m)m.content=pref.theme==='dark'?'#0E1518':'#F2F6F5'}
function toggleTheme(){pref.theme=pref.theme==='dark'?'light':'dark';savePref();applyTheme();render()}

/* ---------- accés ---------- */
function login(msg){
  $('#app').innerHTML=`<form class="login" onsubmit="doLogin();return false">
    ${LOGO}<div class="sub" style="text-align:center;margin:0 0 22px">Inicia la sessió per veure les teves obres</div>
    <label for="l_email">CORREU</label><input id="l_email" type="email" autocomplete="username" inputmode="email" required>
    <label for="l_pw">CONTRASENYA</label><input id="l_pw" type="password" autocomplete="current-password" required>
    <div id="l_err" style="color:var(--red);font-size:13px;min-height:20px;margin-top:10px">${esc(msg||'')}</div>
    <button class="btn" id="l_btn" type="submit" style="margin-top:6px">Entrar</button></form>`;
}
async function doLogin(){
  const email=$('#l_email').value.trim(),password=$('#l_pw').value;
  if(!email||!password){$('#l_err').textContent='Escriu el correu i la contrasenya';return}
  $('#l_btn').disabled=true;$('#l_err').textContent='';
  const {data,error}=await sb.auth.signInWithPassword({email,password});
  if(error){$('#l_btn').disabled=false;$('#l_err').textContent=/invalid/i.test(error.message)?'Correu o contrasenya incorrectes':'No s\'ha pogut entrar: '+error.message;return}
  user=data.user;await start();
}
async function logout(){closeSheet();await sb.auth.signOut();user=null;projects=[];saveCache();login()}

/* ---------- dades ---------- */
async function refresh(){
  try{
    const base='*, tasks(*), plans(*), certs:certifications(*), scopes(*), meetings(*)';
    let data;
    try{data=ok(await sb.from('projects').select(base+', meas:measurements(*)').order('created_at',{ascending:false}))}
    catch(e){data=ok(await sb.from('projects').select(base).order('created_at',{ascending:false}))} /* si la taula de medicions encara no existeix */
    projects=data;saveCache();offline=false;render();
  }catch(e){offline=true;render();toast(navigator.onLine?'No s\'han pogut carregar les dades':'Sense connexió: es mostren les dades desades')}
}
async function guard(fn){try{return await fn()}catch(e){toast(!navigator.onLine?'Sense connexió. Torna-ho a provar quan en tinguis':(e.message||'Hi ha hagut un error'));return null}}

/* ---------- navegació ---------- */
function go(v,t){view=v;if(t)tab=t;render();scrollTo(0,0)}
const pending=p=>(p.tasks||[]).filter(t=>!t.done);
function render(){if(!user)return;view.name==='home'?home():project()}

/* ---------- vistes ---------- */
function home(){
  const all=projects.flatMap(pending);
  const urgent=all.filter(t=>t.prio==='alta'||(t.due&&t.due<=today())).length;
  const h=new Date().getHours(),greet=h<13?'Bon dia':h<20?'Bona tarda':'Bona nit';
  $('#app').innerHTML=`
  <div class="hdr">
    <div class="top">${LOGO}
      <div style="display:flex;gap:8px"><button class="ibtn" onclick="openSettings()" aria-label="Ajustos">${ic('settings')}</button>
      <button class="ibtn" onclick="toggleTheme()" aria-label="Canviar tema">${ic(pref.theme==='dark'?'sun':'moon')}</button></div></div>
    <div class="hi">${greet}</div>
    <div class="sub">${new Date().toLocaleDateString('ca-ES',{weekday:'long',day:'numeric',month:'long'})}${offline?` · <span style="color:var(--red)">${ic('wifi')} sense connexió</span>`:''}</div>
    <div class="stats"><div class="stat"><b>${projects.filter(q=>!isSmall(q)).length}</b><span>Obres</span></div><div class="stat"><b>${all.length}</b><span>Tasques pendents</span></div><div class="stat"><b style="color:var(--lime)">${urgent}</b><span>Urgents</span></div></div>
  </div>
  <div class="subs" style="margin:16px 0 4px">${[['gran','Obres'],['petita','Biblioteca']].map(([k,l])=>`<button class="${curSect()===k?'on':''}" onclick="setSect('${k}')">${l} · ${projects.filter(q=>(q.kind||'gran')===k).length}</button>`).join('')}</div>
  <div class="sec"><h2>${curSect()==='gran'?'Obres':'Plànols genèrics'}</h2>${sortedProjects().length>1?`<button class="pill" style="font-size:12px;padding:6px 14px" onclick="ordering=!ordering;render()">${ordering?'Fet':'Ordenar'}</button>`:''}</div>
  ${sortedProjects().length?sortedProjects().map((p,i,arr)=>{const n=pending(p),u=n.filter(t=>t.prio==='alta').length,s=stats(p);
  if(isSmall(p))return`
  <${ordering?'div':'button'} class="card" data-pid="${p.id}" ${ordering?'':`onclick="go({name:'project',id:'${p.id}'},'tasks')"`}>
    <div class="row"><span class="ttl" style="margin:0">${p.pinned?ic('pin')+' ':''}${esc(p.name)}</span></div>
    <div class="row mu" style="margin-top:8px"><span>${(p.plans||[]).length} plànols</span></div>
    ${ordering?octl(p,i,arr):''}
  </${ordering?'div':'button'}>`;
  return`
  <${ordering?'div':'button'} class="card" data-pid="${p.id}" ${ordering?'':`onclick="go({name:'project',id:'${p.id}'},'tasks')"`}>
    <div class="row"><span class="code">${p.pinned?ic('pin')+' ':''}${esc(p.code)}</span><span style="display:flex;gap:6px">${s.late?'<span class="pill red">Endarrerida</span>':''}${u?`<span class="pill red">${u} urgent${u>1?'s':''}</span>`:''}${!s.late&&!u?`<span class="pill lime">${esc(p.status)}</span>`:''}</span></div>
    <div class="ttl">${esc(p.name)}</div><div class="mu">${esc(p.client)}</div>
    ${s.bud>0?`<div class="row" style="margin-top:14px;align-items:flex-end"><div><div class="mu" style="font-size:11px;letter-spacing:.08em">CERTIFICAT</div><div style="font-size:17px">${eur(s.cert)}</div></div><div style="text-align:right"><div class="mu" style="font-size:11px;letter-spacing:.08em">ADJUDICAT</div><div style="font-size:17px">${eur(s.bud)}</div></div></div>`:''}
    <div class="bar"><i style="width:${Math.min(100,s.exec||0)}%"></i>${s.time!==null?`<b class="mark" style="left:${s.time}%"></b>`:''}</div>
    <div class="row mu"><span>${n.length} tasques · ${(p.plans||[]).length} plànols</span><span>${s.exec!==null?Math.round(s.exec)+'% executat':'Sense pressupost'}</span></div>
    ${ordering?octl(p,i,arr):''}
  </${ordering?'div':'button'}>`}).join(''):`<div class="empty">${curSect()==='gran'?'Encara no tens cap obra.':'La biblioteca és buida.<br>Crea un tipus d\'obra (Atirantats, Compensacions…) i hi guardes els plànols genèrics.'}<br>Afegeix-ne una amb el botó de sota.</div>`}
  <div class="mu" style="text-align:center;font-size:12px;margin:14px 0 0">Mantén premut per editar o esborrar</div>
  <button class="fab" onclick="newProject()">${ic('plus')} ${curSect()==='gran'?'Nova obra':'Nou tipus d\'obra'}</button>`;
}
const octl=(p,i,arr)=>`<div class="octl"><button class="sm" ${i===0||!!arr[i-1].pinned!==!!p.pinned?'disabled':''} onclick="moveProject('${p.id}',-1)" aria-label="Pujar">${ic('arrow-up')}</button><button class="sm" ${i===arr.length-1||!!arr[i+1].pinned!==!!p.pinned?'disabled':''} onclick="moveProject('${p.id}',1)" aria-label="Baixar">${ic('arrow-down')}</button><button class="sm ${p.pinned?'on':''}" onclick="togglePin('${p.id}')" aria-label="Fixar a dalt">${ic('pin')}</button></div>`;
const isSmall=p=>p.kind==='petita';
const curSect=()=>pref.sect==='petita'?'petita':'gran';
const setSect=k=>{pref.sect=k;savePref();ordering=false;render()};
/* mantenir premut sobre una obra, àmbit, plànol, certificació o reunió: editar o eliminar */
(()=>{let t=null,sx=0,sy=0,fired=false;const SEL='.card[data-pid],.card[data-sid],[data-plid],[data-cid],[data-mid],[data-xid],[data-chap]';
  const cancel=()=>{clearTimeout(t);t=null};
  const mn=(title,edit,del)=>sheet(`<h3>${esc(title)}</h3><button class="btn" onclick="closeSheet();${edit}">${ic('edit')} Editar</button><button class="btn ghost" style="color:var(--red)" onclick="closeSheet();${del}">${ic('trash')} Eliminar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`);
  const eurm=v=>(typeof eur==='function'?eur(v):v);
  /* petita vibració: Android amb vibrate(); iPhone (iOS 17.4+) amb el truc de l'interruptor natiu */
  const haptic=()=>{try{if(navigator.vibrate&&navigator.vibrate(12))return}catch(e){}
    try{const l=document.createElement('label');l.setAttribute('aria-hidden','true');l.style.cssText='position:fixed;left:-99px;top:0;opacity:0;pointer-events:none';
      const i=document.createElement('input');i.type='checkbox';i.setAttribute('switch','');l.appendChild(i);document.body.appendChild(l);l.click();setTimeout(()=>l.remove(),150)}catch(e){}};
  const menu=c=>{fired=true;haptic();const d=c.dataset;
    if(d.sid){const x=(P(d.spid)?.scopes||[]).find(s=>s.id===d.sid);if(x)mn(x.name,`editScope('${d.spid}','${d.sid}')`,`delScope('${d.spid}','${d.sid}')`);return}
    if(d.plid){const x=(P(d.ppid)?.plans||[]).find(s=>s.id===d.plid);if(x)mn(x.name,`editPlan('${d.ppid}','${d.plid}')`,`delPlan('${d.ppid}','${d.plid}')`);return}
    if(d.cid){const x=(P(d.cpid)?.certs||[]).find(s=>s.id===d.cid);if(x)mn('Certificació '+String(x.month).slice(0,7)+' · '+eurm(x.amount),`editCert('${d.cpid}','${d.cid}')`,`delCert('${d.cpid}','${d.cid}')`);return}
    if(d.xid){const x=(P(d.xpid)?.meas||[]).find(s=>s.id===d.xid);if(x)mn(x.name,`editMeas('${d.xpid}','${d.xid}')`,`delMeas('${d.xpid}','${d.xid}')`);return}
    if(d.chap!==undefined){const nm=chaps(P(d.chpid)||{})[+d.chap];if(nm!==undefined)mn('Capítol: '+nm,`renameChapter('${d.chpid}',${+d.chap})`,`delChapter('${d.chpid}',${+d.chap})`);return}
    if(d.mid){const x=(P(d.mpid)?.meetings||[]).find(s=>s.id===d.mid);if(x)mn('Reunió '+x.date,`editMeeting('${d.mpid}','${d.mid}')`,`delMeeting('${d.mpid}','${d.mid}')`);return}
    const id=d.pid,p=P(id);if(!p)return;sheet(`<h3>${esc(p.name)}</h3><button class="btn" onclick="editProject('${id}')">${ic('edit')} Editar</button><button class="btn ghost" style="color:var(--red)" onclick="closeSheet();delProject('${id}')">${ic('trash')} Esborrar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`)};
  document.addEventListener('pointerdown',e=>{fired=false;const c=e.target.closest&&e.target.closest(SEL);if(!c||ordering||e.button>0)return;sx=e.clientX;sy=e.clientY;fired=false;cancel();t=setTimeout(()=>menu(c),550)});
  document.addEventListener('pointermove',e=>{if(t&&Math.hypot(e.clientX-sx,e.clientY-sy)>10)cancel()});
  ['pointerup','pointercancel','scroll'].forEach(n=>document.addEventListener(n,cancel,true));
  document.addEventListener('contextmenu',e=>{const c=e.target.closest&&e.target.closest(SEL);if(c){e.preventDefault();if(!ordering&&!fired)menu(c)}});
  document.addEventListener('click',e=>{if(fired){fired=false;if(e.target.closest&&e.target.closest(SEL)){e.stopPropagation();e.preventDefault()}}},true);
})();

function project(){
  const p=P(view.id);if(!p)return go({name:'home'});
  const small=isSmall(p);if(small)tab='plans';
  const n=pending(p);let body='';
  if(tab==='tasks'){
    const order={alta:0,mitja:1,baixa:2};
    const ts=[...p.tasks].sort((a,b)=>a.done-b.done||order[a.prio]-order[b.prio]);
    body=(ts.length?ts.map(t=>`<div class="task ${t.done?'done':''}"><button class="chk" onclick="toggleTask('${p.id}','${t.id}')" aria-label="Marcar feta">${t.done?ic('check'):''}</button>
      <div class="t">${esc(t.text)}<div style="margin-top:7px;display:flex;gap:6px;flex-wrap:wrap">${t.prio==='alta'?'<span class="pill red">Alta</span>':t.prio==='mitja'?'<span class="pill">Mitja</span>':'<span class="pill">Baixa</span>'}${t.due?`<span class="pill ${t.due<today()&&!t.done?'red':''}">${ic('calendar')} ${fmt(t.due)}</span>`:''}</div></div>
      <button class="del" onclick="editTask('${p.id}','${t.id}')" aria-label="Editar">${ic('edit')}</button>
      <button class="del" onclick="delTask('${p.id}','${t.id}')" aria-label="Eliminar">${ic('trash')}</button></div>`).join(''):`<div class="empty">Cap tasca pendent. Bon senyal.</div>`)
      +`<button class="fab" onclick="newTask('${p.id}')">${ic('plus')} Nova tasca</button>`;
  }else if(tab==='plans'){
    const ps=pref.psort||'recent',nc=(a,b)=>String(a.name).localeCompare(String(b.name),'ca',{numeric:true,sensitivity:'base'});
    const pl=[...p.plans].sort(ps==='az'?nc:ps==='za'?(a,b)=>nc(b,a):(a,b)=>a.created_at<b.created_at?1:-1),cats=[...new Set(pl.map(x=>x.cat))];
    body=(pl.length?`<div class="sec" style="margin-top:0"><h2>${pl.length} plànol${pl.length===1?'':'s'}</h2><button class="pill" style="font-size:12px;padding:6px 14px" onclick="sortPlans()">Ordenar: ${PSORT[ps]}</button></div>`:'')+(pl.length?cats.map(c=>`<div class="sec" style="margin-top:14px"><h2>${esc(c)}</h2></div>`+pl.filter(x=>x.cat===c).map(x=>{const c2=cached.has(x.id);return`
      <div class="planrow" data-plid="${x.id}" data-ppid="${p.id}"><button class="plan" onclick="openPlan('${x.id}')"><div class="ico">${ic((x.type||'').includes('pdf')?'file-type-pdf':'photo')}</div>
      <div style="flex:1;min-width:0"><div style="word-break:break-word">${esc(x.name)}</div><div class="mu">${esc(x.version||'')}${x.version?' · ':''}${fmt((x.created_at||'').slice(0,10))}${c2?' · <span class="ok">offline</span>':''}</div></div></button>
      ${c2?'':`<button class="sm" onclick="cachePlan('${x.id}')" aria-label="Descarregar per veure sense cobertura">${ic('download')}</button>`}</div>`}).join('')).join(''):`<div class="empty">Cap plànol encara.<br>Puja el primer PDF o imatge.</div>`)
      +(small||!libItems().length?'':`<button class="btn ghost" onclick="libPick('${p.id}')">${ic('download')} Afegir de la biblioteca</button>`)
      +`<button class="fab" onclick="newPlan('${p.id}')">${ic('upload')} Pujar plànol</button>`;
  }else if(tab==='meas'){
    body=measTab(p);
  }else if(tab==='scopes'){
    const sc=[...(p.scopes||[])].sort((a,b)=>(a.planned_start||'9999')<(b.planned_start||'9999')?-1:1);
    body=(sc.length?sc.map(x=>scopeCard(p,x)).join(''):`<div class="empty">Cap àmbit encara.<br>Afegeix zones de l'obra, com "Pou nord", per seguir-ne les dates.</div>`)
      +`<button class="fab" onclick="newScope('${p.id}')">${ic('plus')} Nou àmbit</button>`;
  }else{
    const s=stats(p),cs=[...(p.certs||[])].sort((a,b)=>a.month<b.month?1:-1),ms=[...(p.meetings||[])].sort((a,b)=>a.date<b.date?1:-1);
    const mes=d=>new Date(d+'T00:00').toLocaleDateString('ca-ES',{month:'long',year:'numeric'});
    const subs=[['certs','Certificacions'],['meets','Reunions'],['data','Dades']];
    let inner='';
    if(sub==='certs'){
      inner=(s.exec!==null?`<div class="card"><div class="mu" style="font-size:12px;letter-spacing:.1em;margin-bottom:6px">CERTIFICAT</div><div style="font-size:26px">${eur(s.cert)}<span style="font-size:14px" class="mu"> de ${eur(s.bud)}</span></div><div class="bar" style="margin:10px 0 0"><i style="width:${Math.min(100,s.exec)}%"></i></div></div>`
        :`<div class="mu" style="margin:0 4px 12px">Posa el pressupost d'adjudicació a <b>Dades › Editar obra</b> perquè l'app calculi l'avanç.</div>`)
        +(cs.length?cs.map(c=>`<div class="task" style="align-items:center" data-cid="${c.id}" data-cpid="${p.id}"><div class="t">${mes(c.month)}<div class="mu">${esc(c.note||'')}</div></div><div>${eur(c.amount)}</div></div>`).join(''):`<div class="empty">Cap certificació encara.</div>`)
        +`<button class="fab" onclick="newCert('${p.id}')">${ic('plus')} Afegir certificació</button>`;
    }else if(sub==='meets'){
      inner=(ms.length?ms.map(m=>`<button class="card meet" data-mid="${m.id}" data-mpid="${p.id}" onclick="editMeeting('${p.id}','${m.id}')"><div class="row"><b>${fmt(m.date)} ${m.date.slice(0,4)}</b><span class="mu">${esc(m.title||'')}</span></div>${m.attendees?`<div class="mu" style="margin-top:4px">${ic('users')} ${esc(m.attendees)}</div>`:''}<div class="mnotes">${esc(m.notes||'')}</div></button>`).join(''):`<div class="empty">Cap reunió encara.<br>Apunta aquí les reunions setmanals.</div>`)
        +`<button class="fab" onclick="newMeeting('${p.id}')">${ic('plus')} Nova reunió</button>`;
    }else{
      inner=`<div class="card">${[['Codi',p.code],['Client',p.client],['Estat',p.status],['Inici',p.start_date?fmt(p.start_date)+' '+p.start_date.slice(0,4):'—'],['Final del termini',p.end_date?fmt(p.end_date)+' '+p.end_date.slice(0,4):'—']].map(([k,v])=>`<div class="kv"><span class="mu">${k}</span><span>${esc(v)}</span></div>`).join('')}
      <div class="kv"><span class="mu">Adreça</span><span style="text-align:right">${esc(p.address)||'—'}</span></div></div>
      ${p.address?`<a class="btn" style="display:block;text-align:center;text-decoration:none" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(p.address)}">${ic('route')} Com arribar-hi</a>`:''}
      <button class="btn ghost" onclick="editProject('${p.id}')">${ic('edit')} Editar obra</button>
      <button class="btn ghost" style="color:var(--red)" onclick="delProject('${p.id}')">${ic('trash')} Eliminar obra</button>`;
    }
    body=`<div class="subs">${subs.map(([k,l])=>`<button class="${sub===k?'on':''}" onclick="sub='${k}';render()">${l}</button>`).join('')}</div>`+inner;
  }
  $('#app').innerHTML=`
  <div class="hdr" style="padding-bottom:22px">
    <div class="top"><button class="back" style="margin:0" onclick="go({name:'home'})">${ic('arrow-left')} Obres</button>
    <button class="ibtn" onclick="toggleTheme()" aria-label="Canviar tema">${ic(pref.theme==='dark'?'sun':'moon')}</button></div>
    ${small?'':`<div class="code" style="margin-top:18px">${esc(p.code)}</div>`}<div style="font-size:24px;margin:${small?'18px':'4px'} 0 4px">${esc(p.name)}</div><div class="sub">${small?'Biblioteca · '+p.plans.length+' plànols':esc(p.client)+' · '+n.length+' tasques pendents'}</div></div>
  ${small?'':`<div class="tabs">${([['tasks','Tasques'],['plans','Plànols'],['scopes','Àmbits'],['meas','Medicions'],['mgmt','Gestió']]).map(([k,l])=>`<button class="${tab===k?'on':''}" onclick="tab='${k}';render()">${l}</button>`).join('')}</div>`}
  <div style="margin-top:14px">${body}</div>`;
}

/* ---------- fulls modals ---------- */
function sheet(html){closeSheet();const d=document.createElement('div');d.className='sheet';d.id='sheet';d.innerHTML=`<div><span class="grab"></span>${html}</div>`;d.addEventListener('click',e=>{if(e.target===d)closeSheet()});document.body.appendChild(d);dragClose(d);
  d.querySelector('input:not([type=date]):not([type=time]):not([type=month]):not([type=file]),textarea')?.focus()}
/* tancar el full lliscant el dit cap avall (com a les apps) */
function dragClose(d){const p=d.firstElementChild;let y0=0,dy=0,on=false,t0=0;
  p.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;y0=e.touches[0].clientY;dy=0;on=false;t0=Date.now();p.style.transition='none'},{passive:true});
  p.addEventListener('touchmove',e=>{if(e.touches.length!==1)return;const y=e.touches[0].clientY;
    if(!on){if(y-y0>8&&p.scrollTop<=0){on=true;y0=y;t0=Date.now()}else{if(p.scrollTop>0)y0=y;return}}
    dy=Math.max(0,y-y0);e.preventDefault();p.style.transform=`translateY(${dy}px)`;d.style.background=`rgba(0,0,0,${.55*(1-Math.min(1,dy/500))})`},{passive:false});
  const end=()=>{if(!on)return;on=false;const fast=dy/Math.max(1,Date.now()-t0)>.5;p.style.transition='transform .22s ease';
    if(dy>110||(fast&&dy>35)){p.style.transform='translateY(100%)';d.style.background='rgba(0,0,0,0)';setTimeout(closeSheet,200)}else{p.style.transform='';d.style.background=''}};
  p.addEventListener('touchend',end);p.addEventListener('touchcancel',end)}
function closeSheet(){$('#sheet')?.remove()}
function toast(m){document.querySelectorAll('.toast').forEach(t=>t.remove());const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function ask(msg,fn){sheet(`<h3>${msg}</h3><button class="btn" style="background:var(--redbg);color:var(--red)" id="ok">Eliminar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`);$('#ok').onclick=()=>{closeSheet();fn()}}
function busy(on,txt){const b=$('#sheet .btn:not(.ghost)');if(b){b.disabled=on;if(txt&&on)b.dataset.t=b.textContent,b.textContent=txt;else if(b.dataset.t)b.textContent=b.dataset.t}}

/* ---------- obres ---------- */
function projectForm(p){
  p=p||{code:'',name:'',client:'',address:'',status:'En curs',budget:'',start_date:'',end_date:'',kind:curSect()};
  if(isSmall(p))return`<h3>${p.id?'Editar tipus d\'obra':'Nou tipus d\'obra'}</h3>
  <label>NOM</label><input id="f_name" value="${esc(p.name)}" placeholder="Compensacions, Atirantats, Catenària rígida…">
  <button class="btn" onclick="saveProject('${p.id||''}')">Desar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`;
  return`<h3>${p.id?'Editar obra':'Nova obra'}</h3>
  <label>CODI</label><input id="f_code" value="${esc(p.code)}" placeholder="P080">
  <label>NOM DE L'OBRA</label><input id="f_name" value="${esc(p.name)}" placeholder="Urbanització carrer Major">
  <label>CLIENT</label><input id="f_client" value="${esc(p.client)}" placeholder="Ajuntament">
  <label>ADREÇA</label><input id="f_addr" value="${esc(p.address)}" placeholder="Carrer, població">
  <label>ESTAT</label><select id="f_status">${['Projecte','En curs','Aturada','Acabada'].map(s=>`<option ${p.status===s?'selected':''}>${s}</option>`).join('')}</select>
  <label>PRESSUPOST D'ADJUDICACIÓ (€)</label><input id="f_budget" type="number" inputmode="decimal" min="0" step="0.01" value="${p.budget||''}" placeholder="850000">
  <label>DATA D'INICI</label><input id="f_start" type="date" value="${esc(p.start_date||'')}">
  <label>FINAL DEL TERMINI</label><input id="f_end" type="date" value="${esc(p.end_date||'')}">
  ${!p.id&&libItems().length?`<label>PLÀNOLS DE LA BIBLIOTECA</label><select id="f_lib"><option value="">Cap (obra buida)</option>${libItems().map(l=>`<option value="${l.id}">${esc(l.name)} · ${l.plans.length} plànols</option>`).join('')}</select>`:''}
  <button class="btn" onclick="saveProject('${p.id||''}')">Desar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`}
const newProject=()=>sheet(projectForm());
const editProject=id=>sheet(projectForm(P(id)));
async function saveProject(id){
  const name=$('#f_name').value.trim();if(!name){toast('Posa un nom a l\'obra');return}
  const small=id?isSmall(P(id)):curSect()==='petita';
  const d=small?(id?{name}:{name,kind:'petita',code:'',status:''}):{code:$('#f_code').value.trim()||'P---',name,client:$('#f_client').value.trim(),address:$('#f_addr').value.trim(),status:$('#f_status').value,budget:Math.max(0,parseFloat($('#f_budget').value)||0),start_date:$('#f_start').value||null,end_date:$('#f_end').value||null,...(id?{}:{kind:'gran'})};
  busy(true,'Desant…');
  const r=await guard(async()=>id?ok(await sb.from('projects').update(d).eq('id',id).select().single()):ok(await sb.from('projects').insert(d).select().single()));
  busy(false);if(!r)return;
  if(id)Object.assign(P(id),r);else{projects.unshift({...r,tasks:[],plans:[],certs:[],scopes:[],meetings:[]});view={name:'project',id:r.id};tab='tasks'}
  const lib=(!id&&$('#f_lib'))?$('#f_lib').value:'';
  saveCache();closeSheet();render();
  if(lib)await copyFromLib(r.id,lib);
}
/* biblioteca: copia tots els plànols d'un tipus d'obra a una obra (el fitxer es comparteix, no es duplica) */
const libItems=()=>projects.filter(isSmall).sort((a,b)=>String(a.name).localeCompare(String(b.name),'ca'));
async function copyFromLib(pid,lid){
  const src=P(lid),dst=P(pid);if(!src||!dst)return;
  const have=new Set(dst.plans.map(x=>x.path)),todo=src.plans.filter(x=>!have.has(x.path));
  if(!todo.length){toast('Aquest tipus no té plànols nous per copiar');return}
  busy(true);
  const rows=todo.map(x=>({project_id:pid,name:x.name,cat:x.cat,version:x.version||'',type:x.type,path:x.path,size:x.size}));
  const r=await guard(async()=>ok(await sb.from('plans').insert(rows).select()));
  busy(false);if(!r)return;
  r.forEach(n=>{dst.plans.push(n);const o=todo.find(x=>x.path===n.path);if(o&&cached.has(o.id))fget(o.id).then(b=>{if(b)return fput(n.id,b).then(()=>{cached.add(n.id);render()})}).catch(()=>{})});
  saveCache();render();toast(r.length+(r.length===1?' plànol copiat':' plànols copiats')+' de la biblioteca');
}
function libPick(pid){const L=libItems();if(!L.length){toast('La biblioteca és buida');return}
  sheet(`<h3>Afegir de la biblioteca</h3>${L.map(l=>`<button class="btn ghost" onclick="closeSheet();copyFromLib('${pid}','${l.id}')">${esc(l.name)} · ${l.plans.length} plànols</button>`).join('')}<button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`)}
/* esborrar fitxers només si cap altre plànol (d'una altra obra) els fa servir */
async function removeFiles(paths,{planId,projectId}){
  if(!paths.length)return;
  const {data,error}=await sb.from('plans').select('id,project_id,path').in('path',paths);if(error)throw error;
  const used=new Set((data||[]).filter(r=>planId?r.id!==planId:r.project_id!==projectId).map(r=>r.path));
  const rm=paths.filter(p=>!used.has(p));if(rm.length)ok(await sb.storage.from('plans').remove(rm));
}
function delProject(id){ask('Eliminar aquesta obra i tot el seu contingut?',async()=>{
  const p=P(id);
  const r=await guard(async()=>{await removeFiles(p.plans.map(x=>x.path),{projectId:id});ok(await sb.from('projects').delete().eq('id',id));return true});
  if(!r)return;for(const x of p.plans){await fdel(x.id);cached.delete(x.id)}
  projects=projects.filter(q=>q.id!==id);saveCache();go({name:'home'})})}

/* ---------- ordre i obres fixades ---------- */
IC.pin='<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>';
IC['arrow-up']='<path d="M12 19V5M5 12l7-7 7 7"/>';
IC['arrow-down']='<path d="M12 5v14M19 12l-7 7-7-7"/>';
let ordering=false;
const sortedProjects=()=>projects.filter(p=>(p.kind||'gran')===curSect()).sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0)||(a.position||0)-(b.position||0)||(a.created_at<b.created_at?1:-1));
async function moveProject(id,dir){
  const list=sortedProjects(),i=list.findIndex(p=>p.id===id),j=i+dir;
  if(j<0||j>=list.length||!!list[j].pinned!==!!list[i].pinned)return;
  [list[i],list[j]]=[list[j],list[i]];
  const changed=[];list.forEach((p,k)=>{if(p.position!==k){p.position=k;changed.push(p)}});
  saveCache();render();
  const r=await guard(async()=>{for(const p of changed)ok(await sb.from('projects').update({position:p.position}).eq('id',p.id));return true});
  if(!r)refresh();
}
async function togglePin(id){
  const p=P(id),v=!p.pinned;p.pinned=v;saveCache();render();
  const r=await guard(async()=>ok(await sb.from('projects').update({pinned:v}).eq('id',id).select().single()));
  if(!r){p.pinned=!v;saveCache();render()}
}

/* ---------- àmbits (zones de l'obra amb dates teòriques i reals) ---------- */
const daysBetween=(a,b)=>Math.round((new Date(b+'T00:00')-new Date(a+'T00:00'))/864e5);
function scopeState(x){
  const t=today();
  if(x.actual_end)return{t:'Acabat',c:'lime'};
  if(x.actual_start)return x.planned_end&&x.planned_end<t?{t:'Endarrerit',c:'red'}:{t:'En curs',c:''};
  if(x.planned_start&&x.planned_start<t)return{t:'Hauria d\'haver començat',c:'red'};
  return{t:'Pendent',c:''};
}
function dev(planned,actual){
  if(!planned||!actual)return'';
  const d=daysBetween(planned,actual);
  if(d===0)return' <span class="ok">· a temps</span>';
  return d>0?` <span style="color:var(--red)">· +${d} d</span>`:` <span class="ok">· ${d} d</span>`;
}
const dfmt=d=>d?fmt(d)+' '+d.slice(0,4):'—';
function scopeCard(p,x){
  const st=scopeState(x);
  return`<button class="card" data-sid="${x.id}" data-spid="${p.id}" onclick="editScope('${p.id}','${x.id}')">
    <div class="row"><div class="ttl" style="margin:0">${esc(x.name)}</div><span class="pill ${st.c}">${esc(st.t)}</span></div>
    <div class="sgrid">
      <div><div class="lbl">INICI TEÒRIC</div><div>${dfmt(x.planned_start)}</div></div>
      <div><div class="lbl">INICI REAL</div><div>${dfmt(x.actual_start)}${dev(x.planned_start,x.actual_start)}</div></div>
      <div><div class="lbl">FI TEÒRICA</div><div>${dfmt(x.planned_end)}</div></div>
      <div><div class="lbl">FI REAL</div><div>${dfmt(x.actual_end)}${dev(x.planned_end,x.actual_end)}</div></div>
    </div></button>`;
}
function scopeForm(pid,x){
  x=x||{name:'',planned_start:'',actual_start:'',planned_end:'',actual_end:''};
  return`<h3>${x.id?'Editar àmbit':'Nou àmbit'}</h3>
  <label>NOM</label><input id="s_name" value="${esc(x.name)}" placeholder="Pou nord">
  <div class="dgrid">
  <div><label>INICI TEÒRIC</label><input id="s_ps" type="date" value="${esc(x.planned_start||'')}"></div>
  <div><label>INICI REAL</label><input id="s_as" type="date" value="${esc(x.actual_start||'')}"></div>
  <div><label>FI TEÒRICA</label><input id="s_pe" type="date" value="${esc(x.planned_end||'')}"></div>
  <div><label>FI REAL</label><input id="s_ae" type="date" value="${esc(x.actual_end||'')}"></div>
  </div>
  <button class="btn" onclick="saveScope('${pid}','${x.id||''}')">Desar</button>
  ${x.id?`<button class="btn ghost" style="color:var(--red)" onclick="delScope('${pid}','${x.id}')">${ic('trash')} Eliminar àmbit</button>`:''}
  <button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`;
}
const newScope=pid=>sheet(scopeForm(pid));
const editScope=(pid,id)=>sheet(scopeForm(pid,P(pid).scopes.find(x=>x.id===id)));
async function saveScope(pid,id){
  const name=$('#s_name').value.trim();if(!name){toast('Posa un nom a l\'àmbit');return}
  const d={name,planned_start:$('#s_ps').value||null,actual_start:$('#s_as').value||null,planned_end:$('#s_pe').value||null,actual_end:$('#s_ae').value||null};
  busy(true,'Desant…');
  const r=await guard(async()=>id?ok(await sb.from('scopes').update(d).eq('id',id).select().single()):ok(await sb.from('scopes').insert({...d,project_id:pid}).select().single()));
  busy(false);if(!r)return;
  const p=P(pid);p.scopes=p.scopes||[];
  if(id)Object.assign(p.scopes.find(x=>x.id===id),r);else p.scopes.push(r);
  saveCache();closeSheet();render();
}
function delScope(pid,id){closeSheet();ask('Eliminar aquest àmbit?',async()=>{
  const r=await guard(async()=>{ok(await sb.from('scopes').delete().eq('id',id));return true});
  if(!r)return;P(pid).scopes=P(pid).scopes.filter(x=>x.id!==id);saveCache();render()})}

/* ---------- ordenar plànols ---------- */
const PSORT={recent:'Més recents',az:'Nom A–Z',za:'Nom Z–A'};
function sortPlans(){const c=pref.psort||'recent';sheet(`<h3>Ordenar plànols</h3>${Object.entries(PSORT).map(([k,l])=>`<button class="btn ${c===k?'':'ghost'}" onclick="setPSort('${k}')">${l}</button>`).join('')}<button class="btn ghost" onclick="closeSheet()">Tancar</button>`)}
function setPSort(k){pref.psort=k;savePref();closeSheet();render()}
/* ---------- medicions ---------- */
const MU={m2:'m²',m3:'m³',m:'m',ut:'ut'};
const MSORT={recent:'Més recents',az:'Nom A–Z',za:'Nom Z–A',big:'Quantitat ↓'};
const mnum=v=>{const n=parseFloat(String(v==null?'':v).replace(',','.'));return isNaN(n)?0:n};
const mq=n=>new Intl.NumberFormat('ca-ES',{maximumFractionDigits:2}).format(+n||0);
function mcalc(x){const w=+x.width||0,l=+x.length||0,d=+x.depth||0,q=(x.qty==null?1:+x.qty)||0;return{m2:w*l*q,m3:w*l*d*q,m:l*q,ut:q}}
const mval=x=>mcalc(x)[x.unit]||0;
const chaps=p=>Array.isArray(p.meas_chapters)?p.meas_chapters:[];
const mcmp=(a,b)=>String(a.name).localeCompare(String(b.name),'ca',{numeric:true,sensitivity:'base'});
function msum(list){const t={m2:0,m3:0,m:0,ut:0};list.forEach(x=>{if(t[x.unit]!==undefined)t[x.unit]+=mval(x)});return t}
const mtxt=t=>Object.keys(MU).filter(u=>t[u]>0).map(u=>`${mq(t[u])} ${MU[u]}`).join(' · ')||'—';
function mdims(x){const p=[];
  if(x.unit==='m2'||x.unit==='m3'){[x.width,x.length,x.depth].forEach(v=>{if(+v>0)p.push(mq(v))});if(p.length)p[p.length-1]+=' m'}
  else if(x.unit==='m'&&+x.length>0&&(+x.qty||1)!==1)p.push(mq(x.length)+' m');
  if(x.unit==='ut')return'';
  let s=p.join(' × ');if((+x.qty||1)!==1)s+=(s?' · ':'')+'× '+mq(x.qty)+' ut';return s}
function measTab(p){
  const ms=p.meas||[],ch=chaps(p),srt=pref.msort||'recent';
  const cmp=srt==='az'?mcmp:srt==='za'?(a,b)=>mcmp(b,a):srt==='big'?(a,b)=>mval(b)-mval(a):(a,b)=>a.created_at<b.created_at?1:-1;
  const extra=[...new Set(ms.map(x=>x.chapter||'').filter(c=>c&&!ch.includes(c)))];
  const groups=[...ch.map((n,i)=>({n,i})),...extra.map(n=>({n,i:-1}))];
  const row=x=>`<button class="card mrow" data-xid="${x.id}" data-xpid="${p.id}" onclick="editMeas('${p.id}','${x.id}')">
    <div class="row"><b style="word-break:break-word">${esc(x.name)}</b><span class="mval">${mq(mval(x))} ${MU[x.unit]||''}</span></div>
    ${mdims(x)?`<div class="mu" style="margin-top:4px">${esc(mdims(x))}</div>`:''}${x.note?`<div class="mu" style="margin-top:4px;opacity:.85">${esc(x.note)}</div>`:''}</button>`;
  const open=k=>mOpen.has(p.id+'|'+k);
  const grp=(title,list,i,k)=>{const o=open(k);return`<div class="chead ${o?'open':''}" ${i>=0?`data-chap="${i}" data-chpid="${p.id}"`:''} onclick="togM('${p.id}','${k}')"><div class="chmain"><span class="chname">${esc(title)}</span><span class="chmeta">${list.length} ${list.length===1?'element':'elements'}${list.length?' · '+mtxt(msum(list)):''}</span></div><span class="chev">${ic('chev')}</span></div>`
    +(o?(list.length?`<div class="chbody">${[...list].sort(cmp).map(row).join('')}</div>`:`<div class="mu chbody" style="font-size:13px;padding:2px 6px 10px">Cap element en aquest capítol.</div>`):'')};
  let html='';
  if(ms.length>1)html+=`<div class="sec" style="margin-top:4px"><h2>${ms.length} elements</h2><button class="pill" style="font-size:12px;padding:6px 14px" onclick="sortMeas()">Ordenar: ${MSORT[srt]}</button></div>`;
  if(!ms.length&&!groups.length)html+=`<div class="empty">Cap medició encara.<br>Afegeix un capítol i, a dins, les mesures dels elements.</div>`;
  html+=groups.map((g,n)=>grp(g.n,ms.filter(x=>(x.chapter||'')===g.n),g.i,g.i>=0?'c'+g.i:'e'+n)).join('');
  const loose=ms.filter(x=>!(x.chapter||''));
  if(loose.length)html+=grp(groups.length?'Sense capítol':'Elements',loose,-1,'l');
  return html+`<div class="mu" style="text-align:center;font-size:12px;margin:14px 0 0">Mantén premut un capítol o un element per editar-lo o eliminar-lo</div><button class="btn ghost" onclick="newChapter('${p.id}')">${ic('plus')} Afegir capítol</button><button class="fab" onclick="newMeas('${p.id}')">${ic('plus')} Nova medició</button>`}
const mOpen=new Set();
IC.chev='<path d="m6 9 6 6 6-6"/>';
function togM(pid,k){const key=pid+'|'+k;if(mOpen.has(key))mOpen.delete(key);else mOpen.add(key);render()}
function sortMeas(){const c=pref.msort||'recent';sheet(`<h3>Ordenar medicions</h3>${Object.entries(MSORT).map(([k,l])=>`<button class="btn ${c===k?'':'ghost'}" onclick="setMSort('${k}')">${l}</button>`).join('')}<button class="btn ghost" onclick="closeSheet()">Tancar</button>`)}
function setMSort(k){pref.msort=k;savePref();closeSheet();render()}
let mUnit='m3';
function measForm(pid,x){const p=P(pid);x=x||{unit:'m3',qty:1,chapter:''};mUnit=x.unit||'m3';
  const names=[...chaps(p),...[...new Set((p.meas||[]).map(y=>y.chapter||'').filter(c=>c&&!chaps(p).includes(c)))]];
  const v=n=>n==null?'':String(n).replace('.',',');
  return`<h3>${x.id?'Editar medició':'Nova medició'}</h3>
  <label style="margin-top:0">ELEMENT</label><input id="x_name" value="${esc(x.name||'')}" placeholder="Sabata S-3, solera pou nord…">
  <label>CAPÍTOL</label><select id="x_ch"><option value="">Sense capítol</option>${names.map(n=>`<option value="${esc(n)}" ${x.chapter===n?'selected':''}>${esc(n)}</option>`).join('')}</select>
  <label>COMPTAR EN</label><div class="subs" id="x_units" style="margin:0 0 6px">${Object.entries(MU).map(([k,l])=>`<button type="button" data-u="${k}" class="${mUnit===k?'on':''}" onclick="setMU('${k}')">${l}</button>`).join('')}</div>
  <div class="g3" id="x_dims"><div id="d_w"><label>AMPLE (m)</label><input id="x_w" type="text" inputmode="decimal" value="${v(x.width)}" oninput="mPrev()"></div>
  <div id="d_l"><label>LLARG (m)</label><input id="x_l" type="text" inputmode="decimal" value="${v(x.length)}" oninput="mPrev()"></div>
  <div id="d_d"><label>PROFUND. (m)</label><input id="x_d" type="text" inputmode="decimal" value="${v(x.depth)}" oninput="mPrev()"></div></div>
  <label>UNITATS IGUALS</label><input id="x_q" type="text" inputmode="decimal" value="${v(x.qty==null?1:x.qty)}" oninput="mPrev()">
  <div class="card" id="x_prev" style="margin-top:14px"></div>
  <label>NOTA (opcional)</label><input id="x_note" value="${esc(x.note||'')}" placeholder="Armat, observacions…">
  <button class="btn" onclick="saveMeas('${pid}','${x.id||''}')">${x.id?'Desar':'Afegir'}</button>
  <button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`}
function newMeas(pid){sheet(measForm(pid));setMU(mUnit)}
function editMeas(pid,id){sheet(measForm(pid,P(pid).meas.find(x=>x.id===id)));setMU(mUnit)}
function setMU(u){mUnit=u;document.querySelectorAll('#x_units button').forEach(b=>b.classList.toggle('on',b.dataset.u===u));
  const vis={w:u==='m2'||u==='m3',l:u!=='ut',d:u==='m2'||u==='m3'};
  ['w','l','d'].forEach(k=>{const e=document.getElementById('d_'+k);if(e)e.style.display=vis[k]?'':'none'});
  const g=document.getElementById('x_dims');
  if(g){g.style.display=u==='ut'?'none':'';g.style.gridTemplateColumns=u==='m'?'1fr':'repeat(3,1fr)'}
  mPrev()}
const mvals=()=>({width:mnum($('#x_w').value),length:mnum($('#x_l').value),depth:mnum($('#x_d').value),qty:$('#x_q').value.trim()===''?1:mnum($('#x_q').value)});
function mPrev(){const e=document.getElementById('x_prev');if(!e)return;const x={...mvals(),unit:mUnit},c=mcalc(x);
  const lines=(mUnit==='m2'||mUnit==='m3')?[['Superfície',c.m2,'m²'],['Volum',c.m3,'m³']]:[];
  e.innerHTML=lines.map(([l,v,u])=>`<div class="kv"><span class="mu">${l}</span><span>${mq(v)} ${u}</span></div>`).join('')
    +`<div class="kv"><span class="mu">TOTAL${mUnit==='m2'||mUnit==='m3'?' (en '+MU[mUnit]+')':''}</span><b style="font-size:18px">${mq(c[mUnit])} ${MU[mUnit]}</b></div>`}
async function saveMeas(pid,id){
  const name=$('#x_name').value.trim();if(!name){toast("Posa el nom de l'element");return}
  const v=mvals(),u=mUnit;
  const okd=u==='m2'?v.width>0&&v.length>0:u==='m3'?v.width>0&&v.length>0&&v.depth>0:u==='m'?v.length>0:v.qty>0;
  if(!okd){toast(u==='m3'?'Per a m³ calen ample, llarg i profunditat':u==='m2'?'Per a m² calen ample i llarg':u==='m'?'Escriu la llargada':'Escriu les unitats');return}
  if(!(v.qty>0)){toast('Les unitats han de ser més de 0');return}
  const row={name,chapter:$('#x_ch').value,unit:u,width:v.width||null,length:v.length||null,depth:v.depth||null,qty:v.qty,note:$('#x_note').value.trim()};
  busy(true,'Desant…');
  const r=await guard(async()=>id?ok(await sb.from('measurements').update(row).eq('id',id).select().single()):ok(await sb.from('measurements').insert({...row,project_id:pid}).select().single()));
  busy(false);if(!r)return;const p=P(pid);p.meas=p.meas||[];
  if(id)Object.assign(p.meas.find(x=>x.id===id),r);else p.meas.push(r);
  const ci=chaps(p).indexOf(row.chapter);mOpen.add(pid+'|'+(row.chapter===''?'l':ci>=0?'c'+ci:'l')); /* obre el capítol on s'ha desat */
  saveCache();closeSheet();render()}
function delMeas(pid,id){ask('Eliminar aquest element?',async()=>{
  const r=await guard(async()=>{ok(await sb.from('measurements').delete().eq('id',id));return true});
  if(!r)return;P(pid).meas=P(pid).meas.filter(x=>x.id!==id);saveCache();render()})}
/* capítols */
function chapForm(pid,i){const old=i>=0?chaps(P(pid))[i]:'';
  sheet(`<h3>${i>=0?'Canviar nom del capítol':'Nou capítol'}</h3><label style="margin-top:0">NOM</label><input id="ch_name" value="${esc(old)}" placeholder="Excavació, Formigó, Fonamentació…">
  <button class="btn" onclick="saveChap('${pid}',${i})">Desar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`)}
const newChapter=pid=>chapForm(pid,-1);
const renameChapter=(pid,i)=>chapForm(pid,i);
async function saveChap(pid,i){
  const n=$('#ch_name').value.trim(),p=P(pid),cs=[...chaps(p)];if(!n){toast('Posa un nom al capítol');return}
  if(cs.some((c,k)=>k!==i&&c.toLowerCase()===n.toLowerCase())){toast('Ja existeix un capítol amb aquest nom');return}
  const old=i>=0?cs[i]:null;if(i>=0)cs[i]=n;else cs.push(n);
  busy(true,'Desant…');
  const r=await guard(async()=>{ok(await sb.from('projects').update({meas_chapters:cs}).eq('id',pid));
    if(old!==null&&old!==n)ok(await sb.from('measurements').update({chapter:n}).eq('project_id',pid).eq('chapter',old));return true});
  busy(false);if(!r)return;p.meas_chapters=cs;if(old!==null&&old!==n)(p.meas||[]).forEach(x=>{if(x.chapter===old)x.chapter=n});
  saveCache();closeSheet();render()}
function delChapter(pid,i){const p=P(pid),old=chaps(p)[i];ask(`Eliminar el capítol «${old}»? Els seus elements passaran a «Sense capítol».`,async()=>{
  const cs=chaps(p).filter((c,k)=>k!==i);
  const r=await guard(async()=>{ok(await sb.from('measurements').update({chapter:''}).eq('project_id',pid).eq('chapter',old));ok(await sb.from('projects').update({meas_chapters:cs}).eq('id',pid));return true});
  if(!r)return;(p.meas||[]).forEach(x=>{if(x.chapter===old)x.chapter=''});p.meas_chapters=cs;
  [...mOpen].forEach(k=>{if(k.startsWith(pid+'|c'))mOpen.delete(k)});saveCache();render()})}

/* ---------- certificacions ---------- */
const newCert=pid=>certForm(pid);
const editCert=(pid,id)=>certForm(pid,P(pid).certs.find(c=>c.id===id));
function certForm(pid,c){c=c||{month:today().slice(0,7),amount:'',note:''};sheet(`<h3>${c.id?'Editar certificació':'Nova certificació'}</h3>
  <label>MES</label><input id="c_m" type="month" value="${esc(String(c.month).slice(0,7))}">
  <label>IMPORT CERTIFICAT AQUEST MES (€, NO L'ACUMULAT)</label><input id="c_a" type="number" inputmode="decimal" min="0" step="0.01" placeholder="45000" value="${esc(c.amount)}">
  <label>NOTA (opcional)</label><input id="c_n" value="${esc(c.note||'')}" placeholder="Certificació núm. 3">
  <button class="btn" onclick="saveCert('${pid}','${c.id||''}')">${c.id?'Desar':'Afegir'}</button>
  ${c.id?`<button class="btn ghost" style="color:var(--red)" onclick="closeSheet();delCert('${pid}','${c.id}')">${ic('trash')} Eliminar certificació</button>`:''}<button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`)}
async function saveCert(pid,id){
  const m=$('#c_m').value,a=parseFloat($('#c_a').value);
  if(!m){toast('Tria el mes');return}if(isNaN(a)||a<0){toast('Escriu l\'import');return}
  busy(true,'Desant…');
  const row={month:m+'-01',amount:a,note:$('#c_n').value.trim()};
  const r=await guard(async()=>id?ok(await sb.from('certifications').update(row).eq('id',id).select().single()):ok(await sb.from('certifications').insert({...row,project_id:pid}).select().single()));
  busy(false);if(!r)return;const p=P(pid);p.certs=p.certs||[];
  if(id)Object.assign(p.certs.find(c=>c.id===id),r);else p.certs.push(r);
  saveCache();closeSheet();render()}
function delCert(pid,id){ask('Eliminar aquesta certificació?',async()=>{
  const r=await guard(async()=>{ok(await sb.from('certifications').delete().eq('id',id));return true});
  if(!r)return;P(pid).certs=P(pid).certs.filter(c=>c.id!==id);saveCache();render()})}

/* ---------- reunions ---------- */
function meetingForm(pid,m){
  m=m||{date:today(),title:'',attendees:'',notes:''};
  return`<h3>${m.id?'Editar reunió':'Nova reunió'}</h3>
  <label>DATA</label><input id="m_d" type="date" value="${esc(m.date)}">
  <label>TÍTOL (opcional)</label><input id="m_t" value="${esc(m.title||'')}" placeholder="Reunió setmanal d'obra">
  <label>ASSISTENTS</label><input id="m_a" value="${esc(m.attendees||'')}" placeholder="Ricard, DF, contractista…">
  <label>NOTES I ACORDS</label><textarea id="m_n" rows="7" placeholder="Temes tractats, acords, pendents…">${esc(m.notes||'')}</textarea>
  <button class="btn" onclick="saveMeeting('${pid}','${m.id||''}')">Desar</button>
  ${m.id?`<button class="btn ghost" style="color:var(--red)" onclick="delMeeting('${pid}','${m.id}')">${ic('trash')} Eliminar reunió</button>`:''}
  <button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`;
}
const newMeeting=pid=>sheet(meetingForm(pid));
const editMeeting=(pid,id)=>sheet(meetingForm(pid,P(pid).meetings.find(m=>m.id===id)));
async function saveMeeting(pid,id){
  const d=$('#m_d').value;if(!d){toast('Tria la data');return}
  const row={date:d,title:$('#m_t').value.trim(),attendees:$('#m_a').value.trim(),notes:$('#m_n').value.trim()};
  busy(true,'Desant…');
  const r=await guard(async()=>id?ok(await sb.from('meetings').update(row).eq('id',id).select().single()):ok(await sb.from('meetings').insert({...row,project_id:pid}).select().single()));
  busy(false);if(!r)return;const p=P(pid);p.meetings=p.meetings||[];
  if(id)Object.assign(p.meetings.find(m=>m.id===id),r);else p.meetings.push(r);
  saveCache();closeSheet();render()}
function delMeeting(pid,id){ask('Eliminar aquesta reunió?',async()=>{
  const r=await guard(async()=>{ok(await sb.from('meetings').delete().eq('id',id));return true});
  if(!r)return;P(pid).meetings=P(pid).meetings.filter(m=>m.id!==id);saveCache();render()})}

/* ---------- tasques ---------- */
function taskForm(pid,t){
  t=t||{text:'',prio:'mitja',due:''};
  return`<h3>${t.id?'Editar tasca':'Nova tasca'}</h3><label>QUÈ HAS DE FER?</label><textarea id="t_text" rows="3" placeholder="Revisar armat del mur">${esc(t.text)}</textarea>
  <label>PRIORITAT</label><select id="t_prio">${[['alta','Alta'],['mitja','Mitja'],['baixa','Baixa']].map(([v,l])=>`<option value="${v}" ${t.prio===v?'selected':''}>${l}</option>`).join('')}</select>
  <label>DATA LÍMIT (opcional)</label><input id="t_due" type="date" value="${esc(t.due||'')}">
  <button class="btn" onclick="saveTask('${pid}','${t.id||''}')">${t.id?'Desar':'Afegir tasca'}</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`}
const newTask=pid=>sheet(taskForm(pid));
const editTask=(pid,id)=>sheet(taskForm(pid,P(pid).tasks.find(t=>t.id===id)));
async function saveTask(pid,id){const text=$('#t_text').value.trim();if(!text){toast('Escriu la tasca');return}
  const row={text,prio:$('#t_prio').value,due:$('#t_due').value||null};
  busy(true,'Desant…');
  const r=await guard(async()=>id?ok(await sb.from('tasks').update(row).eq('id',id).select().single()):ok(await sb.from('tasks').insert({...row,project_id:pid}).select().single()));
  busy(false);if(!r)return;
  if(id)Object.assign(P(pid).tasks.find(t=>t.id===id),r);else P(pid).tasks.push(r);
  saveCache();closeSheet();render()}
async function toggleTask(pid,id){const t=P(pid).tasks.find(t=>t.id===id),v=!t.done;t.done=v;render();
  const r=await guard(async()=>ok(await sb.from('tasks').update({done:v}).eq('id',id).select().single()));
  if(!r){t.done=!v;render()}else saveCache()}
async function delTask(pid,id){const r=await guard(async()=>{ok(await sb.from('tasks').delete().eq('id',id));return true});
  if(!r)return;P(pid).tasks=P(pid).tasks.filter(t=>t.id!==id);saveCache();render()}

/* ---------- plànols ---------- */
function newPlan(pid){sheet(`<h3>Pujar plànol</h3><label>FITXER (PDF O IMATGE)</label><input id="p_file" type="file" accept="application/pdf,image/*">
  <label>NOM (opcional)</label><input id="p_name" placeholder="Planta general">
  <label>CATEGORIA</label><select id="p_cat">${['Traçat i planta','Drenatge','Estructures','Serveis afectats','Senyalització','Detalls','Altres'].map(c=>`<option>${c}</option>`).join('')}</select>
  <label>VERSIÓ</label><input id="p_ver" placeholder="Rev. B">
  <button class="btn" onclick="savePlan('${pid}')">Pujar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`)}
async function savePlan(pid){
  const f=$('#p_file').files[0];if(!f){toast('Tria un fitxer');return}
  const id=crypto.randomUUID(),ext=(f.name.split('.').pop()||'pdf').toLowerCase().replace(/[^a-z0-9]/g,'')||'pdf',path=`${user.id}/${id}.${ext}`,type=f.type||(ext==='pdf'?'application/pdf':'application/octet-stream');
  busy(true,'Pujant…');
  const r=await guard(async()=>{
    ok(await sb.storage.from('plans').upload(path,f,{contentType:type,upsert:false}));
    try{return ok(await sb.from('plans').insert({id,project_id:pid,name:$('#p_name').value.trim()||f.name.replace(/\.[^.]+$/,''),cat:$('#p_cat').value,version:$('#p_ver').value.trim(),type,path,size:f.size}).select().single())}
    catch(e){await sb.storage.from('plans').remove([path]);throw e}
  });
  busy(false);if(!r)return;
  try{await fput(id,f);cached.add(id)}catch(e){}
  P(pid).plans.push(r);saveCache();closeSheet();render();toast('Plànol pujat i desat per veure sense cobertura')}
const PCATS=['Traçat i planta','Drenatge','Estructures','Serveis afectats','Senyalització','Detalls','Altres'];
function editPlan(pid,id){const x=P(pid).plans.find(p=>p.id===id),cats=PCATS.includes(x.cat)?PCATS:[...PCATS,x.cat];
  sheet(`<h3>Editar plànol</h3>
  <label>NOM</label><input id="e_name" value="${esc(x.name)}">
  <label>CATEGORIA</label><select id="e_cat">${cats.map(c=>`<option ${x.cat===c?'selected':''}>${esc(c)}</option>`).join('')}</select>
  <label>VERSIÓ</label><input id="e_ver" value="${esc(x.version||'')}" placeholder="Rev. B">
  <button class="btn" onclick="updatePlan('${pid}','${id}')">Desar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`)}
async function updatePlan(pid,id){const name=$('#e_name').value.trim();if(!name){toast('Posa un nom');return}
  const row={name,cat:$('#e_cat').value,version:$('#e_ver').value.trim()};busy(true,'Desant…');
  const r=await guard(async()=>ok(await sb.from('plans').update(row).eq('id',id).select().single()));
  busy(false);if(!r)return;Object.assign(P(pid).plans.find(p=>p.id===id),r);saveCache();closeSheet();render()}
function delPlan(pid,id){ask('Eliminar aquest plànol?',async()=>{
  const x=P(pid).plans.find(p=>p.id===id);
  const r=await guard(async()=>{await removeFiles([x.path],{planId:id});ok(await sb.from('plans').delete().eq('id',id));return true});
  if(!r)return;await fdel(id);cached.delete(id);P(pid).plans=P(pid).plans.filter(p=>p.id!==id);saveCache();render()})}
function findPlan(id){for(const p of projects){const x=p.plans.find(q=>q.id===id);if(x)return x}}
async function planBlob(x){let b=await fget(x.id);if(b)return b;
  const d=ok(await sb.storage.from('plans').download(x.path));await fput(x.id,d);cached.add(x.id);return d}
async function cachePlan(id){const x=findPlan(id);toast('Descarregant…');const r=await guard(()=>planBlob(x));if(r){render();toast('Plànol disponible sense cobertura')}}

/* visor: PDF amb pdf.js. Base nítida a mida pantalla + capa de detall a resolució completa només de la part visible */
let pdfDoc=null,zoom=1,curUrl=null,dtok=0,dtasks=[];
async function openPlan(id){
  const x=findPlan(id);zoom=1;pdfDoc=null;
  const v=document.createElement('div');v.className='viewer';v.id='viewer';
  v.innerHTML=`<div class="vb"><button class="back" style="margin:0" onclick="closeViewer()">${ic('arrow-left')} Tornar</button><span class="vt">${esc(x.name)}</span><div style="display:flex;gap:6px"><button class="ibtn" onclick="applyZoom(zoom/1.5)" aria-label="Allunyar">−</button><button class="ibtn" onclick="applyZoom(zoom*1.5)" aria-label="Apropar">+</button></div></div>
  <div class="vc" id="vc"><div class="vload">Carregant plànol…</div></div>`;
  document.body.appendChild(v);const vc=$('#vc');pinchSetup(vc);
  vc.addEventListener('scroll',()=>{clearTimeout(vc._d);vc._d=setTimeout(renderDetail,140)},{passive:true});
  let b;try{b=await planBlob(x)}catch(e){vc.innerHTML=`<div class="vload">${navigator.onLine?'No s\'ha pogut descarregar el plànol.':'Sense connexió i aquest plànol no està descarregat.'}</div>`;return}
  if((x.type||'').includes('pdf')){
    try{pdfjsLib.GlobalWorkerOptions.workerSrc='vendor/pdf.worker.min.js';pdfDoc=await pdfjsLib.getDocument({data:await b.arrayBuffer()}).promise;await buildPdf()}
    catch(e){vc.innerHTML=`<div class="vload">No s'ha pogut mostrar aquest PDF.</div>`}
  }else{curUrl=URL.createObjectURL(b);vc.innerHTML=`<div id="vw"><img id="vimg" src="${curUrl}" alt="${esc(x.name)}" style="display:block;width:100%"></div>`}
  render();
}
async function buildPdf(){
  const vc=$('#vc');if(!vc||!pdfDoc)return;
  const dpr=Math.min(window.devicePixelRatio||1,3),w=vc.clientWidth,wrap=document.createElement('div');wrap.id='vw';wrap.style.width=w+'px';
  const pages=[];
  for(let i=1;i<=pdfDoc.numPages;i++){
    const pg=await pdfDoc.getPage(i),vp0=pg.getViewport({scale:1}),pw=document.createElement('div');
    pw.className='pgw';pw.dataset.n=i;pw.dataset.ar=vp0.height/vp0.width;pw.style.width=w+'px';pw.style.height=(w*vp0.height/vp0.width)+'px';
    wrap.appendChild(pw);pages.push([pg,vp0,pw]);
  }
  vc.innerHTML='';vc.appendChild(wrap);
  for(const[pg,vp0,pw]of pages){
    let s=(w/vp0.width)*dpr;if(vp0.width*vp0.height*s*s>3.5e6)s=Math.sqrt(3.5e6/(vp0.width*vp0.height));
    const vp=pg.getViewport({scale:s}),c=document.createElement('canvas');c.width=Math.floor(vp.width);c.height=Math.floor(vp.height);
    await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
    if(!$('#vc'))return;pw.insertBefore(c,pw.firstChild);
    if(pw===pages[0][2])renderDetail();
  }
  renderDetail();
}
async function renderDetail(){
  const vc=$('#vc');if(!vc||!pdfDoc)return;const tok=++dtok;
  dtasks.forEach(t=>{try{t.cancel()}catch(e){}});dtasks=[];
  const dpr=Math.min(window.devicePixelRatio||1,3),vr=vc.getBoundingClientRect();
  for(const pw of vc.querySelectorAll('.pgw')){
    const r=pw.getBoundingClientRect(),x0=Math.max(vr.left,r.left),x1=Math.min(vr.right,r.right),y0=Math.max(vr.top,r.top),y1=Math.min(vr.bottom,r.bottom);
    if(x1-x0<2||y1-y0<2)continue;
    const pg=await pdfDoc.getPage(+pw.dataset.n);if(tok!==dtok)return;
    const vp0=pg.getViewport({scale:1}),lx=x0-r.left,ly=y0-r.top,rw=x1-x0,rh=y1-y0;
    let d=dpr;if(rw*rh*d*d>9e6)d=Math.sqrt(9e6/(rw*rh));
    const s=(r.width/vp0.width)*d,c=document.createElement('canvas');c.width=Math.ceil(rw*d);c.height=Math.ceil(rh*d);
    c.className='det';c.style.cssText=`left:${lx}px;top:${ly}px;width:${rw}px;height:${rh}px`;
    const task=pg.render({canvasContext:c.getContext('2d'),viewport:pg.getViewport({scale:s,offsetX:-lx*d,offsetY:-ly*d})});dtasks.push(task);
    try{await task.promise}catch(e){return}
    if(tok!==dtok)return;pw.querySelectorAll('.det').forEach(o=>o.remove());pw.appendChild(c);
  }
}
/* canvia el zoom a l'instant (sense tornar a dibuixar) mantenint el punt (cx,cy) del contingut sota (mx,my) de la pantalla */
function applyZoom(nz,mx,my,cx,cy){
  const vc=$('#vc'),vw=$('#vw');if(!vc||!vw)return;nz=Math.max(1,Math.min(8,nz));
  if(mx==null){mx=vc.clientWidth/2;my=vc.clientHeight/2}
  if(cx==null){cx=vc.scrollLeft+mx;cy=vc.scrollTop+my}
  const r=nz/zoom,w=vc.clientWidth*nz;zoom=nz;
  vw.style.transform='';vw.style.width=w+'px';
  vw.querySelectorAll('.pgw').forEach(p=>{p.style.width=w+'px';p.style.height=(w*p.dataset.ar)+'px';p.querySelectorAll('.det').forEach(o=>o.remove())});
  const i=$('#vimg');if(i)i.style.width=w+'px';
  vc.scrollLeft=cx*r-mx;vc.scrollTop=cy*r-my;
  clearTimeout(vc._d);vc._d=setTimeout(renderDetail,80);
}
/* pinça amb dos dits: vista prèvia amb transform al punt entre els dits i, en deixar anar, es fixa al mateix punt */
function pinchSetup(vc){
  let d0=0,k=1,cx=0,cy=0,sx=0,sy=0,mx=0,my=0;
  const dist=t=>Math.hypot(t[0].clientX-t[1].clientX,t[0].clientY-t[1].clientY);
  const mid=t=>{const r=vc.getBoundingClientRect();return[(t[0].clientX+t[1].clientX)/2-r.left,(t[0].clientY+t[1].clientY)/2-r.top]};
  vc.addEventListener('touchstart',e=>{if(e.touches.length===2){d0=dist(e.touches);k=1;[sx,sy]=mid(e.touches);mx=sx;my=sy;cx=vc.scrollLeft+sx;cy=vc.scrollTop+sy;
    const w=$('#vw');if(w){w.style.transformOrigin=`${cx}px ${cy}px`;w.style.willChange='transform'}}},{passive:true});
  vc.addEventListener('touchmove',e=>{
    if(e.touches.length===2&&d0){e.preventDefault();k=Math.max(1/zoom,Math.min(8/zoom,dist(e.touches)/d0));[mx,my]=mid(e.touches);
      const w=$('#vw');if(w)w.style.transform=`translate(${mx-sx}px,${my-sy}px) scale(${k})`}
  },{passive:false});
  const end=e=>{if(d0&&e.touches.length<2){const nz=zoom*k;d0=0;const w=$('#vw');if(w)w.style.willChange='';
      if(Math.abs(k-1)>.03)applyZoom(nz,mx,my,cx,cy);else if(w)w.style.transform='';k=1}};
  vc.addEventListener('touchend',end);vc.addEventListener('touchcancel',end);
}
function closeViewer(){$('#viewer')?.remove();pdfDoc=null;curUrl&&URL.revokeObjectURL(curUrl);curUrl=null}

const STYLES=[['default','Per defecte','Fosc, turquesa i llima','linear-gradient(135deg,#00A0B0,#A3CB3C)'],['entasi','ENTASI verd','Degradat de la marca','linear-gradient(135deg,#00A0B0,#4DB88A 55%,#A3CB3C)'],['midnight','Mitjanit','Blau nit i violeta','linear-gradient(135deg,#5B8CFF,#B06BFF)'],['obra','Obra','Carbó i groc de seguretat','repeating-linear-gradient(135deg,#FFB400 0 10px,#1C1C1C 10px 20px)'],['minimal','Minimal','Pla, net i sobri','linear-gradient(90deg,#1D1D1D 50%,#00A0B0 50%)'],['glass','Cristall','Vidre sobre colors','linear-gradient(135deg,rgba(0,160,176,.85),rgba(120,80,255,.75),rgba(163,203,60,.85))']];
IC.settings='<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>';
function setStyle(k){pref.style=k;savePref();applyTheme();document.querySelectorAll('.stl').forEach(b=>b.classList.toggle('on',b.dataset.k===k));render()}
function setMode(m){pref.theme=m;savePref();applyTheme();document.querySelectorAll('.mode button').forEach(b=>b.classList.toggle('on',b.dataset.m===m));render()}
/* ---------- compte i avisos del matí ---------- */
function openSettings(){const n=pref.notif,cs=pref.style||'default';sheet(`<h3>Ajustos</h3>
  <label style="margin-top:0">APARENÇA</label>
  <div class="styles">${STYLES.map(([k,t,d,g])=>`<button class="stl ${cs===k?'on':''}" data-k="${k}" onclick="setStyle('${k}')"><i style="background:${g}"></i><b>${t}</b><span>${d}</span></button>`).join('')}</div>
  <label>MODE</label><div class="subs mode" style="margin:0 0 6px"><button data-m="dark" class="${pref.theme==='dark'?'on':''}" onclick="setMode('dark')">${ic('moon')} Fosc</button><button data-m="light" class="${pref.theme==='light'?'on':''}" onclick="setMode('light')">${ic('sun')} Clar</button></div>
  <label style="margin-top:22px">AVÍS DIARI DE TASQUES</label>
  <div class="row"><span>Rebre resum cada matí</span><button class="sw ${n.on?'on':''}" id="sw" onclick="toggleNotif()" aria-label="Activar avisos"><i></i></button></div>
  <label>HORA DE L'AVÍS</label><input type="time" id="n_time" value="${n.time}" onchange="setNotifTime(this.value)">
  <button class="btn ghost" onclick="notify()">${ic('bell-ringing')} Provar avís ara</button>
  <p class="note">Reps un resum de les tasques pendents de cada obra a l'hora triada, encara que el mòbil estigui bloquejat. Cal tenir l'app instal·lada a la pantalla d'inici.</p>
  <label>COMPTE</label><div class="mu" style="margin-bottom:4px">${esc(user?.email||'')}</div>
  <button class="btn ghost" onclick="pwForm()">${ic('key')} Canviar contrasenya</button>
  <button class="btn ghost" onclick="logout()">${ic('logout')} Tancar sessió</button>
  <button class="btn" onclick="closeSheet()">Tancar</button>`)}
IC.key='<circle cx="8" cy="15" r="4"/><path d="M10.8 12.2 20 3m-3 3 3 3m-6-0 2 2"/>';
function pwForm(){sheet(`<h3>Canviar contrasenya</h3>
  <label style="margin-top:0">NOVA CONTRASENYA</label><input type="password" id="pw1" autocomplete="new-password" placeholder="Mínim 8 caràcters">
  <label>REPETEIX-LA</label><input type="password" id="pw2" autocomplete="new-password">
  <button class="btn" onclick="savePw()">Desar contrasenya</button>
  <button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`)}
async function savePw(){
  const a=document.getElementById('pw1').value,b=document.getElementById('pw2').value;
  if(a.length<8){toast('Ha de tenir almenys 8 caràcters');return}
  if(a!==b){toast('Les dues contrasenyes no coincideixen');return}
  const r=await guard(async()=>{const {error}=await sb.auth.updateUser({password:a});if(error)throw error;return true});
  if(r){closeSheet();toast('Contrasenya canviada')}
}
/* ---------- notificacions push (arriben amb el mòbil bloquejat) ---------- */
const VAPID='BPSrjDFs0h66ZskARjV1L1fKvo0bI8d7ESuIfScwVYJFjS8ztXTU4XBPxDr3PdwbYvd6b2oM1qmsn67l3EUalSI';
const pushOK=()=>'serviceWorker' in navigator&&'PushManager' in window&&'Notification' in window;
const b64u2u8=s=>{s=s.replace(/-/g,'+').replace(/_/g,'/');return Uint8Array.from(atob(s+'='.repeat((4-s.length%4)%4)),c=>c.charCodeAt(0))};
async function curSub(){const reg=await navigator.serviceWorker.ready;return reg.pushManager.getSubscription()}
async function pushSub(){
  const reg=await navigator.serviceWorker.ready;let s=await reg.pushManager.getSubscription();
  if(!s)s=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64u2u8(VAPID)});
  const j=s.toJSON();
  ok(await sb.from('push_subs').upsert({endpoint:j.endpoint,p256dh:j.keys.p256dh,auth:j.keys.auth,notify_time:pref.notif.time,enabled:true,last_sent:null,owner:user.id},{onConflict:'endpoint'}));
}
async function toggleNotif(){
  const n=pref.notif;
  if(!n.on){
    if(!pushOK()){toast("Cal tenir l'app instal·lada a la pantalla d'inici");return}
    let r='denied';try{r=await Notification.requestPermission()}catch(e){}
    if(r!=='granted'){toast('Cal permetre les notificacions');return}
    const g=await guard(async()=>{await pushSub();return true});if(!g)return;
    n.on=true;
  }else{
    n.on=false;
    await guard(async()=>{const s=await curSub();if(s)ok(await sb.from('push_subs').update({enabled:false}).eq('endpoint',s.endpoint));return true});
  }
  savePref();$('#sw')?.classList.toggle('on',n.on);
}
async function setNotifTime(v){
  if(!v)return;pref.notif.time=v;savePref();if(!pref.notif.on)return;
  await guard(async()=>{const s=await curSub();if(s)ok(await sb.from('push_subs').update({notify_time:v,last_sent:null}).eq('endpoint',s.endpoint));return true});
}
async function notify(){
  if(!pref.notif.on){toast("Activa primer l'avís diari");return}
  toast('Enviant…');
  const r=await guard(async()=>{const {data,error}=await sb.functions.invoke('send-push',{body:{test:true}});if(error)throw error;return data||{}});
  if(!r)return;
  toast(r.sent?'Avís enviat: mira les notificacions':(r.errors&&r.errors.length?"No s'ha pogut enviar: "+r.errors[0]:'Cap dispositiu subscrit. Torna a activar l\'avís.'));
}

/* ---------- inici ---------- */
async function start(){try{cached=new Set(await fkeys())}catch(e){}render();await refresh()}
async function boot(){
  applyTheme();
  const {data}=await sb.auth.getSession();
  if(!data.session){login();return}
  user=data.session.user;await start();
}
sb.auth.onAuthStateChange(ev=>{if(ev==='SIGNED_OUT'&&user){user=null;login()}});
/* com una app de veritat: sense zoom de pàgina (només el visor de plànols en té, amb la seva pròpia pinça) */
['gesturestart','gesturechange','gestureend'].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault(),{passive:false}));
document.addEventListener('touchmove',e=>{if(e.touches.length>1)e.preventDefault()},{passive:false});
addEventListener('online',()=>{if(user)refresh()});
addEventListener('offline',()=>{offline=true;if(user)render()});
boot();
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

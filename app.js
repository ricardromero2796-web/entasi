const LOGO=`<div class="logo3d"><img class="em" alt="" src="data:image/png;base64,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"><img class="wm" alt="ENTASI" src="data:image/png;base64,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"></div>`;
const IC={bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
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
let user=null,view={name:'home'},tab='tasks',offline=false,cached=new Set();
const P=id=>projects.find(p=>p.id===id);

/* fitxers dels plànols guardats al dispositiu (per veure'ls sense cobertura) */
const DB=new Promise((res,rej)=>{const r=indexedDB.open('entasi-files',1);r.onupgradeneeded=()=>r.result.createObjectStore('f');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
async function fput(k,b){const db=await DB;return new Promise((res,rej)=>{const t=db.transaction('f','readwrite');t.objectStore('f').put(b,k);t.oncomplete=res;t.onerror=()=>rej(t.error)})}
async function fget(k){const db=await DB;return new Promise(res=>{const r=db.transaction('f').objectStore('f').get(k);r.onsuccess=()=>res(r.result);r.onerror=()=>res(null)})}
async function fdel(k){const db=await DB;return new Promise(res=>{const t=db.transaction('f','readwrite');t.objectStore('f').delete(k);t.oncomplete=res;t.onerror=res})}
async function fkeys(){const db=await DB;return new Promise(res=>{const r=db.transaction('f').objectStore('f').getAllKeys();r.onsuccess=()=>res(r.result);r.onerror=()=>res([])})}

/* ---------- tema ---------- */
function applyTheme(){document.documentElement.dataset.theme=pref.theme;const m=document.querySelector('meta[name=theme-color]');if(m)m.content=pref.theme==='dark'?'#0E1518':'#F2F6F5'}
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
    const data=ok(await sb.from('projects').select('*, tasks(*), plans(*)').order('created_at',{ascending:false}));
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
      <div style="display:flex;gap:8px"><button class="ibtn" onclick="openSettings()" aria-label="Avisos i compte">${ic('bell')}</button>
      <button class="ibtn" onclick="toggleTheme()" aria-label="Canviar tema">${ic(pref.theme==='dark'?'sun':'moon')}</button></div></div>
    <div class="hi">${greet}</div>
    <div class="sub">${new Date().toLocaleDateString('ca-ES',{weekday:'long',day:'numeric',month:'long'})}${offline?` · <span style="color:var(--red)">${ic('wifi')} sense connexió</span>`:''}</div>
    <div class="stats"><div class="stat"><b>${projects.length}</b><span>Obres</span></div><div class="stat"><b>${all.length}</b><span>Tasques pendents</span></div><div class="stat"><b style="color:var(--lime)">${urgent}</b><span>Urgents</span></div></div>
  </div>
  <div class="sec"><h2>Les meves obres</h2></div>
  ${projects.length?projects.map(p=>{const n=pending(p),u=n.filter(t=>t.prio==='alta').length;return`
  <button class="card" onclick="go({name:'project',id:'${p.id}'},'tasks')">
    <div class="row"><span class="code">${esc(p.code)}</span>${u?`<span class="pill red">${u} urgent${u>1?'s':''}</span>`:`<span class="pill lime">${esc(p.status)}</span>`}</div>
    <div class="ttl">${esc(p.name)}</div><div class="mu">${esc(p.client)}</div>
    <div class="bar"><i style="width:${p.progress||0}%"></i></div>
    <div class="row mu"><span>${n.length} tasques · ${(p.plans||[]).length} plànols</span><span>${p.progress||0}%</span></div></button>`}).join(''):`<div class="empty">Encara no tens cap obra.<br>Afegeix la primera amb el botó de sota.</div>`}
  <button class="fab" onclick="newProject()">${ic('plus')} Nova obra</button>`;
}

function project(){
  const p=P(view.id);if(!p)return go({name:'home'});
  const n=pending(p);let body='';
  if(tab==='tasks'){
    const order={alta:0,mitja:1,baixa:2};
    const ts=[...p.tasks].sort((a,b)=>a.done-b.done||order[a.prio]-order[b.prio]);
    body=(ts.length?ts.map(t=>`<div class="task ${t.done?'done':''}"><button class="chk" onclick="toggleTask('${p.id}','${t.id}')" aria-label="Marcar feta">${t.done?ic('check'):''}</button>
      <div class="t">${esc(t.text)}<div style="margin-top:7px;display:flex;gap:6px;flex-wrap:wrap">${t.prio==='alta'?'<span class="pill red">Alta</span>':t.prio==='mitja'?'<span class="pill">Mitja</span>':'<span class="pill">Baixa</span>'}${t.due?`<span class="pill ${t.due<today()&&!t.done?'red':''}">${ic('calendar')} ${fmt(t.due)}</span>`:''}</div></div>
      <button class="del" onclick="delTask('${p.id}','${t.id}')" aria-label="Eliminar">${ic('trash')}</button></div>`).join(''):`<div class="empty">Cap tasca pendent. Bon senyal.</div>`)
      +`<button class="fab" onclick="newTask('${p.id}')">${ic('plus')} Nova tasca</button>`;
  }else if(tab==='plans'){
    const pl=[...p.plans].sort((a,b)=>a.created_at<b.created_at?1:-1),cats=[...new Set(pl.map(x=>x.cat))];
    body=(pl.length?cats.map(c=>`<div class="sec" style="margin-top:14px"><h2>${esc(c)}</h2></div>`+pl.filter(x=>x.cat===c).map(x=>{const c2=cached.has(x.id);return`
      <div class="planrow"><button class="plan" onclick="openPlan('${x.id}')"><div class="ico">${ic((x.type||'').includes('pdf')?'file-type-pdf':'photo')}</div>
      <div style="flex:1;min-width:0"><div style="word-break:break-word">${esc(x.name)}</div><div class="mu">${esc(x.version||'')}${x.version?' · ':''}${fmt((x.created_at||'').slice(0,10))}${c2?' · <span class="ok">offline</span>':''}</div></div></button>
      ${c2?'':`<button class="sm" onclick="cachePlan('${x.id}')" aria-label="Descarregar per veure sense cobertura">${ic('download')}</button>`}
      <button class="sm" onclick="delPlan('${p.id}','${x.id}')" aria-label="Eliminar">${ic('trash')}</button></div>`}).join('')).join(''):`<div class="empty">Cap plànol encara.<br>Puja el primer PDF o imatge.</div>`)
      +`<button class="fab" onclick="newPlan('${p.id}')">${ic('upload')} Pujar plànol</button>`;
  }else{
    body=`<div class="card">${[['Codi',p.code],['Client',p.client],['Estat',p.status],['Progrés',(p.progress||0)+'%']].map(([k,v])=>`<div class="kv"><span class="mu">${k}</span><span>${esc(v)}</span></div>`).join('')}
      <div class="kv"><span class="mu">Adreça</span><span style="text-align:right">${esc(p.address)||'—'}</span></div></div>
      ${p.address?`<a class="btn" style="display:block;text-align:center;text-decoration:none" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(p.address)}">${ic('route')} Com arribar-hi</a>`:''}
      <button class="btn ghost" onclick="editProject('${p.id}')">${ic('edit')} Editar obra</button>
      <button class="btn ghost" style="color:var(--red)" onclick="delProject('${p.id}')">${ic('trash')} Eliminar obra</button>`;
  }
  $('#app').innerHTML=`
  <div class="hdr" style="padding-bottom:22px">
    <div class="top"><button class="back" style="margin:0" onclick="go({name:'home'})">${ic('arrow-left')} Obres</button>
    <button class="ibtn" onclick="toggleTheme()" aria-label="Canviar tema">${ic(pref.theme==='dark'?'sun':'moon')}</button></div>
    <div class="code" style="margin-top:18px">${esc(p.code)}</div><div style="font-size:24px;margin:4px 0">${esc(p.name)}</div><div class="sub">${esc(p.client)} · ${n.length} tasques pendents</div></div>
  <div class="tabs">${[['tasks','Tasques'],['plans','Plànols'],['info','Fitxa']].map(([k,l])=>`<button class="${tab===k?'on':''}" onclick="tab='${k}';render()">${l}</button>`).join('')}</div>
  <div style="margin-top:14px">${body}</div>`;
}

/* ---------- fulls modals ---------- */
function sheet(html){closeSheet();const d=document.createElement('div');d.className='sheet';d.id='sheet';d.innerHTML=`<div>${html}</div>`;d.addEventListener('click',e=>{if(e.target===d)closeSheet()});document.body.appendChild(d);d.querySelector('input,textarea')?.focus()}
function closeSheet(){$('#sheet')?.remove()}
function toast(m){document.querySelectorAll('.toast').forEach(t=>t.remove());const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function ask(msg,fn){sheet(`<h3>${msg}</h3><button class="btn" style="background:var(--redbg);color:var(--red)" id="ok">Eliminar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`);$('#ok').onclick=()=>{closeSheet();fn()}}
function busy(on,txt){const b=$('#sheet .btn:not(.ghost)');if(b){b.disabled=on;if(txt&&on)b.dataset.t=b.textContent,b.textContent=txt;else if(b.dataset.t)b.textContent=b.dataset.t}}

/* ---------- obres ---------- */
function projectForm(p){
  p=p||{code:'',name:'',client:'',address:'',status:'En curs',progress:0};
  return`<h3>${p.id?'Editar obra':'Nova obra'}</h3>
  <label>CODI</label><input id="f_code" value="${esc(p.code)}" placeholder="P080">
  <label>NOM DE L'OBRA</label><input id="f_name" value="${esc(p.name)}" placeholder="Urbanització carrer Major">
  <label>CLIENT</label><input id="f_client" value="${esc(p.client)}" placeholder="Ajuntament">
  <label>ADREÇA</label><input id="f_addr" value="${esc(p.address)}" placeholder="Carrer, població">
  <label>ESTAT</label><select id="f_status">${['Projecte','En curs','Aturada','Acabada'].map(s=>`<option ${p.status===s?'selected':''}>${s}</option>`).join('')}</select>
  <label>PROGRÉS (%)</label><input id="f_prog" type="number" min="0" max="100" value="${p.progress||0}">
  <button class="btn" onclick="saveProject('${p.id||''}')">Desar</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`}
const newProject=()=>sheet(projectForm());
const editProject=id=>sheet(projectForm(P(id)));
async function saveProject(id){
  const name=$('#f_name').value.trim();if(!name){toast('Posa un nom a l\'obra');return}
  const d={code:$('#f_code').value.trim()||'P---',name,client:$('#f_client').value.trim(),address:$('#f_addr').value.trim(),status:$('#f_status').value,progress:Math.max(0,Math.min(100,+$('#f_prog').value||0))};
  busy(true,'Desant…');
  const r=await guard(async()=>id?ok(await sb.from('projects').update(d).eq('id',id).select().single()):ok(await sb.from('projects').insert(d).select().single()));
  busy(false);if(!r)return;
  if(id)Object.assign(P(id),r);else{projects.unshift({...r,tasks:[],plans:[]});view={name:'project',id:r.id};tab='tasks'}
  saveCache();closeSheet();render();
}
function delProject(id){ask('Eliminar aquesta obra i tot el seu contingut?',async()=>{
  const p=P(id);
  const r=await guard(async()=>{const paths=p.plans.map(x=>x.path);if(paths.length)ok(await sb.storage.from('plans').remove(paths));ok(await sb.from('projects').delete().eq('id',id));return true});
  if(!r)return;for(const x of p.plans){await fdel(x.id);cached.delete(x.id)}
  projects=projects.filter(q=>q.id!==id);saveCache();go({name:'home'})})}

/* ---------- tasques ---------- */
function newTask(pid){sheet(`<h3>Nova tasca</h3><label>QUÈ HAS DE FER?</label><textarea id="t_text" rows="3" placeholder="Revisar armat del mur"></textarea>
  <label>PRIORITAT</label><select id="t_prio"><option value="alta">Alta</option><option value="mitja" selected>Mitja</option><option value="baixa">Baixa</option></select>
  <label>DATA LÍMIT (opcional)</label><input id="t_due" type="date">
  <button class="btn" onclick="saveTask('${pid}')">Afegir tasca</button><button class="btn ghost" onclick="closeSheet()">Cancel·lar</button>`)}
async function saveTask(pid){const text=$('#t_text').value.trim();if(!text){toast('Escriu la tasca');return}
  busy(true,'Desant…');
  const r=await guard(async()=>ok(await sb.from('tasks').insert({project_id:pid,text,prio:$('#t_prio').value,due:$('#t_due').value||null}).select().single()));
  busy(false);if(!r)return;P(pid).tasks.push(r);saveCache();closeSheet();render()}
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
function delPlan(pid,id){ask('Eliminar aquest plànol?',async()=>{
  const x=P(pid).plans.find(p=>p.id===id);
  const r=await guard(async()=>{ok(await sb.storage.from('plans').remove([x.path]));ok(await sb.from('plans').delete().eq('id',id));return true});
  if(!r)return;await fdel(id);cached.delete(id);P(pid).plans=P(pid).plans.filter(p=>p.id!==id);saveCache();render()})}
function findPlan(id){for(const p of projects){const x=p.plans.find(q=>q.id===id);if(x)return x}}
async function planBlob(x){let b=await fget(x.id);if(b)return b;
  const d=ok(await sb.storage.from('plans').download(x.path));await fput(x.id,d);cached.add(x.id);return d}
async function cachePlan(id){const x=findPlan(id);toast('Descarregant…');const r=await guard(()=>planBlob(x));if(r){render();toast('Plànol disponible sense cobertura')}}

/* visor: PDF dibuixat amb pdf.js, amb zoom */
let pdfDoc=null,zoom=1,curUrl=null;
async function openPlan(id){
  const x=findPlan(id);zoom=1;pdfDoc=null;
  const v=document.createElement('div');v.className='viewer';v.id='viewer';
  v.innerHTML=`<div class="vb"><button class="back" style="margin:0" onclick="closeViewer()">${ic('arrow-left')} Tornar</button><span class="vt">${esc(x.name)}</span><div style="display:flex;gap:6px"><button class="ibtn" onclick="setZoom(-.5)" aria-label="Allunyar">−</button><button class="ibtn" onclick="setZoom(.5)" aria-label="Apropar">+</button></div></div>
  <div class="vc" id="vc"><div class="vload">Carregant plànol…</div></div>`;
  document.body.appendChild(v);const vc=$('#vc');
  let b;try{b=await planBlob(x)}catch(e){vc.innerHTML=`<div class="vload">${navigator.onLine?'No s\'ha pogut descarregar el plànol.':'Sense connexió i aquest plànol no està descarregat.'}</div>`;return}
  if(!cached.has(x.id)||true){/* ja és a la memòria cau */}
  if((x.type||'').includes('pdf')){
    try{pdfjsLib.GlobalWorkerOptions.workerSrc='vendor/pdf.worker.min.js';pdfDoc=await pdfjsLib.getDocument({data:await b.arrayBuffer()}).promise;await drawPdf()}
    catch(e){vc.innerHTML=`<div class="vload">No s'ha pogut mostrar aquest PDF.</div>`}
  }else{curUrl=URL.createObjectURL(b);vc.innerHTML=`<img id="vimg" src="${curUrl}" alt="${esc(x.name)}" style="width:100%">`}
  render();
}
async function drawPdf(){const vc=$('#vc');if(!vc||!pdfDoc)return;const tok=vc._t=(vc._t||0)+1;
  const w=vc.clientWidth,dpr=Math.min(window.devicePixelRatio||1,2);let first=true;
  for(let i=1;i<=pdfDoc.numPages;i++){
    const pg=await pdfDoc.getPage(i),vp0=pg.getViewport({scale:1}),sc=(w*zoom)/vp0.width,vp=pg.getViewport({scale:sc*dpr});
    const c=document.createElement('canvas');c.width=vp.width;c.height=vp.height;c.style.width=(w*zoom)+'px';c.style.height=(vp.height/dpr)+'px';
    await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
    if(vc._t!==tok)return;if(first){vc.innerHTML='';first=false}vc.appendChild(c);
  }}
function setZoom(d){zoom=Math.max(1,Math.min(4,zoom+d));if(pdfDoc){const vc=$('#vc');vc.innerHTML='<div class="vload">Carregant…</div>';drawPdf()}else{const i=$('#vimg');if(i)i.style.width=(zoom*100)+'%'}}
function closeViewer(){$('#viewer')?.remove();pdfDoc=null;curUrl&&URL.revokeObjectURL(curUrl);curUrl=null}

/* ---------- compte i avisos del matí ---------- */
function openSettings(){const n=pref.notif;sheet(`<h3>Avís diari de tasques</h3>
  <div class="row"><span>Rebre resum cada matí</span><button class="sw ${n.on?'on':''}" id="sw" onclick="toggleNotif()" aria-label="Activar avisos"><i></i></button></div>
  <label>HORA DE L'AVÍS</label><input type="time" id="n_time" value="${n.time}" onchange="pref.notif.time=this.value;savePref()">
  <button class="btn ghost" onclick="notify()">${ic('bell-ringing')} Provar avís ara</button>
  <p class="note">De moment l'avís surt quan l'app és oberta o en segon pla. Per rebre'l amb el mòbil bloquejat falta activar les notificacions push, que és el pas següent.</p>
  <label>COMPTE</label><div class="mu" style="margin-bottom:4px">${esc(user?.email||'')}</div>
  <button class="btn ghost" onclick="logout()">${ic('logout')} Tancar sessió</button>
  <button class="btn" onclick="closeSheet()">Tancar</button>`)}
async function toggleNotif(){
  if(!pref.notif.on){if(!('Notification' in window)){toast('Aquest navegador no admet avisos');return}
    let r='denied';try{r=await Notification.requestPermission()}catch(e){}
    if(r!=='granted'){toast('Cal permetre les notificacions');return}}
  pref.notif.on=!pref.notif.on;savePref();$('#sw').classList.toggle('on',pref.notif.on)}
function summary(){const l=[];projects.forEach(p=>{const n=pending(p);if(n.length)l.push(`${p.code}: ${n.length} pendents${n.some(t=>t.prio==='alta')?' (hi ha urgents)':''}`)});return l.length?l.join(' · '):'Cap tasca pendent avui.'}
async function notify(){
  if(!('Notification' in window)||Notification.permission!=='granted'){toast('Permet primer les notificacions');return}
  const o={body:summary(),icon:'icon-192.png',tag:'entasi-mati'};
  try{const reg=await navigator.serviceWorker?.getRegistration();reg?await reg.showNotification("Tasques d'avui · ENTASI",o):new Notification("Tasques d'avui · ENTASI",o)}catch(e){toast(summary())}}
setInterval(()=>{const n=pref.notif;if(!n.on||!user)return;const d=new Date(),hm=d.toTimeString().slice(0,5);if(hm>=n.time&&n.last!==today()){n.last=today();savePref();notify()}},30000);

/* ---------- inici ---------- */
async function start(){try{cached=new Set(await fkeys())}catch(e){}render();await refresh()}
async function boot(){
  applyTheme();
  const {data}=await sb.auth.getSession();
  if(!data.session){login();return}
  user=data.session.user;await start();
}
sb.auth.onAuthStateChange(ev=>{if(ev==='SIGNED_OUT'&&user){user=null;login()}});
addEventListener('online',()=>{if(user)refresh()});
addEventListener('offline',()=>{offline=true;if(user)render()});
boot();
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

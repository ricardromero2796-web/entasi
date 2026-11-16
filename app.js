const LOGO=`<div class="logo3d"><img class="em" alt="" src="data:image/png;base64,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"><img class="wm" alt="ENTASI" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAyCAYAAADiBmE+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAdBSURBVHhe7Z3NixxFGMZHBEH0IgiCB5OTHjyEwIIHL4InLw5CFPYgSeb7q+d7v3dnZneSjRIh2c3umoj5QwT/A0/eBcGrd68t72TfTu3T3dXV1TXJdm394CHLzFvPW9XzTG9Pd8+mUHA4HAveT5DDYR+1ZteXCesdDiuot3p+yxvGCusdDiuYHTzw661+KPCsYvHWTRzjcFjB9OAwFHhWudZxe32HvbS7o1DoWVjrcFjD0fGZ32hHH/IUCoV3sd7hsIbJ/DAy/LWWO7vjsJy92b1F+FFY53BYx+5k7u/sHVwQ1jgcDofD4XA40vDWuRx6vHlJtiHNg0Vz4Z8vD7ODg64Joa8OdytNn1QoFN7G51TAObH25/MB1qqCXqZULBaNXw0v19qL7Xe+DV8L8wcPN6j/neqLuZSqLf9OubX4eWXl84+x3gS4bUVhbUCp7vmVeiez0FcHPnVKG0tnD4FzYlEgsFYV9DKl07Nf/sVeWXmdFxzfeOejD++UG4u14alwFr0O56+t0WtCuG1FYW1Aw4u/WptG6KuD6KcTfpwTq9kZaM8PvUzp5PTZ39grC9vTgwv+x2fP/8SaZTGb/+iXau3QGuNUqrb9leJ3xvb+6C8KawMua/BJtIGwRgaOZ12F4OPr+KpuJ79247PrURc8k3T+W1jrkBZBb1FYG4AbTFfoqwN6ktKEH8eyrkLw0Z+ENcuAAox9VUW/JdBPB/QVhbUBlz34pFKloeSP41i2B79cqYX8SfWGp71uFc5Of/0Pe4qi7U7Cx0UVb93O/CEfPUVhbYAs+DxxFaGvDthf1OOjs9+wHsEx4jqwVhVcJwp7Yd84nZw++wd76YJ9RWGtSWRfYKI1bm5PF4rbVvRYf7SZeY7oKwprA2TBX9/aUxb66oD9Rakcs+IYFm1grFUF14nCXqKwVtTxk6d/YC9dsK8orDUJ9hI13twOeu/tzhZrFsNPP2/sLD83WBsgCz7WLhvsj0o6LYn1rCzBTwJ7icLaZXC7HH2Yw6JTjDjGFNiL1fSit/f61iSooZ/xeV2wvyisDchT8Emy8GMty+bgY88o4RhTYB+Vnp3e2J/uz2Of1wF7q8wjd8EnxZ0NwDqWrcEvFldvYs8o4ThTYB9WsxPf8/Tp89jndMH+SmvPY/BJ5YircljDsjX4tA2wZ5SqCp+PdIj6wMoqvcLvaWNvUVgbIAv+T49OpUKvrGD/JOEHXnyeZWvwsZ9MONYEo/XtUB9RibcNGAL7Kq1bFnz8BhYKvbKC/VVUrre/SBpvY/AfHZ2E+sl0//7DGXqYQLbXZ1H471aXd+Mc9hOFtQGy4CcJvbKC/iqqChdp8DmWjcGP+ztIcUHE346mGK/vxPZE0RtgMN4yPg/sIwprA/IQfNmfPSHxbQ34OMvG4GMv1nAt/vADPUxBhzyq4ac603+nCXsorTkPwZ/sH/q94XrocVGVhhd6jGVb8GvN+Cum9Dw+xup0lzen0Zp6+EmVurnbKdBbFNYG5CH40/mhP51O2/i4qmwLPvZ5uc4XPWV3S6KXSfqjDb/VeTEP7Bsl8TA1C+irtF5Z8HvDDanQKyvYn0XBp+fT7lVYVyX4fPxM/+Jzy54TMxpvLebR8tRep46BkyToqbReWfCHO5NvZEKvrGB/Fgef8AbyQ54o2RR82ktin6h++Bzrdml5tzCIDMYb52+A8BxQODYt6KfkLQs+1i4b7M8Sg08MxpuhGplsCj72iOsn+80o1i2bxRtgJH+9cExa0E/JO4/BJ+h2VqyL01UIPt7e6w02QjXLnFcSdGiM82A9fnzyO9anAf2U1prX4BNdxcMeW4JP5+Kxh9DrwveTZ7NZF2tYpq+mKv7POR/gPFj1duJYKegnCmsD8hz8L7/69lOsjZItwUd/UZVG1682e4Fq7fhDHZNzK9dffvVwMp1KfXEOrEanJx2XBPoprTPPwSeGCh+gbAj+k5+f/4X+WbS5M/8ee6QFP2jTaczJNPqW41F/72ucA2tndxY5RhX0E4W1AbLgV1t9ZdEldPROC/ZnyYJPeP1xaIwoG4Iv+7CqI4VDEylxd4bSPKuNrn/tkxvXufbW6uqK7GuKF53Tg35K3rLgpxHdVoDeaUFPVlLwCa+/FhrHsiH46G1C2CMN6IWioL9U/AW1rPMg0E/J25bgE3H39OQ9+Kb39qz+YE17jnu7+yE/HdEOC73Tgp6isDbApuATUXv+vAcffU0Ke6UhalunFXrqgJ5K/rYFv1AovIfjbQ4+hS9JOMbkHJP8ZaLT0einA/qKwtoAC4NfwCuFeQ6+7Iaz/lAtOO1e/GtcrUd/fzkNOuH3MhxmIegtCmsDbAw+Ib4YeQ4+eur641hdnzjoyiz9BQX0RlFNp589KyLYQ2lt9AHHG4wzq9XNHi70ZN374aGWN29oE2/KOHCuorBWB/RkdYfp9pg43vQ8me5gbXE+fxFwQS3PfC8G17OstTkcDofD4XBcYv4HPjxWY07PmxQAAAAASUVORK5CYII="></div>`;
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

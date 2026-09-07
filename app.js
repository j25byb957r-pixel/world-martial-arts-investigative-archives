const entries = [
  {title:'The Sanchin Question: Fujian → Okinawa',category:'Forms & Kata',status:'comparative',url:'research/sanchin-sam-chien.html',summary:'Historical and comparative research into Fujian San Zhan / Sam Chien, Okinawan Sanchin, transmission questions, and the limits of current evidence.',tags:['Sanchin','Sam Chien','San Zhan','Fujian','transmission']},
  {title:'Uechi-Ryū Lineage Research',category:'Lineage',status:'working',url:'research/uechi-ryu-lineage.html',summary:'A source-led investigation of Uechi-Ryū transmission, Pangainoon terminology, Okinawan development, teachers, and documentary evidence.',tags:['Uechi-Ryū','Okinawa','Pangainoon','lineage']},
  {title:'Michigan Uechi Lineage: Horton, Keith & East West',category:'Lineage',status:'documented',url:'research/michigan-uechi-lineage.html',summary:'Regional lineage research connecting Alan/Allen J. Horton, William L. Keith, Kalamazoo, Grand Rapids, and East West Karate Center, with source discrepancies retained for investigation.',tags:['Allen Horton','Alan Horton','William Keith','East West Karate','Grand Rapids','Michigan']},
  {title:'Southern White Crane & the Fujian Sanchin Question',category:'Comparative Arts',status:'comparative',url:'research/southern-white-crane-fujian.html',summary:'A source-conscious comparison of Yongchun/Fujian White Crane, San Zhan, and the Chinese background proposed for Okinawan Sanchin—preserving parallels without claiming unproven direct descent.',tags:['White Crane','Fujian','Yongchun','San Zhan','Sanchin','comparison']},
  {title:'Three Forward / Three Back',category:'Movement Concepts',status:'comparative',url:'research/three-forward-three-back.html',summary:'Evidence-led study of the three-step advance/retreat pattern in Yongchun San Zhan, early forward/backward Sanchin training in Wakayama, and the still-unresolved transmission bridge between them.',tags:['forward/backward','three steps','Sanchin','San Zhan','Wakayama','Fujian','evolution']},
  {title:'Wauke and Circular Receiving',category:'Movement Concepts',status:'comparative',summary:'A comparative mechanics file examining circular receiving, redirection, and differences in interpretation across schools.',tags:['wauke','circle','redirection','mechanics']},
  {title:'Source & Claim Register',category:'Research Method',status:'documented',url:'research/source-claim-register.html',summary:'The archive ledger for distinguishing primary sources, secondary scholarship, practitioner testimony, interpretation, and unresolved claims.',tags:['sources','evidence','method','citations']}
];

const topicLinks={
  'sanchin':'research/topics/sanchin.html',
  'sam chien':'research/topics/sam-chien.html',
  'san zhan':'research/topics/san-zhan.html',
  'fujian':'research/topics/fujian.html',
  'transmission':'research/topics/transmission.html',
  'uechi-ryū':'research/uechi-ryu-lineage.html',
  'okinawa':'research/topics/okinawa.html',
  'pangainoon':'research/topics/pangainoon.html',
  'lineage':'research/topics/transmission.html',
  'allen horton':'research/michigan-uechi-lineage.html',
  'alan horton':'research/michigan-uechi-lineage.html',
  'william keith':'research/michigan-uechi-lineage.html',
  'east west karate':'research/michigan-uechi-lineage.html',
  'grand rapids':'research/michigan-uechi-lineage.html',
  'michigan':'research/michigan-uechi-lineage.html',
  'white crane':'research/topics/white-crane.html',
  'yongchun':'research/southern-white-crane-fujian.html',
  'comparison':'research/topics/evidence-guide.html',
  'forward/backward':'research/three-forward-three-back.html',
  'three steps':'research/three-forward-three-back.html',
  'wakayama':'research/topics/wakayama.html',
  'evolution':'research/topics/transmission.html',
  'sources':'research/source-claim-register.html',
  'evidence':'research/topics/evidence-guide.html',
  'method':'research/topics/evidence-guide.html',
  'citations':'research/source-claim-register.html',
  'wauke':'research/explore.html',
  'circle':'research/explore.html',
  'redirection':'research/explore.html',
  'mechanics':'research/explore.html'
};

const grid=document.querySelector('#archive-grid');
const search=document.querySelector('#search');
const category=document.querySelector('#category');
const status=document.querySelector('#status');
const count=document.querySelector('#result-count');
const installButton=document.querySelector('#install-app');
const appStatus=document.querySelector('#app-status');
let deferredPrompt=null;

[...new Set(entries.map(e=>e.category))].sort().forEach(name=>{const option=document.createElement('option');option.value=name;option.textContent=name;category.appendChild(option)});
function labelStatus(value){return {documented:'Documented',comparative:'Comparative',working:'Working inquiry'}[value]||value}
function renderTag(tag){const url=topicLinks[tag.toLowerCase()];return url?`<a class="tag" href="${url}" aria-label="Open ${tag} research subject">${tag}</a>`:`<span class="tag">${tag}</span>`}
function render(){const q=search.value.trim().toLowerCase();const filtered=entries.filter(e=>{const text=[e.title,e.category,e.summary,...e.tags].join(' ').toLowerCase();return(!q||text.includes(q))&&(category.value==='all'||e.category===category.value)&&(status.value==='all'||e.status===status.value)});count.textContent=`${filtered.length} ${filtered.length===1?'entry':'entries'} shown`;grid.innerHTML='';if(!filtered.length){grid.innerHTML='<p class="notice">No archive entries match those filters yet.</p>';return}filtered.forEach(e=>{const card=document.createElement('article');card.className='archive-card';const title=e.url?`<a href="${e.url}">${e.title}</a>`:e.title;const action=e.url?`<p><a href="${e.url}">Open research entry →</a></p>`:'';card.innerHTML=`<div class="meta"><span>${e.category}</span><span>${labelStatus(e.status)}</span></div><h3>${title}</h3><p>${e.summary}</p>${action}<div class="tags">${e.tags.map(renderTag).join('')}</div>`;grid.appendChild(card)})}
[search,category,status].forEach(el=>el.addEventListener(el===search?'input':'change',render));
render();

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('/service-worker.js').then(()=>{
      if(appStatus) appStatus.textContent=navigator.onLine?'Offline support is ready. Install this archive on your device.':'Offline mode is active.';
    }).catch(()=>{if(appStatus) appStatus.textContent='The archive is online; offline support could not be enabled on this browser.';});
  });
}
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredPrompt=event;if(installButton) installButton.hidden=false;if(appStatus) appStatus.textContent='This archive is ready to install as an app.';});
if(installButton){installButton.addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();const choice=await deferredPrompt.userChoice;if(appStatus)appStatus.textContent=choice.outcome==='accepted'?'App installation started.':'Installation was not completed.';deferredPrompt=null;installButton.hidden=true;});}
window.addEventListener('appinstalled',()=>{if(appStatus) appStatus.textContent='World Martial Arts Investigative Archives is installed.';});
window.addEventListener('offline',()=>{if(appStatus) appStatus.textContent='You are offline. Cached archive material remains available.';});
window.addEventListener('online',()=>{if(appStatus) appStatus.textContent='Back online. New archive updates can now load.';});
const isStandalone=window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
const isiOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
if(isStandalone&&appStatus) appStatus.textContent='Installed app mode is active.';
else if(isiOS&&appStatus) appStatus.textContent='On iPhone/iPad: Safari → Share → Add to Home Screen to install the archive.';
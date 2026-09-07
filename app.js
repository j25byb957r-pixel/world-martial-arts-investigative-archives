const entries = [
  {title:'Sanchin / Sam Chien',category:'Forms & Kata',status:'comparative',summary:'Comparative research workspace for Sanchin traditions, Southern Chinese Sam Chien/San Zhan material, stepping, breath, structure, and transmission claims.',tags:['Sanchin','Sam Chien','San Zhan','breath','structure']},
  {title:'Uechi-Ryū Lineage Research',category:'Lineage',status:'working',summary:'A source-led investigation of Uechi-Ryū transmission, Pangainoon terminology, Okinawan development, teachers, and documentary evidence.',tags:['Uechi-Ryū','Okinawa','Pangainoon','lineage']},
  {title:'Southern White Crane Comparisons',category:'Comparative Arts',status:'working',summary:'Movement and historical comparisons involving Southern White Crane traditions, stepping patterns, circular hands, and related Fujian material.',tags:['White Crane','Fujian','Southern China','comparison']},
  {title:'Three Forward / Three Back',category:'Movement Concepts',status:'working',summary:'Investigation of recurring three-step forward and retreat patterns, frontal orientation, structural alignment, and parallels across traditions.',tags:['footwork','alignment','three steps','Sanchin']},
  {title:'Wauke and Circular Receiving',category:'Movement Concepts',status:'comparative',summary:'A comparative mechanics file examining circular receiving, redirection, striking potential, and differences in interpretation across schools.',tags:['wauke','circle','redirection','mechanics']},
  {title:'Source & Claim Register',category:'Research Method',status:'documented',summary:'The archive ledger for distinguishing primary sources, secondary scholarship, practitioner testimony, interpretation, and unresolved claims.',tags:['sources','evidence','method','citations']}
];

const grid=document.querySelector('#archive-grid');
const search=document.querySelector('#search');
const category=document.querySelector('#category');
const status=document.querySelector('#status');
const count=document.querySelector('#result-count');

[...new Set(entries.map(e=>e.category))].sort().forEach(name=>{const option=document.createElement('option');option.value=name;option.textContent=name;category.appendChild(option)});

function labelStatus(value){return {documented:'Documented',comparative:'Comparative',working:'Working inquiry'}[value]||value}
function render(){
  const q=search.value.trim().toLowerCase();
  const filtered=entries.filter(e=>{
    const text=[e.title,e.category,e.summary,...e.tags].join(' ').toLowerCase();
    return (!q||text.includes(q))&&(category.value==='all'||e.category===category.value)&&(status.value==='all'||e.status===status.value);
  });
  count.textContent=`${filtered.length} ${filtered.length===1?'entry':'entries'} shown`;
  grid.innerHTML='';
  if(!filtered.length){grid.innerHTML='<p class="notice">No archive entries match those filters yet.</p>';return}
  filtered.forEach(e=>{
    const card=document.createElement('article');card.className='archive-card';
    card.innerHTML=`<div class="meta"><span>${e.category}</span><span>${labelStatus(e.status)}</span></div><h3>${e.title}</h3><p>${e.summary}</p><div class="tags">${e.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
    grid.appendChild(card);
  });
}
[search,category,status].forEach(el=>el.addEventListener(el===search?'input':'change',render));
render();

(function(root){
'use strict';
const localDay=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const uid=()=>globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2);
function profile(name){return {gardenLayout:2,id:uid(),name,scene:0,level:2,translationLang:"",done:[],answers:['','',''],shared:false,goal:'',start:'',ledger:[],jobs:[1,2,2].map((price,i)=>({id:uid(),key:i,name:'',price})),rewards:[3,5,10].map((price,i)=>({id:uid(),key:i,name:'',price}))};}
function fresh(){const p=profile('Explorer');return {version:1,lang:'en',active:p.id,profiles:[p]};}
const balance=p=>p.ledger.reduce((n,t)=>n+t.amount,0);
const reversed=p=>new Set(p.ledger.filter(t=>t.kind==='reverse').map(t=>t.ref));
const credited=(p,id,date=localDay())=>{const r=reversed(p);return p.ledger.some(t=>t.kind==='earn'&&t.item===id&&t.date===date&&!r.has(t.id));};
function transact(p,kind,item,label,date=localDay()){
 if(!['earn','spend'].includes(kind)||!Number.isInteger(item.price)||item.price<1||item.price>1000)throw Error('invalid');
 if(kind==='earn'&&credited(p,item.id,date))throw Error('alreadyEarned');
 if(kind==='spend'&&balance(p)<item.price)throw Error('notEnough');
 p.ledger.push({id:uid(),kind,item:item.id,label,amount:kind==='earn'?item.price:-item.price,date});
}
function undo(p){const r=reversed(p);const t=[...p.ledger].reverse().find(t=>t.kind!=='reverse'&&!r.has(t.id));if(!t)return false;if(balance(p)-t.amount<0)throw Error('notEnough');p.ledger.push({id:uid(),kind:'reverse',ref:t.id,item:t.item,label:t.label,amount:-t.amount,date:localDay()});return true;}
function migrateGarden(p){
 if(p.gardenLayout===2)return p;
 const expand=r=>{r.scene=Math.min(7,r.scene*2);r.done=[...new Set(r.done.flatMap(n=>[n*2,n*2+1]))].filter(n=>n<8);};
 if(p.book==='garden'&&p.difficulty==='standard')expand(p);
 if(p.books?.['garden:standard'])expand(p.books['garden:standard']);
 p.gardenLayout=2;return p;
}
let pageCounts={pet:8,garden:8,colors:3,exercise:9};
function setBookPageCounts(counts){for(const [id,count] of Object.entries(counts)){if(!/^[a-z][a-z0-9-]*$/.test(id)||!Number.isSafeInteger(count)||count<1)throw Error('invalidBook');}pageCounts={...pageCounts,...counts};}
function validate(raw){
const fail=()=>{throw Error('importBad')};
const str=(v,max)=>{if(typeof v!=='string'||v.length>max)fail();return v};
const int=(v,min,max)=>{if(!Number.isInteger(v)||v<min||v>max)fail();return v};
const date=v=>{if(typeof v!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(v)||Number.isNaN(new Date(v+'T12:00:00').getTime())||localDay(new Date(v+'T12:00:00'))!==v)fail();return v};
if(!raw||raw.version!==1||!['en','id','zh'].includes(raw.lang)||!Array.isArray(raw.profiles)||raw.profiles.length<1||raw.profiles.length>12)fail();
const ids=new Set();
const profiles=raw.profiles.map(p=>{
if(!p||typeof p!=='object')fail();const id=str(p.id,100);if(!id||ids.has(id))fail();ids.add(id);const name=str(p.name,40);if(!name.trim())fail();
if(!Array.isArray(p.done)||!Array.isArray(p.answers)||p.answers.length!==3||typeof p.shared!=='boolean')fail();
const items=(list)=>{if(!Array.isArray(list)||list.length>50)fail();const seen=new Set();return list.map(x=>{if(!x||typeof x!=='object')fail();const id=str(x.id,100);if(!id||seen.has(id))fail();seen.add(id);const name=str(x.name,100);const key=x.key==null?null:int(x.key,0,2);if(!name.trim()&&key===null)fail();return {id,name,key,price:int(x.price,1,1000)}})};
if(!Array.isArray(p.ledger)||p.ledger.length>10000)fail();let cash=0;const entries=new Map(),undone=new Set();
const ledger=p.ledger.map(t=>{if(!t||typeof t!=='object')fail();const id=str(t.id,100);if(!id||entries.has(id)||!['earn','spend','reverse'].includes(t.kind))fail();const amount=int(t.amount,-1000,1000);if(amount===0||(t.kind==='earn'&&amount<0)||(t.kind==='spend'&&amount>0))fail();const tx={id,kind:t.kind,item:str(t.item,100),label:str(t.label,100),date:date(t.date),amount};if(t.kind==='reverse'){tx.ref=str(t.ref,100);const original=entries.get(tx.ref);if(!original||original.kind==='reverse'||undone.has(tx.ref)||original.amount!==-amount||original.item!==tx.item)fail();undone.add(tx.ref);}cash+=amount;if(cash<0)fail();entries.set(id,tx);return tx;});
if(p.translationLang!==undefined&&!['','id','zh'].includes(p.translationLang))fail();
const book=Object.hasOwn(pageCounts,p.book)?p.book:'pet';
const difficulty=['beginner','easy','standard'].includes(p.difficulty)?p.difficulty:'standard';
const books={};if(p.books&&typeof p.books==='object'){for(const [key,v] of Object.entries(p.books)){const [savedId,savedEdition]=key.split(':');if(!Object.hasOwn(pageCounts,savedId)||!['beginner','easy','standard'].includes(savedEdition)||key!==savedId+':'+savedEdition||!v||typeof v!=='object')continue;books[key]={scene:int(v.scene,0,pageCounts[savedId]-1),done:Array.isArray(v.done)?[...new Set(v.done.map(n=>int(n,0,pageCounts[savedId]-1)))]:[],answers:Array.isArray(v.answers)&&v.answers.length===3?v.answers.map(x=>str(x,5000)):['','',''],shared:v.shared===true,activity:typeof v.activity==='string'?str(v.activity,2000):'',check:Number.isInteger(v.check)?int(v.check,-1,3):-1};}}
return migrateGarden({gardenLayout:p.gardenLayout===2?2:0,book,difficulty,books,activity:typeof p.activity==='string'?str(p.activity,2000):'',check:Number.isInteger(p.check)?int(p.check,-1,3):-1,id,name,level:p.level===undefined?2:int(p.level,0,4),translationLang:p.translationLang===undefined?(raw.lang==='en'?'':raw.lang):p.translationLang,scene:int(p.scene,0,pageCounts[book]-1),done:[...new Set(p.done.map(n=>int(n,0,pageCounts[book]-1)))],answers:p.answers.map(x=>str(x,5000)),shared:p.shared,goal:str(p.goal,150),start:p.start===''?'':date(p.start),jobs:items(p.jobs),rewards:items(p.rewards),ledger});
});
if(!ids.has(raw.active))fail();return {version:1,siteLanguageVersion:raw.siteLanguageVersion===2?2:0,lang:raw.lang,active:raw.active,profiles};
}
function readingChunks(sentence,level,phraseFn){const words=sentence.trim().split(/\s+/);if(level<3){const n=level+1;return Array.from({length:Math.ceil(words.length/n)},(_,i)=>words.slice(i*n,(i+1)*n).join(" "))}return level===3?phraseFn(sentence):[sentence];}
const api={setBookPageCounts,migrateGarden,readingChunks,localDay,uid,profile,fresh,balance,reversed,credited,transact,undo,validate};root.PingCore=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);

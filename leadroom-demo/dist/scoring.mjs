export function qualify({motivation,timeline,condition,asking,value}) {
 const m={high:35,medium:20,low:5}[motivation];
 const t={soon:30,quarter:20,later:5}[timeline];
 const c={repairs:15,cosmetic:10,ready:5}[condition];
 if ([m,t,c].some(x=>x===undefined) || !Number.isFinite(asking) || !Number.isFinite(value) || asking<=0 || value<=0) throw new Error('Choose valid details and positive prices.');
 const ratio=asking/value;
 const p=ratio<=0.8?20:ratio<=0.95?15:ratio<=1.05?8:0;
 const score=m+t+c+p;
 return {score,tier:score>=75?'Hot':score>=50?'Warm':'Nurture',breakdown:[['Motivation',m,35],['Timeline',t,30],['Condition',c,15],['Price fit',p,20]],next:score>=75?'Confirm the seller’s expectations and schedule an acquisitions call.':score>=50?'Clarify the timeline and price flexibility before the next call.':'Ask permission to follow up and agree on a suitable date.'};
}
export function csvCell(value) {const s=String(value);return '"'+(/^[=+@\-\t\r\n]/.test(s)?"'":'')+s.replaceAll('"','""')+'"';}

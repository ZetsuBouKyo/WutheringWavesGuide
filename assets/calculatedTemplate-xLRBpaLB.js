import{u as h,s as n,m}from"./resonator-CoHLwm5u.js";import{al as d}from"./index-DkUckFSw.js";import{T as t}from"./tier-D3ExhUkS.js";import{a as T}from"./utils-CBNJlnqw.js";const f=d("calculatedTemplate",{state:()=>({data:{templates:[],comparisons:{}},cache:{nameToTemplateIds:{},templateIdToHashedTemplateId:{},comparisonIdToComparison:{},tierToTemplateIds:{[t.T01]:[],[t.T11]:[],[t.T21]:[],[t.T31]:[],[t.T41]:[],[t.T51]:[],[t.T61]:[],[t.T65]:[]},hashedTemplateIdToResonatorNamesForEchoComparison:{}}}),actions:{async init(){if(!(this.data.templates.length>0))try{const o=await m("/data/calculation/templates.json").get();this.data=o,this.data.templates.forEach(e=>{this.cache.templateIdToHashedTemplateId[e.id]=e.hashed_id,e.echo_comparison.forEach(r=>{this.cache.nameToTemplateIds[r]?this.cache.nameToTemplateIds[r].push(e.id):this.cache.nameToTemplateIds[r]=[e.id]}),this.cache.hashedTemplateIdToResonatorNamesForEchoComparison[e.hashed_id]=e.echo_comparison;const a=e.id;e.is_tier&&this.cache.tierToTemplateIds[t.T01].push(a),e.is_1_1_tier&&this.cache.tierToTemplateIds[t.T11].push(a),e.is_2_1_tier&&this.cache.tierToTemplateIds[t.T21].push(a),e.is_3_1_tier&&this.cache.tierToTemplateIds[t.T31].push(a),e.is_4_1_tier&&this.cache.tierToTemplateIds[t.T41].push(a),e.is_5_1_tier&&this.cache.tierToTemplateIds[t.T51].push(a),e.is_6_1_tier&&this.cache.tierToTemplateIds[t.T61].push(a),e.is_6_5_tier&&this.cache.tierToTemplateIds[t.T65].push(a)}),Object.keys(this.data.comparisons).forEach(e=>{this.data.comparisons[e].forEach(r=>{const c=r.id;this.cache.comparisonIdToComparison[c]=r})})}catch(s){return s}},getNames(s=!1){const o=new Set([]);for(const a of this.data.templates)for(const r of a.echo_comparison)o.add(r);const i=Array.from(o);if(s===!0)return i;const e=[];return i.forEach(a=>{n.includes(a)||e.push(a)}),e},getTemplateIdsByNo(s){const i=h().getNameByNo(s);return this.cache.nameToTemplateIds[i]},getComparisonsByNo(s){const i=h().getNameByNo(s),e=this.data.comparisons[i];return e||[]},getHashedTemplateIdByTemplateId(s){return this.cache.templateIdToHashedTemplateId[s]},getTemplateIdByHashedTemplateId(s){return T(this.cache.templateIdToHashedTemplateId,s)},getComparisonByComparisonId(s){return this.cache.comparisonIdToComparison[s]},getTierTemplateIds(s){return this.cache.tierToTemplateIds[s]},getResonatorNamesForEchoComparisonByHashedTemplateId(s){const o=this.cache.hashedTemplateIdToResonatorNamesForEchoComparison[s];return o||[]}}});export{f as u};

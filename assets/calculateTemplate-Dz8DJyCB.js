import{u as h,m as n}from"./resonator-CI3wZnhI.js";import{al as m}from"./index-xWvqgTdL.js";import{T as t}from"./tier-Cpy-RyVF.js";import{g as d}from"./utils-DwyHwRSh.js";const u=m("calculatedTemplate",{state:()=>({data:{templates:[],comparisons:{}},cache:{nameToTemplateIds:{},templateIdToHashedTemplateId:{},comparisonIdToComparison:{},tierToTemplateIds:{[t.T01]:[],[t.T11]:[],[t.T21]:[],[t.T31]:[],[t.T41]:[],[t.T51]:[],[t.T61]:[],[t.T65]:[]},hashedTemplateIdToResonatorNamesForEchoComparison:{}}}),actions:{async init(){if(!(this.data.templates.length>0))try{const o=await n("/data/calculation/templates.json").get();this.data=o,this.data.templates.forEach(e=>{this.cache.templateIdToHashedTemplateId[e.id]=e.hashed_id,e.echo_comparison.forEach(i=>{this.cache.nameToTemplateIds[i]?this.cache.nameToTemplateIds[i].push(e.id):this.cache.nameToTemplateIds[i]=[e.id]}),this.cache.hashedTemplateIdToResonatorNamesForEchoComparison[e.hashed_id]=e.echo_comparison;const a=e.id;e.is_tier&&this.cache.tierToTemplateIds[t.T01].push(a),e.is_1_1_tier&&this.cache.tierToTemplateIds[t.T11].push(a),e.is_2_1_tier&&this.cache.tierToTemplateIds[t.T21].push(a),e.is_3_1_tier&&this.cache.tierToTemplateIds[t.T31].push(a),e.is_4_1_tier&&this.cache.tierToTemplateIds[t.T41].push(a),e.is_5_1_tier&&this.cache.tierToTemplateIds[t.T51].push(a),e.is_6_1_tier&&this.cache.tierToTemplateIds[t.T61].push(a),e.is_6_5_tier&&this.cache.tierToTemplateIds[t.T65].push(a)}),Object.keys(this.data.comparisons).forEach(e=>{this.data.comparisons[e].forEach(i=>{const c=i.id;this.cache.comparisonIdToComparison[c]=i})})}catch(s){return s}},getNames(){const s=new Set([]);for(const r of this.data.templates)for(const e of r.echo_comparison)s.add(e);return Array.from(s)},getTemplateIdsByNo(s){const r=h().getNameByNo(s);return this.cache.nameToTemplateIds[r]},getComparisonsByNo(s){const r=h().getNameByNo(s),e=this.data.comparisons[r];return e||[]},getHashedTemplateIdByTemplateId(s){return this.cache.templateIdToHashedTemplateId[s]},getTemplateIdByHashedTemplateId(s){return d(this.cache.templateIdToHashedTemplateId,s)},getComparisonByComparisonId(s){return this.cache.comparisonIdToComparison[s]},getTierTemplateIds(s){return this.cache.tierToTemplateIds[s]},getResonatorNamesForEchoComparisonByHashedTemplateId(s){const o=this.cache.hashedTemplateIdToResonatorNamesForEchoComparison[s];return o||[]}}});export{u};

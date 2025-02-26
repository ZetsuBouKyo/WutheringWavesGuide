import{u as I}from"./resonator-BfpK1VIC.js";import{u as A}from"./damageAnalysis-BkkydZC0.js";import{d as F,aJ as v,ab as j,aK as O,af as $,N as D,o as n,Q as q,O as c,a as f,W as t,U as u,c as o,a4 as T,a2 as k,Y as r,F as y,a3 as S,aN as z,aP as N,a8 as Q,aQ as b,M as H}from"./index-D2PA1ChH.js";import{V as J}from"./VTooltip-EldaYqbk.js";const K={key:0},L={class:"d-flex flex-column align-start"},U={class:"d-flex flex-row mb-1"},W={class:"d-flex flex-row justify-center mr-2"},Y=["src"],G={class:"d-flex flex-row w-100"},X={class:"header"},Z=["href"],ee={class:"d-flex flex-row w-100"},te={class:"header text-truncater"},ae={class:"text-truncate"},se={class:"d-flex flex-row w-100"},ne={class:"header text-truncate"},re={class:"text-truncate"},oe={class:"d-flex flex-row align-center w-100"},le={key:0,class:"mr-4 text-truncate"},ce={class:"team d-flex flex-row justify-end h-100"},de=F({__name:"TeamTier",props:{title:{type:String,default:""},affixPolicy:{type:String,required:!0},templateIds:{type:Object,required:!0}},setup(M){const x=M,w=x.title,R=x.affixPolicy,m=x.templateIds,B=I(),V=A(),p=v({}),d=v([]),g=j(0);async function P(a){a.length!==0&&a.forEach(async _=>{const e=await V.getDamageAnalysisByTemplateId(_,R);if(e){const l=e.getTeamDamageDistribution();d.push(l),l.getResonatorNames().forEach(async i=>{if(!p[i]){const h=await B.getElementEnByName(i);p[i]=h}})}})}function E(){d.length>0&&(d.sort((a,_)=>{const e=parseFloat(a.getMaxTeamDPS()),l=parseFloat(_.getMaxTeamDPS());return!e||!l?0:l-e}),g.value=parseFloat(d[0].getMaxTeamDPS()))}function C(a){return a<2?"divide":""}return O(async()=>{await P(m)}),$(()=>m.length,async()=>{await P(m)}),$(()=>d.length,()=>{E()}),(a,_)=>(n(),D(q,{class:"h-100"},{default:c(()=>[f(u,{class:"mb-2 text-truncate"},{default:c(()=>[k(w)?(n(),o("h1",K,r(k(w)),1)):T("",!0)]),_:1}),t("div",L,[(n(!0),o(y,null,S(d,(e,l)=>(n(),o("div",{class:"d-flex flex-column w-100 my-2",key:l},[t("div",U,[t("div",W,[(n(!0),o(y,null,S(e.getResonatorIconSources(),s=>(n(),o("img",{class:"resonator mr-2",src:s},null,8,Y))),256))]),f(z,null,{default:c(()=>[f(u,{class:"text-grey-darken-1"},{default:c(()=>[t("div",G,[t("span",X,r(a.$t("general.template_id"))+": ",1),t("a",{class:"text-decoration-none text-truncate",href:`/template/${e.getHashedTemplateID()}`},r(a.$t(e.template_id)),9,Z)])]),_:2},1024),f(u,{class:"text-grey-darken-1"},{default:c(()=>[t("div",ee,[t("span",te,r(a.$t("general.monster_id"))+": ",1),t("span",ae,r(a.$t(e.monster_id)),1)])]),_:2},1024),f(u,{class:"text-grey-darken-1"},{default:c(()=>[t("div",se,[t("span",ne,r(a.$t("general.team_dps"))+": ",1),t("span",re,r(e.getTeamDPSString()),1)])]),_:2},1024)]),_:2},1024)]),t("div",oe,[(n(),o("div",{class:"d-flex flex-row align-start w-100 bg-grey-darken-4",key:g.value},[t("div",{class:"d-flex flex-row align-start",style:N(`width: ${e.getTeamDPSPercentageString(g.value)};`)},[(n(!0),o(y,null,S(Object.keys(e.resonators),(s,i)=>(n(),D(J,{text:`${a.$t(s)} DPS: ${e.getResonatorDPSString(s)}
            (${e.getResonatorMaxDPSPercentageString(s)})`,location:"bottom"},{activator:c(({props:h})=>[t("div",Q({class:"d-flex",ref_for:!0},h,{style:`width: ${e.getResonatorMaxDPSPercentageString(s)};`}),[t("div",{class:b(`barh w-100 d-flex flex-row-reverse align-center bg-${p[s]} ${C(i)}`)},[e.getResonatorMaxDPSPercentage(s)>.1?(n(),o("span",le,r(e.getResonatorMaxDPSPercentageString(s)),1)):T("",!0)],2)],16)]),_:2},1032,["text"]))),256))],4)])),t("div",ce,r(e.getTeamDPSPercentageString(g.value)),1)])]))),128))])]),_:1}))}}),ue=H(de,[["__scopeId","data-v-18ef5f14"]]);export{ue as _};

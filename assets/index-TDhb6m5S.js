import{d as S,aO as D,ak as R,a6 as N,aN as j,N as g,o as i,O as t,a as e,Q as F,c,T,at as o,W as _,Y as u,U as a,F as h,Z as k,aP as f,X as H,aQ as L,M}from"./index-BYgdPpyf.js";import{_ as O}from"./DocHeaders-eMU-zR_a.js";import{u as P}from"./resonator-G9EdQamq.js";import{u as Q}from"./calculateTemplate-BHp4ue5j.js";import{j as v}from"./utils-CBNJlnqw.js";import{a as n}from"./VList-Hdt6VgIE.js";import{V as E}from"./VTooltip-TZmGtmuM.js";import"./tier-D3ExhUkS.js";import"./VAvatar-BY4XTZGk.js";import"./VOverlay-RAsfP9nH.js";const G={key:0},U={class:"ml-4 text-truncate"},W={id:"damage_analysis"},X={key:0},Y={id:"damage_comparison"},Z=["id"],q=S({__name:"index",setup(z){const y=D(),V=P(),p=Q(),r=R().params.resonator_no,b=V.getNameByNo(r),x=N([]),d=N([]);function C(s){return`comparison-${s}`}return j(async()=>{await p.init(),x.value=p.getTemplateIdsByNo(r),d.value=p.getComparisonsByNo(r)}),(s,$)=>{const B=O,w=L;return i(),g(w,null,{left:t(()=>[e(B,null,{default:t(()=>[e(n,{title:s.$t("resonator.header.damage_analysis"),onClick:$[0]||($[0]=l=>a(v)(a(y),"#damage_analysis"))},null,8,["title"]),a(d).length>0?(i(),c("div",G,[e(n,{title:s.$t("resonator.header.damage_comparison"),onClick:$[1]||($[1]=l=>a(v)(a(y),"#damage_comparison"))},null,8,["title"]),(i(!0),c(h,null,k(a(d),(l,m)=>(i(),g(E,{text:l.title,key:m},{activator:t(({props:I})=>[e(n,H({ref_for:!0},I,{onClick:J=>a(v)(a(y),`#${C(m)}`)}),{default:t(()=>[_("span",U,u(l.title),1)]),_:2},1040,["onClick"])]),_:2},1032,["text"]))),128))])):T("",!0)]),_:1})]),right:t(()=>[e(F,null,{default:t(()=>[e(o,{class:"my-1"},{default:t(()=>[_("h1",null,u(s.$t(a(b))),1)]),_:1}),e(o,{class:"my-1"},{default:t(()=>[_("h2",W,u(s.$t("resonator.header.damage_analysis")),1)]),_:1}),(i(!0),c(h,null,k(a(x),(l,m)=>(i(),g(o,{class:"my-1 ml-8",key:m},{default:t(()=>[e(n,{class:"text-blue-accent-1 w-100",title:s.$t(l),to:`/template/${a(p).getHashedTemplateIdByTemplateId(l)}`,active:!1},null,8,["title","to"])]),_:2},1024))),128)),a(d).length>0?(i(),c("div",X,[e(o,{class:"my-1"},{default:t(()=>[_("h2",Y,u(s.$t("resonator.header.damage_comparison")),1)]),_:1}),(i(!0),c(h,null,k(a(d),(l,m)=>(i(),g(f,{class:"ml-8 py-1",key:m,id:s.$t(l.title)},{default:t(()=>[_("h3",{id:C(m),class:"mb-2"},u(s.$t(l.title)),9,Z),e(f,{class:"ml-8 py-1"},{default:t(()=>[_("h4",null,u(s.$t("resonator.damage_comparison.team_based")),1),e(f,{class:"my-2"},{default:t(()=>[e(o,{class:"ml-4"},{default:t(()=>[e(n,{class:"text-blue-accent-1 w-100",title:s.$t("general.affixes_15_1"),to:`/resonator/${a(r)}/comparison/affixes_15_1/${l.id}/team_dps`,active:!1},null,8,["title","to"])]),_:2},1024),e(o,{class:"ml-4"},{default:t(()=>[e(n,{class:"text-blue-accent-1 w-100",title:s.$t("general.affixes_20_small"),to:`/resonator/${a(r)}/comparison/affixes_20_small/${l.id}/team_dps`,active:!1},null,8,["title","to"])]),_:2},1024),e(o,{class:"ml-4"},{default:t(()=>[e(n,{class:"text-blue-accent-1 w-100",title:s.$t("general.affixes_20_skill_bonus"),to:`/resonator/${a(r)}/comparison/affixes_20_skill_bonus/${l.id}/team_dps`,active:!1},null,8,["title","to"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(f,{class:"ml-8 py-1"},{default:t(()=>[_("h4",null,u(s.$t("resonator.damage_comparison.resonator_based",{name:a(b)})),1),e(f,{class:"my-2"},{default:t(()=>[e(o,{class:"ml-4"},{default:t(()=>[e(n,{class:"text-blue-accent-1",title:s.$t("general.affixes_15_1"),to:`/resonator/${a(r)}/comparison/affixes_15_1/${l.id}/resonator_dps`,active:!1},null,8,["title","to"])]),_:2},1024),e(o,{class:"ml-4"},{default:t(()=>[e(n,{class:"text-blue-accent-1",title:s.$t("general.affixes_20_small"),to:`/resonator/${a(r)}/comparison/affixes_20_small/${l.id}/resonator_dps`,active:!1},null,8,["title","to"])]),_:2},1024),e(o,{class:"ml-4"},{default:t(()=>[e(n,{class:"text-blue-accent-1",title:s.$t("general.affixes_20_skill_bonus"),to:`/resonator/${a(r)}/comparison/affixes_20_skill_bonus/${l.id}/resonator_dps`,active:!1},null,8,["title","to"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["id"]))),128))])):T("",!0)]),_:1})]),_:1})}}}),me=M(q,[["__scopeId","data-v-74c1b983"]]);export{me as default};

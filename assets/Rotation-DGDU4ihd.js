import{d as j,aW as D,ab as T,W as k,c as a,ad as n,ah as d,o as t,ae as s,a as m,O as o,S as i,ag as l,af as F,F as p,ak as x,N as c,aC as _,aX as N,a0 as E,a_ as V,n as z,aZ as O,M as W}from"./index-DkUckFSw.js";import{j as G,s as L}from"./utils-CBNJlnqw.js";import{e as M}from"./VDataTable-OhqoLtZ2.js";import{V as P}from"./VTooltip-C-KzMpo6.js";const U={key:0,class:"d-flex flex-column w-100"},X={class:"d-flex flex-row mb-2"},Z={class:"d-flex flex-row ml-auto mr-2"},q={class:"d-flex flex-row"},A={class:"d-flex flex-row justify-start py-2 w-100"},H={class:"d-flex flex-row px-4 my-2"},J=["src"],K={class:"d-flex flex-column w-100"},Q={class:"d-flex flex-wrap w-100"},R=["id","onClick"],Y=["src"],ee={class:"d-flex flex-column w-100"},se={class:"comment d-flex flex-row align-center my-2 text-grey-lighten-1 w-100"},te={class:"w-100"},le=j({__name:"Rotation",props:{rotation:{type:Object,default:[]},jump:{type:String,default:""}},setup(I){const $=D(),{t:b}=T(),g=I,w=g.rotation,h=g.jump,v=k(null),C=b("general.rotation"),f=k("100%");async function S(){await L(v,C)}return(r,y)=>d(w).length>0?(t(),a("div",U,[s("div",X,[s("div",Z,[m(M,{modelValue:f.value,"onUpdate:modelValue":y[0]||(y[0]=u=>f.value=u),width:"200px",label:r.$t("general.output_image_width"),variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue","label"])]),s("div",q,[m(F,{class:"ml-auto",onClick:S},{default:o(()=>[i(l(r.$t("general.download_image")),1)]),_:1})])]),s("div",{ref_key:"rotationDom",ref:v,class:"d-flex flex-column bg-grey-darken-4",style:O(`width: ${f.value};`)},[(t(!0),a(p,null,x(d(w),u=>(t(),a("div",A,[s("div",H,[s("img",{class:"resonator",src:u.resonatorSrc},null,8,J)]),s("div",K,[s("div",Q,[(t(!0),a(p,null,x(u.actions,(e,ae)=>(t(),c(P,{location:"bottom",disabled:!e.skillID&&!e.timeStart&&!e.timeEnd},{activator:o(({props:B})=>[s("div",E({id:`rotation${e.index0Based}`,class:["row d-flex flex-row align-center my-2",d(h)?"cursor-pointer":""],ref_for:!0},B,{onClick:oe=>d(G)(d($),`#${d(h)}${e.index0Based}`)}),[s("span",{class:V(e.supIndex?"":"mr-3")},l(e.name),3),e.supIndex?(t(),a("sup",{key:0,class:V(e.src?"ml-1 mr-3":"")},l(e.supIndex),3)):n("",!0),e.src?(t(),a("img",{key:1,class:"action",src:e.src},null,8,Y)):n("",!0),m(z,{icon:"mdi-menu-right",size:"x-large"})],16,R)]),default:o(()=>[m(N,null,{default:o(()=>[m(_,null,{default:o(()=>[i(l(r.$t("general.nth_row",{n:parseFloat(e.index0Based)+1})),1)]),_:2},1024),e.skillID?(t(),c(_,{key:0},{default:o(()=>[i(l(r.$t("general.resonator_skill_id"))+": "+l(e.skillID),1)]),_:2},1024)):n("",!0),e.timeStart?(t(),c(_,{key:1},{default:o(()=>[i(l(r.$t("general.time_start"))+": "+l(e.timeStart),1)]),_:2},1024)):n("",!0),e.timeEnd?(t(),c(_,{key:2},{default:o(()=>[i(l(r.$t("general.time_end"))+": "+l(e.timeEnd),1)]),_:2},1024)):n("",!0)]),_:2},1024)]),_:2},1032,["disabled"]))),256))]),s("div",ee,[(t(!0),a(p,null,x(u.comments,e=>(t(),a("div",se,[s("span",te,[s("sup",null,l(e.i),1),i(" "+l(e.text),1)])]))),256))])])]))),256))],4)])):n("",!0)}}),ue=W(le,[["__scopeId","data-v-4cd9ca29"]]);export{ue as _};

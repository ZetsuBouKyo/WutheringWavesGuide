import{d as B,aL as C,ap as S,ab as j,c as l,o as s,a as c,W as a,O as o,S as r,Y as t,aq as D,F as f,a3 as p,N as m,a4 as d,U as u,aN as N,a8 as T,a2 as i,aQ as k,n as E,M as F}from"./index-D2PA1ChH.js";import{j as z,s as L}from"./utils-DU-kJE25.js";import{V as O}from"./VTooltip-EldaYqbk.js";const q={class:"d-flex flex-column mx-1 w-100"},G={class:"d-flex flex-row justify-start py-2 w-100"},M={class:"d-flex flex-row px-4 my-2"},P=["src"],Q={class:"d-flex flex-column w-100"},U={class:"d-flex flex-wrap w-100"},W=["id","onClick"],Y=["src"],A={class:"d-flex flex-column w-100"},H={class:"comment d-flex flex-row align-center my-2 text-grey-lighten-1 w-100"},J={class:"w-100"},K=B({__name:"Rotation",props:{rotation:{type:Object,default:[]},jump:{type:String,default:""}},setup(y){const h=C(),{t:v}=S(),x=y,I=x.rotation,g=x.jump,w=j(null),V=v("general.rotation");async function b(){await L(w,V)}return(n,R)=>(s(),l("div",q,[c(D,{class:"ml-auto mb-2",onClick:b},{default:o(()=>[r(t(n.$t("general.download_image")),1)]),_:1}),a("div",{ref_key:"rotationDom",ref:w,class:"d-flex flex-column bg-grey-darken-4 w-100"},[(s(!0),l(f,null,p(i(I),_=>(s(),l("div",G,[a("div",M,[a("img",{class:"resonator",src:_.resonatorSrc},null,8,P)]),a("div",Q,[a("div",U,[(s(!0),l(f,null,p(_.actions,(e,X)=>(s(),m(O,{location:"bottom",disabled:!e.skillID&&!e.timeStart&&!e.timeEnd},{activator:o(({props:$})=>[a("div",T({id:`rotation${e.index0Based}`,class:["row d-flex flex-row align-center my-2",i(g)?"cursor-pointer":""],ref_for:!0},$,{onClick:Z=>i(z)(i(h),`#${i(g)}${e.index0Based}`)}),[a("span",{class:k(e.supIndex?"":"mr-3")},t(e.name),3),e.supIndex?(s(),l("sup",{key:0,class:k(e.src?"ml-1 mr-3":"")},t(e.supIndex),3)):d("",!0),e.src?(s(),l("img",{key:1,class:"action",src:e.src},null,8,Y)):d("",!0),c(E,{icon:"mdi-menu-right",size:"x-large"})],16,W)]),default:o(()=>[c(N,null,{default:o(()=>[c(u,null,{default:o(()=>[r(t(n.$t("general.nth_row",{n:parseFloat(e.index0Based)+1})),1)]),_:2},1024),e.skillID?(s(),m(u,{key:0},{default:o(()=>[r(t(n.$t("general.resonator_skill_id"))+": "+t(e.skillID),1)]),_:2},1024)):d("",!0),e.timeStart?(s(),m(u,{key:1},{default:o(()=>[r(t(n.$t("general.time_start"))+": "+t(e.timeStart),1)]),_:2},1024)):d("",!0),e.timeEnd?(s(),m(u,{key:2},{default:o(()=>[r(t(n.$t("general.time_end"))+": "+t(e.timeEnd),1)]),_:2},1024)):d("",!0)]),_:2},1024)]),_:2},1032,["disabled"]))),256))]),a("div",A,[(s(!0),l(f,null,p(_.comments,e=>(s(),l("div",H,[a("span",J,[a("sup",null,t(e.i),1),r(" "+t(e.text),1)])]))),256))])])]))),256))],512)]))}}),ae=F(K,[["__scopeId","data-v-5bc7ab66"]]);export{ae as _};

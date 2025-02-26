import{u as R}from"./resonator-BfpK1VIC.js";import{j as M}from"./utils-DU-kJE25.js";import{d as $,aL as C,ab as v,aK as T,af as V,N as P,o,Q as E,O as r,W as e,a as d,a4 as j,c as i,U as _,a2 as s,Y as a,F as W,a3 as F,aN as I,aP as B,aQ as w,M as b}from"./index-D2PA1ChH.js";const z={class:"d-flex flex-column align-start"},L={class:"d-flex flex-row mb-1"},O={class:"d-flex flex-column mr-4 justify-center"},Q=["src"],A={class:"d-flex flex-row"},G={class:"header"},H=["href"],K={class:"d-flex flex-row"},U={class:"header"},Y=["onClick"],q={class:"d-flex flex-row"},J={class:"header text-truncater"},X={class:"text-truncate"},Z={class:"d-flex flex-row"},ee={class:"header text-truncate"},te={class:"d-flex flex-row text-truncate"},ae={class:"text-grey-lighten-1"},se={class:"mr-4 text-truncate"},ne={key:1,class:"d-flex flex-row align-center w-100"},oe={class:"ml-4 text-truncate"},re=$({__name:"ResonatorTier",props:{title:{type:String,default:""},resonatorNo:{type:String,default:""},teamDamageDistributions:{type:Object,default:[]},isWarning:{type:Boolean,default:!0}},setup(k){const D=C(),f=k,S=f.title,g=f.teamDamageDistributions,p=f.resonatorNo,N=f.isWarning,h=R(),n=h.getNameByNo(p),m=v("white"),l=v(0);function y(){g.length>0&&(g.sort((c,x)=>{const t=c.getResonatorMaxDPS(n),u=x.getResonatorMaxDPS(n);return!t||!u?0:u-t}),l.value=parseFloat(g[0].getResonatorMaxDPS(n)))}return T(async()=>{m.value=await h.getElementEnByNo(p),y()}),V(()=>g.length,()=>{y()}),(c,x)=>(o(),P(E,null,{default:r(()=>[e("div",z,[d(_,{class:"mb-2"},{default:r(()=>[(o(),i("h1",{key:s(S)},a(s(S)),1))]),_:1}),s(N)?(o(),P(_,{key:0,class:"ma-1"},{default:r(()=>[e("h2",null,a(c.$t("resonator.damage_comparison.warning")),1)]),_:1})):j("",!0),(o(!0),i(W,null,F(s(g),(t,u)=>(o(),i("div",{class:"d-flex flex-column w-100 my-2",key:u},[e("div",L,[e("div",O,[e("img",{class:"resonator",src:s(h).getIconSrcByNo(s(p))},null,8,Q)]),d(I,null,{default:r(()=>[d(_,{class:"text-grey-darken-1"},{default:r(()=>[e("div",A,[e("span",G,a(c.$t("general.template_id"))+": ",1),e("a",{class:"text-blue-accent-1 text-decoration-none text-truncate",href:`/template/${t.getHashedTemplateID()}`},a(t.template_id),9,H)])]),_:2},1024),d(_,{class:"text-grey-darken-1"},{default:r(()=>[e("div",K,[e("span",U,a(c.$t("general.resonator_id"))+": ",1),e("div",{class:"text-blue-accent-1 text-decoration-none text-truncate cursor-pointer",onClick:le=>s(M)(s(D),`#resonator${u}`)},a(t.resonators[s(n)].resonator_id),9,Y)])]),_:2},1024),d(_,{class:"text-grey-darken-1"},{default:r(()=>[e("div",q,[e("span",J,a(c.$t("general.monster_id"))+": ",1),e("span",X,a(t.monster_id),1)])]),_:2},1024),d(_,{class:"text-grey-darken-1"},{default:r(()=>[e("div",Z,[e("span",ee,a(c.$t("general.team_dps"))+": ",1),e("div",te,[e("span",null,a(t.getMinTeamDPSString())+" ("+a(t.duration_2)+"s)",1),x[0]||(x[0]=e("span",null," ~ ",-1)),e("span",ae,a(t.getMaxTeamDPSString())+" ("+a(t.duration_1)+"s) ",1)])])]),_:2},1024)]),_:2},1024)]),(o(),i("div",{class:"d-flex flex-column align-start bg-grey-darken-4",key:l.value},[t.getResonatorMaxDPSPercentageByBasedDPS(s(n),l.value)>.5?(o(),i("div",{key:0,class:w(`barh d-flex flex-row-reverse align-center bg-${m.value}`),style:B(`width: ${t.getResonatorMaxDPSPercentageStringByBasedDPS(s(n),l.value)};`)},[e("span",se," DPS: "+a(t.getResonatorDPSString(s(n)))+" ("+a(t.getResonatorMaxDPSPercentageStringByBasedDPS(s(n),l.value))+")",1)],6)):(o(),i("div",ne,[e("div",{class:w(`barh d-flex bg-${m.value}`),style:B(`width: ${t.getResonatorMaxDPSPercentageStringByBasedDPS(s(n),l.value)};`)},null,6),e("span",oe," DPS: "+a(t.getResonatorDPSString(s(n)))+" ("+a(t.getResonatorMaxDPSPercentageStringByBasedDPS(s(n),l.value))+")",1)]))]))]))),128))])]),_:1}))}}),_e=b(re,[["__scopeId","data-v-30beaee6"]]);export{_e as _};

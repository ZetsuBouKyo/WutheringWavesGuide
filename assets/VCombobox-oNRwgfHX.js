import{d as De,c as Ae,o as Pe,a as u,aj as Ee,O as F,a6 as Re,a1 as J,a$ as Te,a2 as O,au as Me,av as Q,ah as $,b0 as Be,F as E,M as Ne,g as Oe,p as Le,ak as $e,a8 as L,ay as D,al as ae,j as h,az as Ke,am as Ue,ad as A,aG as te,aq as ne,aA as je,b as qe,n as ue,aB as ze,a5 as I,aC as He,l as Ge,ap as We,aD as Je,aE as Qe,aF as oe,b1 as Xe}from"./index-C7j9b9qh.js";import{j as Ye,k as Ze,l as el,g as ie,n as ll,o as al,h as tl,d as nl,p as ul,q as ol,r as il}from"./VDataTable-Bn5rSf9u.js";import{u as sl,t as P,a as rl,V as se}from"./VList-B5-klKDD.js";import{a as cl}from"./VAvatar-Cf_z-VoW.js";const vl={class:"text-truncate"},dl=De({__name:"Explorer",setup(e){return(d,C)=>(Pe(),Ae(E,null,[u(Be,{class:"nav position-fixed w-100"},{default:F(()=>[u(Re,{class:"mx-8 my-4"},{default:F(()=>[C[0]||(C[0]=J("a",{href:"/"},[J("img",{class:"mr-4",src:Te,height:"48px"})],-1)),J("h1",vl,O(d.$t("nav.title")),1),u(Me,{class:"ml-8","align-tabs":"start",color:"blue-accent-1"},{default:F(()=>[u(Q,{to:"/tool/simple_calculator"},{default:F(()=>[$(O(d.$t("calculation.tab.simple")),1)]),_:1}),u(Q,{to:"/tool/template_calculator"},{default:F(()=>[$(O(d.$t("calculation.tab.template")),1)]),_:1}),u(Q,{to:"/tool/rotation_builder"},{default:F(()=>[$(O(d.$t("calculation.tab.rotation")),1)]),_:1})]),_:1})]),_:1})]),_:1}),Ee(d.$slots,"default",{},void 0)],64))}}),xl=Ne(dl,[["__scopeId","data-v-97a37d72"]]);function fl(e,d,C){if(d==null)return e;if(Array.isArray(d))throw new Error("Multiple matches is not implemented");return typeof d=="number"&&~d?u(E,null,[u("span",{class:"v-combobox__unmask"},[e.substr(0,d)]),u("span",{class:"v-combobox__mask"},[e.substr(d,C)]),u("span",{class:"v-combobox__unmask"},[e.substr(d+C)])]):e}const ml=Le({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...ol({filterKeys:["title"]}),...ul({hideNoData:!0,returnObject:!0}),...Qe(il({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Je({transition:!1})},"VCombobox"),yl=Oe()({name:"VCombobox",props:ml(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,d){var Z;let{emit:C,slots:i}=d;const{t:K}=$e(),p=L(),x=D(!1),V=D(!0),U=D(!1),X=L(),j=L(),q=ae(e,"menu"),c=h({get:()=>q.value,set:l=>{var a;q.value&&!l&&((a=X.value)!=null&&a.ΨopenChildren.size)||(q.value=l)}}),s=D(-1);let z=!1;const re=h(()=>{var l;return(l=p.value)==null?void 0:l.color}),Y=h(()=>c.value?e.closeText:e.openText),{items:ce,transformIn:ve,transformOut:de}=sl(e),{textColorClasses:fe,textColorStyles:me}=Ke(re),n=ae(e,"modelValue",[],l=>ve(Ue(l)),l=>{const a=de(l);return e.multiple?a:a[0]??null}),R=Ye(e),T=h(()=>!!(e.chips||i.chip)),y=h(()=>T.value||!!i.selection),k=D(!e.multiple&&!y.value?((Z=n.value[0])==null?void 0:Z.title)??"":""),v=h({get:()=>k.value,set:l=>{var a;if(k.value=l??"",!e.multiple&&!y.value&&(n.value=[P(e,l)]),l&&e.multiple&&((a=e.delimiters)!=null&&a.length)){const r=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));r.length>1&&(r.forEach(t=>{t=t.trim(),t&&g(P(e,t))}),k.value="")}l||(s.value=-1),V.value=!l}}),be=h(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?n.value.length:v.value.length);A(k,l=>{z?ne(()=>z=!1):x.value&&!c.value&&(c.value=!0),C("update:search",l)}),A(n,l=>{var a;!e.multiple&&!y.value&&(k.value=((a=l[0])==null?void 0:a.title)??"")});const{filteredItems:M,getMatches:he}=Ze(e,ce,()=>V.value?"":v.value),_=h(()=>e.hideSelected?M.value.filter(l=>!n.value.some(a=>a.value===l.value)):M.value),ge=h(()=>n.value.map(l=>l.value)),H=h(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((a=_.value[0])==null?void 0:a.title))&&_.value.length>0&&!V.value&&!U.value}),G=h(()=>e.hideNoData&&!_.value.length||R.isReadonly.value||R.isDisabled.value),W=L(),pe=el(W,p);function xe(l){z=!0,e.openOnClear&&(c.value=!0)}function ye(){G.value||(c.value=!0)}function Ve(l){G.value||(x.value&&(l.preventDefault(),l.stopPropagation()),c.value=!c.value)}function ke(l){var a;l.key!==" "&&oe(l)&&((a=p.value)==null||a.focus())}function _e(l){var t;if(Xe(l)||R.isReadonly.value)return;const a=p.value.selectionStart,r=n.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(c.value=!0),["Escape"].includes(l.key)&&(c.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(H.value&&["Enter","Tab"].includes(l.key)&&!n.value.some(o=>{let{value:b}=o;return b===_.value[0].value})&&g(M.value[0]),V.value=!0),l.key==="ArrowDown"&&H.value&&((t=W.value)==null||t.focus("next")),l.key==="Enter"&&v.value&&(g(P(e,v.value)),y.value&&(k.value="")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&y.value&&n.value.length>0&&!v.value)return g(n.value[0],!1);if(~s.value){l.preventDefault();const o=s.value;g(n.value[s.value],!1),s.value=o>=r-1?r-2:o}else l.key==="Backspace"&&!v.value&&(s.value=r-1);return}if(e.multiple)if(l.key==="ArrowLeft"){if(s.value<0&&a>0)return;const o=s.value>-1?s.value-1:r-1;n.value[o]?s.value=o:(s.value=-1,p.value.setSelectionRange(v.value.length,v.value.length))}else if(l.key==="ArrowRight"){if(s.value<0)return;const o=s.value+1;n.value[o]?s.value=o:(s.value=-1,p.value.setSelectionRange(0,0))}else~s.value&&oe(l)&&(s.value=-1)}function Ce(){var l;e.eager&&((l=j.value)==null||l.calculateVisibleItems())}function we(){var l;x.value&&(V.value=!0,(l=p.value)==null||l.focus())}function g(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const r=n.value.findIndex(o=>(e.valueComparator||te)(o.value,l.value)),t=a??!~r;if(~r){const o=t?[...n.value,l]:[...n.value];o.splice(r,1),n.value=o}else t&&(n.value=[...n.value,l]);e.clearOnSelect&&(v.value="")}else{const r=a!==!1;n.value=r?[l]:[],k.value=r&&!y.value?l.title:"",ne(()=>{c.value=!1,V.value=!0})}}function Se(l){x.value=!0,setTimeout(()=>{U.value=!0})}function Fe(l){U.value=!1}function Ie(l){(l==null||l===""&&!e.multiple&&!y.value)&&(n.value=[])}return A(x,(l,a)=>{if(!(l||l===a)&&(s.value=-1,c.value=!1,v.value)){if(e.multiple){g(P(e,v.value));return}if(!y.value)return;n.value.some(r=>{let{title:t}=r;return t===v.value})?k.value="":g(P(e,v.value))}}),A(c,()=>{if(!e.hideSelected&&c.value&&n.value.length){const l=_.value.findIndex(a=>n.value.some(r=>(e.valueComparator||te)(r.value,a.value)));je&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=j.value)==null||a.scrollToIndex(l))})}}),A(()=>e.items,(l,a)=>{c.value||x.value&&!a.length&&l.length&&(c.value=!0)}),qe(()=>{const l=!!(!e.hideNoData||_.value.length||i["prepend-item"]||i["append-item"]||i["no-data"]),a=n.value.length>0,r=ie.filterProps(e);return u(ie,I({ref:p},r,{modelValue:v.value,"onUpdate:modelValue":[t=>v.value=t,Ie],focused:x.value,"onUpdate:focused":t=>x.value=t,validationValue:n.externalValue,counterValue:be.value,dirty:a,class:["v-combobox",{"v-combobox--active-menu":c.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!y.value,"v-combobox--selecting-index":s.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:R.isReadonly.value,placeholder:a?void 0:e.placeholder,"onClick:clear":xe,"onMousedown:control":ye,onKeydown:_e}),{...i,default:()=>u(E,null,[u(ll,I({ref:X,modelValue:c.value,"onUpdate:modelValue":t=>c.value=t,activator:"parent",contentClass:"v-combobox__content",disabled:G.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:Ce,onAfterLeave:we},e.menuProps),{default:()=>[l&&u(rl,I({ref:W,selected:ge.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:t=>t.preventDefault(),onKeydown:ke,onFocusin:Se,onFocusout:Fe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},pe,e.listProps),{default:()=>{var t,o,b;return[(t=i["prepend-item"])==null?void 0:t.call(i),!_.value.length&&!e.hideNoData&&(((o=i["no-data"])==null?void 0:o.call(i))??u(se,{key:"no-data",title:K(e.noDataText)},null)),u(al,{ref:j,renderless:!0,items:_.value},{default:w=>{var le;let{item:f,index:S,itemRef:m}=w;const ee=I(f.props,{ref:m,key:f.value,active:H.value&&S===0?!0:void 0,onClick:()=>g(f,null)});return((le=i.item)==null?void 0:le.call(i,{item:f,index:S,props:ee}))??u(se,I(ee,{role:"option"}),{prepend:B=>{let{isSelected:N}=B;return u(E,null,[e.multiple&&!e.hideSelected?u(tl,{key:f.value,modelValue:N,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&u(cl,{image:f.props.prependAvatar},null),f.props.prependIcon&&u(ue,{icon:f.props.prependIcon},null)])},title:()=>{var B,N;return V.value?f.title:fl(f.title,(B=he(f))==null?void 0:B.title,((N=v.value)==null?void 0:N.length)??0)}})}}),(b=i["append-item"])==null?void 0:b.call(i)]}})]}),n.value.map((t,o)=>{function b(m){m.stopPropagation(),m.preventDefault(),g(t,!1)}const w={"onClick:close":b,onKeydown(m){m.key!=="Enter"&&m.key!==" "||(m.preventDefault(),m.stopPropagation(),b(m))},onMousedown(m){m.preventDefault(),m.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=T.value?!!i.chip:!!i.selection,S=f?He(T.value?i.chip({item:t,index:o,props:w}):i.selection({item:t,index:o})):void 0;if(!(f&&!S))return u("div",{key:t.value,class:["v-combobox__selection",o===s.value&&["v-combobox__selection--selected",fe.value]],style:o===s.value?me.value:{}},[T.value?i.chip?u(Ge,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:t.title}}},{default:()=>[S]}):u(nl,I({key:"chip",closable:e.closableChips,size:"small",text:t.title,disabled:t.props.disabled},w),null):S??u("span",{class:"v-combobox__selection-text"},[t.title,e.multiple&&o<n.value.length-1&&u("span",{class:"v-combobox__selection-comma"},[$(",")])])])})]),"append-inner":function(){var w;for(var t=arguments.length,o=new Array(t),b=0;b<t;b++)o[b]=arguments[b];return u(E,null,[(w=i["append-inner"])==null?void 0:w.call(i,...o),(!e.hideNoData||e.items.length)&&e.menuIcon?u(ue,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:Ve,onClick:ze,"aria-label":K(Y.value),title:K(Y.value),tabindex:"-1"},null):void 0])}})}),We({isFocused:x,isPristine:V,menu:c,search:v,selectionIndex:s,filteredItems:M,select:g},p)}});export{yl as V,xl as _};

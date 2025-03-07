import{l as we,n as Se,o as Fe,g as J,p as Ie,q as De,i as Ae,d as Pe,r as Re,s as _e,t as Ee}from"./VDataTable-B6XUbenp.js";import{g as Te,p as Me,a3 as Ne,W as N,a8 as I,T as Q,j as b,av as Le,a4 as Oe,Z as D,aw as X,$ as ee,Y as Be,b as Ke,a as s,F as L,n as le,ax as Ue,a0 as F,ay as ze,l as je,S as qe,a1 as $e,az as He,am as We,aA as ae,aB as Ye}from"./index-XSzg5oUa.js";import{u as Ze,t as A,a as Ge,V as te}from"./VList-BL5UoX2Z.js";import{V as Je}from"./VAvatar-DzLpFj1Y.js";function Qe(l,g,P){if(g==null)return l;if(Array.isArray(g))throw new Error("Multiple matches is not implemented");return typeof g=="number"&&~g?s(L,null,[s("span",{class:"v-combobox__unmask"},[l.substr(0,g)]),s("span",{class:"v-combobox__mask"},[l.substr(g,P)]),s("span",{class:"v-combobox__unmask"},[l.substr(g+P)])]):l}const Xe=Me({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,..._e({filterKeys:["title"]}),...Re({hideNoData:!0,returnObject:!0}),...We(Ee({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...He({transition:!1})},"VCombobox"),ul=Te()({name:"VCombobox",props:Xe(),emits:{"update:focused":l=>!0,"update:modelValue":l=>!0,"update:search":l=>!0,"update:menu":l=>!0},setup(l,g){var Y;let{emit:P,slots:o}=g;const{t:O}=Ne(),x=N(),y=I(!1),p=I(!0),B=I(!1),H=N(),K=N(),U=Q(l,"menu"),c=b({get:()=>U.value,set:e=>{var a;U.value&&!e&&((a=H.value)!=null&&a.ΨopenChildren.size)||(U.value=e)}}),i=I(-1);let z=!1;const ue=b(()=>{var e;return(e=x.value)==null?void 0:e.color}),W=b(()=>c.value?l.closeText:l.openText),{items:ne,transformIn:oe,transformOut:ie}=Ze(l),{textColorClasses:se,textColorStyles:re}=Le(ue),u=Q(l,"modelValue",[],e=>oe(Oe(e)),e=>{const a=ie(e);return l.multiple?a:a[0]??null}),R=we(l),_=b(()=>!!(l.chips||o.chip)),V=b(()=>_.value||!!o.selection),k=I(!l.multiple&&!V.value?((Y=u.value[0])==null?void 0:Y.title)??"":""),v=b({get:()=>k.value,set:e=>{var a;if(k.value=e??"",!l.multiple&&!V.value&&(u.value=[A(l,e)]),e&&l.multiple&&((a=l.delimiters)!=null&&a.length)){const r=e.split(new RegExp(`(?:${l.delimiters.join("|")})+`));r.length>1&&(r.forEach(t=>{t=t.trim(),t&&h(A(l,t))}),k.value="")}e||(i.value=-1),p.value=!e}}),ce=b(()=>typeof l.counterValue=="function"?l.counterValue(u.value):typeof l.counterValue=="number"?l.counterValue:l.multiple?u.value.length:v.value.length);D(k,e=>{z?ee(()=>z=!1):y.value&&!c.value&&(c.value=!0),P("update:search",e)}),D(u,e=>{var a;!l.multiple&&!V.value&&(k.value=((a=e[0])==null?void 0:a.title)??"")});const{filteredItems:E,getMatches:ve}=Se(l,ne,()=>p.value?"":v.value),C=b(()=>l.hideSelected?E.value.filter(e=>!u.value.some(a=>a.value===e.value)):E.value),de=b(()=>u.value.map(e=>e.value)),j=b(()=>{var a;return(l.autoSelectFirst===!0||l.autoSelectFirst==="exact"&&v.value===((a=C.value[0])==null?void 0:a.title))&&C.value.length>0&&!p.value&&!B.value}),q=b(()=>l.hideNoData&&!C.value.length||R.isReadonly.value||R.isDisabled.value),$=N(),fe=Fe($,x);function me(e){z=!0,l.openOnClear&&(c.value=!0)}function be(){q.value||(c.value=!0)}function he(e){q.value||(y.value&&(e.preventDefault(),e.stopPropagation()),c.value=!c.value)}function ge(e){var a;e.key!==" "&&ae(e)&&((a=x.value)==null||a.focus())}function xe(e){var t;if(Ye(e)||R.isReadonly.value)return;const a=x.value.selectionStart,r=u.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(e.key)&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(c.value=!0),["Escape"].includes(e.key)&&(c.value=!1),["Enter","Escape","Tab"].includes(e.key)&&(j.value&&["Enter","Tab"].includes(e.key)&&!u.value.some(n=>{let{value:m}=n;return m===C.value[0].value})&&h(E.value[0]),p.value=!0),e.key==="ArrowDown"&&j.value&&((t=$.value)==null||t.focus("next")),e.key==="Enter"&&v.value&&(h(A(l,v.value)),V.value&&(k.value="")),["Backspace","Delete"].includes(e.key)){if(!l.multiple&&V.value&&u.value.length>0&&!v.value)return h(u.value[0],!1);if(~i.value){e.preventDefault();const n=i.value;h(u.value[i.value],!1),i.value=n>=r-1?r-2:n}else e.key==="Backspace"&&!v.value&&(i.value=r-1);return}if(l.multiple)if(e.key==="ArrowLeft"){if(i.value<0&&a>0)return;const n=i.value>-1?i.value-1:r-1;u.value[n]?i.value=n:(i.value=-1,x.value.setSelectionRange(v.value.length,v.value.length))}else if(e.key==="ArrowRight"){if(i.value<0)return;const n=i.value+1;u.value[n]?i.value=n:(i.value=-1,x.value.setSelectionRange(0,0))}else~i.value&&ae(e)&&(i.value=-1)}function ye(){var e;l.eager&&((e=K.value)==null||e.calculateVisibleItems())}function Ve(){var e;y.value&&(p.value=!0,(e=x.value)==null||e.focus())}function h(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!e||e.props.disabled))if(l.multiple){const r=u.value.findIndex(n=>(l.valueComparator||X)(n.value,e.value)),t=a??!~r;if(~r){const n=t?[...u.value,e]:[...u.value];n.splice(r,1),u.value=n}else t&&(u.value=[...u.value,e]);l.clearOnSelect&&(v.value="")}else{const r=a!==!1;u.value=r?[e]:[],k.value=r&&!V.value?e.title:"",ee(()=>{c.value=!1,p.value=!0})}}function pe(e){y.value=!0,setTimeout(()=>{B.value=!0})}function ke(e){B.value=!1}function Ce(e){(e==null||e===""&&!l.multiple&&!V.value)&&(u.value=[])}return D(y,(e,a)=>{if(!(e||e===a)&&(i.value=-1,c.value=!1,v.value)){if(l.multiple){h(A(l,v.value));return}if(!V.value)return;u.value.some(r=>{let{title:t}=r;return t===v.value})?k.value="":h(A(l,v.value))}}),D(c,()=>{if(!l.hideSelected&&c.value&&u.value.length){const e=C.value.findIndex(a=>u.value.some(r=>(l.valueComparator||X)(r.value,a.value)));Be&&window.requestAnimationFrame(()=>{var a;e>=0&&((a=K.value)==null||a.scrollToIndex(e))})}}),D(()=>l.items,(e,a)=>{c.value||y.value&&!a.length&&e.length&&(c.value=!0)}),Ke(()=>{const e=!!(!l.hideNoData||C.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),a=u.value.length>0,r=J.filterProps(l);return s(J,F({ref:x},r,{modelValue:v.value,"onUpdate:modelValue":[t=>v.value=t,Ce],focused:y.value,"onUpdate:focused":t=>y.value=t,validationValue:u.externalValue,counterValue:ce.value,dirty:a,class:["v-combobox",{"v-combobox--active-menu":c.value,"v-combobox--chips":!!l.chips,"v-combobox--selection-slot":!!V.value,"v-combobox--selecting-index":i.value>-1,[`v-combobox--${l.multiple?"multiple":"single"}`]:!0},l.class],style:l.style,readonly:R.isReadonly.value,placeholder:a?void 0:l.placeholder,"onClick:clear":me,"onMousedown:control":be,onKeydown:xe}),{...o,default:()=>s(L,null,[s(Ie,F({ref:H,modelValue:c.value,"onUpdate:modelValue":t=>c.value=t,activator:"parent",contentClass:"v-combobox__content",disabled:q.value,eager:l.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterEnter:ye,onAfterLeave:Ve},l.menuProps),{default:()=>[e&&s(Ge,F({ref:$,selected:de.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:t=>t.preventDefault(),onKeydown:ge,onFocusin:pe,onFocusout:ke,tabindex:"-1","aria-live":"polite",color:l.itemColor??l.color},fe,l.listProps),{default:()=>{var t,n,m;return[(t=o["prepend-item"])==null?void 0:t.call(o),!C.value.length&&!l.hideNoData&&(((n=o["no-data"])==null?void 0:n.call(o))??s(te,{key:"no-data",title:O(l.noDataText)},null)),s(De,{ref:K,renderless:!0,items:C.value},{default:w=>{var G;let{item:d,index:S,itemRef:f}=w;const Z=F(d.props,{ref:f,key:d.value,active:j.value&&S===0?!0:void 0,onClick:()=>h(d,null)});return((G=o.item)==null?void 0:G.call(o,{item:d,index:S,props:Z}))??s(te,F(Z,{role:"option"}),{prepend:T=>{let{isSelected:M}=T;return s(L,null,[l.multiple&&!l.hideSelected?s(Ae,{key:d.value,modelValue:M,ripple:!1,tabindex:"-1"},null):void 0,d.props.prependAvatar&&s(Je,{image:d.props.prependAvatar},null),d.props.prependIcon&&s(le,{icon:d.props.prependIcon},null)])},title:()=>{var T,M;return p.value?d.title:Qe(d.title,(T=ve(d))==null?void 0:T.title,((M=v.value)==null?void 0:M.length)??0)}})}}),(m=o["append-item"])==null?void 0:m.call(o)]}})]}),u.value.map((t,n)=>{function m(f){f.stopPropagation(),f.preventDefault(),h(t,!1)}const w={"onClick:close":m,onKeydown(f){f.key!=="Enter"&&f.key!==" "||(f.preventDefault(),f.stopPropagation(),m(f))},onMousedown(f){f.preventDefault(),f.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},d=_.value?!!o.chip:!!o.selection,S=d?ze(_.value?o.chip({item:t,index:n,props:w}):o.selection({item:t,index:n})):void 0;if(!(d&&!S))return s("div",{key:t.value,class:["v-combobox__selection",n===i.value&&["v-combobox__selection--selected",se.value]],style:n===i.value?re.value:{}},[_.value?o.chip?s(je,{key:"chip-defaults",defaults:{VChip:{closable:l.closableChips,size:"small",text:t.title}}},{default:()=>[S]}):s(Pe,F({key:"chip",closable:l.closableChips,size:"small",text:t.title,disabled:t.props.disabled},w),null):S??s("span",{class:"v-combobox__selection-text"},[t.title,l.multiple&&n<u.value.length-1&&s("span",{class:"v-combobox__selection-comma"},[qe(",")])])])})]),"append-inner":function(){var w;for(var t=arguments.length,n=new Array(t),m=0;m<t;m++)n[m]=arguments[m];return s(L,null,[(w=o["append-inner"])==null?void 0:w.call(o,...n),(!l.hideNoData||l.items.length)&&l.menuIcon?s(le,{class:"v-combobox__menu-icon",icon:l.menuIcon,onMousedown:he,onClick:Ue,"aria-label":O(W.value),title:O(W.value),tabindex:"-1"},null):void 0])}})}),$e({isFocused:y,isPristine:p,menu:c,search:v,selectionIndex:i,filteredItems:E,select:h},x)}});export{ul as V};

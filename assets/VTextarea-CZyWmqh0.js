import{V as W,m as ue}from"./VOverlay-CL9re2XM.js";import{g as q,p as J,al as K,aI as ie,a8 as F,aJ as Q,aA as re,ad as w,aq as B,b as X,a5 as b,a as i,l as se,ap as Y,aK as ce,j as A,ay as de,aL as fe,a0 as ve,ao as me,F as L,w as j,k as ge,aM as xe,aN as he,aO as Ve,ar as we}from"./index-C7j9b9qh.js";import{s as ye,u as Pe,a as $,f as Ee,b as Fe,c as be,m as Ce,e as Ie}from"./VDataTable-Bn5rSf9u.js";import{I as Se}from"./VAvatar-Cf_z-VoW.js";const Re=J({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ue({origin:"center center",scrollStrategy:"block",transition:{component:ye},zIndex:2400})},"VDialog"),Me=q()({name:"VDialog",props:Re(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,D){let{emit:y,slots:h}=D;const l=K(e,"modelValue"),{scopeId:r}=ie(),a=F();function C(o){var s,m;const d=o.relatedTarget,v=o.target;if(d!==v&&((s=a.value)!=null&&s.contentEl)&&((m=a.value)!=null&&m.globalTop)&&![document,a.value.contentEl].includes(v)&&!a.value.contentEl.contains(v)){const n=ce(a.value.contentEl);if(!n.length)return;const V=n[0],I=n[n.length-1];d===V?I.focus():V.focus()}}Q(()=>{document.removeEventListener("focusin",C)}),re&&w(()=>l.value&&e.retainFocus,o=>{o?document.addEventListener("focusin",C):document.removeEventListener("focusin",C)},{immediate:!0});function H(){var o;y("afterEnter"),(o=a.value)!=null&&o.contentEl&&!a.value.contentEl.contains(document.activeElement)&&a.value.contentEl.focus({preventScroll:!0})}function M(){y("afterLeave")}return w(l,async o=>{var d;o||(await B(),(d=a.value.activatorEl)==null||d.focus({preventScroll:!0}))}),X(()=>{const o=W.filterProps(e),d=b({"aria-haspopup":"dialog"},e.activatorProps),v=b({tabindex:-1},e.contentProps);return i(W,b({ref:a,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},o,{modelValue:l.value,"onUpdate:modelValue":s=>l.value=s,"aria-modal":"true",activatorProps:d,contentProps:v,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:H,onAfterLeave:M},r),{activator:h.activator,default:function(){for(var s=arguments.length,m=new Array(s),n=0;n<s;n++)m[n]=arguments[n];return i(se,{root:"VDialog"},{default:()=>{var V;return[(V=h.default)==null?void 0:V.call(h,...m)]}})}})}),Y({},a)}}),ke=J({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ie(),...Ce()},"VTextarea"),Ne=q()({name:"VTextarea",directives:{Intersect:Se},inheritAttrs:!1,props:ke(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:y,emit:h,slots:l}=D;const r=K(e,"modelValue"),{isFocused:a,focus:C,blur:H}=Pe(e),M=A(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),o=A(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function d(t,c){var u,f;!e.autofocus||!t||(f=(u=c[0].target)==null?void 0:u.focus)==null||f.call(u)}const v=F(),s=F(),m=de(""),n=F(),V=A(()=>e.persistentPlaceholder||a.value||e.active);function I(){var t;n.value!==document.activeElement&&((t=n.value)==null||t.focus()),a.value||C()}function Z(t){I(),h("click:control",t)}function p(t){h("mousedown:control",t)}function ee(t){t.stopPropagation(),I(),B(()=>{r.value="",we(e["onClick:clear"],t)})}function te(t){var u;const c=t.target;if(r.value=c.value,(u=e.modelModifiers)!=null&&u.trim){const f=[c.selectionStart,c.selectionEnd];B(()=>{c.selectionStart=f[0],c.selectionEnd=f[1]})}}const P=F(),S=F(+e.rows),N=A(()=>["plain","underlined"].includes(e.variant));fe(()=>{e.autoGrow||(S.value=+e.rows)});function E(){e.autoGrow&&B(()=>{if(!P.value||!s.value)return;const t=getComputedStyle(P.value),c=getComputedStyle(s.value.$el),u=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),f=P.value.scrollHeight,R=parseFloat(t.lineHeight),T=Math.max(parseFloat(e.rows)*R+u,parseFloat(c.getPropertyValue("--v-input-control-height"))),z=parseFloat(e.maxRows)*R+u||1/0,x=Ve(f??0,T,z);S.value=Math.floor((x-u)/R),m.value=he(x)})}ve(E),w(r,E),w(()=>e.rows,E),w(()=>e.maxRows,E),w(()=>e.density,E);let g;return w(P,t=>{t?(g=new ResizeObserver(E),g.observe(P.value)):g==null||g.disconnect()}),Q(()=>{g==null||g.disconnect()}),X(()=>{const t=!!(l.counter||e.counter||e.counterValue),c=!!(t||l.details),[u,f]=me(y),{modelValue:R,...T}=$.filterProps(e),z=Ee(e);return i($,b({ref:v,modelValue:r.value,"onUpdate:modelValue":x=>r.value=x,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":N.value},e.class],style:e.style},u,T,{centerAffix:S.value===1&&!N.value,focused:a.value}),{...l,default:x=>{let{id:k,isDisabled:O,isDirty:G,isReadonly:ae,isValid:ne}=x;return i(be,b({ref:s,style:{"--v-textarea-control-height":m.value},onClick:Z,onMousedown:p,"onClick:clear":ee,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},z,{id:k.value,active:V.value||G.value,centerAffix:S.value===1&&!N.value,dirty:G.value||e.dirty,disabled:O.value,focused:a.value,error:ne.value===!1}),{...l,default:le=>{let{props:{class:U,..._}}=le;return i(L,null,[e.prefix&&i("span",{class:"v-text-field__prefix"},[e.prefix]),j(i("textarea",b({ref:n,class:U,value:r.value,onInput:te,autofocus:e.autofocus,readonly:ae.value,disabled:O.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:I,onBlur:H},_,f),null),[[ge("intersect"),{handler:d},null,{once:!0}]]),e.autoGrow&&j(i("textarea",{class:[U,"v-textarea__sizer"],id:`${_.id}-sizer`,"onUpdate:modelValue":oe=>r.value=oe,ref:P,readonly:!0,"aria-hidden":"true"},null),[[xe,r.value]]),e.suffix&&i("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:c?x=>{var k;return i(L,null,[(k=l.details)==null?void 0:k.call(l,x),t&&i(L,null,[i("span",null,null),i(Fe,{active:e.persistentCounter||a.value,value:M.value,max:o.value,disabled:e.disabled},l.counter)])])}:void 0})}),Y({},v,s,n)}});export{Me as V,Ne as a};

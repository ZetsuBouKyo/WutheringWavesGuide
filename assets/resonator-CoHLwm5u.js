var W=Object.defineProperty;var X=(s,e,t)=>e in s?W(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>X(s,typeof e!="symbol"?e+"":e,t);import{al as z}from"./index-DkUckFSw.js";import{g as T,a as J}from"./utils-CBNJlnqw.js";/*!
  * mande v2.0.8
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */function Q(s){let e=Object.keys(s).map(t=>[t,s[t]].map(encodeURIComponent).join("=")).join("&");return e?"?"+e:""}let Z=/^\/+/;function ee(s,e){return s+(e&&(s.endsWith("/")?e.replace(Z,""):e.startsWith("/")?e:"/"+e))}function te(s){return Object.keys(s).reduce((e,t)=>(s[t]!=null&&(e[t]=s[t]),e),{})}const y={responseAs:"json",headers:{Accept:"application/json"},stringify:JSON.stringify};function se(s,e={},t){function i(u,l,r,E={}){let c,A;typeof l=="object"?(c="",E=r||l||{},A=l):(c=l,A=r);let f={...y,...N,method:u,...E,headers:te({"Content-Type":A instanceof FormData?null:"application/json",...y.headers,...N.headers,...E.headers})},q={...y.query,...N.query,...E.query},{responseAs:I}=f;c=ee(s,typeof c=="number"?""+c:c||""),c+=Q(q),u[0]==="P"&&A&&!f.body&&(f.body=A instanceof FormData?A:f.stringify(A));const R=typeof fetch<"u"?fetch:t;if(!R)throw new Error("No fetch function exists. Make sure to include a polyfill on Node.js.");return R(c,f).then(m=>Promise.all([m,I==="response"?m:m[I]().catch(()=>null)])).then(([m,g])=>{if(m.status>=200&&m.status<300)return I!=="response"&&m.status==204?null:g;let d=new Error(m.statusText);throw d.response=m,d.body=g,d})}const N={query:{},headers:{},...e};return{options:N,post:i.bind(null,"POST"),put:i.bind(null,"PUT"),patch:i.bind(null,"PATCH"),get:(u,l)=>i("GET",u,null,l),delete:(u,l)=>i("DELETE",u,null,l)}}const ne={ATTR:"基礎屬性"},me={SKILL_DMG_ADDITION:"skill_dmg_addition",MAGNIFIER:"magnifier",AMPLIFIER:"amplifier",BONUS:"bonus",HP_P:"hp_p",HP:"hp",ATK_P:"atk_p",ATK:"atk",DEF_P:"def_p",DEF:"def",CRIT_RATE:"crit_rate",CRIT_DMG:"crit_dmg",IGNORE_DEF:"ignore_def",REDUCE_RES:"reduce_res"},_={SKILL_DMG_ADDITION:"招式倍率",MAGNIFIER:"倍率",AMPLIFIER:"加深",BONUS:"加成",HP_P:"生命百分比",HP:"生命",ATK_P:"攻擊百分比",ATK:"攻擊",DEF_P:"防禦百分比",DEF:"防禦",CRIT_RATE:"暴擊",CRIT_DMG:"暴擊傷害",IGNORE_DEF:"忽視防禦",REDUCE_RES:"抗性降低"},O={GLACIO:"冷凝",FUSION:"熱熔",ELECTRO:"導電",AERO:"氣動",SPECTRO:"衍射",HAVOC:"湮滅"},o={BASIC:"普攻",HEAVY:"重擊",SKILL:"共鳴技能",LIBERATION:"共鳴解放",INTRO:"變奏",OUTRO:"延奏",ECHO:"聲骸",COORDINATED_ATTACK:"協同攻擊",NONE:"無"},Ae={HP:"生",ATK:"攻",DEF:"防",CRIT_RATE:"暴",CRIT_DMG:"暴傷",ENERGY_REGEN:"共效",BONUS_HEALING:"治"},a={CRIT_RATE:"crit_rate",CRIT_DMG:"crit_dmg",HP:"hp",HP_P:"hp_p",ATK:"atk",ATK_P:"atk_p",DEF:"def",DEF_P:"def_p",ENERGY_REGEN:"energy_regen",BONUS_PHYSICS:"bonus_physics",BONUS_GLACIO:"bonus_glacio",BONUS_FUSION:"bonus_fusion",BONUS_ELECTRO:"bonus_electro",BONUS_AERO:"bonus_aero",BONUS_SPECTRO:"bonus_spectro",BONUS_HAVOC:"bonus_havoc",BONUS_RESONANCE_SKILL:"bonus_resonance_skill",BONUS_BASIC_ATTACK:"bonus_basic_attack",BONUS_HEAVY_ATTACK:"bonus_heavy_attack",BONUS_RESONANCE_LIBERATION:"bonus_resonance_liberation",BONUS_HEALING:"bonus_healing"},Oe={CRIT_RATE:"暴擊",CRIT_DMG:"暴擊傷害",HP:"生命",HP_P:"生命百分比",ATK:"攻擊",ATK_P:"攻擊百分比",DEF:"防禦",DEF_P:"防禦百分比",ENERGY_REGEN:"共鳴效率",BONUS_PHYSICS:"物理傷害加成",BONUS_GLACIO:"冷凝傷害加成",BONUS_FUSION:"熱熔傷害加成",BONUS_ELECTRO:"導電傷害加成",BONUS_AERO:"氣動傷害加成",BONUS_SPECTRO:"衍射傷害加成",BONUS_HAVOC:"湮滅傷害加成",BONUS_RESONANCE_SKILL:"共鳴技能傷害加成",BONUS_BASIC_ATTACK:"普攻傷害加成",BONUS_HEAVY_ATTACK:"重擊傷害加成",BONUS_RESONANCE_LIBERATION:"共鳴解放傷害加成",BONUS_HEALING:"治療效果加成"},ae={BASE:"基礎",ATTR:ne.ATTR,RESONATOR:"共鳴者",ECHO:"聲骸",MONSTER:"怪物",SONATA:"合鳴",STAT:"屬性加成",MANUAL:"手動"},fe={PASSIVE:"被動",TUNE:"諧振",MAIN_SLOT:"首位裝配",MAIN_AFFIX:"主詞條",SUB_AFFIX:"副詞條"},ie={HP:"生命",ATK:"攻擊",DEF:"防禦"},S={NORMAL_ATTACK:"常態攻擊",RESONANCE_SKILL:"共鳴技能",FORTE_CIRCUIT:"共鳴回路",RESONANCE_LIBERATION:"共鳴解放",INTRO_SKILL:"變奏技能"};class re{constructor(){n(this,"id","");n(this,"category","");n(this,"source","");n(this,"suffix","");n(this,"type","");n(this,"value","");n(this,"stack","");n(this,"duration","");n(this,"target","");n(this,"element","");n(this,"skill_bonus_type","")}getId(){let e=this.type;e?this.element?this.skill_bonus_type?e=o.NONE:e=this.element:this.skill_bonus_type?e=this.skill_bonus_type:e=this.type:e=o.NONE;let t;return this.target?t=`[${e}-${this.target}]`:t=`[${e}]`,this.source&&(t=`${t}${this.source}`),this.suffix&&(t=`${t}-${this.suffix}`),t}updateId(){this.id=this.getId()}}var b,k,p,C,h,U,L,P,K,D,H,F,G,w,M,$,v,V,j,Y,x;x=a.CRIT_RATE,Y=a.CRIT_DMG,j=a.HP,V=a.HP_P,v=a.ATK,$=a.ATK_P,M=a.DEF,w=a.DEF_P,G=a.ENERGY_REGEN,F=a.BONUS_PHYSICS,H=a.BONUS_GLACIO,D=a.BONUS_FUSION,K=a.BONUS_ELECTRO,P=a.BONUS_AERO,L=a.BONUS_SPECTRO,U=a.BONUS_HAVOC,h=a.BONUS_RESONANCE_SKILL,C=a.BONUS_BASIC_ATTACK,p=a.BONUS_HEAVY_ATTACK,k=a.BONUS_RESONANCE_LIBERATION,b=a.BONUS_HEALING;class le{constructor(){n(this,x,"");n(this,Y,"");n(this,j,"");n(this,V,"");n(this,v,"");n(this,$,"");n(this,M,"");n(this,w,"");n(this,G,"");n(this,F,"");n(this,H,"");n(this,D,"");n(this,K,"");n(this,P,"");n(this,L,"");n(this,U,"");n(this,h,"");n(this,C,"");n(this,p,"");n(this,k,"");n(this,b,"")}addStatBuff(e){Object.values(a).forEach(i=>{const N=T(this[i]),u=T(e[i]);this[i]=T(N+u).toString()})}getKeys(){const e=[];return Object.values(a).forEach(t=>{const i=this[t];T(i)>0&&e.push(t)}),e}getRowBuffs(e){const t=[];return this.getKeys().forEach(N=>{const u=T(this[N]);if(u===0)return;const l=new re;l.category=ae.STAT,l.stack="1",l.value=u.toString(),e?l.source=`${e}-${l.category}`:l.source=l.category;let r="",E="",c="";switch(N){case a.CRIT_RATE:r=_.CRIT_RATE;break;case a.CRIT_DMG:r=_.CRIT_DMG;break;case a.HP:r=_.HP;break;case a.HP_P:r=_.HP_P;break;case a.ATK:r=_.ATK;break;case a.ATK_P:r=_.ATK_P;break;case a.DEF:r=_.DEF;break;case a.DEF_P:r=_.DEF_P;break;case a.BONUS_GLACIO:r=_.BONUS,E=O.GLACIO;break;case a.BONUS_FUSION:r=_.BONUS,E=O.FUSION;break;case a.BONUS_ELECTRO:r=_.BONUS,E=O.ELECTRO;break;case a.BONUS_AERO:r=_.BONUS,E=O.AERO;break;case a.BONUS_SPECTRO:r=_.BONUS,E=O.SPECTRO;break;case a.BONUS_HAVOC:r=_.BONUS,E=O.HAVOC;break;case a.BONUS_RESONANCE_SKILL:r=_.BONUS,c=o.SKILL;break;case a.BONUS_BASIC_ATTACK:r=_.BONUS,c=o.BASIC;break;case a.BONUS_HEAVY_ATTACK:r=_.BONUS,c=o.HEAVY;break;case a.BONUS_RESONANCE_LIBERATION:r=_.BONUS,c=o.LIBERATION;break;default:return}l.type=r,l.element=E,l.skill_bonus_type=c,l.updateId(),t.push(l)}),t}}function Te(){return[...Object.values(O),o.BASIC,o.HEAVY,o.SKILL,o.LIBERATION,o.INTRO,o.OUTRO,o.ECHO,o.COORDINATED_ATTACK]}class _e{constructor(e){n(this,"no","");n(this,"name","");n(this,"rank","");n(this,"is_permanent");n(this,"stat_bonus",new le);n(this,"element_zh_tw","");n(this,"element_en","");n(this,"attrs",[]);n(this,"skills",[]);n(this,"skill_infos",{});Object.assign(this,e)}getHp(e){const t=this.attrs;for(const i of t)if(i.lv===e)return i.hp;return""}getAtk(e){const t=this.attrs;for(const i of t)if(i.lv===e)return i.atk;return""}getDef(e){const t=this.attrs;for(const i of t)if(i.lv===e)return i.def;return""}getHtmlInfoBySkillType(e){let t="",i="";switch(e){case S.NORMAL_ATTACK:t=`【${S.NORMAL_ATTACK}】${this.skill_infos.normal_attack.name}<br /><br />`,i=this.skill_infos.normal_attack.description.replace(/\n/g,"<br />");break;case S.RESONANCE_SKILL:t=`【${S.RESONANCE_SKILL}】${this.skill_infos.resonance_skill.name}<br /><br />`,i=this.skill_infos.resonance_skill.description.replace(/\n/g,"<br />");break;case S.FORTE_CIRCUIT:t=`【${S.FORTE_CIRCUIT}】${this.skill_infos.forte_circuit.name}<br /><br />`,i=this.skill_infos.forte_circuit.description.replace(/\n/g,"<br />");break;case S.RESONANCE_LIBERATION:t=`【${S.RESONANCE_LIBERATION}】${this.skill_infos.resonance_liberation.name}<br /><br />`,i=this.skill_infos.resonance_liberation.description.replace(/\n/g,"<br />");break;case S.INTRO_SKILL:t=`【${S.INTRO_SKILL}】${this.skill_infos.intro_skill.name}<br /><br />`,i=this.skill_infos.intro_skill.description.replace(/\n/g,"<br />");break;default:return""}return t+i}getDamageSkillItems(){const e=[];return this.skills.forEach(i=>{if(i.id&&i.type==="Damage"){const N=i.skill_type;i.tooltip=this.getHtmlInfoBySkillType(N),e.push({title:i.id,value:i})}}),e}}function Ie(){return Object.values(ie)}function de(){return[o.SKILL,o.BASIC,o.HEAVY,o.LIBERATION]}const oe=[{id:"五星 輝螢軍勢-1",element:"冷凝",base_attr:"攻擊",skill_type:"聲骸",dmg:"200.16%"},{id:"五星 輝螢軍勢-2",element:"冷凝",base_attr:"攻擊",skill_type:"聲骸",dmg:"200.16%"},{id:"五星 輝螢軍勢-3",element:"冷凝",base_attr:"攻擊",skill_type:"聲骸",dmg:"266.88%"},{id:"五星 輝螢軍勢",element:"冷凝",base_attr:"攻擊",skill_type:"聲骸",dmg:"667.20%"},{id:"五星 角-1",element:"衍射",base_attr:"攻擊",skill_type:"聲骸",dmg:"48.86%"},{id:"五星 角-2",element:"衍射",base_attr:"攻擊",skill_type:"聲骸",dmg:"19.46%"},{id:"五星 角-3",element:"衍射",base_attr:"攻擊",skill_type:"聲骸",dmg:"48.86%"},{id:"五星 角-4",element:"衍射",base_attr:"攻擊",skill_type:"共鳴技能",dmg:"16.00%"},{id:"五星 角",element:"衍射",base_attr:"攻擊",skill_type:"聲骸",dmg:"243.44%"},{id:"五星 角 光陰之祝",element:"衍射",base_attr:"攻擊",skill_type:"共鳴技能",dmg:"240.00%"},{id:"五星 燎照之騎-1",element:"熱熔",base_attr:"攻擊",skill_type:"聲骸",dmg:"242.40%"},{id:"五星 燎照之騎-2",element:"熱熔",base_attr:"攻擊",skill_type:"聲骸",dmg:"282.80%"},{id:"五星 燎照之騎-3",element:"熱熔",base_attr:"攻擊",skill_type:"聲骸",dmg:"282.80%"},{id:"五星 飛廉之猩-1",element:"氣動",base_attr:"攻擊",skill_type:"聲骸",dmg:"231.84%"},{id:"五星 飛廉之猩-2",element:"氣動",base_attr:"攻擊",skill_type:"聲骸",dmg:"283.36%"},{id:"五星 聚械機偶-1",element:"導電",base_attr:"攻擊",skill_type:"聲骸",dmg:"48.64%"},{id:"五星 聚械機偶-2",element:"導電",base_attr:"攻擊",skill_type:"聲骸",dmg:"320.00%"},{id:"五星 聚械機偶-3",element:"導電",base_attr:"攻擊",skill_type:"聲骸",dmg:"160.00%"},{id:"五星 雲閃之鱗-1",element:"導電",base_attr:"攻擊",skill_type:"聲骸",dmg:"132.61%"},{id:"五星 雲閃之鱗-2",element:"導電",base_attr:"攻擊",skill_type:"聲骸",dmg:"189.44%"},{id:"五星 雲閃之鱗-3",element:"導電",base_attr:"攻擊",skill_type:"聲骸",dmg:"31.57%"},{id:"五星 朔雷之鱗-1",element:"導電",base_attr:"攻擊",skill_type:"聲骸",dmg:"102.48%"},{id:"五星 朔雷之鱗-2",element:"導電",base_attr:"攻擊",skill_type:"聲骸",dmg:"175.68%"},{id:"五星 無常凶鷺-1",element:"湮滅",base_attr:"攻擊",skill_type:"聲骸",dmg:"310.56%"},{id:"五星 無常凶鷺-2",element:"湮滅",base_attr:"攻擊",skill_type:"聲骸",dmg:"55.73%"},{id:"五星 鳴鐘之龜",element:"冷凝",base_attr:"防禦",skill_type:"聲骸",dmg:"145.92%"},{id:"五星 無歸的謬誤-1",element:"衍射",base_attr:"生命",skill_type:"聲骸",dmg:"15.86%"},{id:"五星 無歸的謬誤-2",element:"衍射",base_attr:"生命",skill_type:"聲骸",dmg:"1.58%"},{id:"五星 無歸的謬誤-3",element:"衍射",base_attr:"生命",skill_type:"聲骸",dmg:"19.82%"},{id:"五星 無妄者-1",element:"湮滅",base_attr:"攻擊",skill_type:"聲骸",dmg:"54.08%"},{id:"五星 無妄者-2",element:"湮滅",base_attr:"攻擊",skill_type:"聲骸",dmg:"270.40%"},{id:"五星 異構武裝-1",element:"冷凝",base_attr:"攻擊",skill_type:"聲骸",dmg:"405.00%"}],B={散華:"1102",白芷:"1103",凌陽:"1104",折枝:"1105",釉瑚:"1106",珂萊塔:"1107",熾霞:"1202",安可:"1203",莫特斐:"1204",長離:"1205",布蘭特:"1206",卡卡羅:"1301",吟霖:"1302",淵武:"1303",今汐:"1304",相里要:"1305",秧秧:"1402",秋水:"1403",忌炎:"1404",鑒心:"1405","漂泊者·衍射(男)":"1501","漂泊者·衍射(女)":"1502",維里奈:"1503",守岸人:"1505",菲比:"1506",桃祈:"1601",丹瑾:"1602",椿:"1603","漂泊者·湮滅(女)":"1604","漂泊者·湮滅(男)":"1605",洛可可:"1606"},ce=[];function Ee(){const s=[];return oe.forEach(e=>{s.push({title:e.id,value:e})}),s}const ye=z("resonator",{state:()=>({}),actions:{getNames(s=!1){const e=Object.keys(B);if(s===!0)return e;const t=[];return e.forEach(i=>{ce.includes(i)||t.push(i)}),t},getChains(){return new Array("1","2","3","4","5","6")},getLevels(){return new Array("1","20","20+","40","40+","50","50+","60","60+","70","70+","80","80+","90")},getSkillLevels(){return new Array("1","2","3","4","5","6","7","8","9","10")},getNoByName(s){return B[s]},getNameByNo(s){return J(B,s)},getIconSrcByNo(s){return`/assets/resonators/${s}/icon.png`},getIconSrcByName(s){const e=this.getNoByName(s);return this.getIconSrcByNo(e)},async getInfoByNo(s){try{const e=se(`/data/resonators/${s}/info.json`);return new _e(await e.get())}catch(e){throw e}},async getInfoByName(s){const e=this.getNoByName(s);return await this.getInfoByNo(e)},async getElementEnByNo(s){return(await this.getInfoByNo(s)).element_en},async getElementEnByName(s){const e=this.getNoByName(s);return await this.getElementEnByNo(e)},async getElementSrcByNo(s){return`/assets/elements/${await this.getElementEnByNo(s)}.png`},async getElementSrcByName(s){const e=this.getNoByName(s);return await this.getElementSrcByNo(e)},async getDamageSkillItems(s){return[...(await this.getInfoByName(s)).getDamageSkillItems(),...Ee()]}}});export{Ae as A,ne as B,O as E,re as R,le as S,ie as a,ae as b,_ as c,S as d,o as e,fe as f,Oe as g,a as h,me as i,Ie as j,de as k,Te as l,se as m,ce as s,ye as u};

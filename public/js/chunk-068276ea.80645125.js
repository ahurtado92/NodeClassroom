(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-068276ea"],{"0fd9":function(t,e,i){"use strict";i("99af"),i("4160"),i("caad"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("159b"),i("ddb0");var a=i("ade3"),s=i("5530"),n=(i("4b85"),i("2b0e")),r=i("d9f7"),o=i("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(i,a){return i[t+Object(o["D"])(a)]=e(),i}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:v}})),m=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},f=u("alignContent",(function(){return{type:String,default:null,validator:m}})),g={align:Object.keys(h),justify:Object.keys(p),alignContent:Object.keys(f)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){var a=b[t];if(null!=i){if(e){var s=e.replace(t,"");a+="-".concat(s)}return a+="-".concat(i),a.toLowerCase()}}var C=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:v}},p),{},{alignContent:{type:String,default:null,validator:m}},f),render:function(t,e){var i=e.props,s=e.data,n=e.children,o="";for(var c in i)o+=String(i[c]);var l=C.get(o);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var a=i[t],s=y(e,t,a);s&&l.push(s)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(a["a"])(t,"align-".concat(i.align),i.align),Object(a["a"])(t,"justify-".concat(i.justify),i.justify),Object(a["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),C.set(o,l)}(),t(i.tag,Object(r["a"])(s,{staticClass:"row",class:l}),n)}})},"2fa4":function(t,e,i){"use strict";i("20f6");var a=i("80d2");e["a"]=Object(a["h"])("spacer","div","v-spacer")},"51c9":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"settings-wrapper"}},[i("v-card",{staticClass:"py-2 px-4",staticStyle:{position:"fixed",top:"115px",right:"-35px","border-radius":"8px"},attrs:{id:"settings",color:"rgba(0, 0, 0, .3)",dark:"",flat:"",link:"","min-width":"100"}},[i("v-icon",{attrs:{large:""}},[t._v(" mdi-settings ")])],1),i("v-menu",{attrs:{"close-on-content-click":!1,activator:"#settings",bottom:"","content-class":"v-settings",left:"","nudge-left":"8","offset-x":"",origin:"top right",transition:"scale-transition"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-card",{staticClass:"text-center mb-0",attrs:{width:"300"}},[i("v-card-text",[i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("SIDEBAR FILTERS")]),i("v-item-group",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},t._l(t.colors,(function(e){return i("v-item",{key:e,attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var a=t.active,s=t.toggle;return[i("v-avatar",{staticClass:"v-settings__item",class:a&&"v-settings__item--active",attrs:{color:e,size:"25"},on:{click:s}})]}}],null,!0)})})),1),i("v-divider",{staticClass:"my-4 secondary"}),i("v-row",{attrs:{align:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"auto"}},[t._v(" Dark Mode ")]),i("v-spacer"),i("v-col",{attrs:{cols:"auto"}},[i("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1),i("v-divider",{staticClass:"my-4 secondary"}),i("v-row",{attrs:{align:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"auto"}},[t._v(" Sidebar Image ")]),i("v-spacer"),i("v-col",{attrs:{cols:"auto"}},[i("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}})],1)],1),i("v-divider",{staticClass:"my-4 secondary"}),i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("IMAGES")]),i("v-item-group",{staticClass:"d-flex justify-space-between mb-3",model:{value:t.image,callback:function(e){t.image=e},expression:"image"}},t._l(t.images,(function(e){return i("v-item",{key:e,staticClass:"mx-1",attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var a=t.active,s=t.toggle;return[i("v-sheet",{staticClass:"d-inline-block v-settings__item",class:a&&"v-settings__item--active",on:{click:s}},[i("v-img",{attrs:{src:e,height:"100",width:"50"}})],1)]}}],null,!0)})})),1),i("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"success",href:"https://www.creative-tim.com/product/vuetify-material-dashboard",default:"",rel:"noopener",target:"_blank"}},[t._v(" Free Download ")]),i("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"grey darken-1",dark:"",href:"https://vuetifyjs.com/components/api-explorer",default:"",rel:"noopener",target:"_blank"}},[t._v(" Documentation ")]),i("div",{staticClass:"my-12"}),i("div",[i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("THANK YOU FOR SHARING!")])]),i("v-btn",{staticClass:"ma-1",attrs:{color:"#55acee",dark:"",default:"",rounded:""}},[i("v-icon",[t._v("mdi-twitter")]),t._v(" - 45 ")],1),i("v-btn",{staticClass:"ma-1",attrs:{color:"#3b5998",dark:"",default:"",rounded:""}},[i("v-icon",[t._v("mdi-facebook")]),t._v(" - 50 ")],1)],1)],1)],1)],1)},s=[],n=i("5530"),r=i("a452"),o=i("2f62"),c={name:"DashboardCoreSettings",mixins:[r["a"]],data:function(){return{color:"#E91E63",colors:["#9C27b0","#00CAE3","#4CAF50","#ff9800","#E91E63","#FF5252"],image:"https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",images:["https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg","https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-2.jpg","https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-3.jpg","https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-4.jpg"],menu:!1,saveImage:"",showImg:!0}},computed:Object(n["a"])({},Object(o["c"])(["barImage"])),watch:{color:function(t){this.$vuetify.theme.themes[this.isDark?"dark":"light"].primary=t},showImg:function(t){t?this.saveImage?(this.setBarImage(this.saveImage),this.saveImage=""):this.setBarImage(t):(this.saveImage=this.barImage,this.setBarImage(""))},image:function(t){this.setBarImage(t)}},methods:Object(n["a"])({},Object(o["b"])({setBarImage:"SET_BAR_IMAGE"}))},l=c,u=(i("b947"),i("2877")),d=i("6544"),h=i.n(d),v=i("8212"),p=i("8336"),m=i("b0af"),f=i("99d9"),g=i("62ad"),b=i("ce7e"),y=i("132d"),C=i("adda"),w=i("ade3"),k=i("4e82"),j=i("58df"),S=i("d9bd"),_=i("2b0e"),V=_["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(w["a"])({},this.activeClass,this.isActive)}),t):(Object(S["c"])("v-item should only contain a single element",this),t)):(Object(S["c"])("v-item is missing a default scopedSlot",this),null);var t}}),A=Object(j["a"])(V,Object(k["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),O=i("604c"),I=i("e449"),x=i("0fd9"),E=i("8dd9"),D=i("2fa4"),$=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("fe09")),B=i("c37a"),F=i("c3f0"),R=i("0789"),M=i("490a"),G=i("80d2"),L=$["a"].extend({name:"v-switch",directives:{Touch:F["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},B["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(R["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(M["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===G["w"].left&&this.isActive||t.keyCode===G["w"].right&&!this.isActive)&&this.onChange()}}}),T=Object(u["a"])(l,a,s,!1,null,null,null);e["default"]=T.exports;h()(T,{VAvatar:v["a"],VBtn:p["a"],VCard:m["a"],VCardText:f["b"],VCol:g["a"],VDivider:b["a"],VIcon:y["a"],VImg:C["a"],VItem:A,VItemGroup:O["b"],VMenu:I["a"],VRow:x["a"],VSheet:E["a"],VSpacer:D["a"],VSwitch:L})},"58d3":function(t,e,i){},8547:function(t,e,i){"use strict";var a=i("2b0e"),s=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["i"]}}})},"9d01":function(t,e,i){},b947:function(t,e,i){"use strict";i("58d3")},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i("4de4"),i("45fc"),i("d3b7"),i("25f0");var a=i("c37a"),s=i("5607"),n=i("2b0e"),r=n["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),o=i("8547"),c=i("58df");function l(t){t.preventDefault()}e["a"]=Object(c["a"])(a["a"],r,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:l},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:l},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-068276ea.80645125.js.map
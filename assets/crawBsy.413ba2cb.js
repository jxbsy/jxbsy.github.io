import{g as a}from"./bsy.15575dd1.js";import{_ as o,o as n,l as p,n as t,i as s}from"./index.bc8b0bd4.js";import"./lodash.13dd3b34.js";import"./mock.ab819d70.js";import"./apiResult.09ec0eb2.js";const i={data(){return{msg:"params page",res:""}},mounted(){console.log(this.$route.params.id),a(this.$route.params.id).then(r=>r=r.data).finally(()=>{})}};function l(r,m,c,u,e,d){return n(),p("div",null,[t("h2",null,s(e.msg),1),t("p",null,"\u65B0\u95FBID\uFF1A"+s(e.res),1)])}var y=o(i,[["render",l]]);export{y as default};
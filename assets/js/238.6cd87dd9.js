"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[238],{3485:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(8e3),a=n(1395),s=n(1344);const r=(0,o.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(t){const e=(0,s.yj)(),n=(0,a.iH)();(0,o.YP)((()=>e.path),(()=>n.value.focus()));const r=({target:t})=>{const e=document.querySelector(t.hash);if(e){const t=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",t)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",t),e.focus(),window.scrollTo(0,0)}};return()=>[(0,o.h)("span",{ref:n,tabindex:"-1"}),(0,o.h)("a",{href:`#${t.content}`,class:"skip-link sr-only",onClick:r},"Skip to content")]}})},238:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var o=n(8e3),a=n(1344),s=n(6765),r=n(3485),u=n(364),c=n(6267);const i=(0,o.aZ)({name:"404",setup(){const t=(0,s.I)(),e=(0,c.X6)(),n=()=>{const t=e.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:i}=(0,a.nB)({to:e.value.home??t.value});return()=>[(0,o.h)(r.Z),(0,o.h)((0,o.up)("CommonWrapper"),{sidebar:!1},(()=>(0,o.h)("main",{class:"page not-found",id:"main-content"},[(0,o.h)(u.u),(0,o.h)("blockquote",n()),(0,o.h)("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),(0,o.h)("button",{class:"action-button",onClick:()=>i()},e.value.routeLocales.home)])))]}})}}]);
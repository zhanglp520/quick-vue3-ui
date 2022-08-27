import{d as h,r as u,a as _,o as i,c as p,e as C,f as y,g as a,w as r,_ as g,p as E,h as b,i as e,j as B,k as v,l as A}from"./app.b66b37ef.js";import{_ as x}from"./chunks/index.vue_vue_type_script_setup_true_lang.7d4aba9b.js";const D=h({__name:"baseDefault",setup(l){const t=u({userName:""}),s=u([{label:"\u7528\u6237\u540D",vModel:"userName",placeholder:"\u7528\u6237\u540D"}]),d=()=>{console.log("handleSearch",t)},o=()=>{t.userName="",console.log("handleClear",t)};return(n,m)=>{const f=_("quick-search");return i(),p(f,{model:t,items:s,onOnSearch:d,onOnClear:o},null,8,["model","items"])}}}),S=h({__name:"hiddenButton",setup(l){const t=u({userName:""}),s=u([{label:"\u7528\u6237\u540D",vModel:"userName",placeholder:"\u7528\u6237\u540D"}]),d=()=>{console.log("handleSearch",t)};return(o,n)=>{const m=_("quick-search");return i(),p(m,{model:t,items:s,"hidden-reset-button":!0,onOnSearch:d},null,8,["model","items"])}}}),F=h({__name:"customButton",setup(l){const t=u({userName:""}),s=u([{label:"\u7528\u6237\u540D",vModel:"userName",placeholder:"\u7528\u6237\u540D"}]),d=()=>{console.log("handleSearch",t)},o=()=>{t.userName="",console.log("handleClear",t)};return(n,m)=>{const f=_("quick-search");return i(),p(f,{model:t,items:s,"search-button-name":"\u641C\u7D22","reset-button-name":"\u91CD\u7F6E",onOnSearch:d,onOnClear:o},null,8,["model","items"])}}}),c=l=>(E("data-v-f11bfd27"),l=l(),b(),l),N={class:"component-demo"},I=c(()=>e("div",{class:"card-header card-name"},[e("h2",null,"\u9ED8\u8BA4")],-1)),O=c(()=>e("div",{class:"card-description"},[e("p",null,"\u5E38\u89C4\u641C\u7D22")],-1)),k=c(()=>e("div",{class:"card-header card-name"},[e("h2",null,"\u81EA\u5B9A\u4E49\u6309\u94AE")],-1)),w=c(()=>e("div",{class:"card-description"},[e("p",null,' \u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027search-button-name="\u641C\u7D22"\u81EA\u5B9A\u4E49\u67E5\u8BE2\u6309\u94AE\u6587\u672C\u540D\u79F0\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027reset-button-name="\u91CD\u7F6E"\u81EA\u5B9A\u4E49\u6E05\u7A7A\u6309\u94AE\u6587\u672C\u540D\u79F0 ')],-1)),T=c(()=>e("div",{class:"card-header card-name"},[e("h2",null,"\u9690\u85CF\u6E05\u7A7A\u6309\u94AE")],-1)),V=c(()=>e("div",{class:"card-description"},[e("p",null,'\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027:hidden-reset-button="false"\u9690\u85CF\u6E05\u7A7A\u6309\u94AE')],-1)),R=h({__name:"index",setup(l){const t=u({baseDefaultCode:"",customButtonCode:"",hiddenButtonCode:""}),s=async()=>{const d=await g(()=>import("./chunks/baseDefault.5fbcea28.js"),[]);t.baseDefaultCode=d.default;const o=await g(()=>import("./chunks/customButton.a50f5866.js"),[]);t.customButtonCode=o.default;const n=await g(()=>import("./chunks/hiddenButton.da8c2186.js"),[]);t.hiddenButtonCode=n.default};return C(()=>{s()}),(d,o)=>{const n=_("el-card");return i(),y("div",N,[a(n,null,{header:r(()=>[I,O]),default:r(()=>[a(D),a(x,{autodetect:!0,code:t.baseDefaultCode},null,8,["code"])]),_:1}),a(n,{class:"item",shadow:"always"},{header:r(()=>[k,w]),default:r(()=>[a(F),a(x,{autodetect:!0,code:t.customButtonCode},null,8,["code"])]),_:1}),a(n,{class:"item",shadow:"always"},{header:r(()=>[T,V]),default:r(()=>[a(S),a(x,{autodetect:!0,code:t.hiddenButtonCode},null,8,["code"])]),_:1})])}}});const P=B(R,[["__scopeId","data-v-f11bfd27"]]),$=e("h2",{id:"\u793A\u4F8B",tabindex:"-1"},[v("\u793A\u4F8B "),e("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#")],-1),q=A('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u5C5E\u6027\u540D</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">model</td><td style="text-align:left;">\u641C\u7D22\u8868\u5355 model</td><td style="text-align:left;">Object</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">items</td><td style="text-align:left;">\u641C\u7D22\u8868\u5355\u9879\u96C6\u5408</td><td style="text-align:left;">FormItem[]</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">searchButtonName</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u641C\u7D22\u6309\u94AE\u6587\u672C\u503C</td><td style="text-align:left;">String</td><td style="text-align:left;">\u67E5\u8BE2</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">resetButtonName</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u91CD\u7F6E\u6309\u94AE\u6587\u672C\u503C</td><td style="text-align:left;">String</td><td style="text-align:left;">\u6E05\u7A7A</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">hiddenResetButton</td><td style="text-align:left;">\u9690\u85CF\u91CD\u7F6E\u6309\u94AE</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h2><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">onSearch</td><td style="text-align:left;">\u6DFB\u52A0\u6309\u94AE\u4E8B\u4EF6</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">onClear</td><td style="text-align:left;">\u6279\u91CF\u5220\u9664\u4E8B\u4EF6</td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h2>',6),J=JSON.parse('{"title":"\u793A\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"components/basic/search.md","lastUpdated":1661511166000}'),M={name:"components/basic/search.md"},U=Object.assign(M,{setup(l){return(t,s)=>(i(),y("div",null,[$,a(P),q]))}});export{J as __pageData,U as default};

import{j as s,o as n,f as a,l as e}from"./app.b66b37ef.js";const m=JSON.parse('{"title":"\u4F7F\u7528 vite \u642D\u5EFA vue3 \u9879\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5 node","slug":"\u5B89\u88C5-node"},{"level":2,"title":"\u5B89\u88C5 vite2","slug":"\u5B89\u88C5-vite2"},{"level":3,"title":"\u5E38\u89C1\u9519\u8BEF","slug":"\u5E38\u89C1\u9519\u8BEF"},{"level":2,"title":"volar \u63D2\u4EF6","slug":"volar-\u63D2\u4EF6"},{"level":2,"title":"\u5B89\u88C5 vue-router4","slug":"\u5B89\u88C5-vue-router4"},{"level":2,"title":"\u5B89\u88C5 vuex","slug":"\u5B89\u88C5-vuex"},{"level":2,"title":"\u5B89\u88C5 element-plus","slug":"\u5B89\u88C5-element-plus"},{"level":2,"title":"\u914D\u7F6E\u56FD\u9645\u5316","slug":"\u914D\u7F6E\u56FD\u9645\u5316"},{"level":2,"title":"\u5B89\u88C5 axios","slug":"\u5B89\u88C5-axios"},{"level":2,"title":"\u5B89\u88C5 mock","slug":"\u5B89\u88C5-mock"},{"level":2,"title":"\u5B89\u88C5 eslint \u53CA\u914D\u7F6E eslint","slug":"\u5B89\u88C5-eslint-\u53CA\u914D\u7F6E-eslint"},{"level":2,"title":"\u914D\u7F6E git \u63D0\u4EA4\u9A8C\u8BC1 eslint \u89C4\u8303","slug":"\u914D\u7F6E-git-\u63D0\u4EA4\u9A8C\u8BC1-eslint-\u89C4\u8303"}],"relativePath":"guide/index.md","lastUpdated":1661511166000}'),l={name:"guide/index.md"},p=e(`<h1 id="\u4F7F\u7528-vite-\u642D\u5EFA-vue3-\u9879\u76EE" tabindex="-1">\u4F7F\u7528 vite \u642D\u5EFA vue3 \u9879\u76EE <a class="header-anchor" href="#\u4F7F\u7528-vite-\u642D\u5EFA-vue3-\u9879\u76EE" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5-node" tabindex="-1">\u5B89\u88C5 node <a class="header-anchor" href="#\u5B89\u88C5-node" aria-hidden="true">#</a></h2><p>\u4E0B\u8F7D\u5B89\u88C5\uFF1A</p><p><a href="http://nodejs.cn/download/" target="_blank" rel="noreferrer">http://nodejs.cn/download/</a></p><p>\u6CE8\u610F\uFF1A\u7531\u4E8E\u9700\u8981\u4F7F\u7528 Vite \u6545\u6B64\u9700\u8981 Node.js \u7248\u672C 12+</p><p>\u5982\u679C\u591A\u4E2A\u9879\u76EE\u4F7F\u7528\u4E0D\u540C\u7684 node \u7248\u672C\uFF0C\u53EF\u4EE5\u4F7F\u7528 nvm node \u7248\u672C\u7BA1\u7406</p><h2 id="\u5B89\u88C5-vite2" tabindex="-1">\u5B89\u88C5 vite2 <a class="header-anchor" href="#\u5B89\u88C5-vite2" aria-hidden="true">#</a></h2><p>\u5B98\u7F51\u5730\u5740\uFF1A</p><p><a href="https://vitejs.cn/guide/" target="_blank" rel="noreferrer">https://vitejs.cn/guide/</a></p><p>\u4E3A\u4EC0\u4E48\u4F7F\u7528 vite\uFF1F</p><p>vite \u662F\u4E00\u79CD\u65B0\u578B\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u6A21\u5757\u70ED\u66F4\u65B0\u548C rollup \u6784\u5EFA\u6307\u4EE4</p><p>\u7279\u70B9\uFF1A\uFF08\u4F18\u70B9\uFF09</p><p>1.\u670D\u52A1\u5668\u542F\u52A8\u7279\u522B\u5FEB\uFF1B\uFF08\u6781\u901F\u542F\u52A8\uFF09</p><p>2.\u8F7B\u91CF\u5FEB\u901F\u70ED\u91CD\u8F7D\uFF1B\uFF08HMR \u6A21\u5757\u70ED\u91CD\u8F7D\uFF09</p><p>3.\u652F\u6301 TS\u3001jsx\uFF0Ccss \u7B49\uFF1B</p><p>\u5B89\u88C5\u547D\u4EE4\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init vite@latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u6307\u5B9A\u6A21\u677F</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init vite@latest \u9879\u76EE\u540D\u79F0 --template vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u5E38\u89C1\u9519\u8BEF" tabindex="-1">\u5E38\u89C1\u9519\u8BEF <a class="header-anchor" href="#\u5E38\u89C1\u9519\u8BEF" aria-hidden="true">#</a></h3><p>\u9519\u8BEF 1\uFF1A</p><p>Network: use <code>--host</code> to expose</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><p>vite.config.js \u914D\u7F6E server \u8282\u70B9</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [vue()],</span></span>
<span class="line"><span style="color:#A6ACCD;">  server:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    host:&#39;0.0.0.0&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u9519\u8BEF 2\uFF1A</p><p>npm run build \u62A5\u9519 Cannot access ambient const enums when the &#39;--isolatedModules&#39; flag is provided</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><p>tsconfig.json \u4E2D isolatedModules \u8BBE\u7F6E\u4E3A false \u4E0D\u63A8\u8350\uFF0C\u6682\u65F6\u4F7F\u7528\u6B64\u65B9\u5F0F\uFF0C\u540E\u671F\u7814\u7A76\u5B98\u65B9\u53C2\u6570</p><p>\u9519\u8BEF 3\uFF1A warning package.json: No license field $ vue-tsc --noEmit &amp;&amp; vite build</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><p>package.json \u4E2D\u914D\u7F6E\u5982\u4E0B\u4E24\u4E2A\u53C2\u6570</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;private&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="volar-\u63D2\u4EF6" tabindex="-1">volar \u63D2\u4EF6 <a class="header-anchor" href="#volar-\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>volar \u63D2\u4EF6\u6539\u540D\u4E3A Vue Language Features (Volar)</p><h2 id="\u5B89\u88C5-vue-router4" tabindex="-1">\u5B89\u88C5 vue-router4 <a class="header-anchor" href="#\u5B89\u88C5-vue-router4" aria-hidden="true">#</a></h2><p>\u6CE8\u610F\uFF1Avue \u8981\u6C42\u4F7F\u7528 vue-router \u7248\u672C 4+</p><p>\u5B89\u88C5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install vue-router@4 --save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u5B89\u88C5-vuex" tabindex="-1">\u5B89\u88C5 vuex <a class="header-anchor" href="#\u5B89\u88C5-vuex" aria-hidden="true">#</a></h2><p>\u6CE8\u610F\uFF1Avue \u8981\u6C42\u4F7F\u7528 vuex \u7248\u672C 4+</p><p>\u5B89\u88C5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install vue-router@4 --save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u5B89\u88C5-element-plus" tabindex="-1">\u5B89\u88C5 element-plus <a class="header-anchor" href="#\u5B89\u88C5-element-plus" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install element-plus --save</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5168\u5C40\u5BFC\u5165</p><p>\u6309\u9700\u5BFC\u5165\uFF08\u63A8\u8350\uFF09</p><p>\u53C2\u8003\u5B98\u7F51\u914D\u7F6E</p><h2 id="\u914D\u7F6E\u56FD\u9645\u5316" tabindex="-1">\u914D\u7F6E\u56FD\u9645\u5316 <a class="header-anchor" href="#\u914D\u7F6E\u56FD\u9645\u5316" aria-hidden="true">#</a></h2><p>\u5B89\u88C5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install vue-i18n@next</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u5B89\u88C5-axios" tabindex="-1">\u5B89\u88C5 axios <a class="header-anchor" href="#\u5B89\u88C5-axios" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u547D\u4EE4</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save axios vue-axios</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5B89\u88C5-mock" tabindex="-1">\u5B89\u88C5 mock <a class="header-anchor" href="#\u5B89\u88C5-mock" aria-hidden="true">#</a></h2><p>\u65B9\u6848\u4E00\uFF1A</p><p>\u5047\u6570\u636E\uFF1Adata \u4E2D\uFF0Cjson \u6587\u4EF6\u6216 js \u6587\u4EF6</p><p>\u65B9\u6848\u4E8C\uFF1A</p><p>\u672C\u5730 mock \u670D\u52A1</p><p>\u5B89\u88C5\u547D\u4EE4</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install mockjs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u65B9\u6848\u4E09\uFF1A</p><p>\u8FDC\u7A0B mock \u670D\u52A1 apipost\u3001postman \u7B49\u5DE5\u5177\u63D0\u4F9B\u7684 mock \u670D\u52A1</p><h2 id="\u5B89\u88C5-eslint-\u53CA\u914D\u7F6E-eslint" tabindex="-1">\u5B89\u88C5 eslint \u53CA\u914D\u7F6E eslint <a class="header-anchor" href="#\u5B89\u88C5-eslint-\u53CA\u914D\u7F6E-eslint" aria-hidden="true">#</a></h2><p>\u5B89\u88C5 eslint</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install eslint --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5 eslint-plugin-vue \u63D2\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install eslint-plugin-vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5 eslint-config-airbnb-base \u63D2\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx install-peerdeps --dev eslint-config-airbnb-base</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5 prettier \u63D2\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev eslint-plugin-prettier</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5 prettier</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev --save-exact prettier</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5 eslint-config-prettier \u63D2\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev eslint-config-prettier</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u914D\u7F6E-git-\u63D0\u4EA4\u9A8C\u8BC1-eslint-\u89C4\u8303" tabindex="-1">\u914D\u7F6E git \u63D0\u4EA4\u9A8C\u8BC1 eslint \u89C4\u8303 <a class="header-anchor" href="#\u914D\u7F6E-git-\u63D0\u4EA4\u9A8C\u8BC1-eslint-\u89C4\u8303" aria-hidden="true">#</a></h2><p>package.json \u914D\u7F6E\u5982\u4E0B\uFF0C\u4EE5\u4E0B\u4E24\u4E2A\u65B9\u6848\u5747\u4E00\u6837\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;dev&quot;: &quot;vite&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;build&quot;: &quot;vue-tsc --noEmit &amp;&amp; vite build&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;preview&quot;: &quot;vite preview&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lint&quot;: &quot;eslint --ext .js,.vue,.ts, src&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lint-fix&quot;: &quot;npm run lint --fix&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u65B9\u6848\u4E00:husky</p><p>\u5B89\u88C5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i husky -D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx husky install</span></span>
<span class="line"><span style="color:#A6ACCD;">npm set-script prepare &quot;husky install&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">npx husky add .husky/pre-commit &quot;npm test&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4FEE\u6539 pre-commit \u6587\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm test \u66F4\u6539\u4E3A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">npm run lint-fix</span></span>
<span class="line"><span style="color:#A6ACCD;">git add</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,86),i=[p];function r(t,o,c,u,d,b){return n(),a("div",null,i)}const C=s(l,[["render",r]]);export{m as __pageData,C as default};

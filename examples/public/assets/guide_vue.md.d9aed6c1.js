import{j as s,o as n,f as a,l}from"./app.b66b37ef.js";const u=JSON.parse('{"title":"\u542F\u52A8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u542F\u52A8","slug":"\u542F\u52A8"},{"level":3,"title":"\u5B89\u88C5\u4F7F\u7528","slug":"\u5B89\u88C5\u4F7F\u7528"},{"level":3,"title":"\u53D1\u5E03","slug":"\u53D1\u5E03"}],"relativePath":"guide/vue.md","lastUpdated":1661511166000}'),p={name:"guide/vue.md"},e=l(`<h2 id="\u542F\u52A8" tabindex="-1">\u542F\u52A8 <a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>Vite \u9700\u8981 Node.js \u7248\u672C &gt;= 12.0.0\u3002\u672C\u9879\u76EE\u63A8\u8350\u4F7F\u7528\u7248\u672C16.x</p></div><h3 id="\u5B89\u88C5\u4F7F\u7528" tabindex="-1">\u5B89\u88C5\u4F7F\u7528 <a class="header-anchor" href="#\u5B89\u88C5\u4F7F\u7528" aria-hidden="true">#</a></h3><ul><li>\u514B\u9686\u9879\u76EE</li></ul><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone https://gitee.com/zhanglp520/quick-vue3-admin.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u5B89\u88C5 pnpm</li></ul><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g pnpm</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u5B89\u88C5\u9879\u76EE\u4F9D\u8D56\u5305</li></ul><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm install</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u8FD0\u884C</li></ul><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm run dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD0\u884C\u547D\u4EE4\u6267\u884C\u670D\u52A1\u542F\u52A8\u540E\uFF0C\u6D4F\u89C8\u5668\u8F93\u5165\uFF1Alocalhost:3101</p><ul><li>eslint \u68C0\u6D4B</li></ul><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm run lint \u4EC5\u68C0\u6D4B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">pnpm run lint-fix \u68C0\u6D4B\u5E76\u5C1D\u8BD5\u4FEE\u590D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u6253\u5305\u4E0A\u7EBF</li></ul><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm run build</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u6253\u5305\u540E\u9884\u89C8</li></ul><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm run preview</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5982\u9700\u8981\u672C\u5730\u8FD0\u884C\u540E\u7AEF\uFF0C\u8BF7\u514B\u9686\u5B98\u65B9\u63D0\u4F9B\u7684\u540E\u7AEF\u9879\u76EE\uFF1A</p><p>\u5B98\u65B9\u63D0\u4F9B\u540E\u7AEF\u63A5\u53E3\u9879\u76EE\uFF1A<a href="https://gitee.com/zhanglp520/quick-node-express.git" target="_blank" rel="noreferrer">https://gitee.com/zhanglp520/quick-node-express.git</a></p><ul><li>\u5207\u6362\u540E\u7AEF</li></ul><p>\u914D\u7F6E\u5F00\u53D1\u73AF\u5883\u4E0B\u7684\u53CD\u5411\u4EE3\u7406</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">//vite.config.ts</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">server</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">host</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">port</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_PORT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">open</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">proxy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">VITE_APP_BASE_URL</span><span style="color:#F07178;">]: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// target: &#39;http://localhost:3102/&#39;,</span></span>
<span class="line"><span style="color:#F07178;">          target</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://110.42.130.88:3102/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          changeOrigin</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          secure</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ws</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">rewrite</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">dev-api</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u914D\u7F6E\u9884\u89C8\u73AF\u5883\u4E0B\u7684\u53CD\u5411\u4EE3\u7406</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">//vite.config.ts</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">preview</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u8FD0\u884C\u670D\u52A1\u662F\u5426\u4EE5https\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">host</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">port</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3103</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">open</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">proxy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">VITE_APP_BASE_URL</span><span style="color:#F07178;">]: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// target: &#39;http://localhost:3102/&#39;,</span></span>
<span class="line"><span style="color:#F07178;">          target</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://110.42.130.88:3102/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          changeOrigin</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          secure</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          ws</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">rewrite</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">prod-api</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u53D1\u5E03" tabindex="-1">\u53D1\u5E03 <a class="header-anchor" href="#\u53D1\u5E03" aria-hidden="true">#</a></h3><ul><li>\u4F7F\u7528 nginx\u53D1\u5E03vue\u9879\u76EE</li></ul><p>nginx\u914D\u7F6E\u6587\u4EF6\uFF1Anginx.conf</p><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;">#user  nobody;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">events </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">http </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        listen       8200</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">#\u524D\u7AEF\u8BBF\u95EE\u65F6\u9700\u8981\u7684\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  192.168.0.105</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">#\u524D\u7AEF\u8BBF\u95EE\u65F6\u9700\u8981\u7684ip\uFF0C\u9ED8\u8BA4127.0.0.1\u6216localhost</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        location / </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html/dist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000</span><span style="color:#676E95;">#vue \u8DEF\u7531\u6A21\u5F0F\u914D\u7F6E\u4E3Ahistory\u65F6\uFF0C\u751F\u4EA7\u73AF\u5883\u5237\u65B0\u4F1A\u51FA\u73B0404,\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\u89E3\u51B3             #try_files $uri $uri/ @router;#\u9700\u8981\u6307\u5411\u4E0B\u9762\u7684@router\u5426\u5219\u4F1A\u51FA\u73B0vue\u7684\u8DEF\u7531\u5728nginx\u4E2D\u5237\u65B0\u51FA\u73B0404</span></span>
<span class="line"><span style="color:#89DDFF;">             </span><span style="color:#676E95;">#try_files $uri $uri/ /index.html; ---\u89E3\u51B3\u9875\u9762\u5237\u65B0404\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#A6ACCD;">         location /prod-api </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		  proxy_pass  http://127.0.0.1:3102</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		  rewrite ^/prod-api/</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;">$ /</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">1 </span><span style="color:#82AAFF;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        error_page   500 502 503 504  /50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location = /50x.html </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    root           html;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#    deny  all;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">#}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#server {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    listen       8000;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    listen       somename:8080;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    server_name  somename  alias  another.alias;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    location / {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#        root   html;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># HTTPS server</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#server {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_session_timeout  5m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    location / {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#        root   html;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#    }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br></div></div>`,29),o=[e];function r(c,t,i,F,y,b){return n(),a("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};

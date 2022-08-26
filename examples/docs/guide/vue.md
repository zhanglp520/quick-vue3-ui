## 启动

::: tip 注意
Vite 需要 Node.js 版本 >= 12.0.0。本项目推荐使用版本16.x
:::

### 安装使用

- 克隆项目

```bash
git clone https://gitee.com/zhanglp520/quick-vue3-admin.git
```

- 安装 pnpm

```bash
npm install -g pnpm
```

- 安装项目依赖包

```bash
pnpm install
```

- 运行

```bash
pnpm run dev
```

运行命令执行服务启动后，浏览器输入：localhost:3101

- eslint 检测

```bash
pnpm run lint 仅检测

pnpm run lint-fix 检测并尝试修复
```

- 打包上线

```bash
pnpm run build
```

- 打包后预览

```bash
pnpm run preview
```

如需要本地运行后端，请克隆官方提供的后端项目：

官方提供后端接口项目：https://gitee.com/zhanglp520/quick-node-express.git

- 切换后端

配置开发环境下的反向代理

```ts
//vite.config.ts
...
 server: {
      https: false,
      host: true,
      port: VITE_PORT,
      open: false,
      proxy: {
        [VITE_APP_BASE_URL]: {
          // target: 'http://localhost:3102/',
          target: 'http://110.42.130.88:3102/',
          changeOrigin: false,
          secure: false,
          ws: false,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
        },
      },
    }
    ...
```

配置预览环境下的反向代理

```ts
//vite.config.ts
...
  preview: {
      https: false, // 运行服务是否以https方式
      host: true,
      port: 3103,
      open: false,
      proxy: {
        [VITE_APP_BASE_URL]: {
          // target: 'http://localhost:3102/',
          target: 'http://110.42.130.88:3102/',
          changeOrigin: false,
          secure: false,
          ws: false,
          rewrite: (path) => path.replace(/^\/prod-api/, ''),
        },
      },
    },
    ...
```

### 发布

- 使用 nginx发布vue项目

nginx配置文件：nginx.conf

```sh

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {


        listen       8200; #前端访问时需要的端口
        server_name  192.168.0.105;#前端访问时需要的ip，默认127.0.0.1或localhost

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html/dist;
            index  index.html index.htm;　　　　　　　　#vue 路由模式配置为history时，生产环境刷新会出现404,如下配置即可解决             #try_files $uri $uri/ @router;#需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404
             #try_files $uri $uri/ /index.html; ---解决页面刷新404问题
        }        
         
         location /prod-api {
		  proxy_pass  http://127.0.0.1:3102;
		  rewrite ^/prod-api/(.*)$ /$1 break;
	   }


        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```

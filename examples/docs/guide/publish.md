# 使用monorepo发布vue3组件库

## 介绍

Monorepo(monolithic repository) 是管理项目代码的一个方式，指在一个项目仓库 (repo) 中管理多个模块/包 (package)，不同于常见的每个模块建一个 repo。

```yaml
-- packages
  -- pkg1
    --package.json
  -- pkg2
    --package.json
--package.json
```

## 安装pnpm

```bash
npm install pnpm -g
```

## 初始化package.json

```bash
pnpm init
```

## 新建配置文件 .npmrc

- 在根目录下新建.npmrc文件，并写入如下内容

```sh
shamefully-hoist = true
```

::: tip 注意 
如果某些工具仅在根目录的node_modules时才有效，可以将其设置为true来提升那些不在根目录的node_modules，就是将你安装的依赖包的依赖包的依赖包的...都放到同一级别（扁平化）。说白了就是不设置为true有些包就有可能会出问题。
:::

## 安装依赖包：vue@next、typescript、sass

```bash
pnpm i vue@next typescript sass -D -w
```
::: tip 注意 
我们开发环境中的依赖一般全部安装在整个项目根目录下，方便下面我们每个包都可以引用,所以在安装的时候需要加个 -w ，-w 代表工作区（workspace）
:::

## 初始化tsconfig.json

- 初始化

```bash
npx tsc --init
```

- 配置tsconfig.json

```json
//tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "jsx": "preserve",
    "strict": true,
    "target": "ES2015",
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "moduleResolution": "Node",
    "lib": ["esnext", "dom"]
  }
}
```

## monorepo实现

### 创建配置

- 根目录下新建pnpm-workspace.yaml

- 配置yaml

```yaml
# pnpm-workspace.yaml
packages:
    - 'packages/**'
    - 'examples'

```
::: tip 注意 
为了我们各个项目之间能够互相引用我们要新建一个pnpm-workspace.yaml文件将我们的包关联起来
:::

## 创建packages目录

- 手动创建packages目录

## 搭建utils包

### 介绍

utils是公共库包

### 创建utils包

- 在package目录下手动创建utils目录


### 进入utils文件夹

```sh
cd utils
```

### 初始化package.json

```bash
pnpm init
```

- 修改工具库的name如下：

```json
{
  "name": "@quick-vue3-ui/utils",//++
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```
### 导出函数

- 在utils目录下创建index.ts文件

```ts
//utils/index.ts
export const sum=(num1:number,num2:number)=>{
    return num1+num2
}
```

接下来就是在其他包中使用。

-------------------------------------------

## 搭建components库包

### 介绍

components是组件包

### 创建components包

- 手动在packages目录下创建components文件夹


### 进入components文件夹

```sh
cd components
```

### 初始化package.json

```bash
pnpm init
```

- 配置package.json

```json
{
  "name": "quick-vue3-ui",//++
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```

### 开发一个button组件 （正式进入核心区）

- 在components目录下新建src目录

- 在src目录下新建button目录

- button目录下新建button.vue文件

```vue
<!-- button/button.vue 此处使用的是vue3.0方式，为了是增加组件名称方便。3.2需要特殊处理才可以增加组件名称 -->
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
name:'QuickButton'
})
</script>
<template>
<button>我是按钮</button>
</template>
```
- button目录下新建index.ts文件

```ts
// button/index.ts
import Button from './button.vue'

export default Button
```

### 导出所有组件，供局部导入使用（局部导出）

```ts
// components/src/index.ts
import Button from "./button";

export { Button as QuickButton };

```

### 导出增加版本及相关信息（全局导出）

- components目录下新建index.ts

```ts
// components/index.ts
import pack from '../../package.json'
import * as components from './src/index'
export * from './src/index'

const install =(app: any) => {
    for (const comkey in components) {
        app.component((components as any)[comkey].name, (components as any)[comkey])
    }
}
export default {
    name: pack.name,
    version: pack.version,
    install,
  }
```

### 测试工具库

- 安装工具库依赖

```bash
pnpm install @quick-vue3-ui/utils
```

- 在components目录下的button/button.vue中测试

```vue
<script lang="ts">
import { defineComponent } from "vue";
import { quickSum } from "@quick-vue3-ui/utils";

export default defineComponent({
  name: "QuickButton",
  setup() {
    const result = quickSum(1, 2);
    return {
      result,
    };
  },
});
</script>
<template>
  <button>{{ result }}</button>
</template>

```

暂未测试通过。。。。


## 搭建examples包

### 介绍

examples基于vite+vue3，目的用于调试components下的组件

### 创建examples包

- 手动创建examples文件夹

### 进入examples文件夹

```sh
cd examples
```

### 初始化package.json

```bash
pnpm init
```

### 安装vite、@vitejs/plugin-vue

```sh
pnpm install vite @vitejs/plugin-vue -D -w
```

### 配置vite.config.ts

```ts
//examples/vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins:[vue()]
})
```

### 创建入口html文件

- 手动创建index.html

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>examples</title>
</head>
<body>
    <div id="app"></div>
    <script src="src/main.ts" type="module"></script>
</body>
</html>

```

tip 注意 
vite 是基于esmodule的 所以type="module"
:::

### 创建src目录

- 创建src目录

### 创建根组件

- 手动创建app.vue文件

- 配置app.vue

```vue
<!-- src/app.vue -->
<template>
    <div>
        测试
    </div>
</template>

```



### 创建入口ts

- 手动创建main.ts文件

- 配置main.ts

```ts
//src/main.ts
import {createApp} from 'vue'
import App from './app.vue'

const app = createApp(App)

app.mount('#app')

```

### 配置启动命令

```json
// package.json
...
"scripts": {
     "dev": "vite"//++
  },
  ...
```

### 运行

```bash
pnpm run dev
```

::: tip 注意 
1. 如上没有问题才能按照下面的进行。
2. 包之间本地调试（全局安装）
3. 由于组件库是基于ts的，所以需要安装esno来执行ts文件便于测试包之间的引入情况

```bash
npm i esno -g
```

```bash
# 哪里用就切换到那个包下执行，例如：examples要用那么就 cd examples 然后执行安装依赖命令即可
pnpm install @quick-vue3-ui/utils 
pnpm install quick-vue3-ui
```
:::

### 安装组件库的依赖

```bash
pnpm i quick-vue3-ui
```

### 全局导入

- main.ts中导入

```ts
//examples/src/main.ts
import {createApp} from 'vue'
import quickVue3UI from 'quick-vue3-ui' //++
import App from './app.vue'

const app = createApp(App)
app.use(quickVue3UI) //++
app.mount('#app')
```


### 局部导入

- app.vue中导入

```vue
<!-- examples/src/app.vue -->
<script lang="ts" setup>
import {QuickButton} from '@quick-vue3-ui/components'
</script>
<template>
    <div>
        <quick-button></quick-button>
    </div>
</template>
```

## 发布到npm

### 打包组件库

::: tip 注意 
vite提供了库模式，下面我们来配置。
:::

#### 打包配置

- 在components包下新建vite.config.ts文件

- 配置vite.config.ts

```ts
//components/vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
export default defineConfig(
    {
        build: {
            target: 'modules',
            //打包文件目录
            outDir: "es",
            //压缩
            minify: false,
            //css分离
            //cssCodeSplit: true,
            rollupOptions: {
                //忽略打包vue文件
                external: ['vue'],
                input: ['src/index.ts'],
                output: [
                    {
                        format: 'es',
                        //不用打包成.es.js,这里我们想把它打包成.js
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'es',
                        preserveModulesRoot: 'src'
                    },
                    {
                        format: 'cjs',
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'lib',
                        preserveModulesRoot: 'src'
                    }
                ]
            },
            lib: {
                entry: './index.ts',
                formats: ['es', 'cjs']
            }
        },
        plugins: [
            vue()
        ]
    }
)
```

::: tip 注意 
这里我们选择打包cjs(CommonJS)和esm(ESModule)两种形式,cjs模式主要用于服务端引用(ssr),而esm就是我们现在经常使用的方式，它本身自带treeShaking而不需要额外配置按需引入(前提是你将模块分别导出)。
:::

#### 打包

- 配置package.json

```json
//components/package.json
 ...
  "scripts": {
    "build":"vite build"//++
  },
 ...
```

- 打包命令

```bash
pnpm run build
```

- 打包后

::: tip 注意 
其实到这里就已经可以直接打包了；components下执行： pnpm run build你就会发现打包了es和lib两个目录。
到这里其实打包的组件库只能给js项目使用,在ts项目下运行会出现一些错误，而且使用的时候还会失去代码提示功能，这样的话我们就失去了用ts开发组件库的意义了。所以我们需要在打包的库里加入声明文件(.d.ts)。
:::

- 配置d.ts

那么如何向打包后的库里加入声明文件呢？ 其实很简单，只需要引入vite-plugin-dts

```bash
pnpm i vite-plugin-dts -D -w
```

- 再次配置vite.config.ts

```ts
//components/vite.cofig.ts

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'//++

export default defineConfig(
    {
        build: {...},
        plugins: [
            vue(),
            //++
            dts({
                //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
                tsConfigFilePath: '../../tsconfig.json'
            }),
            //++
            //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
            dts({
                outputDir:'lib',
                tsConfigFilePath: '../../tsconfig.json'
            })

        ]
    }
)
```

::: tip 注意 
因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个dts插件，暂时没有想到其它更好的处理方法.
然后执行打包命令你就会发现你的es和lib下就有了声明文件
:::

### 发布组件库

::: tip 注意 
其实后面就可以进行发布了，发布之前更改一下我们components下的package.json如下：
:::

```json
{
  "name": "quick-vue3-ui",
  "version": "1.0.1",
  "private": false,
  "description": "quick-vue3--ui组件库",
  "main": "lib/index.js",
  "module":"es/index.js",
  "typings": "lib/index.d.ts",
  "files": [
    "es",
    "lib"
  ],
  "scripts": {
    "build":"vite build"
  },
  "keywords": [
    "quick-vue3-ui",
    "quick-vue3--ui组件库"
  ],
  "author": "zhanglp",
  "license": "MIT"
}
```

- 如果是第一次

::: tip 注意 
1. 去npm官网注册、登录及相关信息修改
2. 使用pnpm登录、发布
3. 发布使用镜像必须是npm（如果是淘宝镜像恢复回npm）
4. 发布前修改package.json版本并执行build命令。
:::

1. npm注册官网

https://www.npmjs.com/

2. pnpm登录npm

```bash
pnpm login 

Username: 迷的账号
Password:  你的密码
Email: (this IS public) 你的邮箱   

Enter one-time password: 邮箱验证码
```

3. 发布

- 非第一次

```bash
pnpm publish 即可
```


## npm版本管理

### 查看历史版本

- 最近100个版本

npm view test@1.0.0 versions

- 所有版本


npm view test@1.0.0 versions --json


### 删除版本

- 删除指定的版本

 pnpm unpublish test@1.0.1

 - 删除包
 
 npm unpublish test

  参数 --force :强制

### 废弃版本

什么是废弃版本？就是npm包还在，但是受某些因素影响，该包不再维护，不再更新了。
 
 - 废弃包
npm deprecate test '不再维护'

- 废弃版本
npm deprecate test@1.0.1 '不再维护'






## 常见错误

-错误
::: danger 错误信息
 ERROR  --workspace-root may only be used inside a workspace
:::

-解决方案：

根目录下配置此文件即可

```yaml
# pnpm-workspace.yaml
packages:
    - 'packages/**'
    - 'examples'
```

- 错误

::: danger 错误信息
找不到模块“./app.vue”或其相应的类型声明。ts
:::

- 解决方案：

```ts
//src/env.d.ts
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
```
-错误
::: danger 错误信息
找不到模块“../../package.json”。请考虑使用 "--resolveJsonModule" 导入带 ".json" 扩展的模块。
:::

-解决方案：

配置xx.d.ts即可

```ts
//src/env.d.ts
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
    declare module '*.json' {
    const value: any;
    export default value;
  }
```

-错误

打包报错

::: danger 错误信息
Entry module "index.ts" is using named and default exports together. Consumers of your bundle will have to use `chunk["default"]` to access the default export, which may not be what you want. Use `output.exports: "named"` to disable this warning
:::

-解决方案：

暂未处理，不影响打包

-错误

打包报错

::: danger 错误信息
Entry module "../../package.json" is using named and default exports together. Consumers of your bundle will have to use `chunk["default"]` to access the default export, which may not be what you want. Use `output.exports: "named"` to disable this warning
:::

-解决方案：

暂未处理，不影响打包

-错误
::: danger 错误信息
/es/index.js' does not provide an export named 'default'
:::

-解决方案：

-错误
::: danger 错误信息 
找不到模块“vite”或其相应的类型声明。
:::

-解决方案：

-错误
::: danger 错误信息
 ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE  In : No matching version found for @ainiteam/quick-vue3-ui@* inside the workspace
:::

-解决方案：

根目录下配置此文件即可

```yaml
# pnpm-workspace.yaml
packages:
    - 'packages/**'
    - 'examples'
```

-错误
::: danger 错误信息
ERR_PNPM_NO_SCRIPT  Missing script: build
:::

-解决方案：

增加对应的脚本命令即可

```json
...
 "scripts": {
    "dev": "vite"//++
  },
...
```

-错误
::: danger 错误信息
 ERROR   ERROR  Unknown option: 'workspace'
Did you mean 'workspace-root'? Use "--config.unknown=value" to force an unknown option.
:::

-解决方案：




## 散点

我们如果在根目录下安装依赖的话，这个依赖可以在所有的packages中使用，如果我们需要为具体的一个package安装依赖怎么办？
cd到package的所在目录嘛？漏，大漏特漏，我们可以通过下面这个命令：


## pnpm与workspace

### 在根下给某个包安装依赖

```bash
pnpm add vitepress --filter @ainiteam/examples
```
### 包与包直接引用

```bash
pnpm add @ainiteam/quick-vue3-ui -r --filter @ainiteam/examples 
```



## 散点

mkdir docs && echo '# Hello VitePress' > docs/index.md

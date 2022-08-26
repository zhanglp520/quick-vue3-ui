import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import quickVue3UI from '@ainiteam/quick-vue3-ui'
// import DefaultTheme from 'vitepress/dist/client/theme-default'
import DefaultTheme from 'vitepress/theme'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'

// import hljs from "highlight.js";
// import "highlight.js/styles/color-brewer.css";

// import Layout from './Layout.vue'
// import './custom.css'

export default {
  ...DefaultTheme,
  // Layout,
  NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {
    // 全局注册组件
    // app.component('VueClickAwayExample', VueClickAwayExample)
    app.use(ElementPlus)
    app.use(quickVue3UI)
    // app.directive("highlight", function (el) {
    //   const blocks = el.querySelectorAll("pre code");
    //   blocks.forEach((block) => {
    //     hljs.highlightBlock(block);
    //   });
    // });
        app.use(hljsVuePlugin)
  },
  setup() {

  }
}
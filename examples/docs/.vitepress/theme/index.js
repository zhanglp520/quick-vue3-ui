import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import quickVue3UI from '@ainiteam/quick-vue3-ui'
import DefaultTheme from 'vitepress/theme'
import hljs from 'highlight.js/lib/common'
import xml from 'highlight.js/lib/languages/xml'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/atom-one-dark.css'

hljs.registerLanguage('xml', xml)

export default {
  ...DefaultTheme,
  // Layout,
  NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {
    // 全局注册组件
    // app.component('VueClickAwayExample', VueClickAwayExample)
    app.use(ElementPlus)
    app.use(quickVue3UI)
    app.use(hljsVuePlugin)
  },
  setup() {},
}

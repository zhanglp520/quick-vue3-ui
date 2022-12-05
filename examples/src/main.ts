import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Elicons from '@element-plus/icons-vue'
import quickVue3UI from '@ainiteam/quick-vue3-ui'
import '@ainiteam/quick-vue3-ui/dist/style.css'

import hljs from 'highlight.js/lib/common'
import xml from 'highlight.js/lib/languages/xml'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import App from './app.vue'
import 'highlight.js/styles/atom-one-dark.css'

hljs.registerLanguage('xml', xml)

console.log('quickVue3UI', quickVue3UI)

const app = createApp(App)
Object.keys(Elicons).forEach((key) => {
  app.component(key, Elicons[key])
})
app.use(ElementPlus)
app.use(quickVue3UI)
app.use(hljsVuePlugin)
app.mount('#app')

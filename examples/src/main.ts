import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import quickVue3UI from '@ainiteam/quick-vue3-ui'
import App from './app.vue'

console.log('quickVue3UI', quickVue3UI)

const app = createApp(App)
app.use(ElementPlus)
app.use(quickVue3UI)
app.mount('#app')

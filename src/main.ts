import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/es/locale/lang/en'
// import QuickUi from '../dist/quick-vue3-ui.es.js'
import App from './App.vue'

// console.log('QuickUi', QuickUi)

const app = createApp(App)
app.use(ElementPlus)
// app.use(QuickUi)
app.mount('#app')

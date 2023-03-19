import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './permission'
import 'nprogress/nprogress.css'
import pinia from '@/store'
// import 'element-plus/dist/index.css'

import './index.css'
import router from './router'
import TUIKit from '@/IM'
import { tim } from '@/IM/login'
const app = createApp(App)

app.config.globalProperties.tim = tim

app.provide('app', app)

app.use(TUIKit).use(pinia).use(ElementPlus).use(router).mount('#app')

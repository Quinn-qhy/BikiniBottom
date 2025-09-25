import './assets/main.css'

// 导入vue和pinia
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 导入根组件和路由
import App from './App.vue'
import router from './router'

// 创建vue实例
const app = createApp(App)

// 使用pinia和路由
app.use(createPinia())
app.use(router)

// 挂载vue实例
app.mount('#app')

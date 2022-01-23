import { createApp } from 'vue'
import App from './App.vue'


//挂载路由
import router from './router/index'
//挂载pinia
import { createPinia } from 'pinia'
// 挂载ElementUI
import ElementUI from 'element-plus'


createApp(App).use(router).use(createPinia()).use(ElementUI).mount('#app')

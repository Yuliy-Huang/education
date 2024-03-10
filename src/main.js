import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router.js'
import * as echarts from 'echarts';


const app = createApp(App)

app.use(router).use(ElementPlus)
app.config.globalProperties.$echarts = echarts

app.mount('#app')

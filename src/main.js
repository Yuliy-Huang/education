import { createApp, reactive } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router.js'
import * as echarts from 'echarts';
import elTableInfiniteScroll from 'el-table-infinite-scroll';

const globalVars = reactive({
    isDim: '0',
})

const app = createApp(App)

app.use(router).use(ElementPlus).use(elTableInfiniteScroll)
app.config.globalProperties.$echarts = echarts

app.provide('globalVars', globalVars)

app.mount('#app')

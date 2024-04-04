import { createApp, reactive } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router.js';
import * as echarts from 'echarts';
import elTableInfiniteScroll from 'el-table-infinite-scroll';
import * as ElIconModules from '@element-plus/icons-vue';

const globalVars = reactive({
  isDim: '0',
  showSub: '0',
});

const app = createApp(App);

for (let iconName in ElIconModules) {
  app.component(iconName, ElIconModules[iconName]);
}

app.use(router).use(ElementPlus).use(elTableInfiniteScroll);
app.config.globalProperties.$echarts = echarts;

app.provide('globalVars', globalVars);

app.mount('#app');

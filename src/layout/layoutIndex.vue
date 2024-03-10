<template>
  <div class="common-layout">
    <el-container class="common-container">
      <el-header class="common-head">
        <div class="menu_wrapper">
          <div class="svg-div">
            <img :src="require(`@/assets/img/block.png`)"
                 @click="showNav = !showNav"
                 class="svg-left"
                 alt=""/>
          </div>
          <el-menu class="el-menu-demo"
                   mode="horizontal"
                   :router="true"
                   @open="handleOpen"
                   @close="handleClose"
                   :default-active="currentPagePath"
                   :collapse-transition="true"
                   :unique-opened="true">
            <div v-if="!showNav" class="notification">动态通知[{{ notificationNum }}]</div>
            <div v-if="!showNav" class="nav-date">{{ nowDate }}</div>
            <div v-if="!showNav" class="school-info">ID: {{ schoolId }}</div>
            <div v-if="!showNav" class="top-button1">
              <el-icon>
                <Back/>
              </el-icon>
            </div>
            <div v-if="!showNav" class="top-button2">
              <el-icon>
                <Close/>
              </el-icon>
            </div>
            <div v-for="(item, index) in currentRoleMenu"
                 :key="index">
              <el-menu-item
                  v-if="showNav && item.children && item.name !== '404' && !item.meta.isHidden"
                  :index="item.path">
                <el-tag
                    :key="item.path"
                    type="info"
                    effect="plain"
                >
                  {{ item.meta.title ? item.meta.title : item.name }}
                </el-tag>
              </el-menu-item>
            </div>
          </el-menu>
        </div>
      </el-header>
      <el-main class="content_wrapper">
        <router-view></router-view>
        <div class="foot-wrapper">
          <el-row class="foot-head-row">
            <el-col :span="4" class="foot-head-1">
              <div class="head-title">管理端数据控制平台</div>
            </el-col>
            <el-col :span="1" class="foot-head-2">
              <div class="block"></div>
            </el-col>
          </el-row>
          <el-row class="foot-row">
            <el-col :span="8">
              <div class="foot-col-1">
                <div class="weekly-1">left</div>
                <div class="weekly-2">
                  <div class="weekly-title">教师学员每周数据</div>
                  <el-row class="weekly-row">
                    <div class="weekly-col">
                      <div class="border-left">
                        <span></span>
                      </div>
                      <div class="sharp-tag">已上：[0]人</div>
                      <div class="border-right">
                        <span></span>
                      </div>
                    </div>

                    <div class="weekly-col">
                      <div class="border-left">
                        <span></span>
                      </div>
                      <div class="sharp-tag">未上：[0]人</div>
                      <div class="border-right">
                        <span></span>
                      </div>
                    </div>
                  </el-row>
                  <el-row class="weekly-row">
                    <div class="weekly-col">
                      <div class="border-left">
                        <span></span>
                      </div>
                      <div class="sharp-tag">请假：[0]人</div>
                      <div class="border-right">
                        <span></span>
                      </div>
                    </div>

                    <div class="weekly-col">
                      <div class="border-left">
                        <span></span>
                      </div>
                      <div class="sharp-tag">旷课：[0]人</div>
                      <div class="border-right">
                        <span></span>
                      </div>
                    </div>
                  </el-row>
                  <el-row class="weekly-row">
                    <div class="weekly-col">
                      <div class="border-left">
                        <span></span>
                      </div>
                      <div class="sharp-tag">调课：[0]人</div>
                      <div class="border-right">
                        <span></span>
                      </div>
                    </div>

                    <div class="weekly-col">
                      <div class="border-left">
                        <span></span>
                      </div>
                      <div class="sharp-tag">停课：[0]人</div>
                      <div class="border-right">
                        <span></span>
                      </div>
                    </div>
                  </el-row>
                </div>
                <div class="weekly-3">
                  <div class="left-arrow">
                    <img :src="require(`@/assets/img/arrowLeft.png`)"
                         style="width: 24px; height: 14px;"
                         alt=""/>
                  </div>
                  <div class="center-text">吉他教师：陈老师</div>
                  <div class="right-arrow">
                    <img :src="require(`@/assets/img/arrowRight.png`)"
                         style="width: 24px; height: 14px;"
                         alt=""/>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="foot-col-2">
                <div class="monthly-1">left</div>
                <div class="monthly-2">
                  <div class="monthly-title">教师学员每月数据</div>
                  <el-row class="monthly-row">
                    <el-col :span="12" class="monthly-col-left">招生[0］人</el-col>
                    <el-col :span="12" class="monthly-col-right">续费[0］人</el-col>
                  </el-row>
                  <el-row class="monthly-row">
                    <el-col :span="12" class="monthly-col-left">请假[0］人</el-col>
                    <el-col :span="12" class="monthly-col-right">旷课[0］人</el-col>
                  </el-row>
                  <el-row class="monthly-row">
                    <el-col :span="12" class="monthly-col-left">停课[0］人</el-col>
                    <el-col :span="12" class="monthly-col-right">退学[0］人</el-col>
                  </el-row>
                </div>
                <div class="monthly-3">right</div>
                <div class="monthly-4">
                  <div class="monthly-bottom" v-for="item in monthList" :key="item">{{ item }}</div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="foot-col-3">
                <div class="year-1">
                  <div class="year-title">教师学员全年数据</div>
                  <div ref="yearChart" class="year-chart"></div>
                </div>
                <div class="year-2">right</div>
                <div class="year-3">
                  <div class="year-bottom" v-for="item in yearList" :key="item">{{ item }}</div>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row class="foot-line">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import {useRouter} from "vue-router"
import {
  nextTick,
  onMounted,
  ref,
  watch,
} from "vue";
import route from "../router";
import {getNowTime} from "@/utils/dateFormat";
import {Close, Back} from '@element-plus/icons-vue'
import * as echarts from 'echarts'

const currentRoleMenu = ref([])
const currentPagePath = ref("");
const router = useRouter();

const username = ref('')
const userIcon = ref('')
const showNav = ref(false)
const nowDate = ref('')
const notificationNum = ref(28)
const schoolId = ref('A1008')

const initMenu = async () => {
  let tempRouter = route.getRoutes()
  tempRouter = tempRouter.filter((item) => {
    return !item.meta.isHidden;
    // return !item.meta.isHidden && !item.redirect;
  });
  // console.log('layout --- route.getRoutes(): ', tempRouter)

  currentRoleMenu.value = [];
  tempRouter.forEach((item) => {
    if (item.redirect) {
      item.children = [];
      currentRoleMenu.value.push(item);
    }
  });
  // console.log('layout --- currentRoleMenu: ', currentRoleMenu.value)
  tempRouter.forEach((val) => {
    currentRoleMenu.value = currentRoleMenu.value.map((item) => {
      if (val.path.split('/')[1] === item.redirect.split('/')[1]) {
        // console.log('**** val : ', val)
        item.children.push(val);
      }
      return item;
    });
  });
  // console.log('layout --- currentRoleMenu: ', currentRoleMenu.value)

};

const monthList = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])
const yearList = ref(['招生', '续费', '请假', '旷课', '停课', '退学'])

const yearChart = ref(null);

onMounted(() => {
  nextTick(() => {
    nowDate.value = getNowTime()
    currentPagePath.value = router.currentRoute._rawValue.path;
    username.value = localStorage.getItem('username')
    userIcon.value = localStorage.getItem('userIcon') === 'null' ? '' : localStorage.getItem('userIcon')
    initMenu();
    const option = {
      grid: {
        top: '36%',
        left: '-5%',
        right: '-1%',
        bottom: '-22%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['招生', '续费', '请假', '旷课', '停课', '退学'],
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [{
        data: [40, 35, 45, 37, 30, 14],
        type: 'bar',
        barWidth: '45%',
        itemStyle: {
          normal: {
            label: {
              formatter: '{c}' + '人',
              show: true,
              position: "top",
              borderWidth: 0.95, // 文字四角边框宽度
              padding: 2, // 文字四角的内边距
              textStyle: {
                fontSize: "12",
                color: "#676767"
              }
            },
            color: '#222322',
            borderWidth: 0.95,
            borderColor: "#000000",
          },
        }
      }]
    };

    const chartInstance = echarts.init(yearChart.value);
    chartInstance.setOption(option);
    window.addEventListener('resize', function () {
      chartInstance.resize();
    });
  });
});

watch(
    () => router.currentRoute.value.path,
    // eslint-disable-next-line no-unused-vars
    () => {
      currentPagePath.value = router.currentRoute.value.path;
    },
    {immediate: true}
);

window.addEventListener('setItemEvent', function (e) {
  if (e.key === 'userIcon') {
    userIcon.value = e.newValue
  }
})


const handleOpen = (key, keyPath) => {
  console.log('handleOpen handleOpen');
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log('handleClose handleClose');
  console.log(key, keyPath);
};


</script>
<style lang="less">
@import "./layoutIndexCss.less";
</style>



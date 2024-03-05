<template>
  <div class="common-layout">
    <el-container class="common-container">
      <el-header class="common-head">
        <div class="menu_wrapper">
          <div class="svg-div">
            <my-pure-svg :svg-tab="svgBlock" class="svg-left" @click="showNav = !showNav"></my-pure-svg>
          </div>
          <el-menu class="el-menu-demo"
                   mode="horizontal"
                   :router="true"
                   @open="handleOpen"
                   @close="handleClose"
                   :default-active="currentPagePath"
                   :collapse-transition="true"
                   :unique-opened="true">
            <div v-if="!showNav" class="nav-date">{{ nowDate }}</div>
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
            <el-col :span="4" class="foot-head-1">前台端数据控制平台</el-col>
            <el-col :span="1" class="foot-head-2">
              <div class="block"></div>
            </el-col>
          </el-row>
          <el-row class="foot-row">
            <el-col :span="8">
              <div class="foot-col-1">
                <div class="list-item">left</div>
                <div class="list-item">top</div>
                <div class="list-item">bottom</div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="foot-col-2">
                <div class="item1">left</div>
                <div class="item2">middle</div>
                <div class="item3">right</div>
                <div class="item4">footer</div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="foot-col-3">
                <div class="item1">top</div>
                <div class="item2">right</div>
                <div class="item3">footer</div>
              </div>
            </el-col>
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
import {svgBlock} from '@/assets/svg/svgs'
import MyPureSvg from "@/components/MyPureSvg.vue";
import {getNowTime} from "@/utils/dateFormat";

const currentRoleMenu = ref([])
const currentPagePath = ref("");
const router = useRouter();

const username = ref('')
const userIcon = ref('')
const showNav = ref(false)
const nowDate = ref('')

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


onMounted(() => {
  nextTick(() => {
    nowDate.value = getNowTime()
    currentPagePath.value = router.currentRoute._rawValue.path;
    username.value = localStorage.getItem('username')
    userIcon.value = localStorage.getItem('userIcon') === 'null' ? '' : localStorage.getItem('userIcon')
    initMenu();
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



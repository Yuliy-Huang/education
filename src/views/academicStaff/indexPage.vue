<template>
  <div class="system-setting">
    <staffHome :page-type="pageType" @changeTab="changeTab"/>

    <div class="system-setting-side">
      <div class="top-button" @click="close2NotDim">
        <el-icon>
          <Close/>
        </el-icon>
      </div>
      <div class="top-button-1" @click="back2LastDiv" >
        <el-icon>
          <Back/>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import staffHome from './staffHome.vue'
import {Back, Close} from "@element-plus/icons-vue";

const pageType = ref('home')
const changeTab = (v) => {
  pageType.value = v
}

const close2NotDim = () => {
  pageType.value = 'home'
}

const back2LastDiv = () => {
  pageType.value = 'home'
}

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/indexCss";
</style>

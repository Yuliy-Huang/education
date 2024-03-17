<template>
  <div class="system-setting">
    <staffEditComponent :page-type="pageType" @changeTab="changeTab"/>

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
import staffEditComponent from './staffEdit.vue'
import {Back, Close} from "@element-plus/icons-vue";

const pageType = ref('home')
const showEdit = ref(false)

const changeTab = (v) => {
  pageType.value = v
  console.log('index --- pagetype : ', pageType.value)
}

const close2NotDim = () => {
  pageType.value = 'home'
}

const back2LastDiv = () => {
  showEdit.value = false
}

</script>
<style scoped lang="less">
@import "@/assets/css/academicStaff/indexCss";
</style>

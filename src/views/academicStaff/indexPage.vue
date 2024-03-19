<template>
  <div class="system-setting">
    <div class="staff">
      <keep-alive>
        <div class="academic-staff">
          <component :is="currentCom" :page-type="pageType" @changeTab="changeTab"/>
        </div>
      </keep-alive>
    </div>

    <div class="system-setting-side">
      <div class="top-right-button" @click="close2NotDim">
        <el-icon>
          <Close/>
        </el-icon>
      </div>
      <div class="top-right-button-1" @click="back2LastDiv">
        <el-icon>
          <Back/>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import {markRaw, ref, watch} from 'vue';
import {Back, Close} from "@element-plus/icons-vue";
import staffHome from './staffHome.vue'
import staffArchiveComponent from "./staffArchive.vue"
import staffListComponent from "./staffList.vue"
import staffInfoSeeComponent from "./staffInfoSee.vue"
import staffInfoSeeSalaryComponent from "./staffInfoSeeSalary.vue"
import staffInfoSeeCheckInComponent from "./staffInfoSeeCheckIn.vue"

const pageType = ref('home')
const changeTab = (v) => {
  console.log('index --- v : ', v)
  pageType.value = v
}

const close2NotDim = () => {
  pageType.value = 'home'
}

const back2LastDiv = () => {
  console.log('back2LastDiv ---- pageType.value : ', pageType.value)
  switch (pageType.value) {
    case 'infoArchiveModify':
      pageType.value = 'infoModify'
      break
    case 'infoSeeFile':
      pageType.value = 'infoSee'
      break
    case 'infoSeeSalary':
    case 'infoSeeCheckIn':
    case 'infoSeeComment':
      pageType.value = 'infoSeeFile'
      console.log('switch pageType.value : ', pageType.value)
      break
    default:
      pageType.value = 'home'
  }
}

const currentCom = ref(markRaw(staffHome))
watch(pageType, () => {
  switch (pageType.value) {
    case 'infoArchiveAdd':
      currentCom.value = markRaw(staffArchiveComponent)
      break
    case 'infoArchiveModify':
      currentCom.value = markRaw(staffArchiveComponent)
      break
    case 'infoModify':
      currentCom.value = markRaw(staffListComponent)
      break
    case 'infoSee':
      currentCom.value = markRaw(staffListComponent)
      break
    case 'infoSeeFile':
      currentCom.value = markRaw(staffInfoSeeComponent)
      break
    case 'infoSeeSalary':
      currentCom.value = markRaw(staffInfoSeeSalaryComponent)
      break
    case 'infoSeeCheckIn':
      currentCom.value = markRaw(staffInfoSeeCheckInComponent)
      break
    case 'infoSeeComment':
      currentCom.value = markRaw(staffInfoSeeSalaryComponent)
      break
    default:
      currentCom.value = markRaw(staffHome)
  }
})

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/indexCss";
</style>

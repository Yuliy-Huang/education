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
import {markRaw, ref, watch, defineAsyncComponent} from 'vue';
import {Back, Close} from "@element-plus/icons-vue";
import staffHome from './staffHome.vue'

const staffArchive = defineAsyncComponent(() => import("./staffArchive.vue"))
const staffList = defineAsyncComponent(() => import("./staffList.vue"))
const staffInfoSee = defineAsyncComponent(() => import("./staffInfoSee.vue"))
const staffInfoSeeSalary = defineAsyncComponent(() => import("./staffInfoSeeSalary.vue"))
const staffInfoSeeCheckIn = defineAsyncComponent(() => import("./staffInfoSeeCheckIn.vue"))

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
      currentCom.value = markRaw(staffArchive)
      break
    case 'infoArchiveModify':
      currentCom.value = markRaw(staffArchive)
      break
    case 'infoModify':
      currentCom.value = markRaw(staffList)
      break
    case 'infoSee':
      currentCom.value = markRaw(staffList)
      break
    case 'infoSeeFile':
      currentCom.value = markRaw(staffInfoSee)
      break
    case 'infoSeeSalary':
      currentCom.value = markRaw(staffInfoSeeSalary)
      break
    case 'infoSeeCheckIn':
      currentCom.value = markRaw(staffInfoSeeCheckIn)
      break
    case 'infoSeeComment':
      currentCom.value = markRaw(staffInfoSeeSalary)
      break
    default:
      currentCom.value = markRaw(staffHome)
  }
})

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/indexCss";
</style>

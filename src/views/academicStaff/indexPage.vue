<template>
  <div class="staff-setting">
    <div class="staff-div">
      <keep-alive :exclude="['staffInfoSeeDetail', 'staffDimission']">
        <div :class="isSeparate ? 'academic-staff-separate' : 'academic-staff'">
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
const staffInfoSeeDetail = defineAsyncComponent(() => import("./staffInfoSeeDetail.vue"))
const staffDimission = defineAsyncComponent(() => import("./staffDimission.vue"))
const staffDimissionDelete = defineAsyncComponent(() => import("./staffDimissionDelete.vue"))

const pageType = ref('home')
const isSeparate= ref(false)
const changeTab = (v) => {
  pageType.value = v
  console.log('changeTab ****** pageType.value : ', pageType.value)
  isSeparate.value = ['infoSeeSalary', 'infoSeeCheckIn', 'infoSeeComment'].includes(v);
}

const close2NotDim = () => {
  changeTab('home')
}

const back2LastDiv = () => {
  console.log('back --- pageType.value : ', pageType.value)
  switch (pageType.value) {
    case 'infoArchiveModify':
      changeTab('infoModify')
      break
    case 'infoSeeFile':
      changeTab('infoSee')
      break
    case 'infoSeeSalary':
    case 'infoSeeCheckIn':
    case 'infoSeeComment':
      changeTab('infoSeeFile')
      break
    case 'staffDimissionDelete':
      changeTab('staffConfirmDimission')
      break
    case 'staffConfirmDimission':
      changeTab('staffDimission')
      break
    default:
      changeTab('home')
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
    case 'infoSee':
    case 'staffDimission':
      currentCom.value = markRaw(staffList)
      break
    case 'infoSeeFile':
      currentCom.value = markRaw(staffInfoSee)
      break
    case 'infoSeeSalary':
    case 'infoSeeCheckIn':
    case 'infoSeeComment':
      currentCom.value = markRaw(staffInfoSeeDetail)
      break
    case 'staffConfirmDimission':
      currentCom.value = markRaw(staffDimission)
      break
    case 'staffDimissionDelete':
      currentCom.value = markRaw(staffDimissionDelete)
      break
    default:
      currentCom.value = markRaw(staffHome)
  }
})

</script>
<style scoped lang="less">
@import "@/assets/css/academicStaff/indexCss";
</style>

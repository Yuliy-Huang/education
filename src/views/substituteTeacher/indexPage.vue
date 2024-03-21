<template>
  <pageStructureComponent
    :pageType="'home'"
    :isSeparate="false"
    @close2NotDim="close2NotDim"
    @back2LastDiv="back2LastDiv"
  >
    <component
      :is="currentCom"
      :page-type="pageType"
      :staffList="staffList"
      :searchValue="searchValue"
      @changeTab="changeTab"
      :blockList="blockList"
      :placeholder="'代课教师搜索：'"
    />
  </pageStructureComponent>
</template>

<script setup>
import { markRaw, ref, watch, defineAsyncComponent } from 'vue';
import pageStructureComponent from '@/components/pageStructureComponent'
import blocksComponent from '@/components/blocksComponent'

const staffArchive = defineAsyncComponent(() => import("./teacherArchive.vue"))
const cellListComponent = defineAsyncComponent(() => import("../../components/cellListComponent.vue"))
const staffInfoSee = defineAsyncComponent(() => import("./teacherInfoSee.vue"))
const staffInfoSeeDetail = defineAsyncComponent(() => import("./teacherInfoSeeDetail.vue"))
const staffDimission = defineAsyncComponent(() => import("./teacherDimission.vue"))
const staffDimissionDelete = defineAsyncComponent(() => import("./teacherDimissionDelete.vue"))

const pageType = ref('home')
const isSeparate = ref(false)
const blockList = ref([
  { name: '教师档案存档', pageType: 'infoArchiveAdd' },
  { name: '教师档案查看', pageType: 'infoSee' },
  { name: '教师档案修改', pageType: 'infoModify' },
  { name: '教师离职办理', pageType: 'staffDimission' }
])
const staffList = ref(['李文斌［钢琴教师］', '张三毛［美术教师］'])
const searchValue = ref('')

const changeTab = (v) => {
  pageType.value = v
  isSeparate.value = ['infoSeeSalary', 'infoSeeCheckIn', 'infoSeeComment'].includes(v);
}

const close2NotDim = () => {
  changeTab('home')
}

const back2LastDiv = () => {
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

const currentCom = ref(markRaw(blocksComponent))
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
      currentCom.value = markRaw(cellListComponent)
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
      currentCom.value = markRaw(blocksComponent)
  }
})

</script>
<style scoped lang="less">
</style>

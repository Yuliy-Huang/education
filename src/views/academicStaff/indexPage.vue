<template>
  <pageStructureComponent
    :pageType="'home'"
    :isSeparate="isSeparate"
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
      :placeholder="'教务员工搜索：'"
    />
  </pageStructureComponent>
</template>

<script setup>
import { markRaw, ref, watch, defineAsyncComponent } from 'vue';
import pageStructureComponent from '@/components/pageStructureComponent';
import blocksComponent from '@/components/blocksComponent';

const staffArchive = defineAsyncComponent(() => import('./staffArchive.vue'));
const cellListComponent = defineAsyncComponent(() =>
  import('../../components/cellMoreSearchComponent.vue')
);
const staffInfoSee = defineAsyncComponent(() =>
  import('./seeDetail/staffInfoSee.vue')
);
const staffInfoSeeDetail = defineAsyncComponent(() =>
  import('./seeDetail/staffInfoSeeDetail.vue')
);
const staffDimission = defineAsyncComponent(() =>
  import('./staffDimission.vue')
);
const staffDimissionDelete = defineAsyncComponent(() =>
  import('./staffDimissionDelete.vue')
);

const pageType = ref('home');
const isSeparate = ref(false);
const blockList = ref([
  { name: '教务档案存档', pageType: 'infoArchiveAdd', count: 1 },
  { name: '教务档案查看', pageType: 'infoSee', count: 2 },
  { name: '教务档案修改', pageType: 'infoModify', count: 3 },
  { name: '教务离职办理', pageType: 'staffDimission', count: 2 },
]);
const staffList = ref(['张三［前台］', '李四毛［经理］']);
const searchValue = ref('');

const changeTab = v => {
  pageType.value = v;
  isSeparate.value = [
    'infoSeeSalary',
    'infoSeeCheckIn',
    'infoSeeComment',
  ].includes(v);
};

const close2NotDim = () => {
  changeTab('home');
};

const back2LastDiv = () => {
  switch (pageType.value) {
    case 'infoArchiveModify':
      changeTab('infoModify');
      break;
    case 'infoSeeFile':
      changeTab('infoSee');
      break;
    case 'infoSeeSalary':
    case 'infoSeeCheckIn':
    case 'infoSeeComment':
      changeTab('infoSeeFile');
      break;
    case 'staffDimissionDelete':
      changeTab('staffConfirmDimission');
      break;
    case 'staffConfirmDimission':
      changeTab('staffDimission');
      break;
    default:
      changeTab('home');
  }
};

const currentCom = ref(markRaw(blocksComponent));
watch(pageType, () => {
  switch (pageType.value) {
    case 'infoArchiveAdd':
      currentCom.value = markRaw(staffArchive);
      break;
    case 'infoArchiveModify':
      currentCom.value = markRaw(staffArchive);
      break;
    case 'infoModify':
    case 'infoSee':
    case 'staffDimission':
      currentCom.value = markRaw(cellListComponent);
      break;
    case 'infoSeeFile':
      currentCom.value = markRaw(staffInfoSee);
      break;
    case 'infoSeeSalary':
    case 'infoSeeCheckIn':
    case 'infoSeeComment':
      currentCom.value = markRaw(staffInfoSeeDetail);
      break;
    case 'staffConfirmDimission':
      currentCom.value = markRaw(staffDimission);
      break;
    case 'staffDimissionDelete':
      currentCom.value = markRaw(staffDimissionDelete);
      break;
    default:
      currentCom.value = markRaw(blocksComponent);
  }
});
</script>
<style scoped lang="less"></style>

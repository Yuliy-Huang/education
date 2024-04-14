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
      :blockList="blockList"
      @changeTab="changeTab"
      :twoBlockList="twoBlockList"
      :searchValue="searchValue"
      :placeholder="placeholder"
      :staffList="staffList"
      @clickPlusFunc="clickPlusFunc"
      :newArchive="newArchive"
    />
  </pageStructureComponent>
</template>

<script setup>
import { markRaw, ref, watch, defineAsyncComponent } from 'vue';
import pageStructureComponent from '@/components/pageStructureComponent';
import blocksComponent from '@/components/blocksComponent';
import twoBlocksComponent from '@/components/twoBlocksComponent';
const cellMoreSearchComponent = defineAsyncComponent(() =>
  import('../../components/cellMoreSearchComponent.vue')
);
const leftRightCom = defineAsyncComponent(() =>
  import('@/components/leftPicRightTableComponent.vue')
);
const newArchivePage = defineAsyncComponent(() =>
  import('./newArchivePage.vue')
);

const pageType = ref('home');
const isSeparate = ref(false);

const blockList = ref([
  { name: '其他扣费入档', pageType: 'page1', count: 3 },
  { name: '其他付费入档', pageType: 'page2', count: 0 },
  { name: '销售提成入档', pageType: 'page3', count: 1 },
  { name: '绩效奖金入栏', pageType: 'page4', count: 1 },
]);

const twoBlockList = ref([]);
const searchValue = ref('');
const placeholder = ref('');
const staffList = ref(['张三［前台］', '李四毛［经理］']);
let theFrom = ref('');
const changeTab = (from, to) => {
  console.log('archiveManage --- indexPage.vue --- from : ', from);
  console.log('archiveManage --- indexPage.vue --- to : ', to);
  if (to === 'new-archive') {
    pageType.value = to;
    theFrom.value = from;
  } else if (from === 'home' || !from) {
    pageType.value = to;
  } else {
    pageType.value = from + '-' + to;
  }
  console.log('changeTab --- pageType.value : ', pageType.value);
  isSeparate.value = [''].includes(to);
  switch (pageType.value) {
    case 'page1':
    case 'page2':
    case 'page3':
    case 'page4':
      twoBlockList.value = ['代课教师管理存栏', '教务员工管理存栏'];
      break;
    case 'page1-teacher':
    case 'page2-teacher':
    case 'page3-teacher':
    case 'page4-teacher':
      placeholder.value = '代课教师搜索：';
      break;
    case 'page1-staff':
    case 'page2-staff':
    case 'page3-staff':
    case 'page4-staff':
      placeholder.value = '教务员工搜索：';
      break;
    default:
      twoBlockList.value = [];
  }
};

const close2NotDim = () => {
  changeTab('', 'home');
};

const back2LastDiv = () => {
  const regex = /^\[a-z]+-[a-z]+-[a-z]+$/;
  if (pageType.value === 'new-archive') {
    changeTab('', theFrom.value);
  } else if (regex.test(pageType.value)) {
    const nameList = pageType.value.split('-');
    const to = nameList.slice(0, nameList.length - 2).join('-');
    changeTab('', to);
  } else if (pageType.value.startsWith('page1-')) {
    changeTab('', 'page1');
  } else if (pageType.value.startsWith('page2-')) {
    changeTab('', 'page2');
  } else if (pageType.value.startsWith('page3-')) {
    changeTab('', 'page3');
  } else if (pageType.value.startsWith('page4-')) {
    changeTab('', 'page4');
  } else {
    changeTab('', 'home');
  }
};

const currentCom = ref(markRaw(blocksComponent));
watch(pageType, () => {
  switch (pageType.value) {
    case 'page1':
    case 'page2':
    case 'page3':
    case 'page4':
      currentCom.value = markRaw(twoBlocksComponent);
      break;
    case 'page1-teacher':
    case 'page1-staff':
    case 'page2-teacher':
    case 'page2-staff':
    case 'page3-teacher':
    case 'page3-staff':
    case 'page4-teacher':
    case 'page4-staff':
      currentCom.value = markRaw(cellMoreSearchComponent);
      break;
    case 'page1-teacher-archieve':
    case 'page1-staff-archieve':
    case 'page2-teacher-archieve':
    case 'page2-staff-archieve':
      currentCom.value = markRaw(leftRightCom);
      break;
    case 'new-archive':
      currentCom.value = markRaw(newArchivePage);
      break;
    default:
      currentCom.value = markRaw(blocksComponent);
  }
});

const newArchive = ref(false);
const clickPlusFunc = () => {
  console.log('index --- clickPlusFunc');
  newArchive.value = true;
  changeTab(pageType.value, 'new-archive');
};
</script>
<style scoped lang="less"></style>

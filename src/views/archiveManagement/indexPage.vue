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
    />
  </pageStructureComponent>
</template>

<script setup>
import { markRaw, ref, watch } from 'vue';
import pageStructureComponent from '@/components/pageStructureComponent';
import blocksComponent from '@/components/blocksComponent';
import twoBlocksComponent from '@/components/twoBlocksComponent';

const pageType = ref('home');
const isSeparate = ref(false);

const blockList = ref([
  { name: '其他扣费入档', pageType: 'page1', count: 3 },
  { name: '其他付费入档', pageType: 'page2', count: 0 },
  { name: '销售提成入档', pageType: 'page3', count: 1 },
  { name: '绩效奖金入栏', pageType: 'page4', count: 1 },
]);

const twoBlockList = ref([]);

const changeTab = (from, to) => {
  console.log('archiveManage --- indexPage.vue --- from : ', from);
  console.log('archiveManage --- indexPage.vue --- to : ', to);

  pageType.value = to;
  isSeparate.value = [''].includes(to);
  switch (pageType.value) {
    case 'page1':
    case 'page2':
    case 'page3':
    case 'page4':
      twoBlockList.value = ['代课教师管理存栏', '教务员工管理存栏'];
      break;
    default:
      console.log('changeTab --- default');
      twoBlockList.value = [];
  }
};

const close2NotDim = () => {
  changeTab('', 'home');
};

const back2LastDiv = () => {
  switch (pageType.value) {
    case 'xxx':
      changeTab('home', 'page1');
      break;
    case 'www':
      changeTab('home', 'page2');
      break;
    case 'eeee':
      changeTab('home', 'page3');
      break;
    case 'wwwwww':
      changeTab('home', 'page4');
      break;
    default:
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
    default:
      currentCom.value = markRaw(blocksComponent);
  }
});
</script>
<style scoped lang="less"></style>

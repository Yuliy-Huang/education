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
      :placeholder="placeholder"
    />
  </pageStructureComponent>
</template>

<script setup>
import { markRaw, ref, watch, defineAsyncComponent } from 'vue';
import pageStructureComponent from '@/components/pageStructureComponent';
import blocksComponent from '@/components/blocksComponent';

const clockDetailPage = defineAsyncComponent(() =>
    import('./clockDetail.vue')
);

const pageType = ref('home');
const isSeparate = ref(false);
const placeholder = ref('')
const blockList = ref([
  { name: '教务员工上班打卡', pageType: 'page1', count: 3 },
  { name: '代课教师上班打卡', pageType: 'page2', count: 1 },
]);
const staffList = ref([]);
const searchValue = ref('');
let theFrom = ref('');
const changeTab = (from, to) => {
  console.log('clockIn --- indexPage.vue --- from : ', from);
  console.log('clockIn --- indexPage.vue --- to : ', to);
  pageType.value = to;
  theFrom.value = from;
  isSeparate.value = ['page1', 'page2'].includes(to);
  switch (pageType.value) {
    case 'page1':
      staffList.value = ['张三［前台］', '李四［后勤］'];
      placeholder.value = '教务员工搜索：'
      break;
    case 'page2':
      staffList.value = ['李文斌［吉他教师］', '张三毛［美术教师］'];
      placeholder.value = '代课教师搜索：'
      break;
    default:
      staffList.value = [];
  }
};

const close2NotDim = () => {
  changeTab(pageType.value, 'home');
};

const back2LastDiv = () => {
  changeTab('home');
};

const currentCom = ref(markRaw(blocksComponent));
watch(pageType, () => {
  switch (pageType.value) {
    case 'page1':
    case 'page2':
      currentCom.value = markRaw(clockDetailPage);
      break;
    default:
      currentCom.value = markRaw(blocksComponent);
  }
});
</script>
<style scoped lang="less"></style>

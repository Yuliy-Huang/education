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
      :placeholder="'学校专业搜索：'"
    />
  </pageStructureComponent>
</template>

<script setup>
import { markRaw, ref, watch, defineAsyncComponent } from 'vue';
import pageStructureComponent from '@/components/pageStructureComponent';
import blocksComponent from '@/components/blocksComponent';

const cellMoreSearchComponent = defineAsyncComponent(() =>
  import('../../components/cellMoreSearchComponent.vue')
);

const pageType = ref('home');
const isSeparate = ref(false);
const blockList = ref([
  {
    name: '专业级别学员统计',
    pageType: 'professionalLevelStatistic',
    count: 2,
  },
  { name: '教师考级学员统计', pageType: 'classStatistic', count: 3 },
  { name: '教师单节课费统计', pageType: 'fileSee', count: 0 },
  { name: '教师学员课表查看', pageType: 'studentDimission', count: 1 },
  { name: '学员每月作业查看', pageType: 'studentDimission', count: 0 },
  { name: '学员课时明细查看', pageType: 'studentDimission', count: 0 },
]);
const staffList = ref(['架子鼓', '钢琴']);
const searchValue = ref('');

const changeTab = v => {
  console.log('indexPage.vue --- v : ', v);
  pageType.value = v;
  isSeparate.value = [
    'studentNumber',
    'classStatistic',
    'fileSee',
    'studentDimission',
  ].includes(v);
};

const close2NotDim = () => {
  changeTab('home');
};

const back2LastDiv = () => {
  switch (pageType.value) {
    case 'professionalLevelStatistic':
    case 'classStatistic':
    case 'fileSee':
    case 'studentDimission':
      changeTab('home');
      break;
    case 'studentDimissionConfirm':
      changeTab('studentDimission');
      break;
    case 'studentDimissionDelete':
      changeTab('studentDimissionConfirm');
      break;
    default:
      changeTab('home');
  }
};

const currentCom = ref(markRaw(blocksComponent));
watch(pageType, () => {
  switch (pageType.value) {
    case 'professionalLevelStatistic':
      currentCom.value = markRaw(cellMoreSearchComponent);
      break;
    default:
      currentCom.value = markRaw(blocksComponent);
  }
});
</script>
<style scoped lang="less"></style>

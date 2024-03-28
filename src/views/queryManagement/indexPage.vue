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
import studentStatisticDetail from './studentStatisticDetail.vue';

const cellMoreSearchComponent = defineAsyncComponent(() =>
  import('../../components/cellMoreSearchComponent.vue')
);

const pageType = ref('home');
const isSeparate = ref(false);
const blockList = ref([
  {
    name: '专业级别学员统计',
    pageType: 'studentLevelStatistic',
    count: 2,
  },
  { name: '教师考级学员统计', pageType: 'teacherLevelStatistic', count: 3 },
  { name: '教师单节课费统计', pageType: 'classFeeStatistic', count: 0 },
  { name: '教师学员课表查看', pageType: 'classScheduleSee', count: 1 },
  { name: '学员每月作业查看', pageType: 'monthlyHomeworkSee', count: 0 },
  { name: '学员课时明细查看', pageType: 'classDetailSee', count: 0 },
]);
const staffList = ref([]);
const searchValue = ref('');

const changeTab = v => {
  console.log('indexPage.vue --- v : ', v);
  pageType.value = v;
  isSeparate.value = [''].includes(v);
  switch (pageType.value) {
    case 'studentLevelStatistic':
      staffList.value = ['架子鼓', '钢琴'];
      break;
    case 'teacherLevelStatistic':
      staffList.value = ['李文斌［吉他教师］', '张三毛［美术教师］'];
      break;
    case 'classFeeStatistic':
      staffList.value = ['李文斌［吉他教师］', '张三毛［美术教师］'];
      break;
    case 'classScheduleSee':
      staffList.value = ['李文斌［吉他教师］', '张三毛［美术教师］'];
      break;
    case 'monthlyHomeworkSee':
      staffList.value = ['李文斌［吉他教师］', '张三毛［美术教师］'];
      break;
    case 'classDetailSee':
      staffList.value = ['李文斌［吉他教师］', '张三毛［美术教师］'];
      break;
    default:
      staffList.value = [];
  }
};

const close2NotDim = () => {
  changeTab('home');
};

const back2LastDiv = () => {
  switch (pageType.value) {
    case '':
      changeTab('home');
      break;
    default:
      changeTab('home');
  }
};

const currentCom = ref(markRaw(blocksComponent));
watch(pageType, () => {
  switch (pageType.value) {
    case 'studentLevelStatistic':
    case 'teacherLevelStatistic':
    case 'classFeeStatistic':
    case 'classScheduleSee':
    case 'monthlyHomeworkSee':
    case 'classDetailSee':
      currentCom.value = markRaw(cellMoreSearchComponent);
      break;
    case 'studentStatisticDetail':
      currentCom.value = markRaw(studentStatisticDetail);
      break;
    default:
      currentCom.value = markRaw(blocksComponent);
  }
});
</script>
<style scoped lang="less"></style>

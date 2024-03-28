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
      :placeholder="'校区学员搜索：'"
    />
  </pageStructureComponent>
</template>

<script setup>
import { markRaw, ref, watch, defineAsyncComponent } from 'vue';
import pageStructureComponent from '@/components/pageStructureComponent';
import blocksComponent from '@/components/blocksComponent';

const studentNumberPage = defineAsyncComponent(() =>
  import('./studentNumber.vue')
);
const classStatisticPage = defineAsyncComponent(() =>
  import('./studentStatistic.vue')
);
const fileSeePage = defineAsyncComponent(() => import('./studentFileSee.vue'));
const studentDimissionPage = defineAsyncComponent(() =>
  import('./studentDimission.vue')
);
const studentDimissionConfirmPage = defineAsyncComponent(() =>
  import('./studentDimissionConfirm.vue')
);

const studentDimissionDeletePage = defineAsyncComponent(() =>
  import('./studentDimissionDelete.vue')
);

const pageType = ref('home');
const isSeparate = ref(false);
const blockList = ref([
  { name: '学员专业人数', pageType: 'studentNumber', count: 2 },
  { name: '学员课时统计', pageType: 'classStatistic', count: 2 },
  { name: '学员档案查看', pageType: 'fileSee', count: 1 },
  { name: '学员退学管理', pageType: 'studentDimission', count: 0 },
]);
const staffList = ref(['梁朝伟', '刘德华']);
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
    case 'studentNumber':
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
    case 'studentNumber':
      currentCom.value = markRaw(studentNumberPage);
      break;
    case 'classStatistic':
      currentCom.value = markRaw(classStatisticPage);
      break;
    case 'fileSee':
      currentCom.value = markRaw(fileSeePage);
      break;
    case 'studentDimission':
      currentCom.value = markRaw(studentDimissionPage);
      break;
    case 'studentDimissionConfirm':
      currentCom.value = markRaw(studentDimissionConfirmPage);
      break;
    case 'studentDimissionDelete':
      currentCom.value = markRaw(studentDimissionDeletePage);
      break;
    default:
      currentCom.value = markRaw(blocksComponent);
  }
});
</script>
<style scoped lang="less"></style>

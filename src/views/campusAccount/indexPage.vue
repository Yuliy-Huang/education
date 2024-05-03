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
        :cutNum="cutNum"
        :statisticList="statisticList"
    />
  </pageStructureComponent>
</template>

<script setup>
import {markRaw, ref, watch, defineAsyncComponent} from 'vue';
import pageStructureComponent from '@/components/pageStructureComponent';
import blocksComponent from '@/components/blocksComponent';
const accountDetailCom1_3 = defineAsyncComponent(() =>
    import('./accountDetail1_3.vue')
);
const accountDetailCom2_4 = defineAsyncComponent(() =>
    import('./accountDetail2_4.vue')
)

const pageType = ref('home');
const isSeparate = ref(false);
const placeholder = ref('')
const cutNum = ref(10)
const statisticList = ref([])
const blockList = ref([
  {name: '教师工资结算', pageType: 'page1', count: 3},
  {name: '教务工资结算', pageType: 'page2', count: 1},
  {name: '退费学员结算', pageType: 'page3', count: 1},
  {name: '商家进货结算', pageType: 'page4', count: 1},
]);
const staffList = ref([]);
const searchValue = ref('');
let theFrom = ref('');
const changeTab = (from, to) => {
  console.log('campusAccount --- indexPage.vue --- from : ', from);
  console.log('campusAccount --- indexPage.vue --- to : ', to);
  pageType.value = to;
  theFrom.value = from;
  isSeparate.value = ['page1', 'page2', 'page3'].includes(to);
  switch (pageType.value) {
    case 'page1':
      staffList.value = ['全部专业预收学费：共计［60］万', '全部专业实收学费：共计［41］万', '全部专业商品销售；共计［33.5］万', '校区其他收入；共计［33.5］万'];
      placeholder.value = '学校专业搜索：'
      statisticList.value = ['小提琴', '吉他', '美术', '钢琴']
      break;
    case 'page2':
      staffList.value = ['工资共计支出：280000元', '退学共计支出：20000元', '提成共计支出：1000元', '日常共计支出：30000元', '进货共计支出：40000元', '其他共计支出：5600元'];
      placeholder.value = '代课教师搜索：'
      statisticList.value = ['小提琴', '吉他', '美术', '钢琴']
      break;
    case 'page3':
      staffList.value = ['月份', '季度', '半年', '全年'];
      placeholder.value = '代课教师搜索：'
      statisticList.value = ['梁朝伟［学生]', '刘德华［学生]', '古天乐［学生]']
      break;
    default:
      staffList.value = [];
  }
};

const close2NotDim = () => {
  changeTab(pageType.value, 'home');
};

const back2LastDiv = () => {
  changeTab(pageType.value, 'home');
};

const currentCom = ref(markRaw(blocksComponent));
watch(pageType, () => {
  switch (pageType.value) {
    case 'page1':
    case 'page3':
      currentCom.value = markRaw(accountDetailCom1_3);
      break;
    case 'page2':
    case 'page4':
      currentCom.value = markRaw(accountDetailCom2_4);
      break;
    default:
      currentCom.value = markRaw(blocksComponent);
  }
});
</script>
<style scoped lang="less"></style>

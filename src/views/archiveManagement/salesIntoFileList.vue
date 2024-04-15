<template>
  <tableComponentOnce
    :rowNum="12"
    :user-column="columns"
    :table-data="tableData"
    :is-show-operation="true"
    :operation-list="operationList"
    :is-show-add="true"
    @addFunc="clickAddFunc"
    :showRightBorder="true"
  />
</template>
<script setup>
import tableComponentOnce from '@/components/tableComponentOnce.vue';
import { reactive, defineEmits, defineProps, toRefs } from 'vue';

const props = defineProps({
  pageType: {
    type: String,
    default: '',
  },
});
const { pageType } = toRefs(props);

const emits = defineEmits(['clickPlusFunc', 'changeTab']);
const clickAddFunc = () => {
  console.log('salesintofile --- clickAddFunc');
  emits('clickPlusFunc');
};

const columns = [
  {
    label: '商品名称',
    prop: 'name',
  },
  {
    label: '买家姓名',
    prop: 'buyerName',
  },
  {
    label: '商品零售',
    prop: 'price1',
  },
  {
    label: '成交价格',
    prop: 'price2',
  },
  {
    label: '卖出数量',
    prop: 'num',
  },
  {
    label: '价格共计',
    prop: 'totalPrice',
  },
  {
    label: '销售日期',
    prop: 'salesDate',
  },
  {
    label: '备注说明',
    prop: 'comment',
  },
  {
    label: '教师提成',
    prop: 'royalty',
  },
];
const archieveAddFunc = () => {
  console.log('salesIntoFile --- archieveAddFunc');
  emits('changeTab', pageType.value, 'new-archive-sales');
};
const operationList = [
  { title: '入档', type: 'info', callBack: archieveAddFunc },
];

const tableData = reactive([
  {
    name: '电钢琴AC',
    buyerName: '田刚',
    price1: '2000',
    price2: '1800',
    num: '1',
    totalPrice: '1800',
    salesDate: '2019-02-19',
    comment: '备注查看',
    royalty: '200',
  },
]);
</script>
<style>
@import '@/assets/css/leftPicRightTableComponentCss.less';
</style>

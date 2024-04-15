<template>
  <div class="whole-page">
    <div class="left-pic">
      <div class="left-head">入档教师</div>
      <div class="left-content">
        <img
          :src="require(`@/assets/img/qr/img.jpg`)"
          style="width: 80px; height: 120px"
          alt=""
        />
      </div>
    </div>
    <tableComponentOnce
      :rowNum="11"
      :user-column="columns"
      :table-data="tableData"
      :is-show-operation="true"
      :operation-list="operationList"
      :is-show-add="true"
      @addFunc="clickAddFunc"
      :showRightBorder="true"
    />
  </div>
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
console.log('leftRight --- pageType : ', pageType.value);

const emits = defineEmits(['clickPlusFunc', 'changeTab']);
const clickAddFunc = () => {
  console.log('leftRight --- clickAddFunc');
  emits('clickPlusFunc');
};

let columns =
  pageType.value.indexOf('page4') === -1
    ? [
        {
          label: '入档名称',
          prop: 'name',
        },
        {
          label: '付费价格',
          prop: 'price',
        },
        {
          label: '入档日期',
          prop: 'archieveDate',
        },
        {
          label: '备注说明',
          prop: 'description',
        },
      ]
    : [
        {
          label: '绩效奖金',
          prop: 'name',
        },
        {
          label: '入档日期',
          prop: 'archieveDate',
        },
      ];
const archieveAddFunc = () => {
  console.log('leftRight --- archieveAddFunc --- pageType: ', pageType.value);
  pageType.value.startsWith('page4')
    ? emits('changeTab', pageType.value, 'new-archive-bonus')
    : emits('changeTab', pageType.value, 'new-archive');
};
const operationList = [
  { title: '入档', type: 'info', callBack: archieveAddFunc },
];

const tableData = reactive([
  {
    name: '田刚',
    price: '教务',
    archieveDate: '15799995675',
    description: '666666',
  },
  {
    name: '张三',
    price: '前台',
    archieveDate: '13588887766',
    description: '888888',
  },
  {
    name: '田刚',
    price: '教务',
    archieveDate: '15799995675',
    description: '666666',
  },
  {
    name: '张三',
    price: '前台',
    archieveDate: '13588887766',
    description: '888888',
  },
  {
    name: '田刚',
    price: '教务',
    archieveDate: '15799995675',
    description: '666666',
  },
  {
    name: '张三',
    price: '前台',
    archieveDate: '13588887766',
    description: '888888',
  },
  {
    name: '田刚',
    price: '教务',
    archieveDate: '15799995675',
    description: '666666',
  },
  {
    name: '张三',
    price: '前台',
    archieveDate: '13588887766',
    description: '888888',
  },
  {
    name: '田刚',
    price: '教务',
    archieveDate: '15799995675',
    description: '666666',
  },
  {
    name: '张三',
    price: '前台',
    archieveDate: '13588887766',
    description: '888888',
  },
  {
    name: '田刚',
    price: '教务',
    archieveDate: '15799995675',
    description: '666666',
  },
  {
    name: '张三',
    price: '前台',
    archieveDate: '13588887766',
    description: '888888',
  },
  {
    name: '田刚',
    price: '教务',
    archieveDate: '15799995675',
    description: '666666',
  },
  {
    name: '张三',
    price: '前台',
    archieveDate: '13588887766',
    description: '888888',
  },
  {
    name: '田刚',
    price: '教务',
    archieveDate: '15799995675',
    description: '666666',
  },
  {
    name: '张三',
    price: '前台',
    archieveDate: '13588887766',
    description: '888888',
  },
]);
</script>
<style>
@import '@/assets/css/leftPicRightTableComponentCss.less';
</style>

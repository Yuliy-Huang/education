<template>
  <div class="class-info-detail">
    <div class="info-left-side">
      <div>
        <img
          :src="require(`@/assets/img/qr/img.jpg`)"
          style="width: 80px; height: 120px"
          alt=""
        />
      </div>
      <div>刘老师</div>
      <div>钢琴教师</div>
    </div>

    <div class="info-right-side">
      <table-component-once
        :rowNum="11"
        :user-column="columns"
        :table-data="tableData"
        :is-show-operation="false"
        :is-show-add="false"
      />
    </div>
  </div>
</template>
<script>
import { toChineseNumber } from '@/utils/numberFormat';
import tableComponentOnce from '@/components/tableComponentOnce.vue';
import { reactive } from 'vue';

export default {
  methods: {
    toChineseNumber: toChineseNumber,
  },
  components: {
    tableComponentOnce,
  },
  props: {
    showLeftSide: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const columns = [
      {
        label: '学员编号',
        prop: 'id',
      },
      {
        label: '学员姓名',
        prop: 'name',
      },
      {
        label: '报名课时',
        prop: 'classTime',
      },
      {
        label: '剩余课时',
        prop: 'leftTime',
      },
      {
        label: '已上课时',
        prop: 'passTime',
      },
      {
        label: '课时优惠',
        prop: 'classDiscount',
      },
      {
        label: '课费优惠',
        prop: 'feeDiscount',
      },
      {
        label: '请假',
        prop: 'leave',
      },
      {
        label: '旷课',
        prop: 'truant',
      },
      {
        label: '余额',
        prop: 'remaining',
      },
    ];
    const tableData = reactive([
      {
        id: 'B1003',
        name: '梁朝伟',
        classTime: '70',
        leftTime: '55',
        passTime: '15',
        classDiscount: '3',
        feeDiscount: 120,
        leave: 0,
        truant: 0,
        remaining: 42030,
      },
      {
        id: 'B1004',
        name: '刘德华',
        classTime: '70',
        leftTime: '55',
        passTime: '15',
        classDiscount: '3',
        feeDiscount: 120,
        leave: 0,
        truant: 0,
        remaining: 42030,
      },
      {
        id: 'B1006',
        name: '张三',
        classTime: '80',
        leftTime: '70',
        passTime: '10',
        classDiscount: '3',
        feeDiscount: 120,
        leave: 0,
        truant: 0,
        remaining: 42030,
      },
    ]);
    return {
      props,
      columns,
      tableData,
    };
  },
};
</script>
<style lang="less" scoped>
@import '@/assets/css/queryManage/classInfoDetailCss.less';
</style>

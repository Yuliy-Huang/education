<template>
  <div class="statistic-detail">
    <yearTitleComponent :showYear="false" style="margin-bottom: calc(100vw * 5.6 / 1080);"/>
    <twoLineTitleComponent :hideFirstLine="false" :dataList="props.statisticList" :cutNum="cutNum"
                           :placeholder="props.placeholder" class="two-title" @changeTitleType="changeData"/>

    <div class="account-detail-page">
      <tableComponentOnce
          :rowNum="12"
          :user-column="columns"
          :table-data="cellDataList"
          :show-header="true"
          :is-show-operation="true"
          :operation-list="operationList"
          :is-show-add="false"
          :showRightBorder="true"
      />
    </div>

  </div>
</template>
<script setup>
import yearTitleComponent from '@/components/yearTitleComponent.vue';
import twoLineTitleComponent from "@/components/twoLineTitleComponent.vue";
import tableComponentOnce from '@/components/tableComponentOnce.vue';
import {defineProps, ref} from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: '教务员工搜索：'
  },
  staffList: {
    type: Array,
    default: () => {
    }
  },
  statisticList: {
    type: Array,
    default: () => {
    }
  },
  cutNum: {
    type: Number,
    default: 4
  }
});

const settlementFunc = () => {

}
const checkoutFunc = () => {

}
const operationList = [
  { title: '自定义结算', type: 'info', callBack: settlementFunc },
  { title: '结账', type: 'info', callBack: checkoutFunc },
];
const dataType = ref(1)
const changeData = (v) => {
  dataType.value = v
}
const columns = ref([
  {label:'代课教师', props: 'teacher'},
  {label:'1对1比例课时结算', props: 'one2one'},
  {label:'1对多比例课时结算', props: 'one2Multi01'},
  {label:'1对多固定课时结算', props: 'one2Multi02'},
  {label:'工资底薪', props: 'salary'},
  {label:'销售提成', props: 'salesCommissions'},
  {label:'缋效奖金', props: 'bonus'},
  {label:'其他付费', props: 'otherCharges'},
  {label:'其他扣赞', props: 'otherDeductions'},
  {label:'共计结算', props: 'totalSettlement'}
])
const cellDataList = ref([
  {
    teacher: '李老师',
    one2one: '￥1621.8',
    one2Multi01: '￥600',
    one2Multi02: '￥800',
    salary: '2000元',
    salesCommissions: '1000元',
    bonus: '500员',
    otherCharges: '200员',
    otherDeductions: '100元',
    totalSettlement: '6812.8元',
  },
])
</script>
<style lang="less">
.statistic-detail {
  width: 100%;
  height: 100%;
}

.two-title {
  margin-bottom: calc(100vw * 5.6 / 1080);
}

.account-detail-page {
  width: 100%;
  height: calc(100% - 100vw * 5.6 * 3 / 1080 - 100vw * 28 * 3 / 1080);
  display: grid;
  margin-top: calc(100vw * 5.6 / 1080);
  border: 1px solid var(--white-custom-2);
  border-radius: 4px;
  background-color: var(--black-custom-transparence);

  .up-table {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vw * 28 / 1080);
    border-bottom: 1px solid var(--white-custom-2);
    //background-color: var(--black-custom-transparence);
  }

  .addRightBorder:last-of-type {
    border-right: none !important;
  }

  .el-table tr {
    height: 45px !important;
  }

  .dot-green {
    margin-right: 10px;
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--light-green-custom);
  }

  .red-green {
    margin-right: 10px;
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--light-red-custom);
  }

  .yellow-green {
    margin-right: 10px;
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--yellow-custom);
  }

}

</style>
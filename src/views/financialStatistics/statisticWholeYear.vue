<template>
  <div class="statistic-detail">
    <twoLineTitleComponent :hideFirstLine="true" :dataList="props.staffList" :cutNum="cutNum"
                           :placeholder="props.placeholder" class="two-title" @changeTitleType="changeTitleType"/>

    <yearTitleComponent v-if="titleType === 1" :showYear="false" style="margin-bottom: calc(100vw * 5.6 / 1080);"/>
    <seasonsComponent v-if="titleType === 2" :showYear="false" style="margin-bottom: calc(100vw * 5.6 / 1080);"/>
    <yearsHalfComponent v-if="titleType === 3" :showYear="false" style="margin-bottom: calc(100vw * 5.6 / 1080);"/>
    <yearsWholeComponent v-if="titleType === 4" :showYear="false" style="margin-bottom: calc(100vw * 5.6 / 1080);"/>

    <twoLineTitleComponent :hideFirstLine="true" :dataList="props.statisticList" :cutNum="cutNum"
                           :placeholder="props.placeholder" class="two-title" @changeTitleType="changeData"/>

    <div class="whole-year-page">
      <cellMoreComponent
          v-if="dataType === 1 || dataType === 2"
          :first-col-width="true"
          :data-list="cellDataList"
          :show-add="false"
          :show-del="false"
          :show-left-right="true"
          :col-count="8"
          :row-count="7"
      />
      <bigBlockComponent
          v-if="dataType === 3 || dataType === 4"
          :blockList="cellDataList"
      >
      </bigBlockComponent>
    </div>

  </div>
</template>
<script setup>
import yearTitleComponent from '@/components/yearTitleComponent.vue';
import seasonsComponent from '@/components/yearSeasonTitleComponent.vue';
import yearsHalfComponent from '@/components/yearHalfTitleComponent.vue';
import yearsWholeComponent from '@/components/yearWholeComponent.vue';
import twoLineTitleComponent from "@/components/twoLineTitleComponent.vue";
import cellMoreComponent from '@/components/cellMoreComponent.vue';
import bigBlockComponent from '@/components/bigBlockComponent.vue'
import {defineProps, reactive, ref, watch} from "vue";

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

const titleType = ref(1)
const changeTitleType = (v) => {
  titleType.value = v
}
const dataType = ref(1)
const changeData = (v) => {
  dataType.value = v
}
const cellDataList = ref([])
const incommingList = reactive([
  [
    '学费：［共计80000元］',
    '钢琴：28000元',
    '舞蹈：32000元',
    '小提琴：9000元',
    '素描：32000元',
    '游泳：32000元',
    '111：28000元',
    '222：32000元',
    '333：9000元',
    '444：32000元',
    '555：32000元',
    '666: xxx',
    '777: xxx',
    '888: ...'
  ],
  [
    '销售：［共计80000元］',
    '钢琴：28000元',
    '舞蹈：32000元',
    '小提琴：9000元',
    '素描：32000元'
  ]
]);
cellDataList.value = incommingList
const expenditureList = reactive([
  [
    '工资：［共计20000元］',
    '李老师：6200元',
    '王老师：5800元'
  ],
  [
    '日常：［共计3200元］',
    '水费：200元',
    '房租：2400元',
    '电费：140元'
  ],
  [
    '提成：［共计800元］',
    '李老师：300元',
    '陈老师：100元'
  ]
])
const profitList = reactive([
  '利润',
  '学费利润：90000元',
  '销售利润：30000元',
  '共计：120000元'
])
const grossMarginList = reactive([
  '毛利',
  '学费利润：90000元',
  '销售利润：30000元',
  '共计：120000元'
])

watch(dataType, () => {
  switch (dataType.value) {
    case 1:
      cellDataList.value = incommingList
      break
    case 2:
      cellDataList.value = expenditureList
      break
    case 3:
      cellDataList.value = profitList
      break
    default:
      cellDataList.value = grossMarginList
  }
})
</script>
<style lang="less">
.statistic-detail {
  width: 100%;
  height: 100%;
}

.two-title {
  margin-bottom: calc(100vw * 5.6 / 1080);
}

.whole-year-page {
  width: 100%;
  height: calc(100% - 100vw * 5.6 * 3 / 1080 - 100vw * 28 * 4 / 1080);
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
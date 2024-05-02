<template>
  <div class="clock-detail">
    <twoLineTitleComponent :hideFirstLine="true" :dataList="props.staffList" :cutNum="cutNum"
                           :placeholder="props.placeholder" class="two-title"/>
    <yearTitleComponent :showYear="false" style="margin-bottom: calc(100vw * 5.6 / 1080);"/>
    <twoLineTitleComponent :hideFirstLine="true" :dataList="props.statisticList" :cutNum="cutNum"
                           :placeholder="props.placeholder" class="two-title"/>

    <div class="whole-year-page">
      <div class="up-table">第一月工资支出共计：37500元</div>
      <cellMoreComponent
          :first-col-width="true"
          :data-list="cellDataList"
          :show-add="false"
          :show-del="false"
          :show-left-right="true"
          :col-count="8"
          :row-count="6"
      />
    </div>

  </div>
</template>
<script setup>
import yearTitleComponent from '@/components/yearTitleComponent.vue';
import twoLineTitleComponent from "@/components/twoLineTitleComponent.vue";
import {defineProps, reactive} from "vue";
import cellMoreComponent from '@/components/cellMoreComponent.vue';

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

const cellDataList = reactive([
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
</script>
<style lang="less">
.clock-detail {
  width: 100%;
  height: 100%;
}

.two-title {
  margin-bottom: calc(100vw * 5.6 / 1080);
}

.whole-year-page {
  width: 100%;
  height: calc(100% - 100vw * 5.6 * 2 / 1080 - 100vw * 28 * 4 / 1080);
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
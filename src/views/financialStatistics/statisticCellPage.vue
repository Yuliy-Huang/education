<template>
  <div class="clock-detail">
    <twoLineTitleComponent :hideFirstLine="true" :dataList="props.staffList" :cutNum="cutNum"
                           :placeholder="props.placeholder" class="two-title"/>
    <yearTitleComponent :showYear="false"/>

    <div class="statistic-cell-page">
      <div class="up-table">第一月工资支出共计：37500元</div>
      <cellMoreComponent
          :data-list="dataList"
          :show-add="false"
          :show-del="false"
          :col-count="6"
          :row-count="7"
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
  cutNum: {
    type: Number,
    default: 4
  }
});

const dataList = reactive([
  '李三 ［A1003］：8500元',
  '陈四 ［A1004］：7000元',
  '张五 ［A1005］：9000元',
  '李六 ［A1006］：12000元'
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

.statistic-cell-page {
  width: 100%;
  height: calc(100% - 100vw * 5.6 * 2 / 1080 - 100vw * 28 * 3 / 1080);
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
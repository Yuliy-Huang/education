<template>
  <div class="clock-detail">
    <twoLineTitleComponent :hideFirstLine="true" :dataList="props.staffList" :cutNum="cutNum" :placeholder="props.placeholder" class="two-title"/>
    <yearTitleComponent :showYear="false" />

    <div class="clock-detail-table">
      <div class="left-side">
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

      <div class="right-side">
        <div class="up-side">
          <table-component-once
              :rowNum="5"
              :user-column="columns"
              :table-data="tableData"
              :is-show-operation="false"
              :is-show-add="false"
          />
        </div>
        <div class="down-side">
          <el-button plain><span class="dot-green"></span>上班</el-button>
          <el-button plain><span class="yellow-green"></span>请假</el-button>
          <el-button plain><span class="red-green"></span>旷勤</el-button>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import yearTitleComponent from '@/components/yearTitleComponent.vue';
import twoLineTitleComponent from "@/components/twoLineTitleComponent.vue";
import {defineProps, reactive} from "vue";
import tableComponentOnce from "@/components/tableComponentOnce.vue";

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
</script>
<style lang="less">
.clock-detail {
  width: 100%;
  height: 100%;
}

.two-title {
  margin-bottom: calc(100vw * 5.6 / 1080);
}

.clock-detail-table {
  width: 100%;
  height: calc(100% - 100vw * 5.6 * 3 / 1080 - 100vw * 28 * 3 / 1080);
  display: grid;
  grid-template-columns: 1.3fr 10fr;
  margin-top: calc(100vw * 5.6 / 1080);
  border: 1px solid var(--white-custom-2);
  border-radius: 4px;

  .addRightBorder:last-of-type {
    border-right: none !important;
  }

  .left-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid var(--white-custom-2);
    background-color: var(--black-custom-transparence) !important;
  }

  .right-side {
    height: 100%;
    display: grid;
    grid-template-rows: 5fr 1.8fr;

    .up-side {

    }

    .down-side {
      background-color: var(--black-custom-transparence) !important;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      .el-button.is-plain {
        width: 100px !important;
        margin: 0 15px;
      }
    }

    .el-table tr {
      height: 45px !important;
    }
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
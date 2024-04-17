<template>
  <el-table
    v-el-table-infinite-scroll="loadMore"
    ref="tablePicRef"
    :data="tableData"
    :cell-class-name="setClass"
    :show-header="showHeader"
  >
    <el-table-column prop="col1" align="center">
      <template v-slot="scope">
        <img alt="" :src="scope.row.col1" width="150" height="200" />
        <div style="margin-top: 10px;">零售价：25元</div>
        <div>库存：26个</div>
      </template>
    </el-table-column>
    <el-table-column prop="col2" align="center">
      <template v-slot="scope">
        <img alt="" :src="scope.row.col2" width="150" height="200" />
        <div style="margin-top: 10px;">零售价：25元</div>
        <div>库存：26个</div>
      </template>
    </el-table-column>
    <el-table-column prop="col3" align="center">
      <template v-slot="scope">
        <img alt="" :src="scope.row.col3" width="150" height="200" />
        <div style="margin-top: 10px;">零售价：25元</div>
        <div>库存：26个</div>
      </template>
    </el-table-column>
    <el-table-column prop="col4" align="center">
      <template v-slot="scope">
        <img alt="" :src="scope.row.col4" width="150" height="200" />
        <div style="margin-top: 10px;">零售价：25元</div>
        <div>库存：26个</div>
      </template>
    </el-table-column>
    <el-table-column prop="col5" align="center">
      <template v-slot="scope">
        <img alt="" :src="scope.row.col5" width="150" height="200" />
        <div style="margin-top: 10px;">零售价：25元</div>
        <div>库存：26个</div>
      </template>
    </el-table-column>
    <el-table-column prop="col6" align="center">
      <template v-slot="scope">
        <img alt="" :src="scope.row.col6" width="150" height="200" />
        <div style="margin-top: 10px;">零售价：25元</div>
        <div>库存：26个</div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { defineProps, toRefs, ref, computed, onMounted } from 'vue';
import { default as vElTableInfiniteScroll } from 'el-table-infinite-scroll';

const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  rowNum: {
    type: Number,
    default: 10,
  },
  showRightBorder: {
    type: Boolean,
    default: false,
  },
  showHeader: {
    type: Boolean,
    default: false,
  },
});
const { tableData, rowNum, showRightBorder, showHeader } = toRefs(props);
console.log('tableComponentOnce -- rowNum : ', rowNum.value);
const tablePicRef = ref(null);
const tableWidth = ref(0);
onMounted(() => {
  let tableElement = tablePicRef.value.$el;
  tableWidth.value = tableElement.offsetWidth;
  window.addEventListener('resize', function () {
    tableElement =
      tablePicRef.value && tablePicRef.value.$el ? tablePicRef.value.$el : '';
    tableWidth.value =
      tableElement && tableElement.offsetWidth ? tableElement.offsetWidth : 0;
  });
});

const setClass = data => {
  if (showRightBorder) {
    return 'addRightBorder picRow';
  } else if (rowNum.value !== 10 && data.rowIndex === rowNum.value - 1) {
    return 'notTenColumns picRow';
  } else if (rowNum.value !== 10 && data.rowIndex !== rowNum.value - 1) {
    return 'notTenRightBorder picRow';
  }
};

const count = ref(0);
const loading = ref(false);
const noMore = computed(() => count.value >= tableData.value.length);
const loadMore = () => {
  if (!noMore.value && !loading.value) {
    loading.value = true;
    setTimeout(() => {
      if (count.value + rowNum.value < tableData.value.length) {
        count.value += rowNum.value;
      } else {
        count.value = tableData.value.length;
      }
      loading.value = false;
    }, 1000);
  }
};
</script>

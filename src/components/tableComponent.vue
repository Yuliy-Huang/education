<template>
  <el-table v-el-table-infinite-scroll="loadFunc"
            :data="tableData"
            style="width: 100%"
            height="300px"
            :cell-class-name="setClass"
            :header-cell-class-name="setClass">
    <el-table-column
        v-for="(item, index) in userColumn"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        :align="item.align ? item.align : 'center'"
    />
    <el-table-column v-if="isShowOperation"
                     label="操作"
                     align="center">
      <template #default="scope">
            <span v-for="(btn,num) in operationList" :key="num">
              <el-button
                  v-if="btn.title"
                  :type="btn.type"
                  plain
                  @click="btn.callBack(scope.row)"
                  style="margin-right: 5px"
                  size="small">{{ btn.title }}
              </el-button>
              <el-button
                  v-else
                  text
                  :type="btn.type"
                  :icon=btn.icon
                  @click="btn.callBack(scope.row)"
                  style="margin-right: 5px"
                  size="small">
              </el-button>
            </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import {defineProps, toRefs, watch} from "vue"
import { default as vElTableInfiniteScroll } from "el-table-infinite-scroll";

const props = defineProps({
  tableData: {
    type: Array,
    default: () => (new Array(8).fill(null)),
  },
  userColumn: {
    type: Array,
    default: () => ([])
  },
  isShowOperation: {
    type: Boolean,
    default: false
  },
  operationList: {
    type: Object, default: () => {
    }
  },
  loadFunc: {
    type: Function,
    required: true,
  }
})
const {tableData} = toRefs(props);
const {userColumn} = toRefs(props);
const {isShowOperation} = toRefs(props);
const {operationList} = toRefs(props);

watch (tableData, () => {
  if (tableData.value.length < 8) {
    while (tableData.value.length < 8) {
      tableData.value.push(null);
    }
  }
}, { immediate: true })


const setClass = (data) => {
  if (data.columnIndex === 0) {
    return 'addRightBorder'
  }
  if (!isShowOperation && data.columnIndex !== userColumn.value.length - 1) {
    return 'addRightBorder'
  }
  if (isShowOperation && data.columnIndex !== userColumn.value.length) {
    return 'addRightBorder'
  }
}
</script>
<style scoped>
</style>

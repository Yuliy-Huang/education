<template>
  <el-table :data="tableData" style="width: 100%" :cell-class-name="setClass" :header-cell-class-name="setClass">
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
import {defineProps, toRefs} from "vue"

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
})
const {tableData} = toRefs(props);
const {userColumn} = toRefs(props);
const {isShowOperation} = toRefs(props);
const {operationList} = toRefs(props);

const setClass = (data) => {
  if (!isShowOperation && data.columnIndex !== userColumn.value.length - 1) {
    return 'addBorder'
  }
  if (isShowOperation) {
    return 'addBorder'
  }
  if (data.columnIndex === 0 && data.rowIndex === 0) {
    return 'addLeftTop'
  }
  if (data.columnIndex === userColumn.value.length - 1 && data.rowIndex === 0) {
    return 'addRightTop'
  }
  if (data.columnIndex === 0 && data.rowIndex === tableData.value.length - 1) {
    return 'addLeftBottom'
  }
  if (data.columnIndex === userColumn.value.length - 1 && data.rowIndex === tableData.value.length - 1) {
    return 'addRightBottom'
  }
}
</script>
<style scoped>
</style>

<template>
  <div class="more-box-table">
    <div :class="pageType === 'infoModify' || 'infoSee' ? 'staff-box-row' : 'more-box-row'" v-for="row in rowCount" :key="row">
      <template v-for="col in colCount" :key="col-1">
        <div :class="col-1 !== colCount - 1 ? 'left': 'last'"
             v-if="showAdd && row === addButtonRow && addButtonCol === col-1">
          <el-icon style="font-size: small; cursor: pointer;" @click="clickAdd">
            <Plus/>
          </el-icon>
        </div>
        <div :class="col-1 === colCount - 1 ? 'last': 'left'" @click="clickCellFunc" v-else-if="!showDel"
             :style="newData[row-1] && newData[row-1][col-1] ? 'cursor: pointer': ''">
          {{ newData[row - 1] && newData[row - 1][col - 1] ? newData[row - 1][col - 1] : '' }}
        </div>
        <div :class="col-1 === colCount - 1 ? 'last': 'left'" @click="clickCellFunc" v-else
             v-html="newData[row-1] && newData[row-1][col-1] ? newData[row-1][col-1] + ' <span style=\'cursor: pointer;\'>[删除]</span>' : ''">
        </div>
      </template>
    </div>
  </div>

  <div :class="pageType === 'infoModify' || 'infoSee' ? 'staff-paginate-div' : 'paginate-div'">
    <div class="previous-page">
      <el-button plain @click="previousPage">上 一 页</el-button>
    </div>
    <div class="next-page">
      <el-button plain @click="nextPage">下 一 页</el-button>
    </div>
  </div>
</template>
<script setup>
import {ElMessageBox} from 'element-plus'
import {defineProps, toRefs, ref, defineEmits} from "vue";
import {Plus} from "@element-plus/icons-vue";

const props = defineProps({
  pageType: {
    type: String,
    default: '',
  },
  colCount: {
    type: Number,
    default: 8,
  },
  rowCount: {
    type: Number,
    default: 9,
  },
  showAdd: {
    type: Boolean,
    default: true,
  },
  showDel: {
    type: Boolean,
    default: true,
  },
  dataList: {
    type: Array,
    default: () => ([]),
  },
})
const {pageType, colCount, rowCount, dataList} = toRefs(props);
const emits = defineEmits(['clickCell']);

const newData = ref([])
for (let i = 0; i < dataList.value.length; i += colCount.value) {
  if (i + colCount.value < dataList.value.length) {
    newData.value.push(dataList.value.slice(i, i + colCount.value))
  } else {
    newData.value.push(dataList.value.slice(i, dataList.value.length))
  }
}

const addButtonRow = Math.floor(dataList.value.length / colCount.value) + 1
const addButtonCol = dataList.value.length % colCount.value

const clickAdd = () => {
  ElMessageBox.prompt('专业考级等级输入', '', {
    confirmButtonText: '确 认 保 存',
    showCancelButton: false,
    buttonSize: "large",
  })
      .then(() => {
      })
      .catch(() => {
      })
}

const clickCellFunc = (e) => {
  const tagName = e.target.tagName.toLowerCase()
  if (pageType.value === 'infoModify' || pageType.value === 'infoSee') {
    emits('clickCell')
  } else if (tagName === 'span') {
    ElMessageBox.confirm(
        '是 否 确 认 删 除',
        '',
        {
          autofocus: false,
          confirmButtonText: '确 认',
          cancelButtonText: '取 消',
          type: '',
        }
    )
        .then(() => {

        })
        .catch(() => {

        })
  }
}

const pageSize = rowCount * colCount
const previousPage = () => {
  if (dataList.value.length > pageSize) {
    console.log('0000')
  }
}

const nextPage = () => {
  if (dataList.value.length > pageSize) {
    console.log('0000')
  }
}

</script>
<style lang="less">
@import "@/assets/css/cellMoreComponentCss";
</style>

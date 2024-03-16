<template>
  <div class="more-box-table">
    <div class="more-box-row" v-for="row in 9" :key="row">
      <template v-for="col in 8" :key="col-1">
        <div :class="col-1 !== 7 ? 'left': 'last'" v-if="row === addButtonRow && addButtonCol === col-1 ">
          <el-icon style="font-size: small; cursor: pointer;" @click="clickAdd">
            <Plus/>
          </el-icon>
        </div>
        <div :class="col-1 === 7 ? 'last': 'left'" @click="deleteConfirm" v-else
             v-html="newData[row-1] && newData[row-1][col-1] ? newData[row-1][col-1] + ' <span style=\'cursor: pointer;\'>[删除]</span>' : ''">
        </div>
      </template>
    </div>
  </div>

  <div class="paginate-div">
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
import {defineProps, toRefs, ref} from "vue";
import {Plus} from "@element-plus/icons-vue";

const props = defineProps({
  dataList: {
    type: Array,
    default: () => ([]),
  },
})
const {dataList} = toRefs(props);

const newData = ref([])
for (let i = 0; i < dataList.value.length; i += 8) {
  if (i + 8 < dataList.value.length) {
    newData.value.push(dataList.value.slice(i, i + 8))
  } else {
    newData.value.push(dataList.value.slice(i, dataList.value.length))
  }
}

const addButtonRow = Math.floor(dataList.value.length / 8) + 1
const addButtonCol = dataList.value.length % 8

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

const deleteConfirm = (e) => {
  const tagName = e.target.tagName.toLowerCase()
  if (tagName === 'span') {
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

const pageSize = 72
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

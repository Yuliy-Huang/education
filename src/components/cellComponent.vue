<template>
  <div class="box-table">
    <template v-for="item in 12" :key="item">
      <div class="box-row">
        <div class="one" v-if="item === addButtonRow && addButtonCol === 0 ">
          <el-icon style="font-size: small; cursor: pointer;" @click="clickAdd">
            <Plus/>
          </el-icon>
        </div>
        <div class="one" @click="deleteConfirm" v-else
             v-html="newData[item-1] && newData[item-1][0] ? newData[item-1][0] + ' <span style=\'cursor: pointer;\'>[删除]</span>' : ''">
        </div>

        <div class="one" v-if="item === addButtonRow && addButtonCol === 1 ">
          <el-icon style="font-size: small; cursor: pointer;" @click="clickAdd">
            <Plus/>
          </el-icon>
        </div>
        <div class="two" @click="deleteConfirm" v-else
             v-html="newData[item-1] && newData[item-1][1] ? newData[item-1][1] + ' <span style=\'cursor: pointer;\'>[删除]</span>' : ''">
        </div>

        <div class="one" v-if="item === addButtonRow && addButtonCol === 2 ">
          <el-icon style="font-size: small; cursor: pointer;" @click="clickAdd">
            <Plus/>
          </el-icon>
        </div>
        <div class="three" @click="deleteConfirm" v-else
             v-html="newData[item-1] && newData[item-1][2] ? newData[item-1][2] + ' <span style=\'cursor: pointer;\'>[删除]</span>' : ''">
        </div>

        <div class="one" v-if="item === addButtonRow && addButtonCol === 3 ">
          <el-icon style="font-size: small; cursor: pointer;" @click="clickAdd">
            <Plus/>
          </el-icon>
        </div>
        <div class="four" @click="deleteConfirm" v-else
             v-html="newData[item-1] && newData[item-1][3] ? newData[item-1][3] + ' <span style=\'cursor: pointer;\'>[删除]</span>' : ''">
        </div>
      </div>
    </template>
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
for (let i = 0; i < dataList.value.length; i += 4) {
  if (i + 4 < dataList.value.length) {
    newData.value.push(dataList.value.slice(i, i + 4))
  } else {
    newData.value.push(dataList.value.slice(i, dataList.value.length))
  }
}

const addButtonRow = Math.floor(dataList.value.length / 4) + 1
const addButtonCol = dataList.value.length % 4

const clickAdd = () => {
  ElMessageBox.prompt('新增专业', '', {
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

</script>
<style lang="less">
@import "@/assets/css/cellComponentCss";
</style>

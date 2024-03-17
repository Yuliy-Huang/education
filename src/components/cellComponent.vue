<template>
  <div class="box-table">
    <div class="box-row" v-for="row in 12" :key="row">
      <template v-for="col in 4" :key="col-1">
        <div :class="col-1 !== 3 ? 'left': 'last'"
             v-if="row === addButtonRow && addButtonCol === col-1 && pageType !== 'campus'">
          <el-icon style="font-size: small; cursor: pointer;" @click="clickAdd">
            <Plus/>
          </el-icon>
        </div>
        <div :class="col-1 === 3 ? 'last': 'left'" @click="deleteConfirm" v-else-if="pageType === 'campus'"
             :style="newData[row-1] && newData[row-1][col-1] ? 'cursor: pointer' : ''">
          {{ newData[row - 1] && newData[row - 1][col - 1] ? newData[row - 1][col - 1] : '' }}
        </div>
        <div :class="col-1 === 3 ? 'last': 'left'" @click="deleteConfirm" v-else
             v-html="newData[row-1] && newData[row-1][col-1] ? newData[row-1][col-1] + ' <span style=\'cursor: pointer;\'>[删除]</span>' : ''">
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import {ElMessageBox, ElInput} from 'element-plus'
import {defineProps, toRefs, ref, h} from "vue";
import {Plus} from "@element-plus/icons-vue";

const props = defineProps({
  dataList: {
    type: Array,
    default: () => ([]),
  },
  pageType: {
    type: String,
    default: '',
  },
})
const {dataList, pageType} = toRefs(props);

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

const form = ref({
  account: '',
  password: '',
})

const vNode = () => {
  return h('div', {}, [
    h('div', {style: 'margin-bottom: 10px;'}, [
      h(ElInput, {
        class: 'input-in-div',
        modelValue: form.value.account,
        'onUpdate:modelValue': ($event) => {
          form.value.account = $event;
        },
        placeholder: '账号：',
      }),
    ]),
    h('div', {}, [
      h(ElInput, {
        class: 'input-in-div',
        modelValue: form.value.password,
        'onUpdate:modelValue': ($event) => {
          form.value.password = $event;
        },
        placeholder: '密码：',
      }),
    ]),
  ]);
}

const deleteConfirm = (e) => {
  const tagName = e.target.tagName.toLowerCase()
  if (pageType.value === 'campus') {
    ElMessageBox({
      title: '',
      message: () => vNode(),
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      autofocus: false,
      beforeClose: (action, instance, done) => {
        if (action === 'confirm') {
          instance.confirmButtonLoading = true
          instance.confirmButtonText = 'Loading...'
          setTimeout(() => {
            done()
            setTimeout(() => {
              instance.confirmButtonLoading = false
            }, 300)
          }, 2000)
        } else {
          done()
        }
      },
    }).then(() => {
    })
        .catch(() => {

        })
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

</script>
<style lang="less">
@import "@/assets/css/cellComponentCss";
</style>

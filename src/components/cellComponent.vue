<template>
  <div class="box-table">
    <div :class="'box-row-' + colCount" v-for="row in rowCount" :key="row">
      <template v-for="col in colCount" :key="col - 1">
        <div
          :class="[
            col - 1 !== colCount - 1 ? 'left' : 'last',
            'col-' + colCount,
          ]"
          v-if="showAdd && row === addButtonRow && addButtonCol === col - 1"
        >
          <el-icon style="font-size: small; cursor: pointer" @click="clickAdd">
            <Plus />
          </el-icon>
        </div>

        <div
          :class="[
            col - 1 === colCount - 1 ? 'last' : 'left',
            'col-' + colCount,
          ]"
          @click="clickCellFunc"
          v-else-if="!showDel"
          :style="
            newData[row - 1] && newData[row - 1][col - 1]
              ? 'cursor: pointer'
              : ''
          "
        >
          <div class="inside-cell">
            <template v-if="newData[row - 1] && newData[row - 1][col - 1]">
              <div class="dot-green" v-if="pageType === 'infoSeeCheckIn'"></div>
              <span>{{ newData[row - 1][col - 1] }}</span>
              <el-checkbox
                v-if="pageType === 'infoSeeCheckIn'"
                v-model="checkDate"
                style="margin-left: 10px; margin-top: 2px"
              />
            </template>
          </div>
        </div>
        <div
          :class="[
            col - 1 === colCount - 1 ? 'last' : 'left',
            'col-' + colCount,
          ]"
          @click="clickCellFunc"
          v-else
          v-html="
            newData[row - 1] && newData[row - 1][col - 1]
              ? newData[row - 1][col - 1] +
                ' <span style=\'cursor: pointer;\'>[删除]</span>'
              : ''
          "
        ></div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ElMessageBox, ElInput } from 'element-plus';
import { defineProps, toRefs, ref, h, defineEmits } from 'vue';
import { Plus } from '@element-plus/icons-vue';

const props = defineProps({
  dataList: {
    type: Array,
    default: () => [],
  },
  pageType: {
    type: String,
    default: '',
  },
  colCount: {
    type: Number,
    default: 4,
  },
  rowCount: {
    type: Number,
    default: 12,
  },
  showAdd: {
    type: Boolean,
    default: true,
  },
  showDel: {
    type: Boolean,
    default: true,
  },
});
const { dataList, pageType, colCount, rowCount, showDel } = toRefs(props);
const emits = defineEmits(['clickCell']);

const checkDate = ref(false);
const newData = ref([]);
for (let i = 0; i < dataList.value.length; i += colCount.value) {
  if (i + colCount.value < dataList.value.length) {
    newData.value.push(dataList.value.slice(i, i + colCount.value));
  } else {
    newData.value.push(dataList.value.slice(i, dataList.value.length));
  }
}

const addButtonRow = Math.floor(dataList.value.length / colCount.value) + 1;
const addButtonCol = dataList.value.length % colCount.value;

const clickAdd = () => {
  ElMessageBox.prompt('新增专业', '', {
    confirmButtonText: '确 认 保 存',
    showCancelButton: false,
    buttonSize: 'large',
  })
    .then(() => {})
    .catch(() => {});
};

const form = ref({
  account: '',
  password: '',
});

const vNode = () => {
  return h('div', {}, [
    h('div', { style: 'margin-bottom: 10px;' }, [
      h(ElInput, {
        class: 'input-in-div',
        modelValue: form.value.account,
        'onUpdate:modelValue': $event => {
          form.value.account = $event;
        },
        placeholder: '账号：',
      }),
    ]),
    h('div', {}, [
      h(ElInput, {
        class: 'input-in-div',
        modelValue: form.value.password,
        'onUpdate:modelValue': $event => {
          form.value.password = $event;
        },
        placeholder: '密码：',
      }),
    ]),
  ]);
};

const clickCellFunc = e => {
  console.log('cellCom --- clickCellFunc');
  const tagName = e.target.tagName.toLowerCase();
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
          instance.confirmButtonLoading = true;
          instance.confirmButtonText = 'Loading...';
          setTimeout(() => {
            done();
            setTimeout(() => {
              instance.confirmButtonLoading = false;
            }, 300);
          }, 2000);
        } else {
          done();
        }
      },
    })
      .then(() => {})
      .catch(() => {});
  } else if (tagName === 'span' && showDel.value) {
    ElMessageBox.confirm('是 否 确 认 删 除', '', {
      autofocus: false,
      confirmButtonText: '确 认',
      cancelButtonText: '取 消',
      type: '',
    })
      .then(() => {})
      .catch(() => {});
  } else if (pageType.value === 'studentDimission') {
    emits('clickCell');
  }
};
</script>
<style lang="less">
@import '@/assets/css/cellComponentCss';
</style>

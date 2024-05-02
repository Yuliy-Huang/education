<template>
  <div class="more-box-table">
    <div class="more-box-row" v-for="row in rowCount" :key="row">
      <template v-for="col in colCount" :key="col - 1">
        <div
            :class="['cell-div', col - 1 !== colCount - 1 ? 'left' : 'last']"
            v-if="showAdd && row === addButtonRow && addButtonCol === col - 1"
        >
          <el-icon style="font-size: small; cursor: pointer" @click="clickAdd">
            <Plus/>
          </el-icon>
        </div>
        <div
            :class="['cell-div', col - 1 === colCount - 1 ? 'last' : 'left', firstColWidth ? 'first-col-special': '']"
            @click="clickCellFunc"
            v-else-if="!showDel && !showLeftRight"
            :style="
            newData[row - 1] && newData[row - 1][col - 1]
              ? 'cursor: pointer'
              : ''
          "
        >
          {{
            newData[row - 1] && newData[row - 1][col - 1]
                ? newData[row - 1][col - 1]
                : ''
          }}
        </div>
        <div
            :class="['cell-div', col - 1 === colCount - 1 ? 'last' : 'left']"
            @click="clickCellFunc"
            v-else-if="showDel"
            v-html="
            newData[row - 1] && newData[row - 1][col - 1]
              ? newData[row - 1][col - 1] +
                ' <span style=\'cursor: pointer;\'>[删除]</span>'
              : ''
          "
        ></div>
        <div
            :class="['cell-div', col - 1 === colCount - 1 ? 'last' : 'left', firstColWidth ? 'first-col-special': '']"
            v-else-if="showLeftRight"
        >
          <div v-if="col === colCount" class="button-span">
            <span class='inside-img-div left' @click='leftShowTag(row)'>
              <img :src='require(`@/assets/img/arrowLeft.png`)'
                   style='width: 20px; height: 12px;'
                   alt=''/>
            </span>
            <span class='inside-img-div right' @click='rightShowTag(row)'>
              <img :src='require(`@/assets/img/arrowRight.png`)'
                   style='width: 20px; height: 12px;'
                   alt=''/>
            </span>
          </div>
          <div v-else>
            {{
              newData[row - 1] && newData[row - 1][col - 1]
                  ? newData[row - 1][col - 1]
                  : ''
            }}
          </div>
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
import {ElMessageBox} from 'element-plus';
import {defineProps, toRefs, ref, defineEmits, watch} from 'vue';
import {Plus} from '@element-plus/icons-vue';

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
    default: 10,
  },
  showAdd: {
    type: Boolean,
    default: true,
  },
  showDel: {
    type: Boolean,
    default: true,
  },
  showLeftRight: {
    type: Boolean,
    default: false,
  },
  dataList: {
    type: Array,
    default: () => [],
  },
  firstColWidth: {
    type: Boolean,
    default: false
  }
});
const {pageType, colCount, rowCount, dataList, firstColWidth, showLeftRight} = toRefs(props);
const emits = defineEmits(['clickCell']);

const newData = ref([]);
const changeData = () => {
  newData.value = []
  if (!showLeftRight.value) {
    for (let i = 0; i < dataList.value.length; i += colCount.value) {
      if (i + colCount.value < dataList.value.length) {
        newData.value.push(dataList.value.slice(i, i + colCount.value));
      } else {
        newData.value.push(dataList.value.slice(i, dataList.value.length));
      }
    }
  } else {
    for (let row = 0; row < rowCount.value; row++) {
      if (dataList.value[row] && dataList.value[row].length < colCount.value - 1) {
        newData.value.push(dataList.value[row])
      } else if (dataList.value[row]) {
        newData.value.push(dataList.value[row].slice(0, colCount.value - 1));
      }
    }
  }
}
changeData()

watch(dataList, () => {
  console.log('cellMore ---- watch ---- dataList : ', dataList.value)
  changeData()
})

const addButtonRow = Math.floor(dataList.value.length / colCount.value) + 1;
const addButtonCol = dataList.value.length % colCount.value;

const clickAdd = () => {
  ElMessageBox.prompt('专业考级等级输入', '', {
    confirmButtonText: '确 认 保 存',
    showCancelButton: false,
    buttonSize: 'large',
  })
      .then(() => {
      })
      .catch(() => {
      });
};

const clickCellFunc = e => {
  console.log(
      '**** cellMore --- clickCellFunc --- pageType : ',
      pageType.value
  );
  if (!e.target.innerHTML) {
    return;
  }
  const tagName = e.target.tagName.toLowerCase();
  const regex = new RegExp('-', 'g');
  const matches = pageType.value.match(regex);
  console.log('**** cellMore ---  matches : ', matches);
  if (
      (matches && matches.length === 1) ||
      pageType.value === 'infoModify' ||
      pageType.value === 'infoSee' ||
      pageType.value === 'staffDimission' ||
      pageType.value === 'teacherSeeFile' ||
      pageType.value === 'studentLevelStatistic' ||
      pageType.value === 'teacherLevelStatistic' ||
      pageType.value === 'classFeeStatistic' ||
      pageType.value === 'classScheduleSee' ||
      pageType.value === 'monthlyHomeworkSee' ||
      pageType.value === 'classDetailSee'
  ) {
    emits('clickCell');
  } else if (tagName === 'span') {
    ElMessageBox.confirm('是 否 确 认 删 除', '', {
      autofocus: false,
      confirmButtonText: '确 认',
      cancelButtonText: '取 消',
      type: '',
    })
        .then(() => {
        })
        .catch(() => {
        });
  }
};

const leftShowTag = (row) => {
  const firstItem = newData.value[row - 1][0]
  const firstIndex = dataList.value[row - 1].indexOf(firstItem)
  if (firstIndex + 1 - colCount.value >= 0) {
    const lastFirstIndex = firstIndex + 1 - colCount.value
    newData.value[row - 1] = dataList.value[row - 1].slice(lastFirstIndex, firstIndex)
  }

}

const rightShowTag = (row) => {
  const lastItem = newData.value[row - 1][newData.value[row - 1].length - 1]
  const lastIndex = dataList.value[row - 1].indexOf(lastItem)
  if (lastIndex + 1 < dataList.value[row-1].length) {
    const nextLastIndex = lastIndex + 1 + colCount.value > dataList.value[row - 1].length ? lastIndex + colCount.value : dataList.value[row - 1].length
    newData.value[row - 1] = dataList.value[row - 1].slice(lastIndex + 1, nextLastIndex)
  }
}

const pageSize = rowCount * colCount;
const previousPage = () => {
  if (dataList.value.length > pageSize) {
    console.log('0000');
  }
};

const nextPage = () => {
  if (dataList.value.length > pageSize) {
    console.log('0000');
  }
};
</script>
<style lang="less">
@import '@/assets/css/cellMoreComponentCss';
</style>

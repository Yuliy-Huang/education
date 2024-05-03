<template>
  <el-table
      v-el-table-infinite-scroll="loadMore"
      ref="tableOnceRef"
      :data="tableData"
      :style="['width: 100%', rowNum !== 10 ? 'height: 100%' : '']"
      :cell-class-name="setClass"
      :header-cell-class-name="setClass"
      :show-header="showHeader"
      @cell-click="handleCellClick"
  >
    <el-table-column
        v-for="(item, index) in userColumn"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        :align="item.align ? item.align : 'center'"
    >
      <template #default="scope">
        <div v-if="item.showGreenCheckBox && scope.row[item.prop]" class="green-cell">
          <slot :name="item.prop" v-bind="scope">
            <el-checkbox checked disabled/>
            <span>{{ scope.row[item.prop] }}</span>
          </slot>
        </div>
      </template>
    </el-table-column>
    <el-table-column
        v-if="isShowOperation && !separateOperation"
        label="操作设置"
        :width="operationWidth"
        align="center"
    >
      <template #default="scope">
        <template v-if="scope.$index < notNullLength">
          <span
              v-for="(btn, num) in operationList"
              :key="num"
              style="padding: 0 20px"
          >
            <el-button
                v-if="btn.title"
                :type="btn.type"
                plain
                @click="btn.callBack(scope.row)"
                style="width: 80px; height: 24px"
                size="small"
            >
              {{ btn.title }}
            </el-button>
            <el-button
                v-else
                text
                :type="btn.type"
                :icon="btn.icon"
                @click="btn.callBack(scope.row)"
                style="margin-right: 5px"
                size="small"
            ></el-button>
          </span>
        </template>
        <template v-if="scope.$index === notNullLength && isShowAdd">
          <el-icon style="font-size: small; cursor: pointer" @click="clickAdd">
            <Plus/>
          </el-icon>
        </template>
      </template>
    </el-table-column>
    <template v-if="isShowOperation && separateOperation">
      <el-table-column
          v-for="(item, index) in operationList"
          :key="index"
          :label="item.title"
          :width="operationWidth"
          align="center"
      >
        <template #default="scope">
          <el-button
              v-if="scope.$index < notNullLength"
              :type="item.type"
              plain
              @click="item.callBack(scope.row)"
              style="width: 80px; height: 24px"
              size="small"
          >
            {{ item.title }}
          </el-button>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup>
import {
  defineProps,
  toRefs,
  ref,
  computed,
  watch,
  onMounted,
  defineEmits,
} from 'vue';
import {Plus} from '@element-plus/icons-vue';
import {default as vElTableInfiniteScroll} from 'el-table-infinite-scroll';

const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  userColumn: {
    type: Array,
    default: () => [],
  },
  isShowOperation: {
    type: Boolean,
    default: false,
  },
  separateOperation: {
    type: Boolean,
    default: false,
  },
  operationList: {
    type: Object,
    default: () => {
    },
  },
  isShowAdd: {
    type: Boolean,
    default: false,
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
  showGreen: {
    type: Boolean,
    default: false,
  },
  hideLeftBorder: {
    type: Boolean,
    default: false
  }
});
const {
  tableData,
  userColumn,
  isShowOperation,
  separateOperation,
  operationList,
  isShowAdd,
  rowNum,
  showRightBorder,
  showHeader,
  showGreen,
  hideLeftBorder,
} = toRefs(props);
// console.log('tableComponentOnce -- rowNum : ', rowNum.value);
const tableOnceRef = ref(null);
const tableWidth = ref(0);
const operationWidth = computed(
    () => tableWidth.value / (userColumn.value.length + 1) + 30 + 'px'
);

onMounted(() => {
  let tableElement = tableOnceRef.value.$el;
  tableWidth.value = tableElement.offsetWidth;
  window.addEventListener('resize', function () {
    tableElement =
        tableOnceRef.value && tableOnceRef.value.$el
            ? tableOnceRef.value.$el
            : '';
    tableWidth.value =
        tableElement && tableElement.offsetWidth ? tableElement.offsetWidth : 0;
  });
});

const notNullLength = computed(() => {
  return tableData.value.filter(item => item).length;
});

watch(
    tableData,
    () => {
      if (tableData.value.length < rowNum.value) {
        while (tableData.value.length < rowNum.value) {
          tableData.value.push('');
        }
      } else {
        tableData.value.push('');
      }
    },
    {immediate: true}
);

const setClass = data => {
  let className = ''
  if (showRightBorder.value) {
    if (showGreen && (data.column.property === 'name' || data.column.property === 'archiveName')) {
      console.log('showGreenshowGreenshowGreenshowGreen')
      className = 'addRightBorder greenPointerStyle';
    } else {
      className = 'addRightBorder';
    }
  } else if (hideLeftBorder.value) {
    className = 'addRightBorder hideFirstLiftBorder';
  } else if (rowNum.value !== 10 && data.rowIndex === rowNum.value - 1) {
    className = 'notTenColumns';
  } else if (rowNum.value !== 10 && data.rowIndex !== rowNum.value - 1) {
    className = 'notTenRightBorder';
  } else if (
      data.columnIndex === 0 ||
      (!isShowOperation && data.columnIndex !== userColumn.value.length - 1) ||
      (isShowOperation && data.columnIndex !== userColumn.value.length)
  ) {
    className = 'addRightBorder';
  }
  // console.log('className : ', className)
  return className
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

const emit = defineEmits(['addFunc', 'clickCell']);
const clickAdd = () => {
  console.log('tableOnce --- addaddadd');
  emit('addFunc');
};

const handleCellClick = (row) => {
  emit('clickCell', row)
}
</script>

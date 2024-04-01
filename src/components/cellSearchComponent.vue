<template>
  <div
    :class="pageType === 'teacherSeeStudent' ? 'student-list' : 'staff-list'"
  >
    <div class="search-head">
      <el-input
        v-model="searchValue"
        style="width: 300px; height: 30px"
        :placeholder="placeholder"
        size="small"
        :suffix-icon="Search"
      />
    </div>
    <cellComponent
      :col-count="colCount"
      :row-count="rowCount"
      :data-list="staffList"
      :show-add="false"
      :show-del="false"
      :page-type="pageType"
      @clickCell="clickCellMore"
    />
  </div>
</template>
<script setup>
import { defineProps, toRefs, defineEmits } from 'vue';
import cellComponent from '@/components/cellComponent.vue';
import { Search } from '@element-plus/icons-vue';

const props = defineProps({
  pageType: {
    type: String,
    default: '',
  },
  staffList: {
    type: Array,
    default: () => {},
  },
  searchValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  rowCount: {
    type: Number,
    default: 10,
  },
  colCount: {
    type: Number,
    default: 6,
  },
});

const { pageType, searchValue, placeholder } = toRefs(props);
const emits = defineEmits(['changeTab']);

const clickCellMore = () => {
  console.log('cellSearch -- clickCellMore -- pageType : ', pageType.value);
  if (pageType.value === 'infoModify') {
    emits('changeTab', 'infoArchiveModify');
  } else if (pageType.value === 'infoSee') {
    emits('changeTab', 'infoSeeFile');
  } else if (pageType.value === 'staffDimission') {
    emits('changeTab', 'staffConfirmDimission');
  } else if (pageType.value === 'teacherSeeFile') {
    emits('changeTab', 'teacherSeeStudentDetail');
  } else if (pageType.value === 'studentDimission') {
    emits('changeTab', 'studentDimissionConfirm');
  }
};
</script>
<style lang="less">
@import '@/assets/css/cellMoreSearchComponentCss.less';
</style>

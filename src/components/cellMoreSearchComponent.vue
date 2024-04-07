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
    <cellMoreComponent
      :col-count="6"
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
import cellMoreComponent from '@/components/cellMoreComponent.vue';
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
});

const { pageType, searchValue, placeholder } = toRefs(props);
const emits = defineEmits(['changeTab']);

const clickCellMore = () => {
  console.log('cellMoreSearch -- clickCellMore -- pageType : ', pageType.value);
  if (pageType.value === 'infoModify') {
    emits('changeTab', 'infoArchiveModify');
  } else if (pageType.value === 'infoSee') {
    emits('changeTab', 'infoSeeFile');
  } else if (pageType.value === 'staffDimission') {
    emits('changeTab', 'staffConfirmDimission');
  } else if (pageType.value === 'teacherSeeFile') {
    emits('changeTab', 'teacherSeeStudentDetail');
  } else if (pageType.value === 'studentLevelStatistic') {
    emits('changeTab', 'studentStatisticDetail');
  } else if (pageType.value === 'teacherLevelStatistic') {
    emits('changeTab', 'teacherStatisticDetail');
  } else if (pageType.value === 'classFeeStatistic') {
    emits('changeTab', 'classFeeDetail');
  } else if (pageType.value === 'classScheduleSee') {
    emits('changeTab', 'classScheduleDetail');
  } else if (pageType.value === 'monthlyHomeworkSee') {
    emits('changeTab', 'monthlyHomeworkDetail');
  } else if (pageType.value === 'classDetailSee') {
    emits('changeTab', 'classInfoDetail');
  }
};
</script>
<style lang="less">
@import '@/assets/css/cellMoreSearchComponentCss.less';
</style>

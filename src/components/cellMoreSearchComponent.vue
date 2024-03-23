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
      @clickCell="clickCell"
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
    default: 9,
  },
});

const { pageType, searchValue, placeholder } = toRefs(props);
const emits = defineEmits(['changeTab']);

const clickCell = () => {
  console.log('cellMoreSearch -- click -- pageType : ', pageType.value);
  if (pageType.value === 'infoModify') {
    emits('changeTab', 'infoArchiveModify');
  } else if (pageType.value === 'infoSee') {
    emits('changeTab', 'infoSeeFile');
  } else if (pageType.value === 'staffDimission') {
    emits('changeTab', 'staffConfirmDimission');
  }
};
</script>
<style lang="less">
@import '@/assets/css/cellMoreSearchComponentCss.less';
</style>

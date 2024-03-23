<template>
  <div>
    <yearsComponent :funcList="funcList" />
    <cellMoreSearchComponent
      :row-count="6"
      :page-type="pageType"
      :staffList="staffList"
      :searchValue="searchValue"
      @changeTab="changeTab"
      :placeholder="'校区学员搜索：'"
    />
  </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import yearsComponent from '@/components/yearsComponent.vue';
import cellMoreSearchComponent from '@/components/cellMoreSearchComponent.vue';

defineProps({
  pageType: {
    type: String,
    default: '',
  },
});
const funcList = ref(['招生', '续费', '请假', '旷课', '停课', '退学']);
const searchValue = ref('');
const staffList = ref(['梁朝伟（学生）']);

const changeTab = () => {};
</script>
<style lang="less" scoped></style>

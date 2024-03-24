<template>
  <div class="teacher-info-seefile">
    <cellMoreSearchComponent
        :page-type="pageType"
      :staffList="dataList"
      :placeholder="'学员搜索'"
      @changeTab="jump2Student"
    />
  </div>
</template>
<script setup>
import { defineEmits, defineProps } from 'vue';
import cellMoreSearchComponent from '@/components/cellMoreSearchComponent.vue';

defineProps({
  pageType: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['changeTab']);
const dataList = ['李文斌［钢琴教师］', '张三毛［美术教师］', '汪xx［数学教师］'];
const jump2Student = () => {
  console.log('teacherSeeFile ---- jump2Student')
  emits('changeTab');
};
</script>
<style lang="less">
@import '@/assets/css/substituteTeacher/teacherInfoSeeFileCss.less';
</style>

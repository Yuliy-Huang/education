<template>
  <div class="two-blocks">
    <div></div>
    <div class="block-1" @click="changePage(pageType, 'teacher')">
      {{ twoBlockList[0] }}
    </div>
    <div></div>
    <div class="block-1" @click="changePage(pageType, 'staff')">
      {{ twoBlockList[1] }}
    </div>
    <div></div>
  </div>
</template>
<script setup>
import { inject, defineEmits, defineProps } from 'vue';

defineProps({
  twoBlockList: {
    type: Array,
    default: () => {},
  },
  pageType: {
    type: String,
    default: '',
  },
});
const emits = defineEmits(['changeTab']);
const globalVars = inject('globalVars');
globalVars.isDim = '1';
const changePage = (from, to) => {
  console.log('twoBlock --- from : ', from);
  console.log('twoBlock --- to : ', to);
  emits('changeTab', from, to);
};
</script>
<style scoped lang="less">
@import '@/assets/css/twoBlocksComponentCss.less';
</style>

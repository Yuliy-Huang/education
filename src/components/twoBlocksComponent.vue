<template>
  <div class="two-blocks">
    <div></div>
    <div class="block-1" @click="changePage(item.pageType)">
      {{ twoBlockList[0] }}
    </div>
    <div></div>
    <div class="block-1" @click="changePage(item.pageType)">
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
});
const emits = defineEmits(['changeTab']);
const globalVars = inject('globalVars');
globalVars.isDim = '1';
const changePage = v => {
  // console.log('blocks --- changePage --- v : ', v)
  emits('changeTab', v);
};
</script>
<style scoped lang="less">
@import '@/assets/css/twoBlocksComponentCss.less';
</style>

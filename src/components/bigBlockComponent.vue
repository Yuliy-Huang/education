<template>
  <div class="big-blocks">
    <div class="block-one" v-for="item in 4" :key="item">
      {{ blockList[item-1] }}
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  blockList: {
    type: Array,
    default: () => {},
  },
});

</script>
<style scoped lang="less">
@import '@/assets/css/bigBlockComponentCss.less';
</style>

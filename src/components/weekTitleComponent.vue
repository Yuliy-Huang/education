<template>
  <div
    class="weeks-title-heading"
    :style="{ display: headHiding ? 'none' : '' }"
  >
    <template v-for="item of weekTitle" :key="item">
      <div
        :class="['weeks', { 'is-active': item === activeWeek }]"
        @click="activeWeek = item"
      >
        {{ item }}
      </div>
    </template>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { weekTitle } from '@/utils/constant.js';

const activeWeek = ref(weekTitle[1]);
</script>
<style lang="less" scoped>
@import '@/assets/css/weekTitleComponentCss.less';
</style>

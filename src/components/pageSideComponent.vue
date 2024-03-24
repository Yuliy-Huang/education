<template>
  <div class="system-setting-side">
    <div class="top-right-button" @click="close2NotDim">
      <el-icon>
        <Close />
      </el-icon>
    </div>
    <div class="top-right-button-1" @click="back2LastDiv">
      <el-icon>
        <Back />
      </el-icon>
    </div>
  </div>
</template>
<script setup>
import { defineEmits } from 'vue';
import { Back, Close } from '@element-plus/icons-vue';

const emits = defineEmits(['close2NotDim', 'back2LastDiv']);

const close2NotDim = () => {
  emits('close2NotDim');
};

const back2LastDiv = () => {
  emits('back2LastDiv');
};
</script>
<style>
@import '@/assets/css/pageSideComponentCss.less';
</style>

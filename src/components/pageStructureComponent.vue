<template>
  <div class="staff-setting">
    <div class="staff-div">
      <keep-alive :exclude="['staffInfoSeeDetail', 'staffDimission']">
        <div :class="isSeparate ? 'academic-staff-separate' : 'academic-staff'">
          <slot></slot>
        </div>
      </keep-alive>
    </div>

    <div class="system-setting-side">
      <div
        class="top-right-button"
        @click="close2NotDim"
      >
        <el-icon>
          <Close />
        </el-icon>
      </div>
      <div
        class="top-right-button-1"
        @click="back2LastDiv"
      >
        <el-icon>
          <Back />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Back, Close } from "@element-plus/icons-vue";
import { defineProps, defineEmits } from 'vue';

defineProps({
  pageType: {
    type: String,
    default: '',
    required: true,
  },
  isSeparate: {
    type: Boolean,
    default: false,
  }
})

const emits = defineEmits(['close2NotDim', 'back2LastDiv'])
const close2NotDim = () => {
  emits('close2NotDim')
}

const back2LastDiv = () => {
  emits('back2LastDiv')
}

</script>
<style scoped lang="less">
@import "@/assets/css/pageStructureComponentCss.less";
</style>

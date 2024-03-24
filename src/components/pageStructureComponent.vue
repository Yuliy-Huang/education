<template>
  <div class="staff-setting">
    <div class="staff-div">
      <keep-alive
        :exclude="[
          'staffInfoSeeDetail',
          'staffDimission',
          'teacherInfoSeeDetail',
        ]"
      >
        <div :class="isSeparate ? 'academic-staff-separate' : 'academic-staff'">
          <slot></slot>
        </div>
      </keep-alive>
    </div>

    <pageSideComponent
      @close2NotDim="close2NotDim"
      @back2LastDiv="back2LastDiv"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import pageSideComponent from '@/components/pageSideComponent.vue';

defineProps({
  pageType: {
    type: String,
    default: '',
    required: true,
  },
  isSeparate: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close2NotDim', 'back2LastDiv']);
const close2NotDim = () => {
  emits('close2NotDim');
};

const back2LastDiv = () => {
  emits('back2LastDiv');
};
</script>
<style scoped lang="less">
@import '@/assets/css/pageStructureComponentCss.less';
</style>

<template>
  <cardsComponent :showLeftSide="true" />
</template>
<script>
import cardsComponent from '@/components/cardsComponent.vue';
export default {
  components: {
    cardsComponent,
  },
  setup() {},
};
</script>
<style lang="less" scoped>
@import '@/assets/css/queryManage/studentStatisticDetailCss.less';
</style>

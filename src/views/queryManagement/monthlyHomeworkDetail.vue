<template>
  <div class="homework-page">
    <div class="homework-head">
      <div class="homework-col" v-for="item of 12" :key="item">
        <div>{{ item + 1 }}月</div>
        <div>75%</div>
      </div>
    </div>
    <div class="homework-body">
      <weeksComponent />
    </div>
  </div>
</template>
<script>
import weeksComponent from '@/components/weeksComponent.vue';
export default {
  components: {
    weeksComponent,
  },
  setup() {},
};
</script>
<style lang="less" scoped>
@import '@/assets/css/queryManage/monthlyHomeworkDetailCss.less';
</style>

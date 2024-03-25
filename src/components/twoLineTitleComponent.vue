<template>
  <div class="two-line-title">
    <div class="first-line">
      <div class="first-col">left</div>
      <div class="first-col">学校六个专业［共{{ total }}人］学员统计表</div>
      <div class="first-col">right</div>
    </div>
    <div class="second-line">
      <div class="second-col" v-for="(item, index) in majorList" :key="index">
        {{ item.major }}［{{ item.count }}J人
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped lang="less">
@import '@/assets/css/twoLineTitleComponentCss.less';
</style>

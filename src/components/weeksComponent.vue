<template>
  <div class="homework-left-side">
    <div>
      <img
        :src="require(`@/assets/img/qr/img.jpg`)"
        style="width: 80px; height: 120px"
        alt=""
      />
    </div>
    <div>刘老师</div>
    <div>钢琴教师</div>
  </div>

  <div class="homework-right-side">
    <div class="homework-line-inside">
      <div class="homework-cell" v-for="itm of 5" :key="itm">
        第 {{ toChineseNumber(itm) }} 周
      </div>
    </div>
    <div class="homework-line-inside">
      <div class="homework-cell" v-for="itm of 5" :key="itm">
        第 {{ itm }} 周
      </div>
    </div>
  </div>
</template>
<script>
import { toChineseNumber } from '@/utils/numberFormat';
export default {
  methods: {
    toChineseNumber: toChineseNumber,
  },
  props: {
    showLeftSide: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>
<style scoped lang="less">
@import '@/assets/css/weeksComponentCss.less';
</style>

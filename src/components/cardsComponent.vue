<template>
  <div class="card-page">
    <div class="card-line" v-for="item of 2" :key="item">
      <div class="card-line-inside">
        <div class="card-cell" v-for="itm of 11" :key="itm">
          {{ toChineseNumber(itm - 1) }} 级
        </div>
      </div>
      <div class="card-line-inside">
        <div class="card-cell" v-for="itm of 11" :key="itm">
          {{ itm - 1 }} 级
        </div>
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
  setup() {},
};
</script>
<style scoped lang="less">
@import '@/assets/css/cardsComponentCss.less';
</style>

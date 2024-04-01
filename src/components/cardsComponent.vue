<template>
  <div class="card-page-side" v-if="props.showLeftSide">
    <div class="card-left-side">
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

    <div class="card-right-side">
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
  </div>
  <div class="card-page" v-else>
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
@import '@/assets/css/cardsComponentCss.less';
</style>

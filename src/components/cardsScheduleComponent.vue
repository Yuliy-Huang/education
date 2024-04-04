<template>
  <div class="schedule-side">
    <div class="schedule-left-side">
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

    <div class="schedule-mid-side">
      <div class="week">星期日</div>
      <div class="week">星期一</div>
      <div class="week">星期二</div>
    </div>

    <div class="schedule-right-side">
      <div class="card-line" v-for="item of 3" :key="item">
        <div class="card-line-inside">
          <div class="card-cell" v-for="itm of classTime" :key="itm">
            {{ itm }}
          </div>
        </div>
        <div class="card-line-inside">
          <div class="card-cell" v-for="itm of 8" :key="itm">
            {{ itm - 1 }} 级
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toChineseNumber } from '@/utils/numberFormat';
import { classTime } from '@/utils/constant';
export default {
  methods: {
    toChineseNumber: toChineseNumber,
  },
  props: {},
  setup(props) {
    return {
      props,
      classTime,
    };
  },
};
</script>
<style scoped lang="less">
@import '@/assets/css/cardsScheduleComponentCss.less';
</style>

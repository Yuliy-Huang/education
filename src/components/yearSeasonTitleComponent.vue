<template>
  <div
    :class="['years-title-heading', showYear ? 'show-season': 'hide-season']"
    :style="{ display: headHiding ? 'none' : '' }"
  >
    <div class="year" v-show="showYear">
      <div class="arrow-left-div">
        <span class="inner-img-div" @click="changeYear(-1)">
          <img
            :src="require(`@/assets/img/arrowLeft.png`)"
            style="width: 20px; height: 12px; cursor: pointer"
            alt=""
          />
        </span>
      </div>
      <span>{{ year }}</span>
      <div class="arrow-right-div">
        <span class="inner-img-div" @click="changeYear(1)">
          <img
            :src="require(`@/assets/img/arrowRight.png`)"
            style="width: 20px; height: 12px; cursor: pointer"
            alt=""
          />
        </span>
      </div>
    </div>
    <template v-for="item of 4" :key="item">
      <div
        :class="['month', { 'is-active': item === activeMonth }]"
        @click="activeMonth = item"
      >
        第{{ toChineseNumber(item) }}季度
      </div>
    </template>
  </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
import {toChineseNumber} from "@/utils/numberFormat";
defineProps({
  headHiding: {
    type: Boolean,
    default: false,
  },
  showYear: {
    type: Boolean,
    default: true,
  }
});

const nowYear = new Date().getFullYear();
const year = ref(nowYear);
const changeYear = v => {
  v === 1
    ? (year.value = year.value + 1 <= nowYear ? year.value + 1 : nowYear)
    : (year.value = year.value - 1 >= 1970 ? year.value - 1 : 1970);
};
const activeMonth = ref(1);
</script>
<style lang="less" scoped>
@import '@/assets/css/yearTitleComponentCss.less';
</style>

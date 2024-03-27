<template>
  <div class="two-line-title">
    <div class="first-line">
      <div class="first-col">
        <span class="inner-img-div" @click="changeYear(-1)">
          <img
            :src="require(`@/assets/img/arrowLeft.png`)"
            style="width: 20px; height: 12px; cursor: pointer"
            alt=""
          />
        </span>
      </div>
      <div class="first-col">
        {{ props.title }}
      </div>
      <div class="first-col">
        <span class="inner-img-div" @click="changeYear(1)">
          <img
            :src="require(`@/assets/img/arrowRight.png`)"
            style="width: 20px; height: 12px; cursor: pointer"
            alt=""
          />
        </span>
      </div>
    </div>
    <div :class="'second-line-' + cutNum">
      <div class="second-col" v-for="idx in cutNum" :key="idx">
        {{
          props.dataList[idx - 1]
            ? props.dataList[idx - 1].major +
              '[' +
              props.dataList[idx - 1].count +
              ']' +
              '人'
            : ''
        }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cutNum: {
      type: Number,
      default: 8,
    },
    title: String,
    dataList: {
      type: Array,
      default: () => {},
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
@import '@/assets/css/twoLineTitleComponentCss.less';
</style>

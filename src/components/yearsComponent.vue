<template>
  <div class="years-heading">
    <div class="line type-div">
      <div
        :class="['item', { 'is-active': itm === activeType }]"
        v-for="itm in typeList"
        :key="itm"
        @click="changeType(itm)"
      >
        {{ itm }}
      </div>
    </div>
    <div :class="['line', activeClass]">
      <template v-for="itm in intervalActive" :key="itm">
        <div
          :class="['item', { 'is-active': itm === activeMonth }]"
          @click="changeInterval(itm)"
        >
          {{ itm }}
        </div>
      </template>
    </div>
    <div class="line function-div">
      <template v-for="itm in funcList" :key="itm">
        <div
          :class="['item', { 'is-active': itm === activeFunc }]"
          @click="changeFunc(itm)"
        >
          {{ itm }}
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, toRefs } from 'vue';

const props = defineProps({
  funcList: {
    type: Array,
    default: () => {},
  },
});
const { funcList } = toRefs(props);

const intervalList = ref({
  月份: new Array(12).fill(null).map((v, i) => ++i + '月'),
  季度: new Array(4).fill(null).map((v, i) => '第' + ++i + '季度'),
  半年: ['上半年', '下半年'],
  全年: ['全年'],
});
const classList = ref({
  月份: 'item-month',
  季度: 'item-quarter',
  半年: 'item-half-year',
  全年: 'item-whole-year',
});
const activeClass = ref(classList.value['月份']);
const typeList = ref(['月份', '季度', '半年', '全年']);
const activeType = ref(typeList.value[0]);
const activeFunc = ref(funcList.value[0]);
const intervalActive = ref(intervalList.value[activeType.value]);
const activeMonth = ref(intervalActive.value[0]);

const changeType = v => {
  activeType.value = v;
  intervalActive.value = intervalList.value[v];
  activeClass.value = classList.value[v];
  activeMonth.value = intervalActive.value[0];
};

const changeInterval = v => {
  activeMonth.value = v;
};
const changeFunc = v => {
  activeFunc.value = v;
};
</script>
<style lang="less" scoped>
@import '@/assets/css/yearsComponentCss.less';
</style>

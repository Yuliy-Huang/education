<template>
  <div class="pca-select">
    <div>地区:</div>
    <select v-model="province">
      <option value="">&nbsp;</option>
      <option
        v-for="provinceName in provinceArr"
        :value="provinceName"
        :key="provinceName"
      >
        {{ provinceName }}
      </option>
    </select>
    <div>省</div>
    <select v-model="city">
      <option value="">&nbsp;</option>
      <option v-for="cityName in cityArr" :value="cityName" :key="cityName">
        {{ cityName }}
      </option>
    </select>
    <div>市</div>
    <select v-model="area">
      <option value="">&nbsp;</option>
      <option v-for="areaName in areaArr" :value="areaName" :key="areaName">
        {{ areaName }}
      </option>
    </select>
    <div>区/县</div>
  </div>
</template>
<script setup>
import { areaObj } from '@/utils/pca.js';
import { ref, toRefs, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
});
const { index } = toRefs(props);
const emits = defineEmits(['changeAddress']);
// 省
const provinceArr = Object.keys(areaObj);
const province = ref(provinceArr[0]);
// 市
const cityArr = ref(Object.keys(areaObj[province.value]));
const city = ref(cityArr.value[0]);
const areaArr = ref(areaObj[province.value][city.value]);
const area = ref(areaArr.value[0]);

// 监听省份变化
watch(province, newVal => {
  cityArr.value = Object.keys(areaObj[newVal]);
  city.value = Object.keys(areaObj[newVal])[0];
});
// 区

// const isCitySelectorShow = computed(() => !!province.value);
// const isAreaSelectorShow = computed(() => !!city.value);

// 监听市变化
watch(city, newVal => {
  areaArr.value = areaObj[province.value][city.value];
  area.value = areaObj[province.value][newVal][0];
});
// 监听区变化
watch(area, () => {
  emits(
    'changeAddress',
    index.value,
    province.value + '省' + city.value + '市' + area.value
  );
});
</script>
<style scoped>
@import '@/assets/css/pcaComponentCss.less';
</style>

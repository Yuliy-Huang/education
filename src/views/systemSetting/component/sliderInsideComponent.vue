<template>
  <div class="slider-inside-div">
    <div class="slide-inside-head">
      <div class="arrow-left">
        <span class="inside-img-div" @click="reduceShowTag">
          <img :src="require(`@/assets/img/arrowLeft.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>

      <template v-for="(item, index) in showTags" :key="index">
        <div :class="activeTag === item ? 'inside-title-div-active' : 'inside-title-div'" @click="changeTag(item)">
          <span class="inside-div">{{ item }}</span>
        </div>
      </template>
      <template v-if="showTags.length < 4">
        <div :class="activeTag === item ? 'inside-title-div-active' : 'inside-title-div'"
             v-for="(item, index) in (4-showTags.length)"
             :key="index">
          <span class="inside-div"></span>
        </div>
      </template>

      <div class="arrow-right">
        <span class="inside-img-div" @click="addShowTag">
          <img :src="require(`@/assets/img/arrowRight.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import {defineProps, defineEmits, inject, onMounted, ref, toRefs, watch} from "vue";

const props = defineProps({
  dataList: {
    type: Array,
    default: () => {}
  },
})
const {dataList} = toRefs(props)

const emit = defineEmits(['changeNext', 'changeShowDiv'])

const activeTag = ref(null)
const showNum = ref(0)

const addShowTag = () => {
  showNum.value = showNum.value + 4 < dataList.value.length ? showNum.value + 4 : Math.floor((dataList.value.length - 1) / 4) * 4
}

const reduceShowTag = () => {
  showNum.value = showNum.value - 4 >= 0 ? showNum.value - 4 : 0
}

const globalVars = inject('globalVars')

const changeTag = (v) => {
  // globalVars.showSub = '1'
  if (v !== activeTag.value) {
    emit('changeShowDiv', false)
    globalVars.isDim = '0'
  }
  activeTag.value = v
  emit('changeNext', true)
}

const showTags = ref([])
onMounted(() => {
  showTags.value = dataList.value.slice(showNum.value, showNum.value + 4)
})
watch(showNum, () => {
  showTags.value = showNum.value + 4 < dataList.value.length ? dataList.value.slice(showNum.value, showNum.value + 4) : dataList.value.slice(showNum.value, dataList.value.length)
})


</script>
<style lang="less">
@import "@/assets/css/systemSetting/sliderInsideComponentCss";
</style>
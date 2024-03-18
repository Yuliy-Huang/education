<template>
  <div class="slider-div">
    <div class="setting-head">
      <div class="arrow-left-div">
        <span class="inner-img-div" @click="reduceShowTag">
          <img :src="require(`@/assets/img/arrowLeft.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>
      <template v-for="(item, index) in showTags" :key="index">
        <div :class="activeTag === item ? 'title-div-active' : 'title-div'" @click="changeTag(item)">
          <span class="inner-div">{{ item }}</span>
        </div>
      </template>
      <template v-if="showTags.length < 4">
        <div :class="activeTag === item ? 'title-div-active' : 'title-div'"
             v-for="(item, index) in (4-showTags.length)"
             :key="index">
          <span class="inner-div"></span>
        </div>
      </template>
      <div class="arrow-right-div">
        <span class="inner-img-div" @click="addShowTag">
          <img :src="require(`@/assets/img/arrowRight.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script setup>
import {defineEmits, defineProps, onMounted, ref, toRefs, watch} from "vue";

const props = defineProps({
  activeTag: {
    type: String,
    default: null
  },
  titleList: {
    type: Array,
    default: () => {}
  },
})
const {activeTag, titleList} = toRefs(props)
const showIndex = ref(0)
const showTags = ref([])
const addShowTag = () => {
  showIndex.value = showIndex.value + 4 < titleList.value.length ? showIndex.value + 4 : Math.floor((titleList.value.length - 1) / 4) * 4
}

const reduceShowTag = () => {
  showIndex.value = showIndex.value - 4 >= 0 ? showIndex.value - 4 : 0
}

onMounted(() => {
  showTags.value = titleList.value.slice(showIndex.value, showIndex.value + 4).map(item => {
    return item.name
  })
})
watch(showIndex, () => {
  showTags.value = showIndex.value + 4 < titleList.value.length ? titleList.value.slice(showIndex.value, showIndex.value + 4).map(item => {
    return item.name
  }) : titleList.value.slice(showIndex.value, titleList.value.length).map(item => {
    return item.name
  })
})

const emit = defineEmits(['changeActiveTag']);
const changeTag = (v) => {
  emit('changeActiveTag', v);
}


</script>
<style scoped lang="less">
@import "@/assets/css/sliderComponentCss";
</style>
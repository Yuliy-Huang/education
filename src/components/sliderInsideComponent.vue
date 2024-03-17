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
    <div class="setting-inside-content" v-if="activeTag !== null">
      <permissionSettingPerson  @updateShowEdit="updateEdit"/>
    </div>
  </div>
</template>
<script setup>
import {defineProps, inject, onMounted, ref, toRefs, watch} from "vue";
import permissionSettingPerson from '@/views/systemSetting/postPermission/permissionSettingPerson.vue'

const props = defineProps({
  titleList: {
    type: Array,
    default: () => {}
  },
})
const {titleList} = toRefs(props)

const activeTag = ref(null)
const showEdit = ref(false)
const showNum = ref(0)

const addShowTag = () => {
  showNum.value = showNum.value + 4 < titleList.value.length ? showNum.value + 4 : Math.floor((titleList.value.length - 1) / 4) * 4
}

const reduceShowTag = () => {
  showNum.value = showNum.value - 4 >= 0 ? showNum.value - 4 : 0
}

const updateEdit = () => {
  showEdit.value = !showEdit.value
}

const globalVars = inject('globalVars')

const changeTag = (v) => {
  globalVars.showSub = '1'
  activeTag.value = v
  globalVars.isDim = '1'
  console.log('inside --- activeTag : ', activeTag.value)
}

const showTags = ref([])
onMounted(() => {
  showTags.value = titleList.value.slice(showNum.value, showNum.value + 4)
})
watch(showNum, () => {
  showTags.value = showNum.value + 4 < titleList.value.length ? titleList.value.slice(showNum.value, showNum.value + 4) : titleList.value.slice(showNum.value, titleList.value.length)
})


</script>
<style lang="less">
@import "@/assets/css/sliderInsideComponentCss";
</style>
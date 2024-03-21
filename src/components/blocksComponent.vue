<template>
  <div class="home">
    <div class="one-block">
      <div
        class="up-block"
        @click="changePage(blockList[0].pageType)"
      >{{ blockList[0].name }}</div>
      <div class="down-block">
        <div
          class="link-mid"
          v-for="idx in 13"
          :key="idx"
        ></div>
        <span>3</span>
        <div
          class="link-mid"
          v-for="idx in 13"
          :key="idx"
        ></div>
      </div>
    </div>
    <div class="one-block">
      <div
        class="up-block"
        @click="changePage(blockList[1].pageType)"
      >{{ blockList[1].name }}</div>
      <div class="down-block">
        <div
          class="link-mid"
          v-for="idx in 13"
          :key="idx"
        ></div>
        <span>1</span>
        <div
          class="link-mid"
          v-for="idx in 13"
          :key="idx"
        ></div>
      </div>
    </div>
    <div class="one-block">
      <div
        class="up-block"
        @click="changePage(blockList[2].pageType)"
      >{{ blockList[2].name }}</div>
      <div class="down-block">
        <div
          class="link-mid"
          v-for="idx in 13"
          :key="idx"
        ></div>
        <span>2</span>
        <div
          class="link-mid"
          v-for="idx in 13"
          :key="idx"
        ></div>
      </div>
    </div>
    <div class="one-block">
      <div
        class="up-block"
        @click="changePage(blockList[3].pageType)"
      >{{ blockList[3].name }}</div>
      <div class="down-block">
        <div
          class="link-mid"
          v-for="idx in 13"
          :key="idx"
        ></div>
        <span>1</span>
        <div
          class="link-mid"
          v-for="idx in 13"
          :key="idx"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject, defineEmits, defineProps } from "vue";

defineProps({
  blockList: {
    type: Array,
    default: () => { }
  }
})
const emits = defineEmits(['changeTab'])
const globalVars = inject('globalVars')
globalVars.isDim = '1'
const changePage = (v) => {
  console.log('blocks --- changePage --- v : ', v)
  emits('changeTab', v)
}

</script>
<style scoped lang="less">
@import "@/assets/css/blocksComponentCss";
</style>
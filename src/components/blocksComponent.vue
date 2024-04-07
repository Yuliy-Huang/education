<template>
  <div class="home-2blocks" v-if="blockList.length === 2">
    <div class="one-block" v-for="(item, index) in blockList" :key="index">
      <div class="up-block" @click="changePage(item.pageType)">
        {{ item.name }}
      </div>
      <div class="down-block">
        <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        <span>{{ item.count }}</span>
        <div class="link-mid" v-for="idx in 13" :key="idx"></div>
      </div>
    </div>
  </div>
  <div class="home-3blocks" v-else-if="blockList.length === 3">
    <div class="one-block" v-for="(item, index) in blockList" :key="index">
      <div class="up-block" @click="changePage(item.pageType)">
        {{ item.name }}
      </div>
      <div class="down-block">
        <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        <span>{{ item.count }}</span>
        <div class="link-mid" v-for="idx in 13" :key="idx"></div>
      </div>
    </div>
  </div>
  <div class="home-4blocks" v-else-if="blockList.length === 4">
    <div class="one-block" v-for="(item, index) in blockList" :key="index">
      <div class="up-block" @click="changePage(item.pageType)">
        {{ item.name }}
      </div>
      <div class="down-block">
        <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        <span>{{ item.count }}</span>
        <div class="link-mid" v-for="idx in 13" :key="idx"></div>
      </div>
    </div>
  </div>
  <div class="home-2lines" v-else>
    <div class="home-line"></div>
    <div class="home-line">
      <div
        class="one-block"
        v-for="(item, index) in blockList.slice(0, 3)"
        :key="index"
      >
        <div class="up-block" @click="changePage(item.pageType)">
          {{ item.name }}
        </div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>{{ item.count }}</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
    </div>
    <div class="home-line">
      <div
        class="one-block"
        v-for="(item, index) in blockList.slice(3)"
        :key="index"
      >
        <div class="up-block" @click="changePage(item.pageType)">
          {{ item.name }}
        </div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>{{ item.count }}</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
    </div>
    <div class="home-line"></div>
  </div>
</template>
<script setup>
import { inject, defineEmits, defineProps } from 'vue';

defineProps({
  blockList: {
    type: Array,
    default: () => {},
  },
});
const emits = defineEmits(['changeTab']);
const globalVars = inject('globalVars');
globalVars.isDim = '1';
const changePage = v => {
  const specialList = ['page1', 'page2', 'page3', 'page4'];
  if (specialList.indexOf(v) !== -1) {
    emits('changeTab', 'home', v);
  } else {
    emits('changeTab', v);
  }
};
</script>
<style scoped lang="less">
@import '@/assets/css/blocksComponentCss';
</style>

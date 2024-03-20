<template>
  <div class="all-major">
    <cell-more-component :data-list="majorList" :row-count="10"/>
  </div>
</template>
<script setup>
import cellMoreComponent from "@/components/cellMoreComponent.vue"

const majorList = ['1级', '2级', '3级', '4级', '5级', '6级']

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/allMajorNamesCss";
</style>

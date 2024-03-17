<template>
  <div class="all-major">
    <cell-component :data-list="majorList" :page-type="'major'"/>
  </div>
</template>
<script setup>
import cellComponent from "@/components/cellComponent.vue"

const majorList = ['钢琴', '吉他']

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/allMajorNamesCss";
</style>

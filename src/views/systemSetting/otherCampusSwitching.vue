<template>
  <div class="all-major">
    <cell-component :data-list="majorList" :page-type="'campus'"/>
  </div>
</template>
<script setup>
import cellComponent from "@/components/cellComponent.vue"

const majorList = ['博尔思音乐培训学校', '嘉兴美术培训学校', '嘉跃跆拳道培训学校']

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/allMajorNamesCss";
</style>

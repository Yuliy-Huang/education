<template>
  <div class="all-major">
    <cell-component :data-list="majorList"/>
  </div>
</template>
<script setup>
import cellComponent from "@/components/cellComponent.vue"

const majorList = ['钢琴', '吉他', '数学', '英语', '书法']

</script>
<style lang="less">
@import "@/assets/css/allMajorNamesCss";
</style>

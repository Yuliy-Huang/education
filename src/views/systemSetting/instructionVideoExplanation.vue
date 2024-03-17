<template>
  <div class="all-major">
    <cell-component :data-list="majorList" :page-type="'instruction'"/>
  </div>
</template>
<script setup>
import cellComponent from "@/components/cellComponent.vue"

const majorList = ['系统设置使用讲解', '教务员工使用讲解']

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/allMajorNamesCss";
</style>

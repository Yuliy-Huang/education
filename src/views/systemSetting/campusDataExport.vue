<template>
  <div class="data-export">
    <div class="export-in-div">
      <div class="export-div">
        <el-button plain @click="saveFunc">请点击所有数据导出至WPS文档</el-button>
      </div>
    </div>
  </div>
</template>
<script setup>

const saveFunc = () => {
}

</script>
<style lang="less">
@import "@/assets/css/systemSetting/campusDataExportCss";
</style>
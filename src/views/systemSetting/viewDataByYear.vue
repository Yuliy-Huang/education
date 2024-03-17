<template>
  <div class="view-data">
    <div class="years">
      <div v-for="idx in 10" :key="idx" class="single-year">
        <el-button plain>
          {{currentYear - (10 - idx)}}年校区所有数据
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'

const currentYear = ref(new Date().getFullYear())
console.log('currentYear : ', currentYear.value)
console.log(typeof currentYear.value)

</script>
<style lang="less">
@import "@/assets/css/systemSetting/viewDataByYearCss";
</style>
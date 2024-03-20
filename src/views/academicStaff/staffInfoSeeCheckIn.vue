<template>
  <div class="staff-info-checkin">
    <div class="row1">
      <div class="col1"><span class="dot-green"></span>上班</div>
      <div class="col2"><span class="dot-yellow"></span>请假</div>
      <div class="col3"><span class="dot-red"></span>旷勤</div>
    </div>
    <div class="row2">
      <cell-component :data-list="dataList" :page-type="'infoSeeCheckIn'" :row-count="5" :col-count="7"/>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import cellComponent from "@/components/cellComponent.vue"

const dataList = ref(['2022.1.1'])
</script>
<style lang="less">
@import "@/assets/css/academicStaff/staffInfoSeeCheckInCss";
</style>
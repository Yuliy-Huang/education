<template>
  <div class="staff-info-checkin">
    <div class="row1">
      <div class="col1"><span class="big-dot-green"></span>上班</div>
      <div class="col2"><span class="big-dot-yellow"></span>请假</div>
      <div class="col3"><span class="big-dot-red"></span>旷勤</div>
    </div>
    <div class="row2">
      <cell-component
          :data-list="dataList"
          :page-type="'infoSeeCheckIn'"
          :row-count="5"
          :col-count="7"
          :show-add="false"
          :show-del="false"/>
    </div>
  </div>
</template>
<script setup>
import cellComponent from "@/components/cellComponent.vue"
import {traverseDaysInMonth} from "@/utils/dateFormat"
import {defineProps, toRefs} from "vue";

const props = defineProps({
  year: {
    type: String,
    default: '',
  },
  month: {
    type: String,
    default: '',
  },
})
const {year, month} = toRefs(props);
const dataList = traverseDaysInMonth(year.value, month.value)

</script>
<style lang="less">
@import "@/assets/css/academicStaff/staffInfoSeeCheckInCss";
</style>
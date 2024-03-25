<template>
  <div class="schedule-table-div">
    <div class="schedule-table">
      <div class="schedule-row" v-for="item in timeList" :key="item">
        <div class="schedule-cell">{{ item }}</div>
        <div class="schedule-cell" v-for="itm in 7" :key="itm">
          <div class="schedule-cell-row">
            <div class="schedule-cell-col">邓紫棋</div>
            <div class="schedule-cell-col"></div>
          </div>
          <div class="schedule-cell-row">
            <div class="schedule-cell-col">刘德华</div>
            <div class="schedule-cell-col"></div>
          </div>
          <div class="schedule-cell-row">
            <div class="schedule-cell-col"></div>
            <div class="schedule-cell-col"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const timeList = ref([
  '19: 19 - 20:00',
  '20: 30 - 21 :15',
  '00: 00 - 00: 00',
  '00: 00 - 00: 00',
]);
</script>
<style lang="less">
@import '@/assets/css/classTimeDailyScheduleComponentCss.less';
</style>

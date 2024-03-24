<template>
  <div class="time-table-div">
    <div class="time-table">
      <div class="head-rows">
        <div class="bevel-edge"></div>
        <div class="head-title">
          <div class="week-div">
            <div class="up">第一周</div>
            <div class="down">
              <div class="down-div">1对1比例</div>
              <div class="down-div">1对多固定</div>
              <div class="down-div">1对多比例</div>
            </div>
          </div>
          <div class="week-div">
            <div class="up">第二周</div>
            <div class="down">
              <div class="down-div">1对1比例</div>
              <div class="down-div">1对多固定</div>
              <div class="down-div">1对多比例</div>
            </div>
          </div>
          <div class="week-div">
            <div class="up">第三周</div>
            <div class="down">
              <div class="down-div">1对1比例</div>
              <div class="down-div">1对多固定</div>
              <div class="down-div">1对多比例</div>
            </div>
          </div>
          <div class="week-div">
            <div class="up">第四周</div>
            <div class="down">
              <div class="down-div">1对1比例</div>
              <div class="down-div">1对多固定</div>
              <div class="down-div">1对多比例</div>
            </div>
          </div>
        </div>
      </div>
      <div class="body-rows">
        <div class="week-row" v-for="item of weekData" :key="item">
          <div class="left-cell">{{ item }}</div>
          <div class="right-cells">
            <div class="right-cell" v-for="itm of 12" :key="itm"></div>
          </div>
        </div>
        <div class="week-row">
          <div class="left-cell">总合计</div>
          <div class="right-cells">
            <div class="right-cell" v-for="itm of 12" :key="itm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { weekData } from '@/utils/constant.js';
</script>
<style lang="less">
@import '@/assets/css/classTimeTableComponentCss.less';
</style>

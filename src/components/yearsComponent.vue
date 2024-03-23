<template>
  <div class="years-div">
    <div class="type-div">
      <div :class="['item', {'is-active': item === activeMonth}]">月份</div>
      <div :class="['item', {'is-active': item === activeMonth}]">季度</div>
      <div :class="['item', {'is-active': item === activeMonth}]">半年</div>
      <div :class="['item', {'is-active': item === activeMonth}]">全年</div>
    </div>
    <div class="interval-div">
      <div
        :class="['item', {'is-active': item === activeMonth}]"
        @click="activeMonth = item"
      >{{ item }}月</div>
    </div>
    <div class="function-div">
      <template
        v-for="itm in funcList"
        :key="itm"
      >
        <div :class="['item', {'is-active': item === activeMonth}]">{{ itm }}}</div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const funcList = ref(['招生', '续费', '请假', '旷课', '停课', '退学'])


</script>
<style lang="less" scoped>
</style>
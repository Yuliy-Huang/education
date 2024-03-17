<template>
  <div class="live-video">
    <div class="live-video-div">
      <div class="switch-row">
        <el-radio-group v-model="firstSwitch">
          <el-radio-button label="" value="0" />
          <el-radio-button label="" value="1" />
        </el-radio-group>
<!--        <el-switch-->
<!--            v-model="firstSwitch"-->
<!--            class="ml-2"-->
<!--            style="&#45;&#45;el-switch-on-color: var(&#45;&#45;light-green-custom); &#45;&#45;el-switch-off-color: var(&#45;&#45;dark-grey-custom-3);"-->
<!--        />-->
      </div>
      <div class="text-div">
        <span>是否打开视频会议直播</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const firstSwitch = ref('1')


</script>
<style lang="less">
@import "@/assets/css/liveVideoSettingCss";
</style>
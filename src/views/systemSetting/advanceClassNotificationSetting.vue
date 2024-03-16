<template>
  <div class="renewal">
    <div class="notification-div">
      <div class="left-text">
        上课提前通知时间设定
      </div>
      <bracketComponent/>
      <div class="right-text-div">
        <div class="right-text-top">
          第一次&nbsp;<el-input v-model="firstWeek"/>&nbsp;&nbsp;小时&nbsp;&nbsp;
          <el-switch
              v-model="firstSwitch"
              class="ml-2"
              style="--el-switch-on-color: var(--light-green-custom); --el-switch-off-color: var(--dark-grey-custom-3);"
          />
        </div>
        <div class="right-text-bottom">
          第二次&nbsp;<el-input v-model="secondWeek"/>&nbsp;&nbsp;小时&nbsp;&nbsp;
          <el-switch
              v-model="secondSwitch"
              class="ml-2"
              style="--el-switch-on-color: var(--light-green-custom); --el-switch-off-color: var(--dark-grey-custom-3);"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import bracketComponent from '@/components/bracketComponent.vue'

const firstWeek = ref('')
const secondWeek = ref('')

const firstSwitch = ref(true)
const secondSwitch = ref(false)

</script>
<style lang="less">
@import "@/assets/css/renewalNotificationSettingCss";
</style>
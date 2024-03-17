<template>
  <div class="sign-in">
    <div class="sign-in-div">
      <div class="first-row">
        <span>前台教务签到权限设置</span>
        <el-switch
            v-model="firstSwitch"
            class="ml-2 row-switch"
            style="--el-switch-on-color: var(--light-green-custom); --el-switch-off-color: var(--dark-grey-custom-3);"
        />
      </div>
      <div class="second-row">
        <span>代课教师签到权限设置</span>
        <el-switch
            v-model="secondSwitch"
            class="ml-2 row-switch"
            style="--el-switch-on-color: var(--light-green-custom); --el-switch-off-color: var(--dark-grey-custom-3);"
        />
      </div>
      <div class="button-div">
        <el-button plain @click="saveFunc">确 定 保 存</el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const firstSwitch = ref(true)
const secondSwitch = ref(false)
const saveFunc = () => {
}

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/signInPermissionSettingCss";
</style>
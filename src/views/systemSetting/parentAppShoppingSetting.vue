<template>
  <div class="sign-in">
    <div class="sign-in-div">
      <div class="first-row">
        <span>家长端APP购物商城是否打开：</span>
        <el-switch
            v-model="firstSwitch"
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
const saveFunc = () => {
}

</script>
<style lang="less">
@import "@/assets/css/signInPermissionSettingCss";
</style>
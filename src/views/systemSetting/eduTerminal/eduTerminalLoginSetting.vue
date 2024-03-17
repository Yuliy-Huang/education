<template>
  <div class="edu-terminal">
    <div class="first-row">
      <el-input
          v-model="account"
          placeholder="账号：字母+数字"
      />
    </div>
    <div class="second-row">
      <el-input
          v-model="password"
          type="password"
          placeholder="密码：字母+数字"
          show-password
      />
    </div>
    <div class="last-row">
      <el-button plain @click="saveFunc">确 定 保 存</el-button>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const account = ref('')
const password = ref('')

const saveFunc = () => {

}

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/eduTerminalLoginSettingCss";
</style>
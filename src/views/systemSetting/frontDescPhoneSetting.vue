<template>
  <div class="front-desc">
    <div class="front-setting">
      <el-form :model="form" label-width="auto" style="max-width: 600px" class="phone-form">
        <el-form-item label="前台电话1">
          <el-input v-model="form.phone1" />
        </el-form-item>
        <el-form-item label="前台电话2">
          <el-input v-model="form.phone2" />
        </el-form-item>
        <el-form-item class="button-div">
          <el-button plain @click="saveFunc">确 定 保 存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import {reactive} from "vue";

const form = reactive({
  phone1: '',
  phone2: '',
})

const saveFunc = () => {
}

</script>
<style lang="less">
@import "@/assets/css/frontDescPhoneSettingCss";
</style>
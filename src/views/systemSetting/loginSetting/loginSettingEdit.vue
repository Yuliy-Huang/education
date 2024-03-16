<template>
  <div class="login-setting-edit">
    <div class="title-row">
      编辑
    </div>
    <div class="form-div">
      <el-form :model="form" label-width="auto" style="max-width: 600px" class="setting-form">
        <el-form-item label="员 工 姓 名" class="div-required">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="校 区 职 位" class="div-required">
          <el-input v-model="form.position" />
        </el-form-item>
        <el-form-item label="登 陆 电 话" class="div-required">
          <el-input v-model="form.phone" />
        </el-form-item>
        <el-form-item label="输 入 密 码" class="div-required">
          <el-input v-model="form.password" placeholder="六位数密码" />
        </el-form-item>
        <el-form-item label="确 认 密 码" class="div-required">
          <el-input v-model="form.password_confirm" placeholder="六位数密码" />
        </el-form-item>
        <el-form-item class="button-item">
          <el-button plain @click="saveFunc">确 定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import {defineEmits, reactive} from "vue";

const emit = defineEmits(['updateEdit']);

const saveFunc = () => {
  emit('updateEdit');
}

const form = reactive({
  name: '',
  position: '',
  phone: '',
  password: '',
  password_confirm: '',
})

</script>
<style lang="less">
@import "@/assets/css/loginSettingEditCss";
</style>
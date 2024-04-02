<template>
  <div class="login-page">
    <registerCampus v-if="registerCampusShow" />
    <registerAccount v-else-if="registerAccountShow" />
    <loginAccount v-else-if="loginShow" />
    <forgetPasswd v-else-if="forgetShow" />
    <changePasswd v-else-if="changeShow" />
    <div class="login-form" v-else>
      <div class="login-jump">
        <el-button
          type="primary"
          :loading="loading"
          class="login-btn"
          @click="doLogin"
        >
          用户登录
        </el-button>
      </div>
      <div class="register-jump">
        <span @click="doRegister">用户注册</span>
      </div>
      <div class="passwd-jump">
        <div @click="doForgetPasswd">忘记密码</div>
        <div @click="doChangePasswd">更改密码</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import registerCampus from './registerCampus.vue';
import registerAccount from './registerAccount.vue';
import loginAccount from './loginAccount.vue';
import forgetPasswd from './forgetPasswd.vue';
import changePasswd from './changePasswd.vue';

const loginShow = ref(false);
const doLogin = () => {
  loginShow.value = true;
};

const registerCampusShow = ref(false);
const doRegister = () => {
  registerCampusShow.value = true;
};
const registerAccountShow = ref(false);

const forgetShow = ref(false);
const doForgetPasswd = () => {
  forgetShow.value = true;
};
const changeShow = ref(false);
const doChangePasswd = () => {
  changeShow.value = true;
};
</script>
<style scoped lang="less">
@import '@/assets/css/login/indexPageCss.less';
</style>

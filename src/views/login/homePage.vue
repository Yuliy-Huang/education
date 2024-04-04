<template>
  <div class="login-page">
    <registerAccount
      v-if="registerAccountShow"
      @changeCampusShow="changeCampusShow"
      @changeRegisterAccountShow="changeRegisterAccountShow"
    />
    <registerCampus
      v-else-if="registerCampusShow"
      @changeCampusShow="changeCampusShow"
      @changeRegisterAccountShow="changeRegisterAccountShow"
    />
    <loginAccount
      v-else-if="loginShow"
      @changeCampusShow="changeCampusShow"
      @changeLoginShow="changeLoginShow"
      @changeCampusSelectShow="changeCampusSelectShow"
    />
    <selectCampus
      v-else-if="loginCampusShow"
      @changeLoginShow="changeLoginShow"
      @changeCampusSelectShow="changeCampusSelectShow"
    />
    <forgetPasswd v-else-if="forgetShow" />
    <changePasswd v-else-if="changeShow" />
    <div class="login-form" v-else>
      <div class="login-jump">
        <el-button
          type="primary"
          :loading="loading"
          class="login-btn"
          @click="changeLoginShow(true)"
        >
          用户登录
        </el-button>
      </div>
      <div class="register-jump" @click="changeRegisterAccountShow(true)">
        <span>用户注册</span>
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
import selectCampus from './selectCampus.vue';
import forgetPasswd from './forgetPasswd.vue';
import changePasswd from './changePasswd.vue';

// const homeShow = ref(true);
// const changeHomeShow = v => {
//   homeShow.value = v;
// };

const loginShow = ref(false);
const changeLoginShow = v => {
  loginShow.value = v;
};

const registerCampusShow = ref(false);
const changeCampusShow = v => {
  registerCampusShow.value = v;
};

const registerAccountShow = ref(false);

const changeRegisterAccountShow = v => {
  registerAccountShow.value = v;
};

const forgetShow = ref(false);
const doForgetPasswd = () => {
  forgetShow.value = true;
};
const changeShow = ref(false);
const doChangePasswd = () => {
  changeShow.value = true;
};

const loginCampusShow = ref(false);
const changeCampusSelectShow = v => {
  loginCampusShow.value = v;
};
</script>
<style scoped lang="less">
@import '@/assets/css/login/indexPageCss.less';
</style>

<template>
  <div class="login-account-form">
    <div class="campus-form">
      <div class="account-info">
        <div>用 户 登 录</div>
        <div class="account-div">
          <el-input v-model="account" placeholder="账号：" />
        </div>
        <div class="account-div">
          <el-input
            v-model="password"
            placeholder="密码："
            type="password"
            show-password
          />
        </div>
        <div class="button-div">
          <el-button @click="doLogin" :loading="loading">确定</el-button>
          <el-button @click="back2Home">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { loginApi } from '@/service/loginPage';

export default {
  props: {},
  setup(props, context) {
    const back2Home = () => {
      context.emit('changeLoginShow', false);
    };
    const account = ref('');
    const password = ref('');
    const loading = ref(false);
    const doLogin = () => {
      loading.value = true;
      if (!account.value) {
        loading.value = false;
        ElMessage.error('账号不能为空！');
        return false;
      }
      if (!password.value) {
        loading.value = false;
        ElMessage.error('密码不能为空！');
        return false;
      }
      loginApi({
        username: account.value,
        password: password.value,
      })
        .then(res => {
          if (res.code === 200) {
            ElMessage.success(res.msg);
            localStorage.setItem('token', res.token);
            context.emit('changeLoginShow', false);
            context.emit('changeCampusSelectShow', true);
          } else {
            ElMessage.error(res.msg);
          }
        })
        .finally(() => {
          loading.value = false;
        });
    };

    return {
      props,
      back2Home,
      doLogin,
      account,
      password,
      loading,
    };
  },
};
</script>
<style scoped lang="less">
@import '@/assets/css/login/loginAccountCss.less';
</style>

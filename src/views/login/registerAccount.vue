<template>
  <div class="register-account-form">
    <div class="register-account-info">
      <div class="register-account-div">
        <div>校 区 注 册</div>
        <el-input
          class="top-div"
          placeholder="账户输入："
          v-model="form.username"
        ></el-input>
        <el-input
          class="top-div"
          placeholder="输入密码："
          type="password"
          show-password
          v-model="form.password"
        ></el-input>
        <el-input
          class="top-div"
          placeholder="确认密码："
          type="password"
          show-password
          v-model="form.confirm_password"
        ></el-input>
        <el-input
          class="top-div"
          placeholder="手机号码："
          v-model="form.phonenumber"
        ></el-input>
        <el-input
          class="top-div"
          placeholder="短信验证："
          v-model="form.code"
        ></el-input>
      </div>
    </div>
    <div class="register-account-button">
      <el-button @click="doRegister" :loading="loading">确定</el-button>
      <el-button @click="back2Home">取消</el-button>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { registerApi, loginApi } from '@/service/loginPage.js';
export default {
  props: {},
  setup(props, context) {
    const form = reactive({
      username: '',
      password: '',
      confirm_password: '',
      phonenumber: '',
      code: '',
    });
    const loading = ref(false);
    const doRegister = () => {
      if (!form.username || !form.password || !form.phonenumber || !form.code) {
        ElMessage.error('信息不完整！');
        return false;
      }
      if (form.password !== form.confirm_password) {
        ElMessage.error('两次密码不一致！');
        return false;
      }
      // context.emit('changeRegisterAccountShow', false);
      // context.emit('changeCampusShow', true);
      loading.value = true;
      registerApi({
        ...form,
      })
        .then(res => {
          if (res.code === 200) {
            ElMessage.success(res.msg);
            doLogin();
          } else {
            ElMessage.error(res.msg);
          }
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const doLogin = () => {
      loginApi({
        username: form.username,
        password: form.password,
      }).then(res => {
        if (res.code === 200) {
          localStorage.setItem('token', res.token);
          context.emit('changeRegisterAccountShow', false);
          context.emit('changeCampusShow', true);
        } else {
          ElMessage.error(res.msg);
        }
      });
    };

    const back2Home = () => {
      context.emit('changeRegisterAccountShow', false);
    };
    return {
      props,
      back2Home,
      doRegister,
      form,
      loading,
    };
  },
};
</script>
<style lang="less">
@import '@/assets/css/login/registerAccountCss.less';
</style>

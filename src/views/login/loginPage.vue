<template>
  <div class="login-page">
    <div class="logo_icon">
      <img src=""
           style="width: 100%; height: 100%;"
           alt="">
    </div>
    <div class="login_area">
      <img src=""
           alt=""
           style="width: 110px; height: 35px; margin-top: 120px;">
      <div class="login_form">
        <div class="form_wrapper">
          <div class="login_text">Account</div>
          <el-tooltip
              class="box-item"
              effect="light"
              content="Use your email as account to login"
              placement="top"
          >
            <el-input type="text"
                      placeholder="Enter account"
                      class="login_input"
                      v-model="account">
            </el-input>
          </el-tooltip>


          <div class="login_text">Password</div>
          <el-input placeholder="Enter password"
                    v-model="password"
                    class="login_input"
                    @keyup.enter="doLogin"
                    show-password></el-input>
          <div class="login_btn_wrapper">
            <el-button type="primary"
                       :loading="loading"
                       class="login_btn"
                       style="width: 350px;"
                       @click="doLogin">Login
            </el-button>
          </div>
          <div class="sign_up">
            <span @click="doRegister" style="cursor: pointer;">Sign up</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue'
import {ElMessage} from 'element-plus'
import {useRouter} from 'vue-router'
// import {loginApi} from "@/service/login";
// import sha256 from 'crypto-js/sha256'

const router = useRouter()

const account = ref('')
const password = ref('')

const loading = ref(false)
const doLogin = () => {
  loading.value = true
  if (!account.value) {
    loading.value = false
    ElMessage.error('Account can not be empty.')
    return false
  }
  if (!password.value) {
    loading.value = false
    ElMessage.error('Password can not be empty.')
    return false
  }
  router.push('/home')
  loading.value = false
  // loginApi({
  //   "email": account.value,
  //   "password": password.value
  // }).then((res) => {
  //   if (res.errCode === 0) {
  //     ElMessage.success(res.msg)
  //     sessionStorage.setItem('username', res.data.userName)
  //     sessionStorage.setItem('account', account.value)
  //     sessionStorage.setItem('accessToken', res.data.access_token)
  //     sessionStorage.setItem('isAdmin', res.data.isAdmin)
  //     sessionStorage.setItem('userIcon', res.data.userIcon)
  //     router.push('/home')
  //   } else {
  //     ElMessage.error(res.msg)
  //   }
  // }).finally(() => {
  //   loading.value = false
  // })
}

const doRegister = () => {
  router.push('/sign-up')
}

</script>

<style scoped lang="less">
@import "../../assets/css/loginPage.less";
</style>
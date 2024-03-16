<template>
  <div class="payment">
    <div class="payment1">
      <div class="payment-div">
        <div class="payment-title">微信收款</div>
        <div class="payment-img">
          <img alt="" src="@/assets/img/qr/qr111.jpg" style="height: 120px; width: 120px;"/>
        </div>
        <el-button plain @click="changeQR1">更换二维码</el-button>
      </div>
    </div>
    <div class="payment2">
      <div class="payment-div">
        <div class="payment-title">支付宝收款</div>
        <div class="payment-img">
          <img alt="" src="@/assets/img/qr/qr111.jpg" style="height: 120px; width: 120px;"/>
        </div>
        <el-button plain @click="changeQR2">更换二维码</el-button>
      </div>
    </div>
  </div>
</template>
<script setup>

const changeQR1 = () => {

}
const changeQR2 = () => {

}

</script>
<style lang="less">
@import "@/assets/css/studentPaymentSettingCss";
</style>
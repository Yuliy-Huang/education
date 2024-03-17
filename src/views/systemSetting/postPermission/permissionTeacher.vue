<template>
  <div class="permission-setting">
    <div class="person-setting-div">
      <div class="text-check">
        <div class="text-left">岗位人员登陆设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key1"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">岗位人员权限设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key2"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">教务端登录设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key3"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">填写所有专业&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key4"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">提前续费通知设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key1"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">前台电话添加设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key2"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">上课签到权限设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key3"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">学员缴费收款设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key4"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">提前上课通知设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key1"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">妆业考级等级输入&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key2"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">家长端APP购物设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key3"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">桌面系统背景设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key4"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">使用说明视频讲解&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key1"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">校区所有数据导出&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key2"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">视频会议直播设置&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key3"></el-checkbox>
        </div>
      </div>
      <div class="text-check">
        <div class="text-left">各年份数据查看&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key4"></el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'

const form = ref({
  key1: '',
  key2: '',
  key3: '',
  key4: '',
})

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/permissionSystemCss";
</style>

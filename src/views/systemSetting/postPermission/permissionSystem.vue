<template>
  <div class="permission-setting">
    <div class="person-setting-div">
      <div class="text-check" v-for="(item, index) in blockList" :key="index">
        <div class="text-left">{{ item }}&nbsp;</div>
        <div class="check-right">
          <el-checkbox v-model="form.key1"></el-checkbox>
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

const blockList = ref([
  '岗位人员登陆设置',
  '岗位人员权限设置',
  '教务端登录设置',
  '填写所有专业',
  '提前续费通知设置',
  '前台电话添加设置',
  '上课签到权限设置',
  '学员缴费收款设置',
  '提前上课通知设置',
  '专业考级等输入',
  '家长端APP购物设置',
  '桌面系统背景设置',
  '使用说明视频讲解',
  '校区所有数据导出',
  '视频会议直播设置',
  '各年份数据查看'
])

</script>
<style lang="less">
@import "@/assets/css/systemSetting/permissionSystemCss";
</style>

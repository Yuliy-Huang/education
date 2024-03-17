<template>
  <div class="permission-setting">
    <div class="left-module-div">
      <template v-for="(item, index) in moduleList" :key="index">
        <div :class="item ? 'module-click': 'module'">
          {{ item }}
        </div>
      </template>
    </div>
    <div class="right-setting-div">
      <div class="text-check">教师档案存档&nbsp;<el-checkbox v-model="form.key1"></el-checkbox></div>
      <div class="text-check">教师档案修改&nbsp;<el-checkbox v-model="form.key2"></el-checkbox></div>
      <div class="text-check">教师档案查看&nbsp;<el-checkbox v-model="form.key3"></el-checkbox></div>
      <div class="text-check">教师离职办理&nbsp;<el-checkbox v-model="form.key4"></el-checkbox></div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'

const moduleList = ref([
  '系统设置', '教务员工', '代课老师',
  '校区学院', '查询管理', '管理存档',
  '日常归档', '明细查看', '商品查看',
  '财务统计', '上班打卡', '校区结账'
])
const form = ref({
  key1: '',
  key2: '',
  key3: '',
  key4: '',
})

</script>
<style lang="less">
@import "@/assets/css/systemSetting/permissionSettingPersonCss";
</style>

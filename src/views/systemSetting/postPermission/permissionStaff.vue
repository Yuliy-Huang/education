<template>
  <div class="staff-setting">
    <div class="person-setting-div">
      <div class="text-check" v-for="(item, index) in blockList" :key="index">
        <div class="text-left">{{item}}&nbsp;</div>
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
    '教务档案存档',
    '教务档案查看',
    '教务档案修改',
    '教务离职办理'
])

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/permissionStaffCss";
</style>

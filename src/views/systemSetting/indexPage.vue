<template>
  <div class="system-setting">
    <sliderComponent
        :title-list="titleList"
        :active-tag="activeTag"
        :show-edit="showEdit"
        @updateShowEdit="updateShowEdit"
        @changeActiveTag="changeActiveTag"
    />
    <div class="system-setting-side">
      <div class="top-button" @click="close2NotDim">
        <el-icon>
          <Close/>
        </el-icon>
      </div>
      <div class="top-button-1" @click="back2LastDiv" >
        <el-icon>
          <Back/>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, inject} from 'vue';
import sliderComponent from '@/components/sliderComponent.vue'
import {Back, Close} from "@element-plus/icons-vue";

const titleList = ref([
  '岗位人员登录设置',
  '岗位人员权限设置',
  '教务端登录设置',
  '填写所有专业名称',
  '提前续费通知设置',
  '前台电话添加设置',
  '上课签到权限设置',
  '学员缴费收款设置',
  '提前上课通知设置',
  '专业考级等级输入',
  '家长端APP购物设置',
  '桌面系统背景设置',
  '使用说明视频讲解',
  '校区所有数据导出',
  '其他校区切换选择',
  '各年份数据查看',
  '视频会议直播设置',
])
const activeTag = ref(null)
const showEdit = ref(false)

const updateShowEdit = () => {
  showEdit.value = !showEdit.value
}

const globalVars = inject('globalVars')

const changeActiveTag = (v) => {
  showEdit.value = activeTag.value === v ? showEdit.value : false
  switch (v) {
    case '岗位人员权限设置':
      globalVars.isDim = globalVars.showSub === '0' ? '0' : '1'
      break
    default:
      globalVars.isDim = '1'
  }
  activeTag.value = v
}

const close2NotDim = () => {
  activeTag.value = null
  globalVars.isDim = '0'
}

const back2LastDiv = () => {
  showEdit.value = false
}

</script>
<style lang="less">
@import "@/assets/css/systemSettingCss";
</style>

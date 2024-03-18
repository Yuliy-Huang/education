<template>
  <div class="system-setting">
    <sliderComponent
        :active-tag="activeTag"
        :show-edit="showEdit"
        :title-list="titleList"
        @changeActiveTag="changeActiveTag"
    >
      <keep-alive :exclude="['loginSetting', 'loginSettingEdit', 'permissionSettingIndex']"
                  :class="showInsideSlider ? 'setting-content-show-slider' : 'setting-content'"
                  v-if="activeTag !== null">
        <component :is="loginSetting" :key="activeTag" @updateEdit="updateShowEdit"
                   v-if="activeTag === '岗位人员登录设置' && !showEdit"/>
        <component :is="loginSettingEdit" :key="activeTag + ':' + showEdit.toString()" @updateEdit="updateShowEdit"
                   v-else-if="activeTag === '岗位人员登录设置' && showEdit"/>
        <component :is="currentCom" :key="activeTag + ':' + showEdit.toString()" v-else/>
      </keep-alive>
    </sliderComponent>

    <div class="system-setting-side">
      <div class="top-button" @click="close2NotDim">
        <el-icon>
          <Close/>
        </el-icon>
      </div>
      <div class="top-button-1" @click="back2LastDiv">
        <el-icon>
          <Back/>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, inject, markRaw} from 'vue';
import sliderComponent from '@/components/sliderComponent.vue'
import {Back, Close} from "@element-plus/icons-vue";
import loginSetting from '@/views/systemSetting/loginSetting/loginSetting.vue'
import loginSettingEdit from '@/views/systemSetting/loginSetting/loginSettingEdit.vue'
import permissionSettingIndex from '@/views/systemSetting/postPermission/permissionSettingIndex.vue'
import eduTerminalLoginSetting from '@/views/systemSetting/eduTerminal/eduTerminalLoginSetting.vue'
import allMajorNames from '@/views/systemSetting/allMajorNames.vue'
import renewalNotificationSetting from '@/views/systemSetting/renewalNotificationSetting.vue'
import frontDescPhoneSetting from '@/views/systemSetting/frontDescPhoneSetting.vue'
import signInPermissionSetting from '@/views/systemSetting/signInPermissionSetting.vue'
import studentPaymentSetting from '@/views/systemSetting/studentPaymentSetting.vue'
import advanceClassNotificationSetting from '@/views/systemSetting/advanceClassNotificationSetting.vue'
import professionalGradeSetting from '@/views/systemSetting/professionalGradeSetting.vue'
import parentAppShoppingSetting from '@/views/systemSetting/parentAppShoppingSetting.vue'
import desktopBackgroundSetting from '@/views/systemSetting/desktopBackgroundSetting.vue'
import instructionVideoExplanation from '@/views/systemSetting/instructionVideoExplanation.vue'
import campusDataExport from '@/views/systemSetting/campusDataExport.vue'
import viewDataByYear from '@/views/systemSetting/viewDataByYear.vue'
import liveVideoSetting from '@/views/systemSetting/liveVideoSetting.vue'

const activeTag = ref(null)
const showEdit = ref(false)

const updateShowEdit = () => {
  showEdit.value = !showEdit.value
}

const showInsideSlider = ref(false)
const globalVars = inject('globalVars')
const currentCom = ref(null)
const changeActiveTag = (v) => {
  showEdit.value = activeTag.value === v ? showEdit.value : false
  globalVars.showSub = v === activeTag.value ? globalVars.showSub : '0'
  if (v === '岗位人员权限设置') {
    globalVars.isDim = globalVars.showSub === '0' ? '0' : '1'
    showInsideSlider.value = true
  } else {
    globalVars.isDim = '1'
    showInsideSlider.value = false
  }

  if (v !== '岗位人员登录设置') {
    for (let i = 0; i < titleList.value.length; i++) {
      if (titleList.value[i].name === v) {
        currentCom.value = titleList.value[i].comName
        break
      }
    }
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

const titleList = ref([
  {name: '岗位人员登录设置', comName: null},
  {name: '岗位人员权限设置', comName: markRaw(permissionSettingIndex)},
  {name: '教务端登录设置', comName: markRaw(eduTerminalLoginSetting)},
  {name: '填写所有专业名称', comName: markRaw(allMajorNames)},
  {name: '提前续费通知设置', comName: markRaw(renewalNotificationSetting)},
  {name: '前台电话添加设置', comName: markRaw(frontDescPhoneSetting)},
  {name: '上课签到权限设置', comName: markRaw(signInPermissionSetting)},
  {name: '学员缴费收款设置', comName: markRaw(studentPaymentSetting)},
  {name: '提前上课通知设置', comName: markRaw(advanceClassNotificationSetting)},
  {name: '专业考级等级输入', comName: markRaw(professionalGradeSetting)},
  {name: '家长端APP购物设置', comName: markRaw(parentAppShoppingSetting)},
  {name: '桌面系统背景设置', comName: markRaw(desktopBackgroundSetting)},
  {name: '使用说明视频讲解', comName: markRaw(instructionVideoExplanation)},
  {name: '校区所有数据导出', comName: markRaw(campusDataExport)},
  // {name: '其他校区切换选择', comName: markRaw(otherCampusSwitching)},
  {name: '视频会议直播设置', comName: markRaw(liveVideoSetting)},
  {name: '各年份数据查看', comName: markRaw(viewDataByYear)},
])


</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/indexCss";
</style>

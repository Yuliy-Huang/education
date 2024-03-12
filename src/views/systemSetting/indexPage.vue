<template>
  <div class="system-setting-page">
    <div class="setting-head">
      <div class="arrow-left-div">
        <span class="inner-img-div" @click="reduceShowTag">
          <img :src="require(`@/assets/img/arrowLeft.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>
      <template v-for="(item, index) in showTags" :key="index">
        <div :class="activeTag === item ? 'title-div-active' : 'title-div'">
          <span class="inner-div" @click="changeActiveTag(item)">{{ item }}</span>
        </div>
      </template>
      <template v-if="showTags.length < 4">
        <div :class="activeTag === item ? 'title-div-active' : 'title-div'" v-for="(item, index) in (4-showTags.length)"
             :key="index">
          <span class="inner-div"></span>
        </div>
      </template>
      <div class="arrow-right-div">
        <span class="inner-img-div" @click="addShowTag">
          <img :src="require(`@/assets/img/arrowRight.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>
    </div>
    <div class="setting-content" v-if="activeTag !== null">
      <loginSetting v-if="activeTag === '岗位人员登录设置'" />
      <permissionSetting v-if="activeTag === '岗位人员权限设置'" />
      <eduTeminalLoginSetting v-if="activeTag === '教务端登录设置'" />
      <allMajorNames v-if="activeTag === '填写所有专业名称'" />
      <renewalNotificationSetting v-if="activeTag === '提前续费通知设置'" />
      <frontDescPhoneSetting v-if="activeTag === '前台电话添加设置'" />
      <signInPermissionSetting v-if="activeTag === '上课签到权限设置'" />
      <studentPaymentSetting v-if="activeTag === '学员缴费收款设置'" />
      <advanceClassNotificationSetting v-if="activeTag === '提前上课通知设置'" />
      <professinalGradeSetting v-if="activeTag === '专业考级等级输入'" />
      <parentAppShoppingSetting v-if="activeTag === '家长端APP购物设置'" />
      <desktopBackgroundSetting v-if="activeTag === '桌面系统背景设置'" />
      <instructionVideoExplanation v-if="activeTag === '使用说明视频讲解'" />
      <campusDataExport v-if="activeTag === '校区所有数据导出'" />
      <otherCampusSwitching v-if="activeTag === '其他校区切换选择'" />
      <viewDataByYear v-if="activeTag === '各年份数据查看'" />
      <liveVideoSetting v-if="activeTag === '视频会议直播设置'" />
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
import loginSetting from '@/views/systemSetting/loginSetting.vue'
import permissionSetting from '@/views/systemSetting/permissionSetting.vue'
import eduTeminalLoginSetting from '@/views/systemSetting/eduTeminalLoginSetting.vue'
import allMajorNames from '@/views/systemSetting/allMajorNames.vue'
import renewalNotificationSetting from '@/views/systemSetting/renewalNotificationSetting.vue'
import frontDescPhoneSetting from '@/views/systemSetting/frontDescPhoneSetting.vue'
import signInPermissionSetting from '@/views/systemSetting/signInPermissionSetting.vue'
import studentPaymentSetting from '@/views/systemSetting/studentPaymentSetting.vue'
import advanceClassNotificationSetting from '@/views/systemSetting/advanceClassNotificationSetting.vue'
import professinalGradeSetting from '@/views/systemSetting/professinalGradeSetting.vue'
import parentAppShoppingSetting from '@/views/systemSetting/parentAppShoppingSetting.vue'
import desktopBackgroundSetting from '@/views/systemSetting/desktopBackgroundSetting.vue'
import instructionVideoExplanation from '@/views/systemSetting/instructionVideoExplanation.vue'
import campusDataExport from '@/views/systemSetting/campusDataExport.vue'
import otherCampusSwitching from '@/views/systemSetting/otherCampusSwitching.vue'
import viewDataByYear from '@/views/systemSetting/viewDataByYear.vue'
import liveVideoSetting from '@/views/systemSetting/liveVideoSetting.vue'

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
const showNum = ref(0)
const showTags = ref([])

onMounted(() => {
  showTags.value = titleList.value.slice(showNum.value, showNum.value + 4)
})
watch(showNum, () => {
  showTags.value = showNum.value + 4 <= titleList.value.length ? titleList.value.slice(showNum.value, showNum.value + 4) : titleList.value.slice(showNum.value, titleList.value.length)
})

const addShowTag = () => {
  showNum.value = showNum.value + 4 <= titleList.value.length ? showNum.value + 4 : Math.floor((titleList.value.length - 1) / 4) * 4
}

const reduceShowTag = () => {
  showNum.value = showNum.value - 4 >= 0 ? showNum.value - 4 : 0
}

const changeActiveTag = (v) => {
  activeTag.value = v
  console.log('activeTag : ', activeTag.value)
}

</script>
<style lang="less">
@import "@/assets/css/systemSettingCss";
</style>

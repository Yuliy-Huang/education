<template>
  <div class="slider-inside-div">
    <div class="slide-inside-head">
      <div class="arrow-left">
        <span class="inside-img-div" @click="reduceShowTag">
          <img :src="require(`@/assets/img/arrowLeft.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>
      <template v-for="(item, index) in showTags" :key="index">
        <div :class="activeTag === item ? 'inside-title-div-active' : 'inside-title-div'">
          <span class="inside-div" @click="changeTag(item)">{{ item }}</span>
        </div>
      </template>
      <template v-if="showTags.length < 4">
        <div :class="activeTag === item ? 'inside-title-div-active' : 'inside-title-div'"
             v-for="(item, index) in (4-showTags.length)"
             :key="index">
          <span class="inside-div"></span>
        </div>
      </template>
      <div class="arrow-right">
        <span class="inside-img-div" @click="addShowTag">
          <img :src="require(`@/assets/img/arrowRight.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>
    </div>
    <div class="setting-inside-content" v-if="activeTag !== null">
      <loginSetting v-if="activeTag === '岗位人员登录设置' && !showEdit" @updateShowEdit="updateEdit"/>
      <loginSettingEdit v-if="activeTag === '岗位人员登录设置' && showEdit" @updateShowEdit="updateEdit"/>
      <permissionSetting v-if="activeTag === '岗位人员权限设置'"/>
      <eduTeminalLoginSetting v-if="activeTag === '教务端登录设置'"/>
      <allMajorNames v-if="activeTag === '填写所有专业名称'"/>
      <renewalNotificationSetting v-if="activeTag === '提前续费通知设置'"/>
      <frontDescPhoneSetting v-if="activeTag === '前台电话添加设置'"/>
      <signInPermissionSetting v-if="activeTag === '上课签到权限设置'"/>
      <studentPaymentSetting v-if="activeTag === '学员缴费收款设置'"/>
      <advanceClassNotificationSetting v-if="activeTag === '提前上课通知设置'"/>
      <professinalGradeSetting v-if="activeTag === '专业考级等级输入'"/>
      <parentAppShoppingSetting v-if="activeTag === '家长端APP购物设置'"/>
      <desktopBackgroundSetting v-if="activeTag === '桌面系统背景设置'"/>
      <instructionVideoExplanation v-if="activeTag === '使用说明视频讲解'"/>
      <campusDataExport v-if="activeTag === '校区所有数据导出'"/>
      <otherCampusSwitching v-if="activeTag === '其他校区切换选择'"/>
      <viewDataByYear v-if="activeTag === '各年份数据查看'"/>
      <liveVideoSetting v-if="activeTag === '视频会议直播设置'"/>
    </div>
  </div>
</template>
<script setup>
import {defineEmits, defineProps, onMounted, ref, toRefs, watch} from "vue";
import loginSetting from '@/views/systemSetting/loginSetting/loginSetting.vue'
import loginSettingEdit from '@/views/systemSetting/loginSetting/loginSettingEdit.vue'
import permissionSetting from '@/views/systemSetting/postPermission/permissionSetting.vue'
import eduTeminalLoginSetting from '@/views/systemSetting/eduTerminal/eduTeminalLoginSetting.vue'
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

const props = defineProps({
  showNum: {
    type: Number,
    default: 0
  },
  titleList: {
    type: Array,
    default: () => {}
  },
  activeTag: {
    type: String,
    default: null
  },
  showEdit: {
    type: Boolean,
    default: false
  }
})
const {showNum, titleList} = toRefs(props)
const addShowTag = () => {
  showNum.value = showNum.value + 4 <= titleList.value.length ? showNum.value + 4 : Math.floor((titleList.value.length - 1) / 4) * 4
}

const reduceShowTag = () => {
  showNum.value = showNum.value - 4 >= 0 ? showNum.value - 4 : 0
}

const emit = defineEmits(['updateShowEdit', 'changeActiveTag']);
const updateEdit = () => {
  emit('updateShowEdit');
}
const changeTag = (v) => {
  emit('changeActiveTag', v);
}
const showTags = ref([])
onMounted(() => {
  showTags.value = titleList.value.slice(showNum.value, showNum.value + 4)
})
watch(showNum, () => {
  showTags.value = showNum.value + 4 <= titleList.value.length ? titleList.value.slice(showNum.value, showNum.value + 4) : titleList.value.slice(showNum.value, titleList.value.length)
})


</script>
<style lang="less">
@import "@/assets/css/sliderInsideComponentCss";
</style>
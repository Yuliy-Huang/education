<template>
  <div class="slider-div">
    <div class="setting-head">
      <div class="arrow-left-div">
        <span class="inner-img-div" @click="reduceShowTag">
          <img :src="require(`@/assets/img/arrowLeft.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>
      <template v-for="(item, index) in showTags" :key="index">
        <div :class="activeTag === item ? 'title-div-active' : 'title-div'" @click="changeTag(item)">
          <span class="inner-div">{{ item }}</span>
        </div>
      </template>
      <template v-if="showTags.length < 4">
        <div :class="activeTag === item ? 'title-div-active' : 'title-div'"
             v-for="(item, index) in (4-showTags.length)"
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
    <keep-alive :exclude="['loginSetting', 'loginSettingEdit', 'permissionSettingIndex']"
                :class="showInsideSlider ? 'setting-content-show-slider' : 'setting-content'"
                v-if="activeTag !== null">
      <component :is="loginSetting" :key="activeTag" @updateEdit="updateEdit" v-if="activeTag === '岗位人员登录设置' && !showEdit"/>
      <component :is="loginSettingEdit" :key="activeTag + ':' + showEdit.toString()" @updateEdit="updateEdit" v-else-if="activeTag === '岗位人员登录设置' && showEdit"/>
      <component :is="currentCom" :key="activeTag + ':' + showEdit.toString()" v-else/>
    </keep-alive>
  </div>
</template>
<script setup>
import {defineEmits, defineProps, inject, markRaw, onMounted, ref, toRefs, watch} from "vue";
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
// import otherCampusSwitching from '@/views/systemSetting/otherCampusSwitching.vue'
import viewDataByYear from '@/views/systemSetting/viewDataByYear.vue'
import liveVideoSetting from '@/views/systemSetting/liveVideoSetting.vue'

const props = defineProps({
  activeTag: {
    type: String,
    default: null
  },
  showEdit: {
    type: Boolean,
    default: false
  }
})
const {activeTag, showEdit} = toRefs(props)

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

const showIndex = ref(0)
const showTags = ref([])
const currentCom = ref(null)
const addShowTag = () => {
  showIndex.value = showIndex.value + 4 < titleList.value.length ? showIndex.value + 4 : Math.floor((titleList.value.length - 1) / 4) * 4
}

const reduceShowTag = () => {
  showIndex.value = showIndex.value - 4 >= 0 ? showIndex.value - 4 : 0
}

onMounted(() => {
  showTags.value = titleList.value.slice(showIndex.value, showIndex.value + 4).map(item => {
    return item.name
  })
})
watch(showIndex, () => {
  showTags.value = showIndex.value + 4 < titleList.value.length ? titleList.value.slice(showIndex.value, showIndex.value + 4).map(item => {
    return item.name
  }) : titleList.value.slice(showIndex.value, titleList.value.length).map(item => {
    return item.name
  })
})

const emit = defineEmits(['updateShowEdit', 'changeActiveTag']);
const updateEdit = () => {
  emit('updateShowEdit');

}
const showInsideSlider = ref(false)
const globalVars = inject('globalVars')

const changeTag = (v) => {
  globalVars.showSub = v === activeTag.value ? globalVars.showSub : '0'
  if (v !== '岗位人员登录设置') {
    for (let i = 0; i < titleList.value.length; i++) {
      if (titleList.value[i].name === v) {
        currentCom.value = titleList.value[i].comName
        break
      }
    }
  }

  switch (v) {
    case '岗位人员权限设置':
      showInsideSlider.value = true
      break
    default:
      showInsideSlider.value = false
  }
  emit('changeActiveTag', v);
}


</script>
<style lang="less">
@import "@/assets/css/systemSetting/sliderComponentCss";
</style>
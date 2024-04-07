<template>
  <div class="system-setting">
    <sliderComponent
      :active-tag="activeTag"
      :show-edit="showEdit"
      :title-list="titleList"
      @changeActiveTag="changeActiveTag"
    >
      <keep-alive
        :exclude="[
          'loginSetting',
          'loginSettingEdit',
          'permissionSettingIndex',
        ]"
        :class="
          showInsideSlider ? 'setting-content-show-slider' : 'setting-content'
        "
        v-if="activeTag !== null"
      >
        <component
          :is="loginSetting"
          :key="`${activeTag}:${showEdit.toString()}`"
          @updateEdit="updateShowEdit"
          v-if="activeTag === '岗位人员登录设置' && !showEdit"
        />
        <component
          :is="loginSettingEdit"
          @updateEdit="updateShowEdit"
          v-else-if="activeTag === '岗位人员登录设置' && showEdit"
        />
        <component
          :is="currentCom"
          :key="`${activeTag}:${showEdit.toString()}`"
          v-else
        />
      </keep-alive>
    </sliderComponent>

    <pageSideComponent
      @close2NotDim="close2NotDim"
      @back2LastDiv="back2LastDiv"
    />
  </div>
</template>

<script setup>
import { ref, inject, markRaw, defineAsyncComponent } from 'vue';
import pageSideComponent from '@/components/pageSideComponent.vue';
import sliderComponent from '@/components/sliderComponent.vue';
import loginSetting from '@/views/systemSetting/loginSetting/loginSetting.vue';

const loginSettingEdit = defineAsyncComponent(() =>
  import('@/views/systemSetting/loginSetting/loginSettingEdit.vue')
);
const permissionSettingIndex = defineAsyncComponent(() =>
  import('@/views/systemSetting/postPermission/permissionSettingIndex.vue')
);
const eduTerminalLoginSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/eduTerminal/eduTerminalLoginSetting.vue')
);
const allMajorNames = defineAsyncComponent(() =>
  import('@/views/systemSetting/allMajorNames.vue')
);
const renewalNotificationSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/renewalNotificationSetting.vue')
);
const frontDescPhoneSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/frontDescPhoneSetting.vue')
);
const signInPermissionSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/signInPermissionSetting.vue')
);
const studentPaymentSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/studentPaymentSetting.vue')
);
const advanceClassNotificationSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/advanceClassNotificationSetting.vue')
);
const professionalGradeSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/professionalGradeSetting.vue')
);
const parentAppShoppingSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/parentAppShoppingSetting.vue')
);
const desktopBackgroundSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/desktopBackgroundSetting.vue')
);
const instructionVideoExplanation = defineAsyncComponent(() =>
  import('@/views/systemSetting/instructionVideoExplanation.vue')
);
const campusDataExport = defineAsyncComponent(() =>
  import('@/views/systemSetting/campusDataExport.vue')
);
const viewDataByYear = defineAsyncComponent(() =>
  import('@/views/systemSetting/viewDataByYear.vue')
);
const liveVideoSetting = defineAsyncComponent(() =>
  import('@/views/systemSetting/liveVideoSetting.vue')
);

const activeTag = ref(null);
const showEdit = ref(false);

const updateShowEdit = () => {
  showEdit.value = !showEdit.value;
};

const showInsideSlider = ref(false);
const globalVars = inject('globalVars');
const currentCom = ref(null);
const changeActiveTag = v => {
  showEdit.value = activeTag.value === v ? showEdit.value : false;
  globalVars.showSub = v === activeTag.value ? globalVars.showSub : '0';
  if (v === '岗位人员权限设置') {
    globalVars.isDim = globalVars.showSub === '0' ? '0' : '1';
    showInsideSlider.value = true;
  } else {
    globalVars.isDim = '1';
    showInsideSlider.value = false;
  }

  if (v !== '岗位人员登录设置') {
    for (let i = 0; i < titleList.value.length; i++) {
      if (titleList.value[i].name === v) {
        currentCom.value = titleList.value[i].comName;
        break;
      }
    }
  }
  activeTag.value = v;
};

const close2NotDim = () => {
  activeTag.value = null;
  globalVars.isDim = '0';
};

const back2LastDiv = () => {
  showEdit.value = false;
};

const titleList = ref([
  { name: '岗位人员登录设置', comName: null },
  { name: '岗位人员权限设置', comName: markRaw(permissionSettingIndex) },
  { name: '教务端登录设置', comName: markRaw(eduTerminalLoginSetting) },
  { name: '填写所有专业名称', comName: markRaw(allMajorNames) },
  { name: '提前续费通知设置', comName: markRaw(renewalNotificationSetting) },
  { name: '前台电话添加设置', comName: markRaw(frontDescPhoneSetting) },
  { name: '上课签到权限设置', comName: markRaw(signInPermissionSetting) },
  { name: '学员缴费收款设置', comName: markRaw(studentPaymentSetting) },
  {
    name: '提前上课通知设置',
    comName: markRaw(advanceClassNotificationSetting),
  },
  { name: '专业考级等级输入', comName: markRaw(professionalGradeSetting) },
  { name: '家长端APP购物设置', comName: markRaw(parentAppShoppingSetting) },
  { name: '桌面系统背景设置', comName: markRaw(desktopBackgroundSetting) },
  { name: '使用说明视频讲解', comName: markRaw(instructionVideoExplanation) },
  { name: '校区所有数据导出', comName: markRaw(campusDataExport) },
  { name: '视频会议直播设置', comName: markRaw(liveVideoSetting) },
  { name: '各年份数据查看', comName: markRaw(viewDataByYear) },
]);
</script>
<style scoped lang="less">
@import '@/assets/css/systemSetting/indexCss';
</style>

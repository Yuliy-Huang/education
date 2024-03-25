<template>
  <div class="teacher-detail-page">
    <weekTitleComponent v-if="pageType === 'teacherSeeSchedule'" />
    <yearTitleComponent v-else :headHiding="headHiding" />

    <component
      :is="currentComponent"
      :page-type="pageType"
      :year="year"
      :month="activeMonth"
      @changeTab="changeTab"
    ></component>
  </div>
</template>
<script setup>
import {
  defineEmits,
  defineAsyncComponent,
  defineProps,
  markRaw,
  toRefs,
  computed,
} from 'vue';
import yearTitleComponent from '@/components/yearTitleComponent.vue';
import weekTitleComponent from '@/components/weekTitleComponent.vue';
import teacherInfoSeeSalary from '@/views/substituteTeacher/seeDetail/teacherSeeSalary.vue';
const teacherInfoSeeCheckIn = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeCheckIn.vue')
);
const teacherInfoSeeComment = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeComment.vue')
);
const teacherInfoSeeComplaint = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeComplaint.vue')
);
const teacherInfoSeeScore = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeScore.vue')
);
const teacherSeeHour = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeHour.vue')
);
const teacherSeeTotalHour = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeTotalHour.vue')
);
const teacherSeeStudent = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeStudent.vue')
);
const teacherSeeRoyallty = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeRoyalty.vue')
);
const teacherSeeStatistic = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeStatistic.vue')
);
const teacherSeeFile = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeFile.vue')
);
const teacherSeeStudentDetail = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeStudentDetail.vue')
);
const teacherSeeSchedule = defineAsyncComponent(() =>
  import('@/views/substituteTeacher/seeDetail/teacherSeeClassSchedule.vue')
);

const emits = defineEmits(['changeTab']);
const changeTab = () => {
  console.log('***** detail  000 : ', pageType.value);
  emits('changeTab', 'teacherSeeStudentDetail');
};
const props = defineProps({
  pageType: {
    type: String,
    default: '',
  },
});
const { pageType } = toRefs(props);
const headHiding = computed(() => {
  return (
    pageType.value === 'teacherSeeStudent' ||
    pageType.value === 'teacherSeeFile' ||
    pageType.value === 'teacherSeeStudentDetail'
  );
});
const currentComponent = computed(() => {
  let res = null;
  switch (pageType.value) {
    case 'teacherSeeSalary':
      res = markRaw(teacherInfoSeeSalary);
      break;
    case 'teacherSeeCheckIn':
      res = markRaw(teacherInfoSeeCheckIn);
      break;
    case 'teacherSeeComment':
      res = markRaw(teacherInfoSeeComment);
      break;
    case 'teacherSeeComplaint':
      res = markRaw(teacherInfoSeeComplaint);
      break;
    case 'teacherSeeScore':
      res = markRaw(teacherInfoSeeScore);
      break;
    case 'teacherSeeHour':
      res = markRaw(teacherSeeHour);
      break;
    case 'teacherSeeStudent':
      res = markRaw(teacherSeeStudent);
      break;
    case 'teacherSeeRoyallty':
      res = markRaw(teacherSeeRoyallty);
      break;
    case 'teacherSeeStatistic':
      res = markRaw(teacherSeeStatistic);
      break;
    case 'teacherSeeFile':
      res = markRaw(teacherSeeFile);
      break;
    case 'teacherSeeStudentDetail':
      res = markRaw(teacherSeeStudentDetail);
      break;
    case 'teacherSeeTotalHour':
      res = markRaw(teacherSeeTotalHour);
      break;
    case 'teacherSeeSchedule':
      res = markRaw(teacherSeeSchedule);
      break;
  }
  return res;
});
</script>
<style lang="less">
@import '@/assets/css/substituteTeacher/teacherInfoSeeDetailCss';
</style>

<template>
  <div class="teacher-detail-page">
    <div class="staff-head">
      <div class="year">
        <div class="arrow-left-div">
          <span
            class="inner-img-div"
            @click="changeYear(-1)"
          >
            <img
              :src="require(`@/assets/img/arrowLeft.png`)"
              style="width: 20px; height: 12px; cursor: pointer;"
              alt=""
            />
          </span>
        </div>
        <span>{{ year }}</span>
        <div class="arrow-right-div">
          <span
            class="inner-img-div"
            @click="changeYear(1)"
          >
            <img
              :src="require(`@/assets/img/arrowRight.png`)"
              style="width: 20px; height: 12px; cursor: pointer;"
              alt=""
            />
          </span>
        </div>
      </div>
      <template
        v-for="item of 12"
        :key="item"
      >
        <div
          :class="['month', {'is-active': item === activeMonth}]"
          @click="activeMonth = item"
        >{{ item }}月</div>
      </template>
    </div>
    <component
      :is="currentComponent"
      :year="year"
      :month="activeMonth"
    ></component>
  </div>
</template>
<script setup>
import { defineAsyncComponent, defineProps, markRaw, ref, toRefs, computed } from "vue";
import teacherInfoSeeSalary from "@/views/substituteTeacher/teacherInfoSeeSalary.vue";
const teacherInfoSeeCheckIn = defineAsyncComponent(() => import("@/views/substituteTeacher/teacherInfoSeeCheckIn.vue"))
const teacherInfoSeeComment = defineAsyncComponent(() => import("@/views/substituteTeacher/teacherInfoSeeComment.vue"))
const teacherInfoSeeComplaint = defineAsyncComponent(() => import("@/views/substituteTeacher/teacherInfoSeeComplaint.vue"))
const teacherInfoSeeScore = defineAsyncComponent(() => import("@/views/substituteTeacher/teacherInfoSeeScore.vue"))

const nowYear = new Date().getFullYear()
const year = ref(nowYear)
const changeYear = (v) => {
  v === 1 ? (year.value = year.value + 1 <= nowYear ? year.value + 1 : nowYear) : (year.value = year.value - 1 >= 1970 ? year.value - 1 : 1970)
}
const activeMonth = ref(new Date().getMonth() + 1)

const props = defineProps({
  pageType: {
    type: String,
    default: ''
  }
})
const { pageType } = toRefs(props)
const currentComponent = computed(() => {
  let res = null
  switch (pageType.value) {
    case 'teacherSeeSalary':
      res = markRaw(teacherInfoSeeSalary)
      break
    case 'teacherSeeCheckIn':
      res = markRaw(teacherInfoSeeCheckIn)
      break
    case 'teacherSeeComment':
      res = markRaw(teacherInfoSeeComment)
      break
    case 'teacherSeeComplaint':
      res = markRaw(teacherInfoSeeComplaint)
      break
    case 'teacherSeeScore':
      res = markRaw(teacherInfoSeeScore)
      break
    case 'teacherSeeHour':
      res = markRaw(teacherInfoSeeComment)
      break
    case 'teacherSeeStudent':
      res = markRaw(teacherInfoSeeSalary)
      break
    case 'teacherSeeRoyallty':
      res = markRaw(teacherInfoSeeCheckIn)
      break
    case 'teacherSeeStatistic':
      res = markRaw(teacherInfoSeeComment)
      break
    case 'teacherSeeFile':
      res = markRaw(teacherInfoSeeSalary)
      break
    case 'teacherSeeTotalHour':
      res = markRaw(teacherInfoSeeCheckIn)
      break
    case 'teacherSeeSchedule':
      res = markRaw(teacherInfoSeeComment)
      break
  }
  return res
})


</script>
<style lang="less">
@import "@/assets/css/substituteTeacher/teacherInfoSeeDetailCss";
</style>
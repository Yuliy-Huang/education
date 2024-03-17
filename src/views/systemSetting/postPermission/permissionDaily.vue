<template>
  <sliderInsideComponent :data-list="employeeList" @changeNext="changeNext" @changeShowDiv="changeShowDiv"/>
  <sliderNextComponent :show-div="showDiv" @changeShowDiv="changeShowDiv" v-if="showNextSlider"/>
</template>
<script setup>
import sliderInsideComponent from "@/views/systemSetting/component/sliderInsideComponent.vue"
import sliderNextComponent from "@/views/systemSetting/component/sliderNextComponent.vue"
import {ref} from "vue";

const employeeList = ref([
    '前台[田刚]', '教务[张兰]'
])

const showNextSlider = ref(false)
const changeNext = (v) => {
  showNextSlider.value = v
}

const showDiv = ref(false)
const changeShowDiv = (v) => {
  showDiv.value = v
}

</script>
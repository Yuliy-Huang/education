<template>
  <sliderInsideComponent :title-list="titleList" />
</template>
<script setup>
import sliderInsideComponent from "@/components/sliderInsideComponent.vue"
import {ref} from "vue";


const titleList = ref([
    '前台[田刚]', '教务[张兰]'
])


</script>
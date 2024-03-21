<template>
  <div class="staff-info-comment">
    <div style="margin-bottom: 20px;">入职备注查看</div>
    <div>{{comment}}</div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const comment = ref('您的工资已升了1000元')

</script>
<style lang="less">
@import "@/assets/css/academicStaff/staffInfoSeeCommentCss";
</style>
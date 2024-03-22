<template>
  <div class="teacher-info-comment">
    <div
      class="comment-top"
      style="font-size: 1.5rem;"
    >正文</div>
    <div class="comment-mid">{{comment}}</div>
    <div class="comment-bottom">
      <div class="bottom-row">
        <div>被投诉人：李老师 ［A1003］</div>
        <div>投诉时间：2022.5.23</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const comment = ref('老师上课不认真，接听电话')

</script>
<style lang="less">
@import "@/assets/css/substituteTeacher/teacherInfoSeeCommentCss.less";
</style>
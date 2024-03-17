<template>
  <div class="desktop">
    <div class="row1">
      <el-upload
          :class="imageUrl? 'avatar-uploader': 'avatar-uploader-border'"
          accept="image/*"
          action="#"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" alt=""/>
        <el-icon v-else class="avatar-uploader-icon">
          <Plus/>
        </el-icon>
      </el-upload>
    </div>
    <div class="row2">
      <div>
        <el-button plain>上 一 页</el-button>
      </div>
      <div>
        <el-button plain>确 认 更 改</el-button>
      </div>
      <div>
        <el-button plain>下 一 页</el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import {ElMessage} from 'element-plus'
import {Plus} from '@element-plus/icons-vue'

// const imageUrl = ref('https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100')
const imageUrl = ref('')

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不能超过 2MB!')
    return false
  }
  console.log('000 : ', rawFile)
  imageUrl.value = URL.createObjectURL(rawFile)
  return false
}
</script>
<style lang="less">
@import "@/assets/css/desktopBacgroundSettingCss";
</style>
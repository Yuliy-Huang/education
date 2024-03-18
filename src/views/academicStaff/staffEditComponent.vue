<template>
  <div class="staff-edit">
    <div class="row1"></div>
    <div class="row2">
      <div class="col1">
        <div class="avatar-div">
          <el-upload class="avatar-upload"
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
          <div class="avatar-text"><span class="avatar-span-text">点击重新上传照片</span></div>
        </div>
        <div class="info-div">
          <el-form :model="form" label-width="auto" class="info-form">
            <el-form-item label="编号：" class="div-no-required no-border-number">
              <span class="form-span">{{form.no}}</span>
            </el-form-item>
            <el-form-item label="姓名：" class="div-required">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="性别：" class="div-required">
              <el-input v-model="form.sex" />
            </el-form-item>
            <el-form-item label="出生：" class="div-no-required">
              <el-input v-model="form.birth" />
            </el-form-item>
            <el-form-item label="籍贯：" class="div-no-required">
              <el-input v-model="form.place" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="col2">
        <el-form :model="form" label-width="auto" class="info-form">
          <el-form-item label="大学专业：" class="div-no-required">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="现在职位：" class="div-required">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="联系电话：" class="div-required">
            <el-input v-model="form.sex" />
          </el-form-item>
          <el-form-item label="毕业院校：" class="div-no-required">
            <el-input v-model="form.birth" />
          </el-form-item>
          <el-form-item label="住宅地址：" class="div-no-required">
            <el-input v-model="form.place" />
          </el-form-item>
        </el-form>
      </div>
      <div class="col3">
        <div class="col3-div">
          <el-form :model="form" label-width="auto" class="info-form">
            <el-form-item label="工资底薪：" class="div-required">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-form>
          <el-input
              v-model="textarea"
              :rows="6"
              type="textarea"
              placeholder="入职备注："
              resize="none"
          />
        </div>
      </div>
      <div class="col4">
        <div class="qr-div">
          <el-upload class="avatar-upload"
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
          <div class="upload-bottom">请添加教务教师<br />工资收款二维码</div>
          <div class="avatar-text">
            <span class="avatar-span-dot">
              <span class="dot-purple"></span>
              微信
            </span>
            <span class="avatar-span-dot">
              <span class="dot-green"></span>
              支付宝
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row3">
      <el-button plain @click="saveFunc">确 定 存 档</el-button>
    </div>
  </div>
</template>
<script setup>

import {ElInput, ElMessage, ElMessageBox} from "element-plus";
import {h, reactive, ref} from "vue";
import {Plus} from "@element-plus/icons-vue";

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

const form = reactive({
  no: 'A1004',
  name: '',
  sex: '',
  birth: '',
  place: '',
})

const vNode = () => {
  return h('div', {}, [
    h('div', {style: 'margin-bottom: 20px; margin-top: 50px;'}, [
      h('div', {
        class: 'div-inside',
      }, ['备注编辑']),
    ]),
    h('div', {}, [
      h('div', {
        class: 'div-inside',
      }, ['基本工资已重置']),
    ]),
  ]);
}

const saveFunc = () => {
  ElMessageBox({
    title: '',
    message: () => vNode(),
    showCancelButton: false,
    showConfirmButton: false,
    autofocus: false,
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmButtonText = 'Loading...'
        setTimeout(() => {
          done()
          setTimeout(() => {
            instance.confirmButtonLoading = false
          }, 300)
        }, 2000)
      } else {
        done()
      }
    },
  }).then(() => {
  })
      .catch(() => {

      })
}
const textarea = ref('')

</script>
<style lang="less">
@import "@/assets/css/academicStaff/staffEditComponentCss";
</style>
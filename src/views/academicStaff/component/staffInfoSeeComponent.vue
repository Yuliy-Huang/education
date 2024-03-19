<template>
  <div class="staff-info-see">
    <div class="row1"></div>
    <div class="row2">
      <div class="col1">
        <div class="avatar-div">
          <img :src="imageUrl" class="avatar-img" alt=""/>
        </div>
        <div class="info-div">
          <el-form :model="form" label-width="auto" class="info-form">
            <el-form-item label="编号：" class="div-no-required no-border-number">
              <span class="form-span">{{ form.no }}</span>
            </el-form-item>
            <el-form-item label="姓名：" class="div-no-required">
              <span class="form-span">{{ form.name }}</span>
            </el-form-item>
            <el-form-item label="性别：" class="div-no-required">
              <span class="form-span">{{ form.sex }}</span>
            </el-form-item>
            <el-form-item label="出生：" class="div-no-required">
              <span class="form-span">{{ form.birth }}</span>
            </el-form-item>
            <el-form-item label="籍贯：" class="div-no-required">
              <span class="form-span">{{ form.place }}</span>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="col2">
        <el-form :model="form1" label-width="auto" class="info-form">
          <el-form-item label="大学专业：" class="div-no-required">
            <span class="form-span">{{ form1.major }}</span>
          </el-form-item>
          <el-form-item label="现在职位：" class="div-no-required">
            <span class="form-span">{{ form1.positon }}</span>
          </el-form-item>
          <el-form-item label="联系电话：" class="div-no-required">
            <span class="form-span">{{ form1.phone }}</span>
          </el-form-item>
          <el-form-item label="毕业院校：" class="div-no-required">
            <span class="form-span">{{ form1.school }}</span>
          </el-form-item>
          <el-form-item label="住宅地址：" class="div-no-required">
            <span class="form-span">{{ form1.address }}</span>
          </el-form-item>
        </el-form>
      </div>
      <div class="col3">
        <div class="detail-button">
          <el-button plain>工资明细</el-button>
        </div>
        <div class="detail-button">
          <el-button plain>考勤查看</el-button>
        </div>
        <div class="detail-button">
          <el-button plain>入职备注</el-button>
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
          <div class="upload-bottom">请添加教务教师<br/>工资收款二维码</div>
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

import {ElMessage, ElMessageBox} from "element-plus";
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
  name: '汪老师',
  sex: '女',
  birth: '1994.10.4',
  place: '江苏•南京',
})

const form1 = reactive({
  major: '艺术管理',
  positon: '前台',
  phone: '13878768542',
  school: '南京工商管理学院',
  address: '嘉兴市秀洲区12栋101室',
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
@import "@/assets/css/academicStaff/staffInfoSeeComponentCss";
</style>
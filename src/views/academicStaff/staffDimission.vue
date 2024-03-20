<template>
  <div class="staff-dimission">
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
            <span class="form-span">{{ form1.position }}</span>
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
    </div>
    <div class="row3">
      <el-button plain @click="saveFunc">确 定 离 职</el-button>
    </div>
  </div>
</template>
<script setup>

import {defineEmits, reactive, ref} from "vue";

const imageUrl = ref(require(`@/assets/img/qr/img.jpg`))

const form = reactive({
  no: 'A1004',
  name: '汪老师',
  sex: '女',
  birth: '1994.10.4',
  place: '江苏•南京',
})

const form1 = reactive({
  major: '艺术管理',
  position: '前台',
  phone: '13878768542',
  school: '南京工商管理学院',
  address: '嘉兴市秀洲区12栋101室',
})
const emits = defineEmits(['changeTab']);

const saveFunc = () => {
  emits('changeTab', 'staffDimissionDelete')
}
</script>
<style lang="less">
@import "@/assets/css/academicStaff/staffDimissionCss";
</style>
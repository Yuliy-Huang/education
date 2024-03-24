<template>
  <div class="teacher-see-student-detail">
    <div class="student-detail">
      <div class="row1"></div>
      <div class="row2">
        <div class="col1">
          <div class="avatar-div">
            <img :src="imageUrl" class="avatar-img" alt="" />
          </div>
          <div class="info-div">
            <el-form :model="form" label-width="auto" class="detail-form">
              <el-form-item label="姓名：">
                <span class="form-span">{{ form.name }}</span>
              </el-form-item>
              <el-form-item label="编号：" class="no-border-number">
                <span class="form-span">{{ form.no }}</span>
              </el-form-item>
              <el-form-item label="年龄：" class="no-border-number">
                <span class="form-span">{{ form.age }}</span>
              </el-form-item>
              <el-form-item label="性别：">
                <span class="form-span">{{ form.sex }}</span>
              </el-form-item>
              <el-form-item label="出生年月：">
                <span class="form-span">{{ form.birth }}</span>
              </el-form-item>
              <el-form-item label="报名专业：">
                <span class="form-span">{{ form.place }}</span>
              </el-form-item>
              <el-form-item label="专业级别：">
                <span class="form-span">{{ form.level }}</span>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="col2">
          <el-form :model="form1" label-width="auto" class="detail-form">
            <el-form-item label="联系电话：">
              <span class="form-span">{{ form1.phone }}</span>
            </el-form-item>
            <el-form-item label="住宅地址：">
              <span class="form-span">{{ form1.address }}</span>
            </el-form-item>
            <el-form-item label="教师编号：">
              <span class="form-span">{{ form1.teacherNo }}</span>
            </el-form-item>
            <el-form-item label="上课时间：">
              <span class="form-span">{{ form1.classTime }}</span>
            </el-form-item>
            <el-form-item label="上课模式：">
              <span class="form-span">{{ form1.classMode }}</span>
            </el-form-item>
            <el-form-item label="报名课数：">
              <span class="form-span">{{ form1.classCount }}</span>
            </el-form-item>
            <el-form-item label="课费优惠：">
              <span class="form-span">{{ form1.classDiscount }}</span>
            </el-form-item>
          </el-form>
        </div>
        <div class="col3">
          <div class="col3-inside-div"></div>
        </div>
        <div class="col4">
          <div class="col3-inside-div"></div>
        </div>
        <div class="col5"></div>
      </div>
      <div class="row3"></div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';

const imageUrl = ref(require(`@/assets/img/qr/img.jpg`));

const form = reactive({
  no: 'B1003',
  name: '梁朝伟',
  age: '8岁',
  sex: '女',
  birth: '2013.10.13',
  place: '钢琴',
  level: '3级',
});

const form1 = reactive({
  classMode: '1对1',
  classTime: '45分钟/节',
  classCount: '50节',
  classDiscount: '200元',
  phone: '13788888888',
  teacherNo: 'A1003［李老师］',
  address: '南湖区七星街道',
});
</script>
<style lang="less">
@import '@/assets/css/substituteTeacher/teacherSeeStudentDetailCss.less';
</style>

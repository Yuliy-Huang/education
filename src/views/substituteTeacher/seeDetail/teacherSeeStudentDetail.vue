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
        <div class="col-mid">
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
        <div class="col-mid">
          <el-form :model="form2" label-width="auto" class="detail-form">
            <el-form-item label="课数优惠：">
              <span class="form-span">{{ form2.classCount }}</span>
            </el-form-item>
            <el-form-item label="报名学费：">
              <span class="form-span">{{ form2.applyTuition }}</span>
            </el-form-item>
            <el-form-item label="报名实缴：">
              <span class="form-span">{{ form2.applyPay }}</span>
            </el-form-item>
            <el-form-item label="允许请假：">
              <span class="form-span">{{ form2.allowLeave }}</span>
            </el-form-item>
            <el-form-item label="允许旷课：">
              <span class="form-span">{{ form2.allowTruant }}</span>
            </el-form-item>
            <el-form-item label="课程排表：">
              <span class="form-span">{{ form2.classSchedule }}</span>
            </el-form-item>
            <el-form-item label="报名时间：">
              <span class="form-span">{{ form2.registrationTime }}</span>
            </el-form-item>
          </el-form>
        </div>
        <div class="col-mid">
          <el-form :model="form3" label-width="auto" class="detail-form">
            <el-form-item label="课程已上：">
              <span class="form-span">{{ form3.classFinish }}</span>
            </el-form-item>
            <el-form-item label="课程未上：">
              <span class="form-span">{{ form3.classLeft }}</span>
            </el-form-item>
            <el-form-item label="课程请假：">
              <span class="form-span">{{ form3.classLeave }}</span>
            </el-form-item>
            <el-form-item label="课程旷课：">
              <span class="form-span">{{ form3.classTruant }}</span>
            </el-form-item>
            <el-form-item label="课程停课：">
              <span class="form-span">{{ form3.classStop }}</span>
            </el-form-item>
            <el-form-item label="备注说明：">
              <span class="form-span">{{ form3.comment }}</span>
            </el-form-item>
          </el-form>
        </div>
        <div class="col5">
          <el-form :model="form4" label-width="auto" class="detail-form">
            <el-form-item label="课程排表：">
              <span class="form-span">{{ form4.classSchedule }}</span>
            </el-form-item>
          </el-form>
        </div>
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
const form2 = reactive({
  classCount: '0节',
  applyTuition: '8600元［172/节］',
  applyPay: '8400元［168/节］',
  allowLeave: '4节',
  allowTruant: '1节',
  classSchedule: '周日13:00-14:00',
  registrationTime: '2021.10.13',
});
const form3 = reactive({
  classFinish: '35节',
  classLeft: '15节',
  classLeave: '4节',
  classTruant: '1节',
  classStop: '0节',
  comment: '',
});
const form4 = reactive({
  classSchedule: '周日13:00-14:00',
});
</script>
<style lang="less">
@import '@/assets/css/substituteTeacher/teacherSeeStudentDetailCss.less';
</style>

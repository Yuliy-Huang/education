<template>
  <div class="student-file">
    <twoLineTitleComponent :title="title" :dataList="dataList" />
    <div class="student-file-detail">
      <div class="row1"></div>
      <div class="row1">
        <div class="col1">
          <div class="avatar-div">
            <img :src="imageUrl" class="avatar-img" alt="" />
          </div>
          <div class="info-div">
            <el-form :model="form" label-width="auto" class="info-form">
              <el-form-item label="编号：" class="no-border-number">
                <span class="form-span">{{ form.no }}</span>
              </el-form-item>
              <el-form-item label="姓名：">
                <span class="form-span">{{ form.name }}</span>
              </el-form-item>
              <el-form-item label="性别：">
                <span class="form-span">{{ form.sex }}</span>
              </el-form-item>
              <el-form-item label="出生：">
                <span class="form-span">{{ form.birth }}</span>
              </el-form-item>
              <el-form-item label="籍贯：">
                <span class="form-span">{{ form.place }}</span>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="col2">
          <el-form :model="form1" label-width="auto" class="info-form">
            <el-form-item label="专业：">
              <span class="form-span">{{ form1.major }}</span>
            </el-form-item>
            <el-form-item label="教龄：">
              <span class="form-span">{{ form1.position }}</span>
            </el-form-item>
            <el-form-item label="电话：">
              <span class="form-span">{{ form1.phone }}</span>
            </el-form-item>
            <el-form-item label="院校：">
              <span class="form-span">{{ form1.school }}</span>
            </el-form-item>
            <el-form-item label="住址：">
              <span class="form-span">{{ form1.address }}</span>
            </el-form-item>
          </el-form>
        </div>
        <div class="col2">
          <el-form :model="form2" label-width="auto" class="info-form">
            <el-form-item label="工资底薪：">
              <span class="form-span">{{ form2.major }}</span>
            </el-form-item>
            <el-form-item label="一对一课程：">
              <span class="form-span">{{ form2.position }}</span>
            </el-form-item>
            <el-form-item label="一对多班级：">
              <span class="form-span">{{ form2.phone }}</span>
            </el-form-item>
            <el-form-item label="一对一分成：">
              <span class="form-span">{{ form2.school }}</span>
            </el-form-item>
            <el-form-item label="一对多分成：">
              <span class="form-span">{{ form2.address }}</span>
            </el-form-item>
          </el-form>
        </div>
        <div class="col2">
          <el-form :model="form3" label-width="auto" class="info-form">
            <el-form-item label="一对多固定课程：">
              <span class="form-span">{{ form3.major }}</span>
            </el-form-item>
            <el-form-item label="大课人数：">
              <span class="form-span">{{ form1.position }}</span>
            </el-form-item>
            <el-form-item label="小课人数：">
              <span class="form-span">{{ form3.phone }}</span>
            </el-form-item>
            <el-form-item label="教师请假：">
              <span class="form-span">{{ form3.school }}</span>
            </el-form-item>
            <el-form-item label="教师旷勤：">
              <span class="form-span">{{ form3.address }}</span>
            </el-form-item>
          </el-form>
        </div>
        <div class="col2">
          <el-form :model="form3" label-width="auto" class="info-form">
            <el-form-item label="一对多固定课程：">
              <span class="form-span">{{ form3.major }}</span>
            </el-form-item>
            <el-form-item label="大课人数：">
              <span class="form-span">{{ form1.position }}</span>
            </el-form-item>
            <el-form-item label="小课人数：">
              <span class="form-span">{{ form3.phone }}</span>
            </el-form-item>
            <el-form-item label="教师请假：">
              <span class="form-span">{{ form3.school }}</span>
            </el-form-item>
            <el-form-item label="教师旷勤：">
              <span class="form-span">{{ form3.address }}</span>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="row1"></div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from 'vue';
import twoLineTitleComponent from '@/components/twoLineTitleComponent.vue';
export default {
  components: {
    twoLineTitleComponent,
  },
  setup() {
    const title = '';
    const dataList = ['刘德华[学生]', '梁朝伟[学生]'];

    const imageUrl = ref(require(`@/assets/img/qr/img.jpg`));

    const form = reactive({
      no: 'A1004',
      name: '汪老师',
      sex: '女',
      birth: '1994.10.4',
      place: '江苏•南京',
    });

    const form1 = reactive({
      major: '钢琴',
      position: '3年',
      phone: '13878768542',
      school: '中央音乐学院',
      address: '嘉兴市南湖区12栋101室',
    });

    const form2 = reactive({
      major: '2000元',
      position: '16节',
      phone: '8节',
      school: '60%每节课',
      address: '0%每节课',
    });

    const form3 = reactive({
      major: '0￥每节课',
      position: '0人',
      phone: '16人',
      school: '2次',
      address: '1次',
    });
    return {
      imageUrl,
      form,
      form1,
      form2,
      form3,
      title,
      dataList,
    };
  },
};
</script>
<style scoped>
@import '@/assets/css/campusStudent/studentFileSeeCss.less';
</style>

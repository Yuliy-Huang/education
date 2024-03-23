<template>
  <div class="teacher-info-see">
    <div class="row1"></div>
    <div class="row2">
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
      <div class="col3">
        <div class="col3-inside-div">
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeSalary')">
              工资明细
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeCheckIn')">
              考勤查看
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeComment')">
              入职备注
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeComplaint')">
              匿名投诉
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeScore')">
              评分查看
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeHour')">
              课时数据
            </el-button>
          </div>
        </div>
        <div class="col3-inside-div">
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeStudent')">
              学员数据
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeRoyallty')">
              课费分成
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeStatistic')">
              上课统计
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeFile')">
              学员档案
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeTotalHour')">
              课时共计
            </el-button>
          </div>
          <div class="detail-button">
            <el-button plain @click="jump2Detail('teacherSeeSchedule')">
              课表查看
            </el-button>
          </div>
        </div>
      </div>
      <div class="col4">
        <div class="qr-div">
          <div class="upload-img-div">
            <img :src="qrUrl" class="avatar-img" alt="" />
            <div class="upload-bottom">
              此码是代课教师
              <br />
              工资收款二维码
            </div>
          </div>
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
import { ElMessageBox } from 'element-plus';
import { defineEmits, h, reactive, ref } from 'vue';

const imageUrl = ref(require(`@/assets/img/qr/img.jpg`));
const qrUrl = ref(require(`@/assets/img/qr/qr111.jpg`));

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

const vNode = () => {
  return h('div', {}, [
    h('div', { style: 'margin-bottom: 20px; margin-top: 50px;' }, [
      h(
        'div',
        {
          class: 'div-inside',
        },
        ['备注编辑']
      ),
    ]),
    h('div', {}, [
      h(
        'div',
        {
          class: 'div-inside',
        },
        ['基本工资已重置']
      ),
    ]),
  ]);
};

const saveFunc = () => {
  ElMessageBox({
    title: '',
    message: () => vNode(),
    showCancelButton: false,
    showConfirmButton: false,
    autofocus: false,
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true;
        instance.confirmButtonText = 'Loading...';
        setTimeout(() => {
          done();
          setTimeout(() => {
            instance.confirmButtonLoading = false;
          }, 300);
        }, 2000);
      } else {
        done();
      }
    },
  })
    .then(() => {})
    .catch(() => {});
};
const emits = defineEmits(['changeTab']);
const jump2Detail = v => {
  emits('changeTab', v);
};
</script>
<style lang="less">
@import '@/assets/css/substituteTeacher/teacherInfoSeeCss.less';
</style>

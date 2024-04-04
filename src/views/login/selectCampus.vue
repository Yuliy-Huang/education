<template>
  <div class="register-form">
    <div class="campus-form">
      <div class="campus-info">
        <div>校 区 选 择</div>
        <el-input
          class="top-div"
          placeholder="校 区 名 称 添 加 1"
          v-model="campus_list[0].deptName"
        ></el-input>
        <div class="bottom-div">
          <pcaComponent />
        </div>
        <el-input
          class="top-div"
          placeholder="校 区 名 称 添 加 2"
          v-model="campus_list[1].deptName"
        ></el-input>
        <div class="bottom-div">
          <pcaComponent />
        </div>
        <div class="button-div">
          <div class="left-arrow" @click="cutCampus">
            <img
              :src="require(`@/assets/img/arrowLeft.png`)"
              style="width: 24px; height: 14px"
              alt=""
            />
          </div>
          <div class="right-arrow" @click="addCampus">
            <img
              :src="require(`@/assets/img/arrowRight.png`)"
              style="width: 24px; height: 14px"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="campus-button-div">
      <el-button @click="showCampusRegister">确定</el-button>
      <el-button @click="back2Home">取消</el-button>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus';
import pcaComponent from '@/components/pcaComponent';
import { campusGetApi } from '@/service/registerCampus';
export default {
  components: {
    pcaComponent,
  },
  props: {},
  setup(props, context) {
    const getCampusList = () => {
      campusGetApi().then(res => {
        if (res.code === 200) {
          ElMessage.success(res.msg);
        } else {
          ElMessage.error(res.msg);
        }
      });
    };

    onMounted(() => {
      getCampusList();
    });

    const campus_list = ref(
      Array.from({ length: 2 }).map(() => ({
        deptName: '',
        address: '',
      }))
    );

    const back2Home = () => {
      context.emit('changeCampusSelectShow', false);
    };
    const showCampusRegister = () => {
      if (!campus_list.value[0].deptName) {
        ElMessage.error('校区不能为空！');
        return false;
      }

      context.emit('changeCampusShow', false);
      context.emit('changeRegisterAccountShow', true);
    };

    const cutCampus = () => {};

    const addCampus = () => {};
    return {
      props,
      back2Home,
      showCampusRegister,
      campus_list,
      cutCampus,
      addCampus,
    };
  },
};
</script>
<style lang="less">
@import '@/assets/css/login/registerCampusCss.less';
</style>

<template>
  <div class="register-form">
    <div class="campus-form">
      <div class="campus-info">
        <div>校 区 注 册</div>
        <div
          :class="[
            'top-div',
            campus1_name ? 'select-div' : '',
            select_campus === deptId1 ? 'is-active' : '',
          ]"
          @click="selectCampus(deptId1)"
        >
          第 {{ currentPage * 2 - 1 }} 校 区
        </div>
        <div
          :class="[
            'bottom-div-2',
            campus1_name && select_campus === deptId1 ? 'is-active' : '',
          ]"
        >
          <div>{{ campus1_name }}</div>
          <div>学校编号：{{ deptId1 }}</div>
        </div>
        <div
          :class="[
            'top-div',
            campus2_name ? 'select-div' : '',
            select_campus === deptId2 ? 'is-active' : '',
          ]"
          @click="selectCampus(deptId2)"
        >
          第 {{ currentPage * 2 }} 校 区
        </div>
        <div
          :class="[
            'bottom-div-2',
            campus2_name && select_campus === deptId2 ? 'is-active' : '',
          ]"
        >
          <div>{{ campus2_name }}</div>
          <div v-if="campus2_name">学校编号：{{ deptId2 }}</div>
        </div>

        <div class="button-div">
          <div class="left-arrow" @click.prevent="toLeft">
            <img
              :src="require(`@/assets/img/arrowLeft.png`)"
              style="width: 24px; height: 14px"
              alt=""
            />
          </div>
          <div class="right-arrow" @click.prevent="toRight">
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
      <el-button @click.prevent="showCampusRegister">确定</el-button>
      <el-button @click.prevent="back2Home">取消</el-button>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, reactive, watch } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { campusGetApi, campusSelectApi } from '@/service/registerCampus';

export default {
  props: {},
  setup(props, context) {
    const router = useRouter();
    const currentPage = ref(1);
    let select_campus = ref(null);
    let campus1_name = ref('');
    let campus2_name = ref('');
    let deptId1 = ref('');
    let deptId2 = ref('');

    let campus_list = reactive(
      Array.from({ length: 2 }).map(() => ({
        deptName: '',
        address: '',
      }))
    );
    const getCampusList = () => {
      campusGetApi().then(res => {
        if (res.code === 200) {
          campus_list = res.data;
          campus1_name.value = campus_list[currentPage.value * 2 - 2]
            ? campus_list[currentPage.value * 2 - 2].deptName
            : '';
          deptId1.value = campus_list[currentPage.value * 2 - 2]
            ? campus_list[currentPage.value * 2 - 2].deptId
            : '';
          deptId2.value = campus_list[currentPage.value * 2 - 1]
            ? campus_list[currentPage.value * 2 - 1].deptId
            : '';
          campus2_name.value = campus_list[currentPage.value * 2 - 1]
            ? campus_list[currentPage.value * 2 - 1].deptName
            : '';
        } else {
          ElMessage.error(res.msg);
        }
      });
    };

    onMounted(() => {
      getCampusList();
    });

    watch(currentPage, () => {
      campus1_name.value = campus_list[currentPage.value * 2 - 2]
        ? campus_list[currentPage.value * 2 - 2].deptName
        : '';
      deptId1.value = campus_list[currentPage.value * 2 - 2]
        ? campus_list[currentPage.value * 2 - 2].deptId
        : '';
      deptId2.value = campus_list[currentPage.value * 2 - 1]
        ? campus_list[currentPage.value * 2 - 1].deptId
        : '';
      campus2_name.value = campus_list[currentPage.value * 2 - 1]
        ? campus_list[currentPage.value * 2 - 1].deptName
        : '';
    });

    const toLeft = () => {
      currentPage.value =
        currentPage.value > 1 ? currentPage.value - 1 : currentPage.value;
    };

    const toRight = () => {
      currentPage.value =
        currentPage.value < campus_list.length
          ? currentPage.value + 1
          : currentPage.value;
    };

    const back2Home = () => {
      context.emit('changeCampusShow', false);
      context.emit('changeLoginShow', true);
    };

    const selectCampus = v => {
      if (!v) {
        return false;
      }
      select_campus.value === v
        ? (select_campus.value = '')
        : (select_campus.value = v);
    };
    const showCampusRegister = () => {
      if (!select_campus.value) {
        ElMessage.error('校区不能为空！');
        return false;
      }
      campusSelectApi({ deptId: select_campus.value }).then(res => {
        if (res.code === 200) {
          router.push('/home');
        } else {
          ElMessage.error(res.msg);
        }
      });
      // router.push('/home');
    };
    return {
      props,
      back2Home,
      showCampusRegister,
      toLeft,
      toRight,
      selectCampus,
      campus_list,
      currentPage,
      campus1_name,
      campus2_name,
      deptId1,
      deptId2,
      select_campus,
    };
  },
};
</script>
<style lang="less">
@import '@/assets/css/login/registerCampusCss.less';
</style>

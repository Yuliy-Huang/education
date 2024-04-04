<template>
  <div class="register-form">
    <div class="campus-form">
      <div class="campus-info">
        <div>校 区 注 册</div>
        <el-input
          class="top-div"
          :placeholder="`校 区 名 称 添 加 ${currentPage * 2 - 1}`"
          v-model="campus_list[currentPage * 2 - 2].deptName"
        >
          <template #suffix>
            <el-icon
              class="el-input__icon"
              @click.prevent="delCampus(currentPage * 2 - 2)"
            >
              <Close />
            </el-icon>
          </template>
        </el-input>
        <div class="bottom-div">
          <pcaComponent
            @changeAddress="changeAddress"
            :index="currentPage * 2 - 2"
          />
        </div>
        <el-input
          class="top-div"
          :placeholder="`校 区 名 称 添 加 ${currentPage * 2}`"
          v-model="campus_list[currentPage * 2 - 1].deptName"
        >
          <template #suffix>
            <el-icon
              class="el-input__icon"
              @click.prevent="delCampus(currentPage * 2 - 1)"
            >
              <Close />
            </el-icon>
          </template>
        </el-input>
        <div class="bottom-div">
          <pcaComponent
            @changeAddress="changeAddress"
            :index="currentPage * 2 - 1"
          />
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
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
// import { useRouter } from 'vue-router';
import { campusListAddApi } from '@/service/registerCampus';
import pcaComponent from '@/components/pcaComponent';

export default {
  components: {
    pcaComponent,
  },
  props: {},
  setup(props, context) {
    let campus_list = reactive(
      Array.from({ length: 2 }).map(() => ({
        deptName: '',
        address: '',
      }))
    );
    // const router = useRouter();

    const currentPage = ref(1);

    const toLeft = () => {
      currentPage.value =
        currentPage.value > 1 ? currentPage.value - 1 : currentPage.value;
    };

    const toRight = () => {
      currentPage.value += 1;
      currentPage.value * 2 > campus_list.length ? addCampus() : () => {};
    };

    const delCampus = i => {
      campus_list[i].deptName = '';
      campus_list[i].address = '';
    };

    const addCampus = () => {
      campus_list.push({
        deptName: '',
        address: '',
      });
      campus_list.push({
        deptName: '',
        address: '',
      });
    };

    const changeAddress = (index, v) => {
      campus_list[index].address = v;
      console.log('*** campus_list : ', campus_list);
    };

    const back2Home = () => {
      context.emit('changeCampusShow', false);
      context.emit('changeRegisterAccountShow', true);
    };

    const showCampusRegister = () => {
      if (!campus_list[0].deptName) {
        ElMessage.error('校区不能为空！');
        return false;
      }

      const unique_list = [
        ...new Set(campus_list.filter(item => item.deptName != '')),
      ];

      console.log('regist campus ---- unique_list : ', unique_list.value);

      campusListAddApi(unique_list).then(res => {
        if (res.code === 200) {
          ElMessage.success(res.msg);
          // router.push('/home');
        } else {
          ElMessage.error(res.msg);
        }
      });
    };
    return {
      props,
      back2Home,
      showCampusRegister,
      campus_list,
      toLeft,
      delCampus,
      toRight,
      changeAddress,
      currentPage,
    };
  },
};
</script>
<style lang="less">
@import '@/assets/css/login/registerCampusCss.less';
</style>

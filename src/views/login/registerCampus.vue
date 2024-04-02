<template>
  <div class="register-form">
    <div class="campus-form">
      <div class="campus-info">
        <div>校区注册</div>
        <div class="top-div">校区名称添加1</div>
        <div class="bottom-div">校区注册</div>
        <div class="top-div">校区名称添加2</div>
        <div class="bottom-div">校区注册</div>
        <div class="button-div">
          <div class="left-arrow">
            <img
              :src="require(`@/assets/img/arrowLeft.png`)"
              style="width: 24px; height: 14px"
              alt=""
            />
          </div>
          <div class="right-arrow">
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
      <el-button>确定</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  setup(props) {
    return {
      props,
    };
  },
};
</script>
<style scoped lang="less">
@import '@/assets/css/login/registerCampusCss.less';
</style>

<template>
  <div class="archive-add">
    <div class="row1" v-if="newArchive">新建</div>
    <div class="row1" v-else>编辑</div>
    <div class="row2">
      <div class="only-col"></div>
      <div class="only-col">
        <el-form :model="form" label-width="auto" class="info-form">
          <el-form-item label="入档名称：" class="div-required">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="入档员工：" class="div-required">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="开销价格：" class="div-required">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="入档日期：" class="div-required">
            <el-input v-model="form.sex" />
          </el-form-item>
          <el-form-item label="备注图片：" class="div-no-required">
            <el-input v-model="form.birth" />
          </el-form-item>
          <el-form-item label="备注说明：" class="div-no-required">
            <el-input
                v-model="form.place"
                type="textarea"
                resize="none"
                rows="3"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="only-col"></div>
    </div>
    <div class="row3">
      <div class="only-col"></div>
      <div class="only-col">
        <el-button plain @click="saveFunc">确 定</el-button>
      </div>
      <div class="only-col"></div>
    </div>
  </div>
</template>
<script setup>
import {ElInput, ElMessageBox} from 'element-plus';
import {h, reactive, defineProps, toRefs} from 'vue';

const props = defineProps({
  newArchive: {
    type: Boolean,
    default: false,
  },
});

const {newArchive} = toRefs(props);

const form = reactive({
  no: 'A1004',
  name: '',
  sex: '',
  birth: '',
  place: '',
});

const vNode = () => {
  return h('div', {}, [
    h('div', {style: 'margin-bottom: 20px; margin-top: 50px;'}, [
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
      .then(() => {
      })
      .catch(() => {
      });
};
</script>
<style lang="less">
@import '@/assets/css/archiveManagement/newArchivePageCss.less';
</style>

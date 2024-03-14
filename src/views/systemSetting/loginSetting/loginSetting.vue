<template>
  <table-component-once :user-column="columns" :table-data="tableData"
                        :is-show-operation="true" :operation-list="operationList"
                        :is-show-add="true" @addFunc="addFunc">
  </table-component-once>
</template>
<script setup>
import tableComponentOnce from "@/components/tableComponentOnce.vue"
import {reactive, defineEmits} from "vue";

const emit = defineEmits(['updateEdit']);
const addFunc = () => {
  emit('updateEdit');
}

const delFunc = () => {
  console.log('delFuncdelFuncdelFunc')
}

const columns = [{
  label: '员工姓名',
  prop: 'name'
}, {
  label: '校区职位',
  prop: 'position'
}, {
  label: '登陆电话',
  prop: 'phone'
}, {
  label: '登录密码',
  prop: 'password'
}]

const operationList = [
  {title: '编辑', type: 'info', callBack: addFunc},
  {title: '删除', type: 'info', callBack: delFunc},
]

const tableData = reactive([
  {name: '田刚', position: '教务', phone: '15799995675', password: '666666'},
  {name: '张三', position: '前台', phone: '13588887766', password: '888888'},
  {name: '田刚', position: '教务', phone: '15799995675', password: '666666'},
  {name: '张三', position: '前台', phone: '13588887766', password: '888888'},
  {name: '田刚', position: '教务', phone: '15799995675', password: '666666'},
  {name: '张三', position: '前台', phone: '13588887766', password: '888888'},
  {name: '田刚', position: '教务', phone: '15799995675', password: '666666'},
  {name: '张三', position: '前台', phone: '13588887766', password: '888888'},
  {name: '田刚', position: '教务', phone: '15799995675', password: '666666'},
  {name: '张三', position: '前台', phone: '13588887766', password: '888888'},
  {name: '田刚', position: '教务', phone: '15799995675', password: '666666'},
  {name: '张三', position: '前台', phone: '13588887766', password: '888888'},
  {name: '田刚', position: '教务', phone: '15799995675', password: '666666'},
  {name: '张三', position: '前台', phone: '13588887766', password: '888888'},
  {name: '田刚', position: '教务', phone: '15799995675', password: '666666'},
  {name: '张三', position: '前台', phone: '13588887766', password: '888888'},

])

</script>
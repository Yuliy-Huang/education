<template>
  <table-component-once :user-column="columns" :table-data="tableData"
                        :is-show-operation="true"></table-component-once>
</template>
<script setup>
import tableComponentOnce from "@/components/tableComponentOnce.vue"
import {reactive} from "vue";


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

const tableData = reactive([
  {name: '田刚', position: '教务', phone: '15799995675', password: '666666'},
  {name: '张三', position: '前台', phone: '13588887766', password: '888888'},
])


</script>
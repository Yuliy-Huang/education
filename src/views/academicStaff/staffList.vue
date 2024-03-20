<template>
  <div class="staff-list">
    <div class="staff-head">
      <el-input
          v-model="searchValue"
          style="width: 300px; height: 30px;"
          placeholder="教务员工搜索"
          size="small"
          :suffix-icon="Search"
      />
    </div>
    <cellMoreComponent :col-count="6" :row-count="9" :data-list="staffList" :show-add="false" :show-del="false"
                       :page-type="pageType" @clickCell="clickCell"/>
  </div>
</template>
<script setup>
import {ref, defineProps, toRefs, defineEmits} from "vue"
import cellMoreComponent from "@/components/cellMoreComponent.vue"
import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  pageType: {
    type: String,
    default: ''
  }
})

const {pageType} = toRefs(props)
const emits = defineEmits(['changeTab']);

const staffList = ref(['张三［前台］', '李四毛【经理］'])
const searchValue = ref('')

const clickCell = () => {
  if (pageType.value === 'infoModify') {
    emits('changeTab', 'infoArchiveModify')
  } else if (pageType.value === 'infoSee') {
    emits('changeTab', 'infoSeeFile')
  }
}

</script>
<style lang="less">
@import "@/assets/css/academicStaff/staffListCss";
</style>
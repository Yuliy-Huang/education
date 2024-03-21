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
    <cellMoreComponent
      :col-count="6"
      :row-count="9"
      :data-list="staffList"
      :show-add="false"
      :show-del="false"
      :page-type="pageType"
      @clickCell="clickCell"
    />
  </div>
</template>
<script setup>
import { defineProps, toRefs, defineEmits } from "vue"
import cellMoreComponent from "@/components/cellMoreComponent.vue"
import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  pageType: {
    type: String,
    default: ''
  },
  staffList: {
    type: Array,
    default: () => { }
  },
  searchValue: {
    type: String,
    default: ''
  }
})

const { pageType } = toRefs(props)
const emits = defineEmits(['changeTab']);

const clickCell = () => {
  if (pageType.value === 'infoModify') {
    emits('changeTab', 'infoArchiveModify')
  } else if (pageType.value === 'infoSee') {
    emits('changeTab', 'infoSeeFile')
  } else if (pageType.value === 'staffDimission') {
    emits('changeTab', 'staffConfirmDimission')
  }
}

</script>
<style lang="less">
@import "@/assets/css/cellListComponentCss.less";
</style>
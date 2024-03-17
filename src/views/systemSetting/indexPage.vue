<template>
  <div class="system-setting">
    <sliderComponent
        :active-tag="activeTag"
        :show-edit="showEdit"
        @updateShowEdit="updateShowEdit"
        @changeActiveTag="changeActiveTag"
    />
    <div class="system-setting-side">
      <div class="top-button" @click="close2NotDim">
        <el-icon>
          <Close/>
        </el-icon>
      </div>
      <div class="top-button-1" @click="back2LastDiv" >
        <el-icon>
          <Back/>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, inject} from 'vue';
import sliderComponent from '@/components/sliderComponent.vue'
import {Back, Close} from "@element-plus/icons-vue";

const activeTag = ref(null)
const showEdit = ref(false)

const updateShowEdit = () => {
  showEdit.value = !showEdit.value
}

const globalVars = inject('globalVars')

const changeActiveTag = (v) => {
  showEdit.value = activeTag.value === v ? showEdit.value : false
  switch (v) {
    case '岗位人员权限设置':
      globalVars.isDim = globalVars.showSub === '0' ? '0' : '1'
      break
    default:
      globalVars.isDim = '1'
  }
  activeTag.value = v
}

const close2NotDim = () => {
  activeTag.value = null
  globalVars.isDim = '0'
}

const back2LastDiv = () => {
  showEdit.value = false
}

</script>
<style lang="less">
@import "@/assets/css/systemSettingCss";
</style>

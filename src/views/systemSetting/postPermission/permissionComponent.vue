<template>
  <div class="permission-setting">
    <div class="up-setting-div">
      <div :class="className">
        <div class="text-check" v-for="(item, index) in blockList" :key="index">
          <div class="text-left">{{ item }}&nbsp;</div>
          <div class="check-right">
            <el-checkbox v-model="checkList[index]" @change="changeSingle"></el-checkbox>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-setting-div">
      <div class="left-check">
        <el-checkbox checked disabled>代表有权查看</el-checkbox>
        <el-checkbox disabled>代表无权查看</el-checkbox>
      </div>
      <div class="right-check">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate"
                     @change="handleCheckAllChange">全选
        </el-checkbox>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref, defineProps, computed, toRefs} from 'vue'

const props = defineProps({
  blockList: {
    type: Array,
    default: () => {
    },
    required: true
  }
})

const {blockList} = toRefs(props)

const className = computed(() => {
  return 'middle-checkout-' + blockList.value.length.toString()
})

const checkList = ref(Array(blockList.value.length).fill(false))

const checkAll = ref(false)
const isIndeterminate = ref(true)

const handleCheckAllChange = (val) => {
  checkAll.value = val
  checkList.value = val ? Array(blockList.value.length).fill(true) : Array(blockList.value.length).fill(false)
  console.log('checkList.value : ', checkList.value)
  isIndeterminate.value = false
}

const changeSingle = (value) => {
  console.log('changeSingle -- value : ', value)
  const checkedCount = checkList.value.filter(item => item).length
  console.log('changeSingle -- checkedCount : ', checkedCount)
  checkAll.value = checkedCount === blockList.value.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < blockList.value.length
}

</script>
<style scoped lang="less">
@import "@/assets/css/systemSetting/permissionComponentCss";
</style>

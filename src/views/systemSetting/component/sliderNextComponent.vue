<template>
  <div class="slider-inside-div">
    <div class="slide-inside-head">
      <div class="arrow-left">
        <span class="inside-img-div" @click="reduceShowTag">
          <img :src="require(`@/assets/img/arrowLeft.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>

      <template v-for="(item, index) in showTags" :key="index">
        <div :class="activeTag === item ? 'inside-title-div-active' : 'inside-title-div'" @click="changeTag(item)">
          <span class="inside-div">{{ item }}</span>
        </div>
      </template>
      <template v-if="showTags.length < 4">
        <div :class="activeTag === item ? 'inside-title-div-active' : 'inside-title-div'"
             v-for="(item, index) in (4-showTags.length)"
             :key="index">
          <span class="inside-div"></span>
        </div>
      </template>

      <div class="arrow-right">
        <span class="inside-img-div" @click="addShowTag">
          <img :src="require(`@/assets/img/arrowRight.png`)"
               style="width: 20px; height: 12px;"
               alt=""/>
        </span>
      </div>
    </div>
    <div class="setting-inside-content" v-if="activeTag !== null && showDiv">
      <component :is="currentCom"/>
    </div>
  </div>
</template>
<script setup>
import {defineProps, defineEmits, inject, onMounted, ref, toRefs, watch, markRaw} from "vue";
import permissionSystem from '@/views/systemSetting/postPermission/permissionSystem.vue'
import permissionArchive from '@/views/systemSetting/postPermission/permissionArchive.vue'
import permissionCheckout from '@/views/systemSetting/postPermission/permissionCheckout.vue'
import permissionDaily from '@/views/systemSetting/postPermission/permissionDaily.vue'
import permissionDetail from '@/views/systemSetting/postPermission/permissionDetail.vue'
import permissionFinance from '@/views/systemSetting/postPermission/permissionFinance.vue'
import permissionProduct from '@/views/systemSetting/postPermission/permissionProduct.vue'
import permissionQueryManage from '@/views/systemSetting/postPermission/permissionQueryManage.vue'
import permissionSignIn from '@/views/systemSetting/postPermission/permissionSignIn.vue'
import permissionStaff from '@/views/systemSetting/postPermission/permissionStaff.vue'
import permissionStudent from '@/views/systemSetting/postPermission/permissionStudent.vue'
import permissionTeacher from '@/views/systemSetting/postPermission/permissionTeacher.vue'

const props = defineProps({
  showDiv: {
    type: Boolean,
    default: false
  }
})
const {showDiv} = toRefs(props)

const emit = defineEmits(['changeNext', 'changeShowDiv'])

const activeTag = ref(null)
const showIndex = ref(0)

const addShowTag = () => {
  showIndex.value = showIndex.value + 4 < titleList.value.length ? showIndex.value + 4 : Math.floor((titleList.value.length - 1) / 4) * 4
}

const reduceShowTag = () => {
  showIndex.value = showIndex.value - 4 >= 0 ? showIndex.value - 4 : 0
}

const currentCom = ref(null)
const globalVars = inject('globalVars')
const titleList = ref([
  {name: '系统设置', comName: markRaw(permissionSystem)},
  {name: '教务员工', comName: markRaw(permissionStaff)},
  {name: '代课教师', comName: markRaw(permissionTeacher)},
  {name: '校区学员', comName: markRaw(permissionStudent)},
  {name: '查询管理', comName: markRaw(permissionQueryManage)},
  {name: '管理存档', comName: markRaw(permissionArchive)},
  {name: '日常归档', comName: markRaw(permissionDaily)},
  {name: '明细查看', comName: markRaw(permissionDetail)},
  {name: '商品查看', comName: markRaw(permissionProduct)},
  {name: '财务统计', comName: markRaw(permissionFinance)},
  {name: '上班打卡', comName: markRaw(permissionSignIn)},
  {name: '校区结账', comName: markRaw(permissionCheckout)},
])

const changeTag = (v) => {
  // globalVars.showSub = '1'
  activeTag.value = v
  globalVars.isDim = '1'
  emit('changeNext', false)
  emit('changeShowDiv', true)

  for (let i = 0; i < titleList.value.length; i++) {
    if (titleList.value[i].name === v) {
      currentCom.value = titleList.value[i].comName
      break
    }
  }
}

const showTags = ref([])
onMounted(() => {
  showTags.value = titleList.value.slice(showIndex.value, showIndex.value + 4).map(item => {
    return item.name
  })
})
watch(showIndex, () => {
  showTags.value = showIndex.value + 4 < titleList.value.length ? titleList.value.slice(showIndex.value, showIndex.value + 4).map(item => {
    return item.name
  }) : titleList.value.slice(showIndex.value, titleList.value.length).map(item => {
    return item.name
  })
})
watch(showDiv, () => {
  if (!showDiv.value) {
    activeTag.value = null
    globalVars.isDim = '0'
  }
})


</script>
<style lang="less">
@import "@/assets/css/systemSetting/sliderInsideComponentCss";
</style>
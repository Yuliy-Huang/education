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
      <permissionComponent :block-list="currentBlockList"/>
    </div>
  </div>
</template>
<script setup>
import {defineProps, defineEmits, inject, onMounted, ref, toRefs, watch} from "vue";
import permissionComponent from '@/views/systemSetting/postPermission/permissionComponent.vue'

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

const currentBlockList = ref([])
const globalVars = inject('globalVars')
const titleList = ref([
  {name: '系统设置', blocks: [
      '岗位人员登陆设置', '岗位人员权限设置', '教务端登录设置', '填写所有专业', '提前续费通知设置', '前台电话添加设置', '上课签到权限设置', '学员缴费收款设置', '提前上课通知设置', '专业考级等输入', '家长端APP购物设置', '桌面系统背景设置', '使用说明视频讲解', '校区所有数据导出', '视频会议直播设置', '各年份数据查看']},
  {name: '教务员工', blocks: ['教务档案存档', '教务档案查看', '教务档案修改', '教务离职办理']},
  {name: '代课教师', blocks: ['教务档案存档', '教务档案查看', '教务档案修改', '教务离职办理']},
  {name: '校区学员', blocks: ['学院专业人数', '学员课时统计', '学员档案查看', '学院退学管理']},
  {name: '查询管理', blocks: ['专业级别学员统计', '教师考级学员统计', '教师单节课费统计', '教师学员课表查看', '学员每月作业查看', '学员课时明细查看']},
  {name: '管理存档', blocks: ['其他扣费入档', '其他付费入档', '销售提成入档', '绩效奖金入档']},
  {name: '日常归档', blocks: ['日常开销归档', '日常收入归档', '商品销售归档', '商品进货归档']},
  {name: '明细查看', blocks: ['日常开销明细', '日常收入明细', '商品销售明细', '商品进货明细']},
  {name: '商品查看', blocks: ['商品查看']},
  {name: '财务统计', blocks: ['全年收入统计', '全年支出统计', '全年报表统计']},
  {name: '上班打卡', blocks: ['代课教师上班打卡', '教务员工上班打卡']},
  {name: '校区结账', blocks: ['教师工资结算', '教务工资结算', '退费学员结算', '商家进货结算']},
])

const changeTag = (v) => {
  // globalVars.showSub = '1'
  activeTag.value = v
  globalVars.isDim = '1'
  emit('changeNext', false)
  emit('changeShowDiv', true)

  for (let i = 0; i < titleList.value.length; i++) {
    if (titleList.value[i].name === v) {
      currentBlockList.value = titleList.value[i].blocks
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
<style scoped lang="less">
@import "@/assets/css/systemSetting/sliderInsideComponentCss";
</style>
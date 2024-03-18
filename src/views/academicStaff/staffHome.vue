<template>
  <div class="staff">
    <div class="academic-staff">
      <div class="home" v-if="pageType === 'home'">
        <div class="one-block">
          <div class="up-block" @click="infoArchive">教务档案存档</div>
          <div class="down-block">
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
            <span>3</span>
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          </div>
        </div>
        <div class="one-block">
          <div class="up-block" @click="infoSee">教务档案查看</div>
          <div class="down-block">
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
            <span>1</span>
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          </div>
        </div>
        <div class="one-block">
          <div class="up-block" @click="infoModify">教务档案修改</div>
          <div class="down-block">
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
            <span>2</span>
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          </div>
        </div>
        <div class="one-block">
          <div class="up-block" @click="infoDimission">教务离职办理</div>
          <div class="down-block">
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
            <span>1</span>
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          </div>
        </div>
      </div>

      <staffArchiveComponent v-else-if="pageType === 'infoArchive'"/>


    </div>
  </div>
</template>
<script setup>
import {inject, defineProps, defineEmits, toRefs} from "vue";
import staffArchiveComponent from "./staffArchiveComponent.vue"
const props = defineProps({
  pageType: {
    type: String,
    default: ''
  },
})

const {pageType} = toRefs(props)
const emit = defineEmits(['changeTab'])

const globalVars = inject('globalVars')
globalVars.isDim = '1'

const infoArchive = () => {
  emit('changeTab', 'infoArchive')
}

const infoSee = () => {
  emit('changeTab', 'infoSee')
}

const infoModify = () => {
  emit('changeTab', 'infoModify')
}

const infoDimission = () => {
  emit('changeTab', 'infoDimission')
}


</script>
<style scoped lang="less">
@import "@/assets/css/academicStaff/staffHomeCss";
</style>
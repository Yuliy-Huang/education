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
          <div class="up-block" @click="infoModify">教务离职办理</div>
          <div class="down-block">
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
            <span>1</span>
            <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          </div>
        </div>
      </div>
      <div class="edit" v-else>

      </div>
    </div>
  </div>
</template>
<script setup>
import {inject, defineProps, defineEmits, toRefs} from "vue";

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
  pageType.value = 'home'
  emit('changeTab', 'infoArchive')
}

const infoSee = () => {
  pageType.value = 'home'
  emit('changeTab', 'infoSee')
}

const infoModify = () => {
  pageType.value = 'home'
  emit('changeTab', 'infoModify')
}


</script>
<style lang="less">
@import "@/assets/css/academicStaff/indexCss";
</style>
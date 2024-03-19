<template>
    <div class="home">
      <div class="one-block">
        <div class="up-block" @click="changePage('infoArchive')">教务档案存档</div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>3</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
      <div class="one-block">
        <div class="up-block" @click="changePage('infoSee')">教务档案查看</div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>1</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
      <div class="one-block">
        <div class="up-block" @click="changePage('infoModify')">教务档案修改</div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>2</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
      <div class="one-block">
        <div class="up-block" @click="changePage('infoDimission')">教务离职办理</div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>1</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
    </div>
</template>
<script setup>
import {inject, defineEmits} from "vue";

const emits = defineEmits(['changeTab'])

const globalVars = inject('globalVars')
globalVars.isDim = '1'

const changePage = (v) => {
  console.log('staffHome --- changePage --- v : ', v)
  emits('changeTab', v)
}

</script>
<style scoped lang="less">
@import "@/assets/css/academicStaff/staffHomeCss";
</style>
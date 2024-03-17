<template>
  <div class="academic-staff">
    <div class="home">
      <div class="one-block">
        <div class="up-block">教务档案存档</div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>3</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
      <div class="one-block">
        <div class="up-block">教务档案查看</div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>1</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
      <div class="one-block">
        <div class="up-block">教务档案修改</div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>2</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
      <div class="one-block">
        <div class="up-block">教务离职办理</div>
        <div class="down-block">
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
          <span>1</span>
          <div class="link-mid" v-for="idx in 13" :key="idx"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import {inject} from "vue";

const globalVars = inject('globalVars')
globalVars.isDim = '1'

</script>
<style lang="less">
@import "@/assets/css/academicStaff/indexCss";
</style>
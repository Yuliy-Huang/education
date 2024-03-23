<template>
  <div class="teacher-info-royalty">
    <div class="info-royalty">
      <div class="block-left">
        <div><span>给教师按正常课时结算</span></div>
        <div><span>给教师按优惠课时结算</span></div>
      </div>
      <div class="mid-arrow">
        <img
          :src="require(`@/assets/img/arrowRight.png`)"
          style="width: 25px; height: 15px"
          alt=""
        />
      </div>
      <div class="block-right">
        <div class="block-item">
          <div>
            &lt;2&gt; 一对一比例模式
            <el-input v-model="ratio" placeholder="" readonly />
            %
          </div>
          <div>
            &lt;2&gt; 一对一比例模式
            <el-input v-model="ratio" placeholder="" readonly />
            %
          </div>
        </div>
        <div class="block-item">
          <div>
            &lt;2&gt; 一对一比例模式
            <el-input v-model="ratio" placeholder="" readonly />
            %
          </div>
          <div>
            &lt;2&gt; 一对一比例模式
            <el-input v-model="ratio" placeholder="" readonly />
            %
          </div>
        </div>
        <div class="block-item">
          <div>
            &lt;2&gt; 一对一比例模式
            <el-input v-model="ratio" placeholder="" readonly />
            %
          </div>
          <div>
            &lt;2&gt; 一对一比例模式
            <el-input v-model="ratio" placeholder="" readonly />
            %
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const ratio = ref(20);
</script>
<style lang="less">
@import '@/assets/css/substituteTeacher/teacherInfoSeeRoyaltyCss.less';
</style>

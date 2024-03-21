<template>
  <div class="staff-info-salary">
    <div class="row1"></div>
    <div class="row2">
      <div class="col-left">
        <div class="salary-detail-left">
          <div>基本底薪：</div>
          <div>销售提成：</div>
          <div>绩效奖金：</div>
          <div>其他付费：</div>
          <div>其他扣费：</div>
        </div>
        <div class="salary-detail-right">
          <div>{{ form.base }}
            <el-checkbox v-model="form1.base"/>
          </div>
          <div>{{ form.royalty }}
            <el-checkbox v-model="form1.royalty" checked/>
          </div>
          <div>{{ form.bonus }}
            <el-checkbox v-model="form1.bonus"/>
          </div>
          <div>{{ form.pay }}
            <el-checkbox v-model="form1.pay"/>
          </div>
          <div>{{ form.feeDeduction }}
            <el-checkbox v-model="form1.feeDeduction"/>
          </div>
        </div>
      </div>
      <div class="col-right">
        <span>2023年1月工资总计6860元</span>
      </div>
    </div>
    <div class="row3"></div>
  </div>
</template>
<script setup>
import {reactive} from "vue";
const form = reactive({
  base: '2000元',
  royalty: '1380元',
  bonus: '1200元',
  pay: '80元',
  feeDeduction: '100元',
})

const form1 = reactive({
  base: false,
  royalty: false,
  bonus: false,
  pay: false,
  feeDeduction: false,
})


</script>
<style lang="less">
@import "@/assets/css/academicStaff/staffInfoSeeSalaryCss";
</style>
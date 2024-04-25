<template>
  <div class="two-line-title">
    <div class="first-line">
      <div class="first-col">
        <span class="inner-img-div" @click="changeYear(-1)">
          <img
            :src="require(`@/assets/img/arrowLeft.png`)"
            style="width: 20px; height: 12px; cursor: pointer"
            alt=""
          />
        </span>
      </div>
      <div class="first-col" v-if="title">
        {{ props.title }}
      </div>
      <div class="first-col" v-else>
        <span class="search-head">
          <el-input
            v-model="searchValue"
            style="
              width: 300px;
              height: 100%;
              background-color: var(--dark-grey-custom-2);
            "
            :placeholder="placeholder"
            size="small"
            :suffix-icon="Search"
          />
        </span>
      </div>
      <div class="first-col">
        <span class="inner-img-div" @click="changeYear(1)">
          <img
            :src="require(`@/assets/img/arrowRight.png`)"
            style="width: 20px; height: 12px; cursor: pointer"
            alt=""
          />
        </span>
      </div>
    </div>
    <div :class="'second-line-' + cutNum" v-if="title">
      <div class="second-col" v-for="idx in cutNum" :key="idx">
        {{
          props.dataList[idx - 1]
            ? props.dataList[idx - 1].major +
              '[' +
              props.dataList[idx - 1].count +
              ']' +
              '人'
            : ''
        }}
      </div>
    </div>
    <div :class="'second-line-' + cutNum" v-else>
      <div class="second-col" v-for="idx in cutNum" :key="idx">
        {{ props.dataList[idx - 1] ? props.dataList[idx - 1] : '' }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import { Search } from '@element-plus/icons-vue';

const props = defineProps({
  title: String,
  cutNum: {
    type: Number,
    default: 8,
  },
  dataList: {
    type: Array,
    default: () => {},
  },
  placeholder: {
    type: String,
    default: '校区学员搜索：'
  }
});
</script>
<style lang="less">
@import '@/assets/css/twoLineTitleComponentCss.less';
</style>

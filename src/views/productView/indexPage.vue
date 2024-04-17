<template>
  <pageStructureComponent
    :pageType="'home'"
    :isSeparate="false"
    :hasUpper="true"
    @close2NotDim="close2NotDim"
    @back2LastDiv="back2LastDiv"
  >
    <div class="pic-table-upper">
      <span class="search-upper">
        <el-input
          v-model="searchValue"
          style="
            width: 300px;
            height: 100%;
            background-color: var(--dark-grey-custom-2);
          "
          placeholder="商品搜索："
          size="small"
          :suffix-icon="Search"
        />
      </span>
    </div>
    <tableComponentPic
      :rowNum="1"
      :showHead="false"
      :table-data="tableData"
      :showRightBorder="true"
    />
  </pageStructureComponent>
</template>
<script setup>
import pageStructureComponent from '@/components/pageStructureComponent';
import tableComponentPic from '@/components/tableComponentPic.vue';
import {reactive, ref} from 'vue';
import { Search } from '@element-plus/icons-vue';

const searchValue = ref('');
const tableData = reactive([
  {
    col1: require(`@/assets/img/qr/img.jpg`),
    col2: require(`@/assets/img/qr/img.jpg`),
    col3: require(`@/assets/img/qr/img.jpg`),
    col4: require(`@/assets/img/qr/img.jpg`),
    col5: require(`@/assets/img/qr/img.jpg`),
    col6: require(`@/assets/img/qr/img.jpg`),
  },
  {
    col1: require(`@/assets/img/qr/img.jpg`),
    col2: require(`@/assets/img/qr/img.jpg`),
    col3: require(`@/assets/img/qr/img.jpg`),
    col4: require(`@/assets/img/qr/img.jpg`),
    col5: require(`@/assets/img/qr/img.jpg`),
    col6: require(`@/assets/img/qr/img.jpg`),
  },
]);

const close2NotDim = () => {
};

const back2LastDiv = () => {

}

</script>
<style scoped>
@import '@/assets/css/productView/indexPageCss.less';
</style>

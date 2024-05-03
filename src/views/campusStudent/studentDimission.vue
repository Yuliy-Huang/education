<template>
  <div class="student-number">
    <twoLineTitleComponent :title="title" :dataList="dataList" :cutNum="12" />
    <div class="student-table">
      <cellSearchComponent
        :page-type="props.pageType"
        :staffList="staffList"
        :placeholder="'校区学员搜索'"
        :rowCount="9"
        :colCount="8"
        @changeTab="changePageTab"
      />
    </div>
  </div>
</template>
<script>
import twoLineTitleComponent from '@/components/twoLineTitleComponent.vue';
import cellSearchComponent from '@/components/cellSearchComponent.vue';
import { ref, toRefs } from 'vue';
export default {
  components: {
    twoLineTitleComponent,
    cellSearchComponent,
  },
  props: {
    pageType: String,
  },
  setup(props, { emit }) {
    const title = '全年每月退学名单统计';

    const dataList = ref([
      { major: '第1月', count: 3 },
      { major: '第2月', count: 6 },
      { major: '第3月', count: 0 },
      { major: '第4月', count: 0 },
    ]);
    const staffList = ref(['刘德华[学生]', '梁朝伟[学生]']);

    const changePageTab = v => {
      console.log('11111111 v : ', v);
      emit('changeTab', v);
    };

    return {
      props,
      ...toRefs({ title, dataList, staffList }),
      changePageTab,
    };
  },
};
</script>
<style scoped>
@import '@/assets/css/campusStudent/studentNumberCss.less';
</style>

<template>
  <div class="student-number">
    <twoLineTitleComponent :title="title" :dataList="dataList" :cutNum="8" />
    <div class="student-table">
      <cellSearchComponent
        :page-type="props.pageType"
        :staffList="staffList"
        :placeholder="'校区学员搜索'"
        :rowCount="9"
        :colCount="8"
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
  setup(props) {
    const total = ref(300);
    const title = '学校六个专业［共' + total.value + '人］学员统计表';
    const dataList = ref([
      { major: '钢琴', count: 50 },
      { major: '吉他', count: 50 },
      { major: '架子鼓', count: 30 },
    ]);
    const staffList = ref(['刘德华', '梁朝伟']);

    return {
      props,
      ...toRefs({ title, dataList, staffList }),
    };
  },
};
</script>
<style scoped>
@import '@/assets/css/campusStudent/studentNumberCss.less';
</style>

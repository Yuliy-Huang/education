<template>
  <pageStructureComponent
      :pageType="'home'"
      :isSeparate="isSeparate"
      @close2NotDim="close2NotDim"
      @back2LastDiv="back2LastDiv"
  >
    <component
        :is="currentCom"
        :page-type="pageType"
        @changeTab="changeTab"
        :blockList="blockList"
        :rowNum="12"
        :user-column="columns"
        :table-data="tableData"
        :is-show-operation="false"
        :operation-list="operationList"
        :is-show-add="true"
        @addFunc="clickAddFunc"
        :showHeader="true"
        @clickCell="showPic"
        :showRightBorder="true"
        :showGreen="true"
    />

    <el-dialog :title="imageTitle" v-model="dialogVisible" style="height: 300px; width: 400px;">
      <el-image :src="imageUrl" style="height: 80%; object-fit: contain;"></el-image>
    </el-dialog>

  </pageStructureComponent>
</template>

<script setup>
import {markRaw, reactive, ref, watch} from 'vue';
import pageStructureComponent from '@/components/pageStructureComponent';
import blocksComponent from '@/components/blocksComponent';
import tableComponentOnce from '@/components/tableComponentOnce.vue';

const pageType = ref('home');
const isSeparate = ref(false);
const blockList = ref([
  {name: '日常开销明细', pageType: 'page1', count: 3},
  {name: '日常收入明细', pageType: 'page2', count: 0},
  {name: '商品销售明细', pageType: 'page3', count: 1},
  {name: '商品进货明细', pageType: 'page4', count: 0},
]);
let tableData = reactive([]);
let columns = ref([])
const theFrom = ref('')
const dialogVisible = ref(false)
const imageUrl = ref('')
const imageTitle = ref('')
const showPic = (row) => {
  dialogVisible.value = true
  console.log('showPic --- row : ', row)
  imageUrl.value = row.imageUrl
  imageTitle.value = row.name + '照片'
}
const changeTab = (from, to) => {
  console.log('dailyFilling --- indexPage.vue --- from : ', from);
  console.log('dailyFilling --- indexPage.vue --- to : ', to);
  if (to.endsWith('-new')) {
    pageType.value = to;
    theFrom.value = from;
  } else if (from === 'home' || !from) {
    pageType.value = to;
  } else {
    pageType.value = to;
  }
  switch (pageType.value) {
    case 'page1':
      columns.value = [
        {
          label: '入档员工',
          prop: 'name',
          showGreenCheckBox: true,
        },
        {
          label: '入档名称',
          prop: 'archiveName',
          showGreenCheckBox: true,
        },
        {
          label: '开销价格',
          prop: 'price1',
        },
        {
          label: '入档目期',
          prop: 'date',
        },
        {
          label: '备注说明',
          prop: 'comment'
        }
      ]
      tableData = [
        {
          name: '刘文【前台］',
          archiveName: '水费',
          price1: '150',
          date: '2023.5.6',
          comment: '交了半年水费',
          imageUrl: require(`@/assets/img/qr/img.jpg`)
        },
      ];
      break;
    case 'page2':
      columns.value = [
        {
          label: '入档员工',
          prop: 'name',
          showGreenCheckBox: true,
        },
        {
          label: '入档名称',
          prop: 'archiveName',
          showGreenCheckBox: true,
        },
        {
          label: '开销价格',
          prop: 'price1',
        },
        {
          label: '入档目期',
          prop: 'date',
        },
        {
          label: '备注说明',
          prop: 'comment'
        }
      ]
      tableData = [
        {
          name: '刘文【前台］',
          archiveName: '水费',
          price1: '150',
          date: '2023.5.6',
          comment: '交了半年水费',
        },
      ];
      break;
    case 'page3':
      columns.value = [
        {
          label: '入档员工',
          prop: 'name',
          showGreenCheckBox: true,
        },
        {
          label: '入档名称',
          prop: 'archiveName',
          showGreenCheckBox: true,
        },
        {
          label: '开销价格',
          prop: 'price1',
        },
        {
          label: '入档目期',
          prop: 'date',
        },
        {
          label: '备注说明',
          prop: 'comment'
        }
      ]
      tableData = [
        {
          name: '刘文【前台］',
          archiveName: '水费',
          price1: '150',
          date: '2023.5.6',
          comment: '交了半年水费',
        },
      ];
      break;
    case 'page4':
      columns.value = [
        {
          label: '商品名称',
          prop: 'name',
          showGreenCheckBox: true,
        },
        {
          label: '剩余库存',
          prop: 'leftNum',
        },
        {
          label: '开销价格',
          prop: 'price1',
        },
        {
          label: '入档目期',
          prop: 'date',
        },
        {
          label: '备注说明',
          prop: 'comment'
        }
      ]
      tableData = [
        {
          name: '刘文【前台］',
          leftNum: '2',
          price1: '150',
          date: '2023.5.6',
          comment: '交了半年水费',
        },
      ];
      break;
    default:
      tableData.value = [];
  }
};

const close2NotDim = () => {
  changeTab('', 'home');
};

const back2LastDiv = () => {
  switch (pageType.value) {
    case 'page1-new':
    case 'page2-new':
    case 'page3-new':
    case 'page4-new':
      changeTab(pageType.value, pageType.value.split('-')[0]);
      break;
    default:
      changeTab('', 'home');
  }
};

const currentCom = ref(markRaw(blocksComponent));
watch(pageType, () => {
  switch (pageType.value) {
    case 'page1':
    case 'page2':
    case 'page3':
    case 'page4':
      currentCom.value = markRaw(tableComponentOnce);
      break;
    default:
      currentCom.value = markRaw(blocksComponent);
  }
});
const clickAddFunc = () => {
  console.log('dailyFilling --- clickAddFunc');
  switch (pageType.value) {
    case 'page1':
    case 'page2':
    case 'page3':
    case 'page4':
      changeTab(pageType.value, pageType.value + '-new')
      break;
    default:
      changeTab('', 'home');
  }
};
const operationList = [
  {title: '入档', type: 'info', callBack: clickAddFunc},
]
</script>
<style scoped lang="less"></style>


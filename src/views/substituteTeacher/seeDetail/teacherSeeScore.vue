<template>
  <div class="teacher-info-score">
    <div
      ref="scoreChart"
      class="score-chart"
    ></div>
  </div>
</template>
<script setup>
import { nextTick, onMounted, ref } from "vue";
import * as echarts from 'echarts'

const scoreChart = ref(null);
onMounted(() => {
  nextTick(() => {
    const option = {
      grid: {
        top: '36%',
        left: '-1%',
        right: '-1%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['好评', '中评', '差评', '极差'],
        show: true,
        boundaryGap: ['10%', '10%'],    // 坐标轴两边留白策略
        axisLine: {
          lineStyle: {
            color: '#5e5e5ec9',    // 坐标轴线线的颜色
          }
        },
        axisLabel: {
          show: true,
          fontSize: '16',
        },
        axisTick: {
          show: false,
        }
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [{
        data: [45, 37, 30, 9],
        type: 'bar',
        barWidth: '40%',
        itemStyle: {
          normal: {
            borderRadius: [6, 6, 0, 0],
            color: function (params) {
              var colorList = ['#2897198f', '#95590da1', '#432808b3', '#9a2623b0'];
              return colorList[params.dataIndex]
            }
          },
        }
      }]
    };

    const chartInstance = echarts.init(scoreChart.value);
    chartInstance.setOption(option);
    window.addEventListener('resize', function () {
      chartInstance.resize();
    });
  });
});

</script>
<style lang="less">
@import "@/assets/css/substituteTeacher/teacherInfoSeeScoreCss.less";
</style>
<template>
  <div v-html="svgTab" class="svg-tab-div"></div>
</template>

<script>
export default {
  props: {
    svgTab: String,
    iconClass: {
      type: String,
      default: 'el-icon--left',
    },
  },
};
</script>

<style scoped>
.svg-tab-div {
  text-align: center;
  align-items: center;
}
</style>
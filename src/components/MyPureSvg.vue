<template>
  <div v-html="svgTab"></div>
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
/* CSS样式 */
</style>
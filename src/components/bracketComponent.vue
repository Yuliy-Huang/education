<template>
  <div class="brackets">
    <div></div>
  </div>
</template>

<script>
export default {
  // Vue 3 组件选项
};
</script>

<style scoped>
.brackets {
  position: relative;
  height: 100%;
}
.brackets::before,
.brackets::after,
.brackets ::before,
.brackets ::after {
  content: '';
  display: block;
  position: absolute;
  height: calc(50% - 10px);
  width: 10px;
  border-style: solid;
  border-color: var(--light-grey-custom);
  border-width: 0;
}
.brackets ::before {
  top: 10px;
  left: 0;
  border-right-width: 1px;
  border-bottom-right-radius: 10px;
}
.brackets ::after {
  left: 10px;
  border-left-width: 1px;
  border-top-left-radius: 10px;
}
.brackets::before {
  left: 0;
  bottom: 10px;
  border-right-width: 1px;
  border-top-right-radius: 10px;
}
.brackets::after {
  left: 10px;
  bottom: 0;
  border-left-width: 1px;
  border-bottom-left-radius: 10px;
}
</style>
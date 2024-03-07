<template>
  <div id="appMain">
    <router-view />
  </div>
</template>

<script>

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

html,
body,
#app,
.el-container {
  height: 100%;
  margin: 0 !important;
}
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--light-grey-custom);
  margin-top: 40px;
  font-size: calc(100vw * 22 / 1920);
}
#appMain {
  height: 100%;
  background-color: var(--dark-grey-custom);

}
</style>

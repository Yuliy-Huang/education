<template>
  <div id="appMain">
    <router-view />
<!--    <scale-box :width="1920" :height="1080" bgc="transparent" :delay="100" :isFlat="false">-->
<!--      -->
<!--    </scale-box>-->
  </div>
</template>

<script>
// import ScaleBox from "vue3-scale-box";
//
// export default {
//   components: { ScaleBox },
// };
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
}
#appMain {
  height: 100%;
  background-color: var(--dark-grey-custom);

}

//main {
//  background-image: url('./assets/img/background.jpg');
//  background-size: contain;
//  background-position: center center;
//  background-repeat: no-repeat;
//}
</style>

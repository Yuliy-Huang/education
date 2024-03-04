const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const name = 'education' // page title

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        /* eslint-disable */
        additionalData: `@import "~@/assets/css/variables.scss";`,
      }
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        // 设置@/的意义
        '@': resolve('src')
      }
    }
  },
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: "https://api.education.com/api",
  //       changOrigin:true,
  //       secure: true,
  //       pathRewrite:{
  //         '^/api': ''
  //       }
  //     },
  //   },
  // },
})

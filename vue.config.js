const { defineConfig } = require('@vue/cli-service');


module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 9000,
    open: true,
    proxy: {
      '/api': {
        //websocket
        ws: false,
        //目标地址
        target: 'http://localhost:9001/',
        //发送请求头host会被设置成target
        changeOrigin: true,
        //重写请求地址
        pathRewrite: {
          '^/api':''
        }
      }
    }
  }
});

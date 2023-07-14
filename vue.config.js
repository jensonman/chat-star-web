const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      'devUrl':{
        target: 'http://localhost:3000/',//测试环境
        changeOrigin: true,
        pathRewrite: {
          'devUrl':''
        }
      },
      'baseUrl':{
        target: 'http://3.106.127.105:3000/',//生产环境
        changeOrigin: true,
        pathRewrite: {
          'baseUrl':''
        }
      }
    }
  }
})

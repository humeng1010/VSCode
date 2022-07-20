const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: "http://localhost"
  // },
  // 开启代理服务(方式二)
  devServer: {
    proxy: {
      // "/api" 请求前缀 只要我们发送ajax请求的时候带了这个前缀，就去target目标地址获取数据
      "/api": {
        target: "http://localhost",
        pathRewrite: { '^/api': '' },// 通过正则表达式替换掉 /api
        ws: true,//用于支持websocket 默认开启
        changeOrigin: true//用于控制请求头中的Host值，保证和请求的地址是同一个端口号，默认就是开启的
      }
    }
  }
})

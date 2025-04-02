const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' : {
        target : serverOrigin, // 변경할 origin
        changeOrigin : true, //이게 중요함. ture로 해야 타켓이 변경됨.
        ws : false,
        pathRewrite : {'^/api' : '/'} // 경로 재작성
      }
    }
  }
})

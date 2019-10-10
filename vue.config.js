module.exports = {
  //基本路径
  publicPath : './',
  //输出文件目录
  outputDir: 'dist',
  //开发环境配置
  devServer: {
		host: '0.0.0.0',
		port: '8080',
    proxy:{
      '/api': {
        target: 'http://zhoulei.shop/sql/index.php/api/',   //后端接口地址
        changeOrigin: true,    //是否允许跨域
				ws:	true,
        pathRewrite: {
          '^/api': ''   //重写
        }
      },
    },
    open: true
  }
}
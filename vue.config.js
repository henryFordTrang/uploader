module.exports = {
    // 基本Url
    baseUrl: process.env.NODE_ENV === 'production' ? '././' : '/',
    // 打包路径
    outputDir: 'helloWorld',
    // 不打包Map
    productionSourceMap: false,
    devServer: {
      port: 9090,
      // 跨域代理
      proxy: {

        '/zyschool': {
  
          target: 'http://192.168.10.3:8080',
          ws: true,
          changeOrigin: true
        }
      }
    },
    // webpack配置
    chainWebpack: config => {
      // 使用cnpm可能会导致热更新失效，设置可恢复热更新
      config.resolve.symlinks(true);
      return config;
    }
  };
  
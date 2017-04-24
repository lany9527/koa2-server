// 配置文件

module.exports = {
  // 开发环境配置
  development: {
    mongo: {
      uri: 'mongodb://localhost:27017/test'
    },
    port: '8080'
  },
  // 生产环境配置
  production: {
    mongo: {
      uri: 'mongodb://localhost:27017/test'
    },
    port: '8080'
  }
}
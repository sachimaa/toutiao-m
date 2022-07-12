// postcss.config.js
module.exports = {
  plugins: {
    // 配置使用postcss-pxtorem插件
    // 把px转为rem
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}

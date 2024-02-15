const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: '/INTERNO.JS/'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/INTERNO.JS/' // note the trailing slash
    : '/'
})

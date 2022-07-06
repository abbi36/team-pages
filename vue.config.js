const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    'gallery': {
      entry: './src/pages/Gallery/main.js',
      template: 'public/index.html',
      title: 'Gallery',
      chunks: [ 'chunk-vendors', 'chunk-common', 'gallery' ]
    },
    'details': {
      entry: './src/pages/Details/main.js',
      template: 'public/index.html',
      title: 'Details',
      chunks: [ 'chunk-vendors', 'chunk-common', 'details' ]
    }
  }
})

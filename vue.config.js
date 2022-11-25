const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // devServer: {
  //   proxy:''
  // }
})
// module.exports = {
//   devServer: {
//     https: true
//   }
// }
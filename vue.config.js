// const path = require('path');
// module.exports = {
//     resolve: {
//         alias: {
//             'src': path.resolve(__dirname, 'src/'),
//             'assets':path.resolve(__dirname,'src/assets'),
//             // 'colors':path.resolve(__dirname,'src/assets/colors.scss')
//             // 'router':path.resolve(__dirname,),
//             // 'assets':path.resolve(__dirname,),
//             // 'assets':path.resolve(__dirname,)
//         }
//     }
// }







const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.resolve(__dirname, 'src/'),
        'assets':path.resolve(__dirname,'src/assets'),
        'components': path.resolve(__dirname,'src/components'),
        'router':path.resolve(__dirname,'src/router'),
        'services':path.resolve(__dirname,'src/services')
      }
    }
  }
}
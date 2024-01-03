const path = require('path'); //importing path to make it easier to work with filepaths later

module.exports = {
    entry: './client/index.js', //this tells webpack to use the index.js file 
    //to begin building out the dependency graph of the app

    output: { 
        path: path.resolve(__dirname, 'build'), //this code tells you to put the file in the build folder
        filename: 'bundle.js', //and name the filename bundle.js
        publicPath: '/build/', //specifies the base path for all assets in the application
    },

    mode: 'production',
    module:{
      rules: [
        {
          test: /\.(?:js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ],
    }
}
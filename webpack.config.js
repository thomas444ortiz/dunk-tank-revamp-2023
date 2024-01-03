const path = require('path'); //importing path to make it easier to work with filepaths later

module.exports = {
    entry: './client/index.js', //this tells webpack to use the index.js file 
    //to begin building out the dependency graph of the app

    output: { 
        path: path.resolve(__dirname, 'build'), //this code tells you to put the file in the build folder
        filename: 'bundle.js', //and name the filename bundle.js
        publicPath: '/build/', //specifies the base path for all assets in the application (previously /build/)
    },

    mode: 'development', //changed from production to development
    //mode: 'production', //changed from production to development
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
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        }
      ],
    },
    devServer: { //configures some settings for the dev server
      static: {
        directory: path.join(__dirname), //pulls all the info from the main directory (instead of build directory) for dev server
      },
      port: 8080, //tells us its on port 8080
    },
}
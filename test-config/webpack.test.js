var webpack = require('webpack');
var path = require('path');
const chalk = require("chalk");
const fs = require('fs');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    alias: {
      "@app": path.resolve('./src/app/'),
      "@assets": path.resolve('./src/assets/'),
      "@env": path.resolve(environmentPath()),
      "@pages": path.resolve('./src/pages/'),
      "@services": path.resolve('./src/services/'),
      "@tests": path.resolve('./src/'),    
      "@theme": path.resolve('./src/theme/')
    },
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
        test: /\.ts$/,
        loaders: [{
          loader: 'ts-loader'
        }, 'angular2-template-loader']
      },
      {
        test: /.+\.ts$/,
        exclude: /(index.ts|mocks.ts|\.spec\.ts$)/,
        loader: 'istanbul-instrumenter-loader',
        enforce: 'post',
        query: {
          esModules: true
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs=false'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /(ionic-angular)|(angular(\\|\/)core(\\|\/)@angular)/,
      root('./src'), // location of your src
      {} // a map of your routes
    )
  ]
};

function environmentPath(env) {
  envFileName = 'environment' + (!env ? '' : '.' + env) + '.ts';

  let filePath = './src/environments/' + envFileName;

  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}

function root(localPath) {
  return path.resolve(__dirname, localPath);
}

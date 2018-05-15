const chalk = require("chalk");
const fs = require('fs');
const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

/*
  If needed could get env from cli argument
  const env = require('minimist')(process.argv.slice(2)).env || process.env.IONIC_ENV || 'dev';
*/

const env = process.env.IONIC_ENV || 'dev';

console.log(chalk.yellow.bgBlack('\nUsing ' + env + ' environment variables.\n'));

useDefaultConfig[env].resolve.alias = {
  "@app": path.resolve('./src/app/'),
  "@assets": path.resolve('./src/assets/'),
  "@env": path.resolve(environmentPath(env)),
  "@pages": path.resolve('./src/pages/'),
  "@services": path.resolve('./src/services/'),
  "@tests": path.resolve('./src/'),    
  "@theme": path.resolve('./src/theme/')
};

function environmentPath(env) {

  let filePath = './src/environments/environment.' + env + '.ts';

  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}

module.exports = function () {
  return useDefaultConfig;
};
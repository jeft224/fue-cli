#!/usr/bin/env node // 这个文件使用node执行



const path = require('path');
const fs = require('fs');

const program = require('commander');
// const inquirer = require('inquirer')
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');

program
  .version('0.1.0')
  .option('-i, init [name]', '初始化fue项目')

program
  .parse(process.argv);

// const nameQuestion = {
//   type: 'input',
//   message: `项目名称: `,
//   name: 'name',
//   default: 'fe'
// };

// const versionQuestion = {
//   type: 'input',
//   message: `初始版本: `,
//   name: 'version',
//   default: '0.0.1'
// };

// const portQuestion = {
//   type: 'input',
//   message: `server端口: `,
//   name: 'port',
//   default: '3000'
// };
// console.log(program.init)
if(program.init){
  const spinner = ora('正在从github下载fe-vue').start();
  download('jeft224/fe-vue', program.init, function (err) {
    if(!err){
      // 可以输出一些项目成功的信息
      console.info(chalk.blueBright('下载成功'));
    }else{
      // 可以输出一些项目失败的信息
      console.warn(err)
    }
  })
}

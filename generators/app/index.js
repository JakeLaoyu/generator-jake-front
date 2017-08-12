var path = require('path');
var chalk = require('chalk'); // 不同颜色的info
var yeoman = require('yeoman-generator');
var yosay = require('yosay'); // Yeoman弹出框
const fs = require('fs');
module.exports = yeoman.extend({
  info: function() {
    this.log(chalk.green(
      'I am going to build your front templates!'
    ));
  },
  generateBasic: function() { // 按照自己的templates目录自定义
    // 拷贝目录
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
    // this.fs.copy(this.templatePath("dist"), this.destinationPath("dist"));
    // 拷贝文件
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );

    this.fs.copy(
      this.templatePath("README.md"),
      this.destinationPath("README.md")
    );

    this.fs.copy(
      this.templatePath("webpack.config.dev.js"),
      this.destinationPath("webpack.config.dev.js")
    );

    this.fs.copy(
      this.templatePath("webpack.config.pro.js"),
      this.destinationPath("webpack.config.pro.js")
    );

    this.fs.copy(
      this.templatePath("gulpfile.js"),
      this.destinationPath("gulpfile.js")
    );

    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
  },
  generateClient: function() {
    this.sourceRoot(path.join(__dirname, 'templates'));
    this.destinationPath('./');
  },
  install: function() { // 安装依赖
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  },
  end: function() {
    this.log(yosay(
      'Your front templates has been created successfully!'
    ));
  }
});
var path = require('path');
var chalk = require('chalk'); // 不同颜色的info
var Generator = require('yeoman-generator');
var yosay = require('yosay'); // Yeoman弹出框
const fs = require('fs');
module.exports = class extends Generator {
  info() {
    this.log(chalk.green(
      'I am going to build your front templates!'
    ));
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the bedazzling ' + chalk.red('generator-jake-front') + ' generator! By Jake'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }, {
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname // Default to current folder name
    }, {
      type: 'input',
      name: 'description',
      message: 'description'
    }, {
      type: 'input',
      name: 'author',
      message: 'author',
      default: this.user.git.name()
    }, {
      type: 'input',
      name: 'email',
      message: 'email',
      default: this.user.git.email()
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }
  writing() { // 按照自己的templates目录自定义
    // 拷贝目录
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
    // this.fs.copy(this.templatePath("dist"), this.destinationPath("dist"));
    // 拷贝文件
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author,
        email: this.props.email,
      }
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
      this.templatePath("webpack.config.eslint.js"),
      this.destinationPath("webpack.config.eslint.js")
    );

    this.fs.copy(
      this.templatePath(".eslintrc"),
      this.destinationPath(".eslintrc")
    );

    this.fs.copy(
      this.templatePath("gulpfile.js"),
      this.destinationPath("gulpfile.js")
    );

    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
  }
  generateClient() {
    this.sourceRoot(path.join(__dirname, 'templates'));
    this.destinationPath('./');
  }
  install() { // 安装依赖
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
  end() {
    this.log(yosay(
      'Your front templates has been created successfully!'
    ));
  }
};

# 基于webpack和gulp的脚手架

>声明：本脚手架经过[赞鱼鱼H5脚手架](https://github.com/zanseven007/generator-zyy-h5)修改，打造符合自己的脚手架

> - 为了方便日后开发的方便，写此模版，用于今后开发
> - 在HTML中支持使用 @@include 引入一个 .inc 文件
> - 在CSS文件中可以使用 scss 进行开发，发布时将小图片转换为base64格式
> - 预置了一些动画库和常用的动画逻辑代码，方便写出丝滑的动画
> - 在JS当中利用webpack合并了公共模块，可以有任意个入口文件,并区分生产和开发环境（开发环境不进行代码压缩，极大提高打包速度）
> - 开发时可自动启动 Chrome 浏览器，并且打开本地3000端口来调试

## 使用yoeman创建模板
安装 yo

```
[sudo] npm install -g yo
```
安装模板生成器

```
[sudo] npm install -g generator-jake-front
```
新建一个项目目录并进入

```
mkdir dir && cd $_
```
使用模板，这个命令会自动安装依赖(npm install)，建议终止掉，然后使用 `cnpm` 或 `yarn` 来安装，因为速度飞快。

```
yo jake-front
```

## 使用模板
开发

```
gulp dev
```
发布(会压缩css和js，并增加md5)
```
gulp dist
```

## 可选参数

- `--html` 压缩 html 文件，发布线上需要时可以加上 `gulp dist --html`

## ISSUE

**node-sass安装失败解决办法**：因为在安装`node-sass`的时候它把github Releases里的文件都托管在`s3.amazonaws.com`上面，而这个网址在国内总是网络不稳定，所以推荐使用`cnpm`,`yarn`来安装我们的依赖，也可以通过淘宝镜像去下载这个文件。

### cnpm配置

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

之后便可以使用`cnpm install node-sass`安装

## License
MIT © [JakeLaoyu](https://github.com/JakeLaoyu)

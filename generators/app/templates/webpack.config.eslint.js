/**
 * @Author: Jake
 * @Date:   2017-09-10T21:23:24+08:00
 * @Email:  yucj@dxy.cn
 * @Last modified by:   Jake
 * @Last modified time: 2017-09-10T21:23:36+08:00
 */
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var srcDir = path.resolve(process.cwd(), 'src');

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
  var jsPath = path.resolve(srcDir, 'js');
  var dirs = fs.readdirSync(jsPath);
  var matchs = [],
    files = {};
  dirs.forEach(function(item) {
    matchs = item.match(/(.+)\.js$/);
    if (matchs) {
      files[matchs[1]] = path.resolve(srcDir, 'js', item);
    }
  });
  return files;
}

module.exports = {
  cache: true,
  devtool: "source-map",
  entry: getEntry(),
  output: {
    path: path.join(__dirname, "dist/js/"),
    publicPath: "dist/js/",
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  module: {
    // noParse: /node_modules\/hls.js\/dist\/hls.js/,
    loaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      include: path.join(__dirname, "src/js/"),
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    alias: {
      jquery: srcDir + "/js/lib/jquery.min.js",
      layer: srcDir + '/js/lib/layer/layer.js',
      mobilelayer: srcDir + '/js/lib/layer/mobile/layer.js', //移动端
      typed: srcDir + "/js/lib/typed.js",
      ui: srcDir + "/js/ui"
    }
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
      minChunks: Infinity
    }),
  ]
};

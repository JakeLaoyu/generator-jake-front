var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var srcDir = path.resolve(process.cwd(), 'src');

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
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
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, "src/js/"),
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },        
    resolve: {
        alias: {
            jquery: srcDir + "/js/lib/jquery.min.js",
            typed: srcDir + "/js/lib/typed.js",
            ui: srcDir + "/js/ui"
        }
    },
    plugins: [
        new CommonsChunkPlugin('common','common.js',Infinity),
    ]
};
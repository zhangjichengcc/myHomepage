/** 
 * create by zhangjicheng
 * 2018.08.28
 **/
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require("vue-loader");

// 配置异步加载地址 production /build/ development
// var project_publicPath = process.env.NODE_ENV === 'production' ? __dirname + '/build/' : '/build/';'
var project_publicPath = process.env.NODE_ENV === 'production' ? '/myHomepage/build/' : '/build/';
// var project_publicPath = '/build/';
console.log('project_publicPath', project_publicPath, 'process.env.NODE_ENV', process.env.NODE_ENV);

//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src/main.js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

var plugins = [
  //压缩js 
  // new webpack.optimize.UglifyJsPlugin({minimize: true}),
  //提公用js到common.js文件中
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("style.css", {
    allChunks: true
  })
];


module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    build : APP_PATH
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    // 指向异步加载的路径
    // github异步加载地址
    // publicPath :  'http://localhost:8080/own/' + 'build/',
    // publicPath :  '/myHomepage/build/',
    // 异步加载地址
    publicPath : project_publicPath,
    // 非主文件的命名规则
    chunkFilename: '[id].build.js?[chunkhash]'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", 'css-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        // loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
        loader: 'url?limit=40000'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=40000'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  vue: {
    css: ExtractTextPlugin.extract("css"),
    sass: ExtractTextPlugin.extract("css!sass-loader")
  },
  babel: {
    // 告诉babel你要解析的语言
    presets: ['es2015']
  },
  // 文件设置别名
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js',
      '@plagin': path.resolve(SRC_PATH, 'plagin'),
      '@mock': path.resolve(SRC_PATH, 'mock')
    }
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: 'localhost',
    port: 8080,
    open: true,  // 配置启动后自动调起浏览器
  },
  plugins: plugins
};

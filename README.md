# 个人主页 #
### 项目采用vue2+vue-router2+vuex2全家桶构建 ###

## Installation ##
安装第三方npm模块依赖</br>
<pre>npm install</pre>

## Usage ##

生产环境</br>
1.运行npm run build打包</br>
2.直接本地打开index.html访问

开发环境</br>
1.运行npm run dev热替换模式，代理到本地的http://localhost:8080端口</br>
2.访问http://localhost:8080

## 技术栈 ##
1.vue-router-路由切换，axios-Ajax请求</br>
2.vuex+localStorage引入保存用户信息，弹窗状态信息</br>
3.es6+vue2.0.js开发</br>
4.webpack打包构建

## 项目进度 ##
v0.0.1 构建项目
v0.0.2 确定风格

## Git commit日志基本规范 ##
<type>(<scope>): <subject>
#### 对格式的说明如下：####
type代表某次提交的类型，比如是修复一个bug还是增加一个新的feature。所有的type类型如下：
feat： 新增feature
fix: 修复bug
docs: 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
refactor: 代码重构，没有加新功能或者修复bug
perf: 优化相关，比如提升性能、体验
test: 测试用例，包括单元测试、集成测试等
chore: 改变构建流程、或者增加依赖库、工具等
revert: 回滚到上一个版本

## 文件目录
<pre>
## 开发目录
├── README.md           
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── vue            // 组件
│   |    ├──home.vue
│   |    ├──about.vue
│   |    ├──articleList.vue
│   |    ├──article.vue
│   |    ├──login.vue
│   |    ├──userhome.vue
│   |    ├──usermessage.vue
│   |    ├──createtopic.vue
│   |    ├──edittopic.vue
│   ├── components      // 子组件
│   |    ├──header.vue
│   |    ├──returnTop.vue
│   |    ├──menu.vue
│   |    ├──reply.vue
│   |    ├──tips.vue
│   |    ├──topicbox.vue
│   ├── store          // vuex
│   |    ├──index.js
│   ├── filters        // 过滤器
│   |    ├──index.js
│   ├── js             // 外部引入的js文件
│   ├── css            //css文件
│   ├── img            //图片文件
│   └── main.js        // Webpack 预编译入口	
└── webpack.js  	   // Webpack 配置文件
</pre>


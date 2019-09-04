### 1.使用webpack搭建react


1. 新建一个文件夹
2. 初始化项目 `npm init`
3. 安装webpack `npm i webpack --save-dev`
4. 安装webpack命令行工具，`npm i webpack-cli --save-dev`
5. 打开package.json 添加 `"build": "webpack"`
6. 新建文件入口，src,index.js文件
7. 执行`npm run build`
8. 配置开发模式和生产模式`"dev": "webpack --mode development",
               "build": "webpack --mode production"`
9. 执行，发现文件直接编译到dist文件夹了
10. 配置babel，安装`npm i @babel/core babel-loader @babel/preset-env --save-dev`；配置`"dev": "webpack --mode development --module-bind js=babel-loader",`
11. 配置react，`npm i react react-dom --save-dev`,`npm i @babel/preset-react --save-dev`
12. 新建.babelrc,输入`npm i @babel/preset-react --save-dev`
13. 新建webpack.config.js输入
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```
14. 新建一个APP.js
15. 引入到index.js文件中
16. 安装less、html，配置config文件
17. 自动服务器刷新，`npm i webpack-dev-server --save-dev`并配置config文件npm start 

# langkeWeex

## How to start

### Install dependencies
cd path/to/project and install dependencies.

```
npm install
```
进入项目根目录，执行install命令，安装package.json中相关的依赖。
### Development

* `npm run build`: build `src/main.we` into `build/main.js`
* `npm run dev`: watch file changes of `src/main.we` and automatically build into `build/main.js`
* `npm run serve`: preview in html5 renderer through `http://localhost:8080/`

*note: the entry file can be configured in `webpack.config.js`, learn more from [weex-loader](https://www.npmjs.com/package/weex-loader)*

Finally the generated code will be found in `src/build/` folder.

---

1,将.we源文件转换为对应的js文件，位于src/build目录。

```
npm run build
```
2，监控文件变化，改动代码后自动build，实时看效果。

```
npm run dev
```

3，开启本地server服务，端口可自定义，可用pc浏览器调试H5页面。

```
npm run serve
```

### debug and run

开启server后，浏览器输入http://localhost:8888/，可以预览页面。localhost改为自己电脑的ip地址，方便pc和app中查看效果。

3.1，在APP中渲染：

build后的目标代码，将对应的url生成二维码后，用官方的playground扫描二维码，可以在app中渲染： 
http://192.168.100.47:8080/src/build/main.js

3.2，在浏览器中预览页面效果：

http://192.168.100.47:8080/index.html?page=./src/build/main.js


4，js文件打包上传说明 dist文件夹下全部文件打zip包 包名为weex.zip 取md5值 版本值需大于发出版本




# README

## 安装TS工具包(TS代码转换为JS代码)

由于Node.js/浏览器，只认识JS代码，不认识TS代码，所以需要先将TS代码转化为JS代码，才能运行

安装命令

```shell
[sudo] npm i -g typescript
```

typescript包:用来编译TS的代码包，提供了<span style="color:pink">tsc</span>命令，实现了TS->JS的转化

验证是否安装成功

```shell
tsc -v #查看typescript的版本
```

使用 TS->JS

```shell
tsc xxx.ts #同级目录会出现一个同名的JS文件
```

运行 JS

```shell
node xxx.js
```

## 简化TS运行步骤

使用ts-node包，直接在node.js中执行TS代码

安装命令

```shell
[sudo] npm i -g ts-node
```

使用

```shell
ts-node xxx.ts #ts-node命令在内部将TS代码转换为JS代码，然后再运行JS代码，而且不会产生同名JS文件
```




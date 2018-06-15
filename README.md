<p align="center">
  <img width="150" src="icon.png">
</p>


# tools4js
[![Build Status](https://img.shields.io/travis/swdenglian/tools4js.svg?branch=master)](https://img.shields.io/travis/swdenglian/tools4js)
[![NPM downloads](http://img.shields.io/npm/dt/tools4js.svg?style=flat-square)](https://npmjs.com/package/tools4js)

## 特性
- js 开发中常用的方法集合
- 常见正则表达式
- 常见时间操作
- 常见金额操作

## 链接
- [常见正则表达式（Reg）](./src/reg/README.md)
- [常见时间操作（timer）](./src/timer/README.md)

## 支持环境
- CMD
- ES6/ES7/TypeScript

## 使用
#### 安装
```
npm install tools4js
or
yarn add tools4js
```
#### 示例
```
import { Timer } from 'tools4js';
new Timer().format('yyyy/MM/dd');
```

## 如何开发这个工程

clone this repo
```cmd
  git clone https://github.com/swdenglian/tools4js.git
```
dev
```cmd
  npm install
  npm run dev  
```
test
```cmd
  npm run test
```

## LICENSE
MIT LICENSE
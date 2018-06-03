# tools4js

JavaScript Tools with ES6/7  CMD

## TypeScript Study

tsconfig.js 配置详解
https://www.tslang.cn/docs/handbook/tsconfig-json.html

### 

## 工程化问题记录
### gitignore 不起作用
新建的文件在git中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在.gitignore中已经声明了忽略路径也是不起作用的，这时候我们就应该先把本地缓存删除，然后再进行git的push，这样就不会出现忽略的文件了。git清除本地缓存命令如下：
```cmd
  git rm -r --cached .
  git add .
  git commit -m 'update .gitignore'
```


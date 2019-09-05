# fs - 文件系统

## 规律探索

### 同步异步

> 以删除文件为例，只需增加“Sync”，对应减少最后一位参数 callback

unlink（异步）

```javascript
const fs = require("fs");
/*
 * @param path 默认是绝对路径
 * @param callback 回调函数
 **/
fs.unlink("/tmp/hello.js", err => {
  if (err) throw err;
  console.log("已成功删除 /tmp/hello.js");
});
```

unlinkSync（同步）

```javascript
const fs = require("fs");

try {
  /*
   * @param path 默认是绝对路径
   **/
  fs.unlinkSync("/tmp/hello.js");
  console.log("已成功删除 /tmp/hello.js");
} catch (err) {
  // 处理错误
}
```

## 关于文件系统

> 不考虑它的设计模型，相关函数，先思考一下这么一个系统，你想用它来做什么？

### 新增

### 复制

### 重命名

rename

```javascript
const fs = require("fs");
/*
 * @param oldPath 原路径
 * @param newPath 新路径
 * @param callback 回调函数
 **/
fs.rename("old.txt", "new.txt", err => {
  if (err) throw err;
  console.log("重命名完成");
});
```

`point`:

1. hello

### 删除

#### 删除文件

unlink

```javascript
const fs = require("fs");
/*
 * @param path 默认是绝对路径
 * @param callback 回调函数
 **/
fs.unlink("/tmp/hello.js", err => {
  if (err) throw err;
  console.log("已成功删除 /tmp/hello.js");
});
```

#### 删除目录

rmdir

```javascript
const fs = require("fs");
/*
 * @param path 默认是绝对路径
 * @param callback 回调函数
 **/
fs.rmdir("/Users/lch/test", err => {
  if (err) throw err;
  console.log("已成功删除 /Users/lch/test");
});
```

`error`:

1. no such file or directory（目录不存在）
2. not a directory（并不是一个目录）

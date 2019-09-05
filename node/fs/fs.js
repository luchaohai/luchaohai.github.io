const fs = require("fs");
/*
 * @param path 默认是绝对路径
 * @param callback 回调函数
 **/
fs.rmdir("/Users/lch/test", err => {
  if (err) throw err;
  console.log("已成功删除 /Users/lch/test");
});
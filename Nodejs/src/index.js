// fs 模块提供了用于与文件系统进行交互（以类似于标准 POSIX 函数的方式）的 API。
// 所有的文件系统操作都具有同步和异步的形式。
const fs = require('fs')

fs.readFile('./src/target.txt', (err, data) => {
    if (err) throw err;
    console.log('data', data)
})

const data = new Uint8Array(Buffer.from('Node.js 中文网'));
fs.writeFile('./src/写入文件.txt', data, (err) => {
    if (err) throw err
    console.log("文件已经保存")
})
/**
 * 文件读写
 */

const fs = require('fs')

fs.writeFile('./log.txt', 'hello', (err, data) => {
  if (err) {
    console.log('>>>', err)
  } else {
    console.log('文件创建成功', data)
  }
})

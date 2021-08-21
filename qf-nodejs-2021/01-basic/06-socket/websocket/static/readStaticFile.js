const path = require('path')
const mime = require('mime')
const fs = require('fs')

// 读取文件内容，因为readFile是异步函数，为了调用者不立刻返回值，
// 需要封装一个promise, 让调用者有机会等待结果
function myReadFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject('你访问的是一个文件夹，且文件夹里没有index.html')
        // resolve('你访问的是一个文件夹，且文件夹里没有index.html')
      } else {
        resolve(data)
      }
    })
  })
}

async function readStaticFile(filePathName) {
  let ext = path.parse(filePathName).ext
  let mimeType = mime.getType(ext) || 'text/html'

  let data
  // 判断文件是否存在
  if (fs.existsSync(filePathName)) {
    if (ext) {
      // myReadFile(filePathName)
      //   .then(result => data = result)
      //   .catch((err) => data = err)

      data = await myReadFile(filePathName)

    } else {
      // myReadFile(path.join(filePathName, '/index.html'))
      //   .then(result => data = result)
      //   .catch((err) => data = err)

      data = await myReadFile(path.join(filePathName, '/index.html'))
    }
  } else {
    data = 'file or folder not found.'
  }

  return {
    data,
    mimeType
  }
}

module.exports = readStaticFile
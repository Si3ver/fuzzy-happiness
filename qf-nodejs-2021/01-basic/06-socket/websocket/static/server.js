const http = require('http')
const path = require('path')

const readStaticFile = require('./readStaticFile')

http.createServer(async (req, res) => {
  // 获取url
  let urlString = req.url
  let filePathName = path.join(__dirname, './public', urlString)

  // 根据url, 去public目录下读取数据
  // 如果你调用的方法是一个异步函数，在获取结果的时候，一定要await
  let result
  try {
    result = await readStaticFile(filePathName, res)
    var { data, mimeType } = result
  } catch {
    console.log(result)
  }

  // 把获取的结果， 返回给前端
  res.writeHead(200, {
    'content-type': `${mimeType}; charset=utf-8`
  })
  res.write(data)
  res.end()
}).listen(8080, () => console.log('localhost:8080'))
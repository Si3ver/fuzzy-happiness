const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  let urlStr = req.url
  let urlObj = url.parse(urlStr, true)
  switch(urlObj.pathname) {
    case '/api/data':
      res.write(`${urlObj.query.cb}("hello")`)
      break;
    default:
      res.write('page not found.')
  }
  res.end()
})

server.listen(8080, () => {
  console.log('localhost:8080')
})
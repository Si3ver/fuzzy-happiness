/**
 * 网络通信
 */

const http = require('http')

const server = http.createServer((request, response) => {
  let url = request.url
  response.write(`req.url: ${url}`)
  response.end()
})

server.listen(8090, 'localhost', () => {
  console.log('http://localhost:8090/home')
})

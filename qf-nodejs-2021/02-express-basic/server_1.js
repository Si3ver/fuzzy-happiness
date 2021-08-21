const express = require('express')

const app = express()

const middlewares = [(req, res, next) => {
  console.log(0)
  next()
}, (req, res, next) => {
  console.log(1)
  next()
}, (req, res, next) => {
  console.log(2)
  next()
}]

// 回调函数又被称为中间件
// 中间件栈
app.use('/', middlewares)
app.use('/ajax', (req, res, next) => {
  console.log('ajax')
  // next()
})
app.use('/api', (req, res) => {
  res.send('world')
})
app.listen(8080, () => {
  console.log('localhost:8080')
})
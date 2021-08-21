const express = require('express')

// 路由中间件
const router = express.Router()

const { list, token } = require('../controller')

router.get('/api/list', list)

router.get('/api/token', token)
// // 获取数据
// router.get('/index', (req, res, next) => {
//   const query = req.query
//   res.json(query)
// })

// // 添加数据
// router.post('/index', (req, res, next) => {
//   const data = req.body
//   console.log(data)
//   res.send(data)
// })

// // 修改数据-覆盖式修改
// router.put('/index', (req, res, next) => {
//   const data = req.body
//   console.log(data)
//   res.send('put response')
// })

// // 修改数据-增量修改
// router.patch('/index', (req, res, next) => {
//   res.send('patch response')
// })

// // 删除数据
// router.delete('/index', (req, res, next) => {
//   res.send('delete response')
// })

// router.all('/index', (req, res, next) => {
//   res.send('hello')
// })

module.exports = router
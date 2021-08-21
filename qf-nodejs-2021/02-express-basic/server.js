const path = require('path')
const express = require('express')
const app = express()

// 第三方中间件
const bodyParser = require('body-parser')

const router = require('./router/index')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 静态资源服务中间间（内置中间件）
app.use(express.static('./public'))

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', { //注意此处和官网不一样
    debug: process.env.NODE_ENV !== 'production',
    escape: false // 是个坑，转化HTML5代码 
});
app.set('views', path.join(__dirname, './view'));
app.set('view engine', 'art')

app.use('/', router)

app.listen(8080, () => {
  console.log('localhost:8080')
})
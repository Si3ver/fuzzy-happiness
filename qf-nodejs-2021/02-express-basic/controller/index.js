var template = require('art-template')
var path = require('path')
var fs = require('fs')
var jwt = require('jsonwebtoken');

const listModel = require('../model/list')

// 应用中间件
const list = (req, res, next) => {
  // let data = '<ul>'
  // for(var i = 0; i < 100; i++) {
  //   data += `<li>line ${i}</li>`
  // }
  // data += '</ul>'

  // let data = '{ "ret": true, "data":'

  // let dataObj = {
  //   ret: true,
  //   data: []
  // }
  // for(var i = 0; i < 100; i++) {
  //   dataObj.data.push('line' + i)
  // }

  // res.set('Content-Type', 'application/json; charset=utf-8')

  // res.render('list', {
  //   data: JSON.stringify(dataArray)
  // })

  // res.render('list-html', {
  //   data: dataArray
  // })

  var html = template(path.join(__dirname, '../view/list-html.art'), {
    data: listModel.dataArray
  })
  
  fs.writeFileSync(path.join(__dirname, '../public/list.html'), html)

  res.send('pages has been compiled.')
}

const token = (req, res, next) => {
  // 对称加密
  // const tk = jwt.sign({username: 'admin'}, 'i love you')

  // const decoded = jwt.verify(tk, 'i love you')
  // res.send(decoded)

  // 非对称加密
  const privateKey = fs.readFileSync(path.join(__dirname, '../keys/rsa_private_key.pem'))
  const tk = jwt.sign({username: 'admin'}, privateKey, { algorithm: 'RS256'})

  const publicKey = fs.readFileSync(path.join(__dirname, '../keys/rsa_public_key.pem'))
  const result = jwt.verify(tk, publicKey)
  res.send(result)
}

exports.list = list
exports.token = token
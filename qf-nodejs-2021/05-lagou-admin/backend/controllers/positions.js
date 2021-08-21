const moment = require('moment')
const positionsModel = require('../models/positions')

exports.add = async (req, res, next) => {
  res.set('content-type', 'application/json; charset=utf-8')
  let result = await positionsModel.add({
    ...req.body,
    // companyLogo: req.companyLogo,
    createTime: moment().format('YYYY年MM月DD日 HH:mm')
  })

  if (result) {
    // process.socket.emit('message', 'ok')

    res.render('succ', {
      data: JSON.stringify({
        message: '职位添加成功。'
      })
    })
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '职位添加失败。'
      })
    })
  }
}

exports.list = async (req, res, next) => {
  let result = await positionsModel.list()
  if (result) {
    res.json(result)
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '获取数据失败。'
      })
    })
  }
}

exports.listone = async (req, res, next) => {
  let result = await positionsModel.listone(req.body.id)
  if (result) {
    res.json(result)
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '获取数据失败。'
      })
    })
  }
}

exports.remove = async (req, res, next) => {
  res.set('content-type', 'application/json; charset=utf-8')
  let result = await positionsModel.remove(req.body.id)
  try {
    if (result.deletedCount > 0) {
      res.render('succ', {
        data: JSON.stringify({
          message: '职位删除成功。'
        })
      })
    } else {
      res.render('fail', {
        data: JSON.stringify({
          message: '职位删除失败。ID错误'
        })
      })
    }
  } catch (err) {
    res.render('fail', {
      data: JSON.stringify({
        message: '职位删除失败。'
      })
    })
  }
}

exports.update = async (req, res, next) => {
  res.set('content-type', 'application/json; charset=utf-8')

  const data = {
    ...req.body
  }

  if (req.companyLogo) {
    data['companyLogo'] = req.companyLogo
  }

  let result = await positionsModel.update(data)

  if (result) {
    res.render('succ', {
      data: JSON.stringify({
        message: '职位编辑成功。'
      })
    })
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '职位编辑失败。'
      })
    })
  }
}
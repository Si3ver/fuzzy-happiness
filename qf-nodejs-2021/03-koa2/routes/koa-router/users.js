const Router = require('@koa/router')
const { query } = require('../../utils/async-db')

const router = new Router()

function getData(ctx) {
  return new Promise((resolve, reject) => {
    let data = ''
    ctx.req.on('data', (chunk) => {
      data += chunk
    })
    ctx.req.on('end', () => {
      resolve(data)
    })
  })
}

router.post('/signin', async (ctx, next) => {
  let result = await getData(ctx)
  let param = new URLSearchParams(result)
  console.log(param.get('username'))
  ctx.body = result
})

router.get('/list', async (ctx, next) => {
  // let query = ctx.request.query
  // let queryString = ctx.request.querystring
  // ctx.body = queryString
  ctx.session.username = 'abc'
  
  let result = await query('select * from users where id=?', [2])
  ctx.body = result
})

router.post('/signup', async (ctx, next) => {
  const body = ctx.request.body
  let result = await query('insert into users set ?', body)

  ctx.session = body
  ctx.body = result
})

module.exports = router
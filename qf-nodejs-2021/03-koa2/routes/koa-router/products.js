const Router = require('@koa/router')
const router = new Router()

router.get('/list', async (ctx, next) => {
  ctx.body = ['T-Shirt', 'Shoes']
})

router.post('/add', async (ctx, next) => {
  const data = ctx.request.body
  // ctx.body = data
  // await ctx.render('succ.ejs', {
  //   data: JSON.stringify(data)
  // })
  await ctx.render('fail.html', {
    message: JSON.stringify('fail')
  })
})

module.exports = router
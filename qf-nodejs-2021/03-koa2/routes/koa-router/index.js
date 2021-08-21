const Router = require('@koa/router')

const router =  new Router()

const users = require('./users')
const products = require('./products')

router
  .get('/', async (ctx, next) => {
    ctx.body = 'home'
  })
  .param('id', (id, ctx, next) => {
    console.log(id)
    next()
  })
  .get('/:id', (ctx, next) => {
    ctx.body = ctx.params.id
    // ctx.redirect(router.url('position', { id: 100 }, { query: {name: 'qianfeng'} }))
  })
  .get(['/id', '/name'], async (ctx, next) => {
    // ctx.body = ctx.params.id
    // let result = await next()
    // console.log(result)
    // ctx.body = ctx.url
    ctx.redirect('/')
  }, (ctx, next) => {
    return 'hello'
  })

  .get('position', '/list/:id', (ctx, next) => {
    ctx.body = 'route name'
  })

  .use('/users', users.routes(), users.allowedMethods())
  .use('/products', products.routes(), products.allowedMethods())

  .get('/abc/123', async (ctx, next) => {
    console.log('m1 start')
    await next()
    console.log('m1 end')
  }, async (ctx, next) => {
    console.log('m2 start')
    await next()
    console.log('m2 end')
  }, async (ctx, next) => {
    console.log('m3 start')
    await next()
    console.log('m3 end')
  })


module.exports = router
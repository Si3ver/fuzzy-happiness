function log(ctx) {
  console.log(ctx.method, ctx.header.host, ctx.url)
}

async function logger(ctx, next) {
  log(ctx)
  await next()
}

module.exports = logger
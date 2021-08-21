const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')

function render( page ) {
  return new Promise(( resolve, reject ) => {
    let viewUrl = path.resolve(__dirname, `./views/${page}`)
    fs.readFile(viewUrl, "binary", ( err, data ) => {
      if ( err ) {
        reject( err )
      } else {
        resolve( data )
      }
    })
  })
}

async function route( url ) {
  let view = '404.html'
  switch ( url ) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case '/404':
      view = '404.html'
      break
    default:
      break
  }
  let html = await render( view )
  return html
}

app.use( async ( ctx ) => {
  let url = ctx.request.url
  let html = await route( url )
  console.log(html)
  ctx.body = html
})

app.listen(3000)
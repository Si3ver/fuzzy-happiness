import express, { Request, Response, NextFunction } from 'express'
import cookieSession from 'cookie-session'
import './controller/LoginController'
import './controller/CrawlerController'
import { router } from './controller/decorators'

const app = express()
const port = 7001

app.use(express.urlencoded({ extended: false }))

app.use(cookieSession({
  name: 'session',
  keys: ['author william'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// 自定义中间件
app.use((req: Request, res: Response, next: NextFunction) => {
  req.authorName = 'william'
  next()
})

app.use(router)

app.listen(port, () => {
  console.log(`server is runnint at: http://127.0.0.1:${port}`)
})

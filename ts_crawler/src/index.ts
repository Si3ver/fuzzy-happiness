import express, { Request, Response, NextFunction } from 'express'
import router from './router'

const app = express()
const port = 7001

app.use(express.urlencoded({ extended: false }))
// 自定义中间件
app.use((req: Request, res: Response, next: NextFunction) => {
  req.authorName = 'william'
  next()
})

app.use(router)

app.listen(port, () => {
  console.log(`server is runnint at: http://127.0.0.1:${port}`)
})

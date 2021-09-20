// import fs from 'fs'
// import path from 'path'
// import consola from 'consola'
// import { Router, Request, Response, NextFunction } from 'express'
// import { getResponseData } from './utils/util'
// import DellAnalyzer from './utils/dellAnalyzer'
// import Crawler from './utils/crawler'

// interface BodyRequest extends Request {
//   body: {
//     [key: string]: string | undefined
//   }
// }

// const checkLogin = (req: BodyRequest, res: Response, next: NextFunction) => {
//   const isLogin = req.session ? req.session.login : false
//   if (isLogin) {
//     next()
//   } else {
//     res.json(getResponseData(null, '请先登录'))
//   }
// }

// const router = Router()

// router.post('/login', (req: BodyRequest, res: Response) => {
//   const { password } = req.body
//   const isLogin = req.session ? req.session.login : false

//   if (isLogin) {
//     res.json(getResponseData(false, '已经登录过'))
//   } else {
//     consola.info(req.session?.login)
//     if (password === '123' && req.session) {
//       req.session.login = true
//       res.json(getResponseData(true))
//     } else {
//       res.json(getResponseData(false, '登录失败'))
//     }
//   }
// })

// router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {
//   const secret = 'x3b174jsx'
//   const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
//   const analyzer = DellAnalyzer.getInstance()
//   new Crawler(url, analyzer)
//   res.json(getResponseData(true))
// })

// router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
//   consola.info('showData: session.login', req.session?.login)
//   try {
//     const position = path.resolve(__dirname, '../data/course.json');
//     const result = fs.readFileSync(position, 'utf8');
//     res.json(JSON.parse(result));
//   } catch (e) {
//     res.json(getResponseData(false, '尚未爬取到内容'))
//   }
// })

// export default router

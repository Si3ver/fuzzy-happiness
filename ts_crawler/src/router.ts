import { Router, Request, Response } from 'express'
import DellAnalyzer from './dellAnalyzer'
import Crawler from './crawler'

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send(`
    <html>
      <body>
        <form method="post" action="/getData">
          <input type="password" name="password" />
          <button>提交</button>
        </form>
      </body>
    </html>
  `)
})

router.post('/getData', (req: RequestWithBody, res: Response) => {
  console.log(req.body)
  if (req.body.password === '123') {
    const secret = 'x3b174jsx'
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
    const analyzer = DellAnalyzer.getInstance()
    new Crawler(url, analyzer)
    res.send('getData success')
  } else {
    res.send(`${req.authorName} password Error!`)
  }
})

export default router

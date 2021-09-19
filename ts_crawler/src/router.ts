import { Router } from 'express'
import DellAnalyzer from './dellAnalyzer'
import Crawler from './crawler'

const router = Router()

router.get('/', (req, res) => {
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

router.post('/getData', (req, res) => {
  console.log(req.body)
  if (req.body.password === '123') {
    const secret = 'x3b174jsx'
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
    const analyzer = DellAnalyzer.getInstance()
    new Crawler(url, analyzer)
    res.send('getData success')
  } else {
    res.send('password Error!')
  }
})

export default router

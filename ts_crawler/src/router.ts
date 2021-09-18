import { Router } from 'express'
import DellAnalyzer from './dellAnalyzer'
import Crawler from './crawler'

const router = Router()

router.get('/', (req, res) => {
  res.send('hello world')
})

router.get('/getData', (req, res) => {
  const secret = 'x3b174jsx'
  const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
  const analyzer = DellAnalyzer.getInstance()
  new Crawler(url, analyzer)

  res.send('getData success')
})

export default router

import express from 'express'
import router from './router'

const app = express()
const port = 7001

app.use(express.urlencoded({ extended: false }))
app.use(router)

app.listen(port, () => {
  console.log(`server is runnint at: http://127.0.0.1:${port}`)
})

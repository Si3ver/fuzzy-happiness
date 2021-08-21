import GP21Router from 'gp21-router'

const router = new GP21Router('root')

import index from '../controllers/index'
import listUser from '../controllers/users/list-user'
import listPosition from '../controllers/positions/list-position'
import signin from '../controllers/signin'

import { auth as authModel } from '../models/auth'

router.use(async (req, res, next) => {
  // 第一个打开的页面
  let result = await authModel()
  if(result.ret) {
    router.go(req.url)
  } else {
    router.go('/signin')
  }
})

// router.route('/', () => {})

router.route('/signin', signin(router))

router.route('/index', index(router))
router.route('/index/users', listUser(router))
router.route('/index/positions', listPosition(router))

router.route('*', (req, res, next) => {
  res.redirect('/index/users')
})


export default router

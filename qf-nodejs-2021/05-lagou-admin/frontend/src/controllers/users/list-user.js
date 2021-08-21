import usersTpl from '../../views/users.art'
import usersListTpl from '../../views/users-list.art'

import pagination from '../../components/pagination'
import page from '../../databus/page'

import { addUser } from './add-user'

import { usersList as usersListModel} from '../../models/users-list'
import { auth as authModel } from '../../models/auth'

import { remove } from '../common'

const pageSize = page.pageSize

let state = {
  list: []
}

// 装填list数据
const _list = (pageNo) => {
  let start = (pageNo-1) * pageSize
  $('#users-list').html(usersListTpl({
    data: state.list.slice(start, start + pageSize)
  }))
}

// 从后端加载数据
const _loadData = async () => {
  let result = await usersListModel()
  state.list = result.data

  // 分页
  pagination(result.data)
  // 数据渲染
  _list(page.curPage)
}

const _subscribe = () => {
  $('body').on('changeCurPage', (e, index) => {
    _list(index)
  })
  $('body').on('addUser', (e) => {
    _loadData()
  })
}

const listUsers = (router) => {
  return async (req, res, next) => {
    let result = await authModel()
    if(result.ret) {
      // 填充用户列表
      next()
      res.render(usersTpl({}))

      $('#add-user-btn').on('click', addUser)
      // 初次渲染list
      await _loadData()

      // 页面事件绑定
      remove({
        $box: $('#users-list'),
        state, // 传递一个引用类型的值state, 在删除组件里能实时获取数据条数
        url: '/api/users',
        loadData: _loadData
      })

      // 订阅事件
      _subscribe()
    } else {
      router.go('/signin')
    }
  }
}

export default listUsers
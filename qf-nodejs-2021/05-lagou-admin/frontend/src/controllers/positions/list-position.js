import positionsTpl from '../../views/positions.art'
import positionsListTpl from '../../views/positions-list.art'

import pagination from '../../components/pagination'
import page from '../../databus/page'

import { auth as authModel } from '../../models/auth'
import { positionList } from '../../models/positions'

import { addPosition } from './add-position'
import { updatePosition, fillPositionsUpdateTpl } from './update-position'

import { remove } from '../common'

const pageSize = page.pageSize

let state = {
  list: []
}

// 装填list数据
const _list = (pageNo) => {
  let start = (pageNo-1) * pageSize

  $('#positions-list').html(positionsListTpl({
    data: state.list.slice(start, start + pageSize)
  }))
}

// 从后端加载数据
const _loadData = async () => {
  const list = await positionList()

  state.list = list

  // 分页
  pagination(list)

  // 数据渲染
  _list(page.curPage)
}

const _subscribe = () => {
  $('body').off('changeCurPage').on('changeCurPage', (e, index) => {
    _list(index)
  })
  $('body').off('addPosition').on('addPosition', (e) => {
    _loadData()
  })
}

const listPositions = (router) => {
  return async (req, res, next) => {
    let result = await authModel()
    if(result.ret) {
      next()
      res.render(positionsTpl())

      // 初次渲染list
      _loadData()

      // 订阅事件
      _subscribe()

      // 添加职位
      addPosition()

      remove({
        $box: $('#positions-list'),
        state, // 传递一个引用类型的值state, 在删除组件里能实时获取数据条数
        url: '/api/positions/remove',
        loadData: _loadData
      })

      updatePosition()

      $('#positions-list')
        .off('click', '.positions-update')
        .on('click', '.positions-update', function() {
          //编辑职位
          fillPositionsUpdateTpl($(this).data('id'))
        })
      
    } else {
      router.go('/signin')
    }
  }
}

export default listPositions
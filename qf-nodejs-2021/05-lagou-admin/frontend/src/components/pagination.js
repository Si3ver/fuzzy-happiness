import usersListPageTpl from '../views/users-pages.art'
import page from '../databus/page'

const pageSize = page.pageSize

const _bindEvent = (data) => {
  // 分页事件绑定
  $('#users-page').off('click').on('click', '#users-page-list li:not(:first-child,:last-child)', function() {
    const index = $(this).index()
    
    // 更新bus总线上的共享数据
    page.setCurPage(index)

    // 在按钮点击的时候，通过观察者模式，通知list要更新
    $('body').trigger('changeCurPage', index)
    
    _setPageActive(index)
  })

  $('#users-page').on('click', '#users-page-list li:first-child', function() {
    if (page.curPage > 1) {
      page.setCurPage(page.curPage-1)
      $('body').trigger('changeCurPage', page.curPage)
      _setPageActive(page.curPage)
    }
  })

  $('#users-page').on('click', '#users-page-list li:last-child', function() {
    if (page.curPage < Math.ceil(data.length / pageSize)) {
      page.setCurPage(page.curPage+1)
      $('body').trigger('changeCurPage', page.curPage)
      _setPageActive(page.curPage)
    }
  })
}

const _setPageActive = (index) => {
  $('#users-page #users-page-list li:not(:first-child,:last-child)')
    .eq(index - 1)
    .addClass('active')
    .siblings()
    .removeClass('active')
}

// 显示分页效果
const pagination = (data) => {
  const total = data.length
  const pageCount = Math.ceil(total/pageSize)
  const pageArray = new Array(pageCount)

  const paginationHTML = usersListPageTpl({
    pageArray
  })

  $('#users-page').html(paginationHTML)

  _setPageActive(page.curPage)

  _bindEvent(data)
}

export default pagination
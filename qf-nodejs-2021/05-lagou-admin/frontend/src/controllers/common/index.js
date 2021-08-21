import * as removeModel from '../../models/remove'
import page from '../../databus/page'

const remove = ({
  $box,
  url,
  loadData,
  state
}) => {
  // 删除事件绑定
  $box.off('click').on('click', '.remove', async function() {
    length = state.list.length

    let result = await removeModel.remove({
      url,
      id: $(this).data('id')
    })
    
    if (result.ret) {
      loadData()

      const isLastPage = Math.ceil(length / page.pageSize) === page.curPage
      const restOne = length % page.pageSize === 1
      const notPageFirst = page.curPage > 0
      
      if (isLastPage && restOne && notPageFirst) {
        page.setCurPage(page.curPage-1)
      }
    }
  })
}

export {
  remove
}
import positionsUpdateTpl from '../../views/positions-update.art'
import positionsUpdateFormTpl from '../../views/positions-update-form.art'
import page from '../../databus/page'
import http from '../../utils/http'

import { positionsUpdate } from '../../models/positions'

// 添加用户
export const updatePosition = () => {
  $('#positions-list-box').after(positionsUpdateTpl())

  // 提交表单
  const _save = async () => {
    try {
      let result = await positionsUpdate()
      if (result.ret) {
        // 添加数据后渲染
        page.setCurPage(1)
        // 告知list页面要重新渲染
        $('body').trigger('addPosition')
      }
      
      // 单击关闭模态框
      $('#positions-close-update').click()
    } catch (err) {
      console.log(err)
    }
  }
  
  // 点击保存，提交表单
  $('#positions-save-update').off('click').on('click', _save)
}

export const fillPositionsUpdateTpl = async (id) => {
  let { result } = await http({
    url: '/api/positions/listone',
    type: 'post',
    data: {
      id
    }
  })

  $('#position-form-update').html(positionsUpdateFormTpl({
    data: {
      ...result
    }
  }))
}
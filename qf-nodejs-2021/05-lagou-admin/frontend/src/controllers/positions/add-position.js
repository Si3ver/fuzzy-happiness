import positionsAddTpl from '../../views/positions-add.art'
import page from '../../databus/page'

import { positionsAdd } from '../../models/positions'

// 添加用户
export const addPosition = () => {
  $('#positions-list-box').after(positionsAddTpl())

  // 提交表单
  const _save = async () => {
    try {
      let result = await positionsAdd()

      if (result.ret) {
        // 添加数据后渲染
        page.setCurPage(1)
        // 告知list页面要重新渲染
        $('body').trigger('addPosition')
      }
      
      // 单击关闭模态框
      $('#positions-close').click()
    } catch (err) {
      console.log(err)
    }
  }
  
  // 点击保存，提交表单
  $('#positions-save').off('click').on('click', _save)
}
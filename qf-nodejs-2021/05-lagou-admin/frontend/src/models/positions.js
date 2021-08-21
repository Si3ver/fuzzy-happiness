import http from '../utils/http'

export const positionsAdd = () => {
  return new Promise((resolve, reject) => {
    var options = {
      url: "/api/positions/add", //提交地址：默认是form的action,如果申明,则会覆盖
      type: "post",   //默认是form的method（get or post），如果申明，则会覆盖
      // beforeSubmit: beforeCheck, //提交前的回调函数
      success: (result) => {
        resolve(result)
      },  //提交成功后的回调函数
      error: (err) => {
        reject(err)
      },
      // target: "#output",  //把服务器返回的内容放入id为output的元素中
      dataType: "json", //html(默认), xml, script, json...接受服务端返回的类型
      // clearForm: true,  //成功提交后，是否清除所有表单元素的值
      resetForm: true,  //成功提交后，是否重置所有表单元素的值
      timeout: 30000     //限制请求的时间，当请求大于3秒后，跳出请求
    }

    $('#position-form').ajaxSubmit(options)
  })
}

export const positionsUpdate = () => {
  return new Promise((resolve, reject) => {
    var options = {
      url: "/api/positions/update", //提交地址：默认是form的action,如果申明,则会覆盖
      type: "patch",   //默认是form的method（get or post），如果申明，则会覆盖
      // beforeSubmit: beforeCheck, //提交前的回调函数
      success: (result) => {
        resolve(result)
      },  //提交成功后的回调函数
      error: (err) => {
        reject(err)
      },
      // target: "#output",  //把服务器返回的内容放入id为output的元素中
      dataType: "json", //html(默认), xml, script, json...接受服务端返回的类型
      // clearForm: true,  //成功提交后，是否清除所有表单元素的值
      resetForm: true,  //成功提交后，是否重置所有表单元素的值
      timeout: 30000     //限制请求的时间，当请求大于3秒后，跳出请求
    }

    $('#position-form-update').ajaxSubmit(options)
  })
}

export const positionList = async () => {
  try {
    let { result } = await http({
      url: '/api/positions/list',
    })
    return result
  } catch (err) {
    console.log(err)
  }
}
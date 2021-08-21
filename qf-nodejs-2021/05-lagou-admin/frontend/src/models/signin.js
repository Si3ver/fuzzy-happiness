import http from '../utils/http'

export const signin = async (data) => {
  try {
    let { result: res, jqXHR } = await http({
      url: '/api/users/signin',
      data,
      type: 'post'
    })
    return {
      res,
      jqXHR
    }
  } catch (err) {
    console.log(err)
  }
}
import http from '../utils/http'

export const usersAdd = async (data) => {
  try {
    let { result } = await http({
      url: '/api/users',
      type: 'post',
      data
    })
    return result
  } catch (err) {
    console.log(err)
  }
}
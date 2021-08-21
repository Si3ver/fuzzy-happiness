import http from '../utils/http'

export const remove = async ({url, id}) => {
  try {
    let { result } = await http({
      url,
      type: 'delete',
      data: {
        id
      },
    })
    return result
  } catch (err) {
    console.log(err)
  }
}
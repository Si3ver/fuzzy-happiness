import { Router } from 'express'
const router = Router()

enum Method {
  get = 'get',
  post = 'post',
  put = 'put',
  del = 'delete'
}

// 自动生成路由
function controller(target: any) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    const method: Method = Reflect.getMetadata('method', target.prototype, key)
    const handler = target.prototype[key]
    if (path && method && handler) {
      router[method](path, handler)
    }
  }
}

function getRequestDecorator(method: Method) {
  return function(path: string) {
    return function (target: any, key: string) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

const get = getRequestDecorator(Method.get)
const post = getRequestDecorator(Method.post)
const put = getRequestDecorator(Method.put)
const del = getRequestDecorator(Method.del)

export { controller, get, post, put, del, router }

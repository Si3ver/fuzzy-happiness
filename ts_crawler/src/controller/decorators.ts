import { RequestHandler, Router } from 'express'
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
    const middleware = Reflect.getMetadata('middleware', target.prototype, key)
    if (path && method && handler) {
      if (middleware) {
        router[method](path, middleware, handler)
      } else {
        router[method](path, handler)
      }
    }
  }
}

// 工厂模式
function getRequestDecorator(method: Method) {
  return function(path: string) {
    return function (target: any, key: string) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

// 使用中间件
function use(middleware: RequestHandler) {
  return function(target: any, key: string) {
    Reflect.defineMetadata('middleware', middleware, target, key)
  }
}

const get = getRequestDecorator(Method.get)
const post = getRequestDecorator(Method.post)
const put = getRequestDecorator(Method.put)
const del = getRequestDecorator(Method.del)

export { controller, use, get, post, put, del, router }

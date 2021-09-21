import { Router } from 'express'
const router = Router()

enum Method {
  get = 'get',
  post = 'post'
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

function get(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('path', path, target, key)
    Reflect.defineMetadata('method', 'get', target, key)
  }
}

function post(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('path', path, target, key)
    Reflect.defineMetadata('method', 'post', target, key)
  }
}

export { controller, get, post, router }

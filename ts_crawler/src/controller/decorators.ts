import { Router } from 'express'
const router = Router()

// 自动生成路由
function controller(target: any) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    const handler = target.prototype[key]
    if (path) {
      router.get(path, handler)
    }
  }
}

function get(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('path', path, target, key)
  }
}

export { controller, get, router }

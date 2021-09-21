import { RequestHandler } from 'express'
import router from '../router'
import { Method } from './request'

function controller (root: string) {
  return function (target: new (...args: any[]) => any): void {
    for (let key in target.prototype) {
      const path = Reflect.getMetadata('path', target.prototype, key)
      const method: Method = Reflect.getMetadata('method', target.prototype, key)
      const middleware: RequestHandler = Reflect.getMetadata('middleware', target.prototype, key)
      const handler = target.prototype[key]
      if (path && method) {
        const fullPath = root === '/' ? path : `${root}${path}`
        if (middleware) {
          router[method](fullPath, middleware, handler)
        } else {
          router[method](fullPath, handler)
        }
      }
    }
  }
}

export { controller }

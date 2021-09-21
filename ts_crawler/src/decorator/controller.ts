import { RequestHandler } from 'express'
import router from '../router'
import { Method } from './request'

function controller(target: new (...args: any[]) => any): void {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    const method: Method = Reflect.getMetadata('method', target.prototype, key)
    const middleware: RequestHandler = Reflect.getMetadata('middleware', target.prototype, key)
    const handler = target.prototype[key]
    if (path && method) {
      if (middleware) {
        router[method](path, middleware, handler)
      } else {
        router[method](path, handler)
      }
    }
  }
}

export { controller }

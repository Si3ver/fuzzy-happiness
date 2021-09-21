import { RequestHandler } from 'express'

function use(middleware: RequestHandler) {
  return function(target: any, key: string) {
    Reflect.defineMetadata('middleware', middleware, target, key)
  }
}

export { use }

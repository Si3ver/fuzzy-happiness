import { CrawlerController, LoginController } from '../controller'
import { RequestHandler } from 'express'

function use(middleware: RequestHandler) {
  return function(target: CrawlerController | LoginController, key: string) {
    const originMiddlewares = Reflect.getMetadata('middlewares', target, key) || []
    originMiddlewares.push(middleware)
    Reflect.defineMetadata('middlewares', originMiddlewares, target, key)
  }
}

export { use }

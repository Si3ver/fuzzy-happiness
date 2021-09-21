import { CrawlerController, LoginController } from '../controller'
import { RequestHandler } from 'express'

function use(middleware: RequestHandler) {
  return function(target: CrawlerController | LoginController, key: string) {
    Reflect.defineMetadata('middleware', middleware, target, key)
  }
}

export { use }

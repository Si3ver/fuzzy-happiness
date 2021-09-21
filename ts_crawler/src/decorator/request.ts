import { CrawlerController, LoginController } from '../controller'

export enum Method {
  get = 'get',
  post = 'post',
  put = 'put',
  del = 'delete'
}

// 工厂模式
function getRequestDecorator(method: Method) {
  return function(path: string) {
    return function (target: CrawlerController | LoginController, key: string) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

const get = getRequestDecorator(Method.get)
const post = getRequestDecorator(Method.post)
const put = getRequestDecorator(Method.put)
const del = getRequestDecorator(Method.del)

export { get, post, put, del }

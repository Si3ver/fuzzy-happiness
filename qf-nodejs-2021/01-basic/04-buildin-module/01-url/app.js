/**
 * 内置模块 - url 网址解析
 */

// const url = require('url')
const logger = require('../utils/log')


const urlString = 'https://www.baidu.com:443/path/index.html?id=2&age=31#tag=3'

// const urlObj = {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com:443',
//   port: '443',
//   hostname: 'www.baidu.com',
//   hash: '#tag=3',
//   search: '?id=2',
//   query: 'id=2',
//   pathname: '/path/index.html',
//   path: '/path/index.html?id=2',
//   href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
// }

// --- legacy ---
// logger.debug(url.parse(urlString))
// logger.debug(url.format(urlObj))
// logger.debug(url.resolve('http://www.abc.com/a', '../'))
// logger.debug(url.resolve('http://www.abc.com/a', '/b'))

// --- URL类 ---
// logger.debug(new URL(urlString))
// logger.debug(new URL(urlString).href)
// logger.debug(new URL(urlString).toJSON())
// logger.debug(new URL(urlString).toString())

// --- URLSearchParams类 ---
const search = new URL(urlString).search
logger.debug('search>>>', search)
logger.debug(new URLSearchParams(search))
logger.debug(new URLSearchParams(search).get('id'))
logger.debug(new URLSearchParams(search).get('age'))

const logger = require('../utils/log')

const url = require('url')

const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'

const urlObj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=3',
  search: '?id=2',
  query: 'id=2',
  pathname: '/path/index.html',
  path: '/path/index.html?id=2',
  href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
}

// logger.debug(url.parse(urlString))
// logger.debug(url.format(urlObj))
// logger.debug(url.resolve('http://www.abc.com/a', '../'))
// logger.debug(url.resolve('http://www.abc.com/a', '/b'))

const urlParams = new URLSearchParams(url.parse(urlString).search)
// logger.debug(urlParams)
logger.debug(urlParams.get('id'))
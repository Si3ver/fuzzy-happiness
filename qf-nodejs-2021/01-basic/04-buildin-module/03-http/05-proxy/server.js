const http = require('http')
const url = require('url')
const { createProxyMiddleware } = require('http-proxy-middleware')

const server = http.createServer((req, res) => {
  const urlStr = req.url
  if (/\/ajax/.test(urlStr)) {
    const proxy = createProxyMiddleware('/ajax', {
      target: 'https://lady.vip.com',
      changeOrigin: true
    })

    // https://lady.vip.com/ajax/getBrandRank.php?part=selling&warehouse=VIP_BJ&areaCode=101101&pagecode=a&brandInfoExt%5Bfields%5D=activeIndexTips,displayEndtime,salesNo,brandImage,mobileImageOne,agio,salesName,brandStoreSn,vendorSaleMessage,isSpecialBanner,hiddenEndTime,iconInfo,link&brandInfoExt%5BstartIndex%5D=0&brandInfoExt%5Bnum%5D=36&preview=0&sell_time_from&time_from&_=1606891993105

    proxy(req, res)

  } else if (/\/api/.test(urlStr)) {
    const proxy2 = createProxyMiddleware('/api', {
      target: 'https://m.lagou.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })

    proxy2(req, res)
  } else {
    
    console.log('error')
  }
})

server.listen(8080, () => {
  console.log('localhost:8080')
})
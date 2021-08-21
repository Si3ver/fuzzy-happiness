const crypto = require('crypto')

const password = '1'

const hash = crypto
  .createHash('md5')
  .update(password)
  .digest('hex')

console.log(hash)
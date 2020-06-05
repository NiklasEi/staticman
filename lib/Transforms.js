const md5 = require('md5')

const upcase = (value) => {
  return String(value).toUpperCase()
}

const downcase = (value) => {
  return String(value).toLowerCase()
}

const base64 = (value) => {
  return Buffer.from(value).toString('base64')
}

module.exports = {
  md5,
  upcase,
  downcase,
  base64
}

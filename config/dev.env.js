'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASEURL: '"https://newsapi.org/v2"',
  APIKEY:'"79ac39962f3647bf85383444acb53c6e"'
})

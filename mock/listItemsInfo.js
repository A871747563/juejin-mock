// 引入node两个文件读取相关模块
var fs = require('fs')
var path = require('path')
const rawdata = fs.readFileSync(path.join(__dirname, 'JsonData/listItemsInfo.json'), 'utf8')
const transfromData = JSON.parse(rawdata)

// 引入工具函数
import { shuffle } from './utils/shuffle.js'
export default [
  {
    url: '/api/getListItems',
    method: 'get',
    response: (res) => {
      // token令牌校验
      if (res.headers.authorization && res.headers.authorization === '17612a846b70a6d37978e3d85a3cf94efd9682e0') {
        return {
          code: 200,
          message: 'ok',
          data: shuffle(transfromData.data, 10)
        }
      } else {
        return {
          code: 200,
          message: 'error'
        }
      }
    }
  }
]

import axios from './http/axios'
//  编写请求接口
// get
export const getActivitys = (data) => {
  return axios({
    url: '/api/getActivitys',
    method: 'get',
    data
  })
}
export const getBoiling = (data) => {
  return axios({
    url: '/api/getBoiling',
    method: 'get',
    data
  })
}
export const getBooklet = (data) => {
  return axios({
    url: '/api/getBooklet',
    method: 'get',
    data
  })
}
export const getListItems = (data) => {
  return axios({
    url: '/api/getListItems',
    method: 'get',
    data
  })
}

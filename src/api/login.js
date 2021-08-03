import axios from './http/axios'
//  编写请求接口
// post
export const reqLogin = (data) => {
  return axios({
    url: '/api/getRoleById',
    method: 'post',
    data
  })
}

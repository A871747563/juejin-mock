import instance from './axiosInstance.js'

// 工厂模式，根据请求类型进行对应分配
const axios = ({ method, url, data, config }) => {
  method = method.toLowerCase()
  if (method === 'post') {
    return instance.post(url, data, { ...config })
  } else if (method === 'get') {
    return instance.get(url, {
      params: data,
      ...config
    })
  } else if (method === 'delete') {
    return instance.delete(url, {
      params: data,
      ...config
    })
  } else if (method === 'put') {
    return instance.put(url, data, { ...config })
  } else {
    console.error('未知的请求方式' + method)
    return false
  }
}
export default axios

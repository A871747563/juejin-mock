// localStorage操作方法
export function setLStorage(key, value) {
  window.localStorage.setItem(key, value)
}
export function getLStorage(key) {
  return window.localStorage.getItem(key)
}
export function DeleteLStorage(key) {
  localStorage.removeItem(key)
}
export function getLStoragekeys() {
  const arr = []
  for (var key in window.localStorage) {
    arr.push(key)
  }
  return arr
}
export function getLStorageValues() {
  return window.localStorage.valueOf()
}
export function DeleteLStorageAll() {
  window.localStorage.clear()
}

// cookie操作方法
// 设置cookie
export function setCookie(c_name, value, expire_days) {
  const exDate = new Date()
  exDate.setDate(exDate.getDate() + expire_days)
  document.cookie = c_name + '=' + encodeURIComponent(value) + ';expires=' + exDate.toUTCString() + ';path=/'
}
export function getCookie(c_name) {
  let c_start = null
  let c_end = null
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + '=')
    if (c_start !== -1) {
      c_start = c_start + c_name.length + 1
      c_end = document.cookie.indexOf(';', c_start)
      if (c_end === -1) c_end = document.cookie.length
      return decodeURIComponent(document.cookie.substring(c_start, c_end))
    }
  }
  return ''
}
// 检查cookie
export function checkCookie(c_name) {
  const username = getCookie(c_name)
  if (username !== null && username !== '') {
    return true
  } else {
    return false
  }
}
// 清除指定cookie
export function clearCookie(name) {
  setCookie(name, '', -1)
}
// 清除所有cookie
export function delAllCookie() {
  var keys = document.cookie.match(/[^ =;]+(?==)/g)
  if (keys) {
    for (var i = 0; i < keys.length; i++) {
      document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString()
      document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString()
      document.cookie = keys[i] + '=0;path=/;domain=ratingdog.cn;expires=' + new Date(0).toUTCString()
    }
  }
}

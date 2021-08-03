// unicode进行加密和解密

// 加密
export function translatUnicode(str) {
  var res = []
  for (var i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4)
  }
  return '\\u' + res.join('\\u')
}
// 解密
export function UntranslatUnicode(str) {
  str = str.replace(/\\/g, '%')
  return unescape(str)
}

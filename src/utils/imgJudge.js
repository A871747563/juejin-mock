// 判断页面请求图片是否加载完成，优化体验
export function ready(imgArr) {
  return new Promise((resolve, reject) => {
    const timer = setInterval(function () {
      for (const item of imgArr) {
        if (item.complete === false) {
          return
        }
      }
      clearInterval(timer) // 记得清除定时器噢~
      return resolve()
    }, 200)
  })
}

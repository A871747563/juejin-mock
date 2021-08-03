// 洗牌算法模拟数据的随机性
// arr 牌数组
// nums 需求的数据数量
export function shuffle(arr, nums) {
  // 将数组的值随机交换位置
  arr.sort(() => {
    return 0.5 - Math.random()
  })

  if (nums <= arr.length) {
    return arr.slice(0, nums)
  } else {
    return arr
  }
}

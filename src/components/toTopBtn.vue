<template>
  <div id="toTopBtn">
    <n-icon size="25" color="#0e7a0d">
      <ArrowUp />
    </n-icon>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { ArrowUp } from '@vicons/ionicons5'
export default {
  name: 'ToTopBtn',
  components: {
    ArrowUp
  },
  setup() {
    onMounted(() => {
      var btn = document.getElementById('toTopBtn')
      var timer = null
      var isTop = true
      // 获取页面可视区高度
      var clientHeight = 100 || document.documentElement.clientHeight

      // 滚动条滚动时触发
      window.onscroll = function () {
        // 显示回到顶部按钮
        var osTop = document.documentElement.scrollTop || document.body.scrollTop
        if (osTop >= clientHeight) {
          btn.style.display = 'block'
        } else {
          btn.style.display = 'none'
        }
        // 回到顶部过程中用户滚动滚动条，停止定时器
        if (!isTop) {
          clearInterval(timer)
        }
        isTop = false
      }

      btn.onclick = function () {
        // 设置定时器
        timer = setInterval(function () {
          // 获取滚动条距离顶部高度
          var osTop = document.documentElement.scrollTop || document.body.scrollTop
          var ispeed = Math.floor(-osTop / 7)

          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
          // 到达顶部，清除定时器
          if (osTop === 0) {
            clearInterval(timer)
          }
          isTop = true
        }, 30)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#toTopBtn {
  cursor: pointer;
  width: 39px;
  height: 39px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 5px 0px;
  border-radius: 50%;
  position: fixed;
  right: 24px;
  bottom: 70px;
  background: white;
  display: none;
  .n-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

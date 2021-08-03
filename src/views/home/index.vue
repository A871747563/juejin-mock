<template>
  <div id="Home">
    <div class="content">
      <div class="left">
        <router-view />
      </div>
      <div class="right">
        <div class="sign">
          <div class="top">
            <p>
              <n-icon color="#0e7a0d">
                <calendar-sharp />
              </n-icon>
              下午好！
            </p>
            <n-button type="success" dashed @click="buttonEvent">去签到</n-button>
          </div>
          <div class="bottom">连续签到赢掘金惊喜好礼</div>
        </div>
        <div class="download">
          <img src="@/assets/images/scan.png" alt="" />
          <a class="content-box" href="https://juejin.cn/app" target="_blank">
            <p>下载掘金客户端</p>
            <p>一个帮助开发者成长的社区</p>
          </a>
        </div>
        <div class="score">
          <div class="score-header">
            <n-icon color="#0e7a0d">
              <flag />
            </n-icon>
            作者榜
          </div>
          <div class="score-content">
            <div v-for="i of 3" :key="i" @click="pushUserInfo">
              <n-avatar circle size="large" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
              <div class="score-contentx">
                <p>
                  阿宝哥
                  <n-tag type="success" size="small">Lv6</n-tag>
                </p>
                <p>掘金签约作者|公众号巴拉巴拉巴拉啦</p>
              </div>
            </div>
          </div>
          <div class="score-footer">
            完整榜单
            <n-icon color="#0e7a0d">
              <ArrowForward />
            </n-icon>
          </div>
        </div>
        <div class="other">
          <div @click="otherEvent1">
            <img src="@/assets/images/Home01.png" alt="" />
            <p>掘金社区漫游指南</p>
          </div>
          <div @click="otherEvent2">
            <img src="@/assets/images/Home02.png" alt="" />
            <p>下载掘金浏览器插件</p>
          </div>
          <div @click="otherEvent3">
            <img src="@/assets/images/Home03.png" alt="" />
            <p>前往掘金翻译计划</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CalendarSharp, Flag, ArrowForward } from '@vicons/ionicons5'
import { stateInit } from './model.js'

export default {
  components: {
    CalendarSharp,
    Flag,
    ArrowForward
  },
  setup() {
    // 数据初始化
    const { router, notification } = stateInit()
    const otherEvent1 = () => {
      window.open('https://juejin.cn/book/6844733795329900551', '_blank')
    }
    const otherEvent2 = () => {
      window.open('https://juejin.cn/extension', '_blank')
    }
    const otherEvent3 = () => {
      window.open('https://github.com/xitu/gold-miner', '_blank')
    }
    // 一些点击事件

    const buttonEvent = () => {
      notification.info({
        title: '通知',
        content: '功能待开发~',
        duration: 1000
      })
    }
    const pushUserInfo = () => {
      router.push({
        name: 'UserInfo'
      })
    }

    return {
      pushUserInfo,
      buttonEvent,
      otherEvent1,
      otherEvent2,
      otherEvent3
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/views/home.scss';
</style>

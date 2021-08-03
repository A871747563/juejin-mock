<template>
  <div id="BoilingPoint" ref="container">
    <div class="main">
      <div class="nav-list">
        <n-affix :top="85" :listen-to="() => $refs.container">
          <div class="help-list">
            <n-menu v-model:value="activeKey" :options="menuOptions" @update:value="ActiveUpdate" />
          </div>
        </n-affix>
      </div>
      <div class="stream-wrapper">
        <div class="pin-editor">
          <div class="editor-body">
            <n-input
              v-model:value="text"
              placeholder="告诉你个小秘密，发布沸点时添加合适话题会被更多掘友们看见哟～"
              type="textarea"
              size="small"
              :autosize="{
                minRows: 3,
                maxRows: 1000
              }"
            />
          </div>
          <div class="bottom">
            <div class="editor-toolbar">
              <div class="tool">
                <div class="picker" @click="iconEvent">
                  <n-icon size="15">
                    <HappyOutline />
                  </n-icon>
                  表情
                </div>
                <div class="picker" @click="iconEvent">
                  <n-icon size="15"><ImageOutline /></n-icon>
                  图片
                </div>
                <div class="picker" @click="iconEvent">
                  <n-icon size="15"><LinkOutline /></n-icon>
                  链接
                </div>
                <div class="picker" @click="iconEvent">
                  <n-icon size="15">
                    <TrailSignOutline />
                  </n-icon>
                  话题
                </div>
              </div>
              <n-button type="primary" :disabled="textStatus" @click="buttonEvent01">发布</n-button>
            </div>
          </div>
        </div>
        <div class="pin-list">
          <!-- 不存在数据时(骨架屏) -->
          <template v-if="items.length === 0">
            <div class="skeleton">
              <n-skeleton height="40px" width="100%" :sharp="false" />
              <n-skeleton height="40px" width="80%" :sharp="false" />
              <n-skeleton height="40px" width="60%" :sharp="false" />
              <n-skeleton height="40px" width="65%" :sharp="false" />
              <n-skeleton height="40px" width="90%" :sharp="false" />
              <n-skeleton height="40px" width="40%" :sharp="false" />
            </div>
          </template>
          <!-- 存在数据时 -->
          <template v-if="items.length !== 0">
            <div v-for="(item, index) in items" :key="index" class="pin">
              <div class="pin-header-row">
                <div class="account-group">
                  <n-avatar
                    circle
                    size="large"
                    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                    @click="pushUserInfo"
                  />
                  <div class="pin-header-content">
                    <span class="username">{{ item.username }}</span>
                    <span class="meta-box">{{ item.meta }} - {{ item.time }}</span>
                  </div>
                </div>
                <n-button type="primary" ghost @click="buttonEvent02">关注</n-button>
              </div>
              <div class="pin-content-row">
                <div class="content-box">
                  {{ item.content }}
                </div>
              </div>
              <div class="action-box">
                <div class="action">
                  <n-icon size="15"><ThumbsUpOutline /></n-icon>
                  点赞
                </div>
                <div class="action center">
                  <n-icon size="15"><ChatbubbleOutline /></n-icon>
                  评论
                </div>
                <div class="action">
                  <n-icon size="15"><ShareOutline /></n-icon>
                  分享
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="sidebar">
        <div class="profile-box" @click="pushUserInfo">
          <div class="profile">
            <n-avatar circle :size="52" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            <div class="user-info">yamasaki</div>
          </div>
          <div class="stat-list">
            <div class="item">
              <div class="title">沸点</div>
              <div class="count">0</div>
            </div>
            <div class="item center">
              <div class="title">关注</div>
              <div class="count">4</div>
            </div>
            <div class="item">
              <div class="title">关注者</div>
              <div class="count">0</div>
            </div>
          </div>
        </div>
        <div class="pin-block">
          <div class="header">精选沸点</div>
          <div class="pin-list">
            <div v-for="i of 4" :key="i" class="item">
              <div class="content-box">
                <div class="content">【每日签到领好礼】xdm冲！参与每日巴拉巴拉</div>
                <div class="stat">72 赞 - 255 评论</div>
              </div>
              <img class="image-box" :src="`https://api.noome.cn/acgurl/index.php?${i}`" />
            </div>
          </div>
        </div>
        <div class="guide-link">
          <img src="@/assets/images/BoilingPoint01.png" />
          <p class="title">如何玩转沸点</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import { getBoiling } from 'api/informations.js'
import { stateInit } from './model.js'
import {
  HappyOutline,
  ImageOutline,
  LinkOutline,
  TrailSignOutline,
  ThumbsUpOutline,
  ChatbubbleOutline,
  ShareOutline
} from '@vicons/ionicons5'

export default {
  components: {
    HappyOutline,
    ImageOutline,
    LinkOutline,
    TrailSignOutline,
    ThumbsUpOutline,
    ChatbubbleOutline,
    ShareOutline
  },
  setup() {
    // 数据初始化
    const { router, items, textStatus, activeKey, menuOptions, notification, text } = stateInit()

    const rollingheight = () => {
      // scrollTop 滚动条滚动时，距离顶部的距离(被卷去的高度，我们看不见的那块)
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // windowHeight 可视区的高度(我们眼前的这块)
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // scrollHeight 滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight >= scrollHeight - 1) {
        getdatas()
      }
    }

    const ActiveUpdate = (key, item) => {
      activeKey.value = key
    }
    const buttonEvent02 = () => {
      notification.success({
        title: '通知',
        content: '关注成功，不要取关了噢~',
        duration: 2000
      })
    }
    const buttonEvent01 = () => {
      notification.success({
        title: '通知',
        content: '沸点发布成功~',
        duration: 2000
      })
      text.value = ''
    }
    const iconEvent = () => {
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
    // 请求事件
    // 请求获取列表数据（除图片外）
    const getdatas = () => {
      getBoiling()
        .then((res) => {
          items.value = items.value.concat(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // dom 挂载完毕
    onMounted(() => {
      getdatas()
      window.addEventListener('scroll', rollingheight, true)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', rollingheight, true) //  离开页面清除（移除）滚轮滚动事件
    })
    return {
      menuOptions,
      items,
      activeKey,
      ActiveUpdate,
      buttonEvent02,
      buttonEvent01,
      iconEvent,
      text,
      textStatus,
      pushUserInfo
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/views/boilingPoint.scss';
</style>

<template>
  <div id="UserInfo" ref="UserInfo">
    <div class="view">
      <div class="major-area">
        <div class="user-info-block">
          <n-avatar
            round
            :size="90"
            src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/7466ebf6604d49c23d338a882ea1dfc9~300x300.image"
          />
          <div class="info-box">
            <div class="top">
              程序媛小庄
              <n-tag type="info">Lv2</n-tag>
            </div>
            <div class="position">
              <n-icon size="16">
                <Bag />
              </n-icon>
              python后端开发 | 微信公众号:程序媛小庄
            </div>
            <div class="intro">
              <n-icon size="16">
                <CardSharp />
              </n-icon>
              微信公众号:程序媛小庄
            </div>
          </div>
          <div class="action-box">
            <n-button type="success" ghost @click="buttonEvent">关注</n-button>
          </div>
        </div>
        <div class="activity-list">
          <div class="header-content">
            <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="MenuEvent" />
          </div>
          <div v-for="item in Nums" :key="item" class="activity-item">
            <div class="post-header">
              <div class="author-info">
                <n-avatar
                  round
                  :size="45"
                  src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/7466ebf6604d49c23d338a882ea1dfc9~300x300.image"
                />
                <div class="author-info-content">
                  <div class="author-info-head">程序媛小庄</div>
                  <div class="meta-box">python后端开发 @ 微信公众号:程序媛小庄 - 2天前</div>
                </div>
              </div>
              <n-button type="success" ghost @click="buttonEvent">关注</n-button>
            </div>
            <div class="post-item-content">
              <div class="post-link" @click="pushDetail">
                <div class="post-item-title">The more interesting Pycharm - A variety of plugins | Python 主题月</div>
                <div class="rich-content">
                  <div class="post-item-excerpt">
                    本文正在参加「Python主题月」，详情查看 活动链接 前言
                    pycharm是一款强大的Python集成开发环境，带有完整的Python开发工具，本文介绍几款好用有意思的插...
                  </div>
                </div>
              </div>
            </div>
            <div class="post-item-actions">
              <div class="action">
                <n-icon size="14">
                  <ThumbsUpOutline />
                </n-icon>
                6
              </div>
              <div class="action">
                <n-icon size="14">
                  <ChatbubbleOutline />
                </n-icon>
                2
              </div>
              <div class="action">
                <n-icon size="14">
                  <ShareOutline />
                </n-icon>
                分享
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky">
        <n-affix :top="81" :listen-to="() => $refs.UserInfo">
          <div class="help-conent">
            <div class="stat-block">
              <div class="block-title">个人成就</div>
              <div class="block-body">
                <div class="stat-item">
                  <n-icon size="18" color="#18a058">
                    <ThumbsUp />
                  </n-icon>
                  文章被点赞 606
                </div>
                <div class="stat-item">
                  <n-icon size="18" color="#18a058">
                    <Eye />
                  </n-icon>
                  文章被阅读 138,559
                </div>
                <div class="stat-item">
                  <n-icon size="18" color="#18a058">
                    <TrendingUp />
                  </n-icon>
                  掘力值 1,938
                </div>
              </div>
            </div>
            <div class="follow-block">
              <div class="follow-item" @click="followEvent">
                <div class="item-title">关注了</div>
                <div class="item-count">29</div>
              </div>
              <div class="follow-item" @click="followEvent">
                <div class="item-title">关注者</div>
                <div class="item-count">183</div>
              </div>
            </div>
            <div class="more-block">
              <div class="more-item" @click="MoreEvent">
                <span>收藏集</span>
                <span>4</span>
              </div>
              <div class="more-item" @click="MoreEvent">
                <span>关注标签</span>
                <span>27</span>
              </div>
              <div class="more-item" @click="MoreEvent">
                <span>加入于</span>
                <span>2019-02-27</span>
              </div>
            </div>
          </div>
        </n-affix>
      </div>
    </div>
  </div>
</template>

<script>
import { stateInit } from './model.js'
import {
  CardSharp,
  Bag,
  ThumbsUpOutline,
  ChatbubbleOutline,
  ShareOutline,
  ThumbsUp,
  Eye,
  TrendingUp
} from '@vicons/ionicons5'
const menuOptions = [
  {
    label: '动态',
    key: 'a'
  },
  {
    label: '文章',
    key: 'b'
  },
  {
    label: '专栏',
    key: 'c'
  },
  {
    label: '沸点',
    key: 'd'
  },
  {
    label: '赞112',
    key: 'e',
    children: [
      {
        label: '文章',
        key: 'f'
      },
      {
        label: '沸点',
        key: 'g'
      },
      {
        label: '资讯',
        key: 'h'
      }
    ]
  },
  {
    label: '小册',
    key: 'i'
  },
  {
    label: '更多',
    key: 'j',
    children: [
      {
        label: '收藏集',
        key: 'k'
      },
      {
        label: '关注',
        key: 'l'
      }
    ]
  }
]
export default {
  components: {
    CardSharp,
    Bag,
    ThumbsUpOutline,
    ChatbubbleOutline,
    ShareOutline,
    ThumbsUp,
    Eye,
    TrendingUp
  },
  setup() {
    // 数据初始化
    const { Nums, router, notification } = stateInit()
    // 点击事件区
    const buttonEvent = () => {
      notification.success({
        title: '通知',
        content: '关注成功~',
        duration: 1000
      })
    }
    const pushDetail = () => {
      router.push({ name: 'Detail' })
    }
    const followEvent = () => {
      notification.info({
        title: '通知',
        content: '功能未开发~',
        duration: 1000
      })
    }
    const MoreEvent = () => {
      notification.info({
        title: '通知',
        content: '功能未开发~',
        duration: 1000
      })
    }
    const MenuEvent = (key, item) => {
      notification.info({
        title: '通知',
        content: '功能未开发~',
        duration: 1000
      })
    }

    return {
      activeKey: 'a',
      menuOptions,
      buttonEvent,
      pushDetail,
      followEvent,
      MoreEvent,
      MenuEvent,
      Nums
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/views/userInfo.scss';
</style>

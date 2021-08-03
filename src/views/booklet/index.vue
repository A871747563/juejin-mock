<template>
  <div id="Booklet" ref="Booklet">
    <div class="list-wrap">
      <div class="content-left">
        <!-- 不存在数据时(骨架屏) -->
        <template v-if="items.length === 0">
          <div class="skeleton">
            <n-skeleton height="40px" width="33%" :sharp="false" />
            <n-skeleton height="40px" width="66%" :sharp="false" />
            <n-skeleton height="40px" width="100%" :sharp="false" />
            <n-skeleton height="40px" width="80%" :sharp="false" />
            <n-skeleton height="40px" width="50%" :sharp="false" />
          </div>
        </template>
        <!-- 存在数据时 -->
        <template v-if="items.length !== 0">
          <div v-for="(item, index) in items" :key="index" class="item" @click="contentEvent">
            <img :src="item.img" />
            <div class="info">
              <div class="title">
                <n-tag type="warning">预售</n-tag>
                {{ item.title }}
              </div>
              <div class="desc">{{ item.desc }}</div>
              <div class="author">
                <n-avatar circle :size="20" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                <span class="username">
                  {{ item.username }}
                  <n-tag type="info">Lv2</n-tag>
                </span>

                <span class="self-description">{{ item.meta }}</span>
              </div>
              <div class="other">
                <span class="price-text">￥29.9</span>
                <span class="messages">28小节 - 2014人已购买</span>
              </div>
            </div>
          </div>
          <div class="pagination">
            <pagination
              v-model:currentPage="currentPage"
              :item-count="itemCount"
              :limit="pageSize"
              @updatePage="updatePage"
            />
          </div>
        </template>
      </div>
      <div class="content-right">
        <n-affix :top="116" :listen-to="() => $refs.Booklet">
          <div class="help-content">
            <div class="announcement">
              <img src="@/assets/images/booklet01.png" />
              <span>小册下线分销提现公告</span>
            </div>
            <div class="section">
              <div class="slogan">
                <div class="title">掘金小册是什么？</div>
                <div class="desc">一个小篇幅、高浓度、成体系、有收益的技术学习平台</div>
              </div>
              <div class="wechat-qr">
                <div class="title">关注公众号 领取优惠码</div>
                <img src="@/assets/images/booklet02.png" class="qr-img" />
              </div>
            </div>
            <div class="help">
              <div class="author">
                <img src="@/assets/images/booklet03.png" />
                <span class="title" @click="helpEvent">成为作者</span>
              </div>
              <div class="feedback">
                <img src="@/assets/images/booklet04.png" />
                <span class="title" @click="helpEvent">建议反馈</span>
              </div>
            </div>
          </div>
        </n-affix>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import pagination from 'components/pagination.vue'
import { getBooklet } from 'api/informations.js'
import { stateInit } from './model.js'
export default {
  components: { pagination },
  setup() {
    const { items, currentPage, itemCount, pageSize, message, notification } = stateInit()
    const updatePage = (val) => {
      getdatas()
      message.warning(`翻页成功，当前是第${val.currentPage}页(*^_^*)`)
      // 翻页滚回顶部
      window.scrollTo(0, 0)
    }
    const contentEvent = () => {
      notification.info({
        title: '通知',
        content: '页面开发ing~',
        duration: 1000
      })
    }
    const helpEvent = () => {
      notification.info({
        title: '通知',
        content: '功能开发ing~',
        duration: 1000
      })
    }
    // 请求函数定义
    // 请求获取列表数据
    const getdatas = () => {
      getBooklet()
        .then((res) => {
          items.value = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
    onMounted(() => {
      // 初始化数据
      getdatas()
    })

    return {
      currentPage,
      itemCount,
      pageSize,
      updatePage,
      contentEvent,
      helpEvent,
      items
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/views/booklet.scss';
</style>

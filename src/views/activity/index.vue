<template>
  <div id="Activity">
    <div class="content">
      <div class="panel">
        <div class="banner">
          <swiper :slides-per-view="1" :space-between="5" autoplay navigation loop :pagination="{ clickable: true }">
            <swiper-slide>
              <img src="@/assets/images/Activity01.jpg" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/Activity02.jpg" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/Activity03.jpg" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/Activity04.jpg" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="calendar">
          <v-date-picker v-model="date" is-expanded />
        </div>
      </div>
      <div class="event-list">
        <!-- 不存在数据时(骨架屏) -->
        <template v-if="items.length === 0">
          <div v-for="i of 16" :key="i" class="skeleton">
            <n-skeleton height="80%" width="80%" />
          </div>
        </template>
        <!-- 存在数据时 -->
        <template v-if="items.length !== 0">
          <div v-for="(item, index) in items" :key="index" class="event" @click="listEvent">
            <div class="banner">
              <img :src="item.imgUrl" alt="" />
              <div class="message">
                <div class="title">{{ item.title }}</div>
                <div class="date">
                  <n-icon size="15" color="898989">
                    <CalendarSharp />
                  </n-icon>
                  {{ item.date }}
                </div>
                <div class="bottom">
                  <span class="address">
                    <n-icon size="15" color="898989">
                      <Location />
                    </n-icon>
                    {{ item.address }}
                  </span>
                  <n-button type="success" round>报名参加</n-button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { CalendarSharp, Location } from '@vicons/ionicons5'
import { getActivitys } from 'api/informations.js'
import { onMounted, onUnmounted } from 'vue'
// 需要哪个导入哪个
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { stateInit } from './model.js'
import 'swiper/swiper.scss'
// 这里导入对应样式
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
// 导入后在SwiperCore.use([])里注册
SwiperCore.use([Pagination, Autoplay, Navigation])

export default {
  components: { Swiper, SwiperSlide, CalendarSharp, Location },
  setup() {
    // 数据初始化
    const { notification, items } = stateInit()
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
    const listEvent = () => {
      notification.info({
        title: '通知',
        content: '相应页面尚未开发',
        duration: 1000
      })
    }
    // 请求函数定义
    const getdatas = () => {
      getActivitys()
        .then((res) => {
          const data = res.data
          for (const i in data) {
            data[i]['imgUrl'] = `https://api.noome.cn/acgurl/index.php?key=${new Date().getTime()}${i}`
          }
          items.value = items.value.concat(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    onMounted(() => {
      // 数据初始化
      getdatas()
      window.addEventListener('scroll', rollingheight, true)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', rollingheight, true) //  离开页面清除（移除）滚轮滚动事件
    })
    return {
      items,
      listEvent,
      date: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/views/activity.scss';
</style>

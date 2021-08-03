<template>
  <div id="Detail">
    <div class="content">
      <div class="suspended-panel">
        <div class="like-btn" @click="asideEvent">
          <n-badge value="999+" color="grey">
            <n-icon size="18" color="#c6c6c6">
              <ThumbsUp />
            </n-icon>
          </n-badge>
        </div>
        <div class="comment-btn" @click="asideEvent">
          <n-badge value="999+" color="grey">
            <n-icon size="18" color="#c6c6c6">
              <BowlingBallSharp />
            </n-icon>
          </n-badge>
        </div>
        <div class="collect-btn" @click="asideEvent">
          <n-icon size="18" color="#c6c6c6">
            <Bug />
          </n-icon>
        </div>
        <div class="report-btn" @click="asideEvent">
          <n-icon size="18" color="#c6c6c6">
            <BuildSharp />
          </n-icon>
        </div>
        <p class="share-title">分享</p>
        <div class="weibo-btn" @click="asideEvent">
          <n-icon size="18" color="#c6c6c6">
            <CafeSharp />
          </n-icon>
        </div>
        <div class="qq-btn" @click="asideEvent">
          <n-icon size="18" color="#c6c6c6">
            <CalendarClear />
          </n-icon>
        </div>
        <div class="wechat-btn" @click="asideEvent">
          <n-icon size="18" color="#c6c6c6">
            <CameraReverseSharp />
          </n-icon>
        </div>
      </div>
      <div class="left">
        <div class="left-one">
          <div class="left-content">
            <div class="title">
              <n-avatar
                circle
                :size="36"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                @click="pushInfoPage"
              />
              <div class="title-content">
                <p class="username">
                  稀土君
                  <n-tag type="error" size="small">LV6</n-tag>
                </p>
                <p class="meta-box">
                  <span>2021年07月08日</span>
                  <span>阅读 3842</span>
                </p>
              </div>
              <n-button type="success" size="small" ghost @click="attenEvent">关注</n-button>
            </div>
            <div class="main">
              <div class="main-content">
                <img src="@/assets/images/contentPic01.jpg" alt="" />
                <h1>稀土开发者大会出品人集结完毕，5折购票火热进行中！</h1>
                <p>
                  2021年9月10-11日，由稀土掘金开发者社区主办的首届 稀土开发者大会 将于北京盛大开幕。目前 14
                  大热门技术专题出品人全部集结完毕，来自各大互联网科技大厂的明星讲师正持续上线，5折购票火热进行中！
                  本届稀土开发者大会已有 4 位联席主席上线，分别是OceanBase CTO
                  杨传辉（日照）、奇安信集团副总裁左文建、字节跳动技术副总裁洪定坤、字节跳动技术副总裁杨震原，他们将对大会的内容质量严格把关。
                  稀土开发者大会集国际化、前瞻性、实践性于一体，是一场高性价比的综合性技术大会。大会面向开发者社区的新生中坚力量，旨在帮助研发团队骨干拓宽视野，实现跨越式成长。大会议题设置秉持从实践中来，到实践中去的理念，力图让每一次分享和交流都有所悟、有所得。
                  本届稀土开发者大会策划的专题涵盖低代码、混沌工程、微服务、云原生、人工智能、音视频、数据库、前端等热点技术，由来自阿里巴巴、百度、贝壳、bilibili、美团、腾讯、网易、知乎、字节跳动等互联网大厂具备技术影响力与洞察力的优质出品人负责议题把控。
                </p>
                <img src="@/assets/images/contentPic02.jpg" alt="" />
                <strong>14大专题和出品人信息如下：</strong>
                <h1>混沌工程深度实战</h1>
                <p>
                  混沌工程是一种提高技术架构弹性的技术手段，旨在以实验发现系统性弱点，从而验证系统稳定性，保障系统在遭受影响时的影响降至最低。本专题将会邀请行业内优先实践混沌工程的一线技术专家来分享相关实践。
                </p>
                <strong>出品人：阿里巴巴 高级技术专家 周洋（中亭）</strong>
                <p>
                  2011
                  年加入阿里巴巴高可用架构团队，长期参与稳定性产品研发和集团架构演进工作，主导了强弱依赖、灰度环境、故障演练、智能对账等多款高可用产品的研发和建设，见证了阿里高可用产品体系从
                  1.0 到 3.0 的发展历程，积累了丰富的架构和稳定性经验。2015
                  年作为共享事业部的双11负责人，负责大促和常态稳定性的保障工作。目前负责高可用技术的云化输出和技术演进工作，阿里云产品
                  AHAS（应用高可用）的技术负责人，混沌工程布道师。
                </p>
                <h1>微服务架构与治理</h1>
                <p>
                  微服务是一种用于构建应用的架构方案。微服务架构有别于更为传统的单体式方案，可将应用拆分成多个核心功能。每个功能都被称为一项服务，可以单独构建和部署，这意味着各项服务在工作（和出现故障）时不会相互影响。本专题聚焦微服务架构与治理。
                </p>
                <strong>
                  微服务是一种用于构建应用的架构方案。微服务架构有别于更为传统的单体式方案，可将应用拆分成多个核心功能。每个功能都被称为一项服务，可以单独构建和部署，这意味着各项服务在工作（和出现故障）时不会相互影响。本专题聚焦微服务架构与治理。
                </strong>
                <p>
                  微服务平台、消息队列、Kona
                  JDK等腾讯云产品的负责人，负责中间件相关产品的规划、架构和落地实施。有超过十三年的研发架构经验，在腾讯曾负责过腾讯广点通实时推荐系统和腾讯手机QQ空间。目前关注云计算中间件相关领域，致力于整合PaaS技术资源，构建基于微服务的技术中台，为企业的数字化转型提供基础支持。
                </p>
                <h1>机器学习应用与实战</h1>
                <p>
                  随着人工智能的发展，机器学习也不断在各个领域广泛应用；随着场景不断变化，机器学习也不断调整与适配；针对复杂化的场景，机器学习又该怎么去匹配业务，让业务快速发展呢？
                </p>
                <strong>出品人：知乎 数据中台&算法中台负责人 张瑞</strong>
                <p>
                  毕业于北京邮电大学，先后在百度、豌豆荚等从事搜索、搜索广告、推荐系统中的机器学习、自然语言处理、推荐算法等方向的工作。目前担任知乎高级技术总监，数据&算法中台负责人，负责知乎整体数据及机器学习技术相关工作。
                </p>
                <h1>低代码探索</h1>
                <p>
                  最近火热的低代码和无代码，其概念早在很多年前就出现了，现在火起来，原因不外乎可视化编程技术的发展与其应用范围的扩大。可视化在行业内到底是什么状况？本专题将请行业内可视化编程的应用方及开发者来给大家具体分析。
                </p>
                <strong>出品人： 支付宝事业线体验技术部 生产力平台负责人 杨周璇</strong>
                <p>
                  2007年毕业于浙江大学，2008年加入淘宝，2012年加入蚂蚁金服。在蚂蚁金服先后负责过 Node Web 框架 Chair
                  的中间件研发，研发平台 BaaS 服务的研发，目前在支付宝事业线体验技术部，负责低代码平台研发。
                </p>
                <h1>云原生技术应用</h1>
                <p>
                  随着虚拟化技术的成熟和分布式框架的普及，在容器技术、可持续交付、编排系统等开源社区的推动下，以及微服务等开发理念的带动下，应用上云是大趋势。本专题将聚焦业界对云原生切实的实践，帮助大家在云时代下提供一些参考。
                </p>
                <strong>出品人：百度 主任架构师 郑然</strong>
                <p>
                  现任百度主任架构师，负责支撑大搜索的分布式存储和计算以及大规模服务治理技术的研发工作。有着近 10
                  年的搜索引擎架构研发经验，先后研发了 3 代 PaaS 系统以及基础的微服务架构中间件,
                  主导研发了多个大规模的微服务中间件，帮助大搜索团队提升系统的稳定性和研发效率。积极参与技术社区的分享活动。
                </p>
                <h1>合作联络</h1>
                <strong>购票咨询 +86 18201620311 ticket@xitu.io</strong>
                <br />
                <strong>合作赞助 +86 18710181256 bd@xitu.io</strong>
                <br />
                <strong>报名演讲 +86 18275331904 speaker@xitu.io</strong>
                <div class="last">
                  <span>稀土开发者大会</span>
                  <span>遇见技术，遇见你</span>
                </div>
              </div>
              <div class="tag-list-box">
                <span>文章分类</span>
                <n-tag type="error" size="medium">代码人生</n-tag>
                <n-tag type="error" size="medium">文章标签</n-tag>
                <n-tag type="error" size="medium">程序员</n-tag>
              </div>
              <div class="footer-author-block">
                <n-avatar
                  circle
                  :size="36"
                  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                  @click="pushInfoPage"
                />
                <div class="footer-content">
                  <p class="username">
                    稀土君
                    <n-tag type="error" size="small">LV6</n-tag>
                    <span>最酷的 @ 稀士</span>
                  </p>
                  <p class="meta-box">发布了2,537篇文章 - 获得点赞40,950 - 获得阅读2,691,259</p>
                </div>
                <n-button type="success" size="small" ghost @click="attenEvent">关注</n-button>
              </div>
              <div class="article-banner">
                <a
                  href="https://juejin.cn/extension/?utm_source=juejin.cn&utm_medium=post&utm_campaign=extension_promotion"
                  target="_blank"
                >
                  安装掘金浏览器插件
                </a>
                <div>
                  打开新标签页发现好内容，掘金、GitHub、Dribbble、ProductHunt
                  等站点内容轻松获取。快来安装掘金浏览器插件获取高质量内容吧！
                </div>
              </div>
              <div class="comment-list-box">
                <n-notification-provider>
                  <comment />
                </n-notification-provider>
              </div>
            </div>
          </div>
        </div>
        <div class="left-two">
          <itemList :text="['相关推荐']" :data="message" />
        </div>
      </div>
      <div class="right">
        <div class="info">
          <div class="block-title">关于作者</div>
          <div class="user-item" @click="pushInfoPage">
            <n-avatar circle :size="45" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            <div class="info-box">
              <p>
                稀土君
                <n-tag type="error" size="small">LV6</n-tag>
              </p>
              <p>最酷的 @ 稀土</p>
            </div>
          </div>
          <div class="stat-item">
            <n-icon size="20" color="#0e7a0d">
              <CheckmarkCircleSharp />
            </n-icon>
            活得点赞40,950
          </div>
          <div class="stat-item">
            <n-icon size="20" color="#0e7a0d">
              <Diamond />
            </n-icon>
            文章被阅读2,691,119
          </div>
        </div>
        <div class="download">
          <img src="@/assets/images/scan.png" alt="" />
          <div class="content-box" @click="pushDownload">
            <p>下载掘金客户端</p>
            <p>一个帮助开发者成长的社区</p>
          </div>
        </div>
        <div class="about">
          <div class="block-title">相关文章</div>
          <div v-for="i of 5" :key="i" class="item" @click="pushDetail">
            <div class="entry-list">1024 程序员节系列视频《掘友脱单指南》重磅推出</div>
            <div class="entry-meta-box">
              <n-icon size="15">
                <ThumbsUp />
              </n-icon>
              <span>236</span>
              <n-icon size="15">
                <ChatboxEllipsesSharp />
              </n-icon>
              <span>1605</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comment from 'components/comment.vue'
import itemList from 'components/itemList.vue'
import { stateInit } from './model.js'
import {
  CheckmarkCircleSharp,
  Diamond,
  ThumbsUp,
  ChatboxEllipsesSharp,
  BowlingBallSharp,
  Bug,
  BuildSharp,
  CafeSharp,
  CalendarClear,
  CameraReverseSharp
} from '@vicons/ionicons5'
export default {
  components: {
    CheckmarkCircleSharp,
    Diamond,
    ThumbsUp,
    ChatboxEllipsesSharp,
    BowlingBallSharp,
    Bug,
    BuildSharp,
    CafeSharp,
    CalendarClear,
    CameraReverseSharp,
    comment,
    itemList
  },
  setup() {
    // 数据初始化
    const { router, notification, message } = stateInit()
    const asideEvent = () => {
      notification.info({
        title: '通知',
        content: '功能待开发~',
        duration: 1000
      })
    }
    const pushInfoPage = () => {
      router.push({
        name: 'UserInfo'
      })
    }
    const attenEvent = () => {
      notification.success({
        title: '通知',
        content: '关注成功，别想跑路噢~',
        duration: 1000
      })
    }
    const pushDownload = () => {
      window.open('https://juejin.cn/app', '_blank')
    }
    const pushDetail = () => {
      notification.info({
        title: '通知',
        content: '页面待实现噢~',
        duration: 1000
      })
    }

    return {
      asideEvent,
      pushInfoPage,
      attenEvent,
      pushDownload,
      pushDetail,
      message
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/views/detail.scss';
</style>

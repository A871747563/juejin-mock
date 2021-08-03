<template>
  <div id="Comment">
    <div class="comment-form">
      <n-avatar circle :size="30" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      <n-input v-model:value="value" type="input" placeholder="输入评论" @focus="focusEvent" @blur="blurEvent" />
    </div>
    <div v-if="unfoldStatus01 || unfoldStatus02" class="replyModel">
      <div class="L-content">
        <span>
          <n-icon size="18" color="#18a058">
            <HappyOutline />
          </n-icon>
          表情
        </span>
        <span>
          <n-icon size="18" color="#18a058">
            <ImageOutline />
          </n-icon>
          图片
        </span>
      </div>
      <div class="R-content">
        <span>Ctrl or ⌘ + Enter</span>
        <n-button type="success" :disabled="valueStatus" @click="buttonEvent">评论</n-button>
      </div>
    </div>
    <div class="comment-list">
      <!-- 评论，不带回复 -->
      <div v-for="i of 3" :key="i" class="list-item">
        <n-avatar
          circle
          :size="25"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          @click="pushInfo"
        />
        <div class="content-box">
          <div class="meta-box">
            徐小夕
            <n-tag type="error" size="small">LV6</n-tag>
            <span>掘金签约作者 @公众|趣谈前端</span>
          </div>
          <div class="content">是时候学习一波真正的技术了</div>
          <div class="reply-stat">
            <span>2小时前</span>
            <span>
              <div>
                <n-icon size="16" color="#8a93a0">
                  <ThumbsUp />
                </n-icon>
                <span>100</span>
              </div>
              <div>
                <n-icon size="16" color="#8a93a0">
                  <ChatboxEllipsesSharp />
                </n-icon>
                <span>回复</span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <!-- 评论，带回复 -->
      <div v-for="i of 3" :key="i" class="list-item">
        <n-avatar
          circle
          :size="25"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          @click="pushInfo"
        />
        <div class="content-box">
          <div class="meta-box">
            徐小夕
            <n-tag type="error" size="small">LV6</n-tag>
            <span>掘金签约作者 @公众|趣谈前端</span>
          </div>
          <div class="content">是时候学习一波真正的技术了</div>
          <div class="reply-stat">
            <span>2小时前</span>
            <span>
              <div>
                <n-icon size="16" color="#8a93a0">
                  <ThumbsUp />
                </n-icon>
              </div>
              <div>
                <n-icon size="16" color="#8a93a0">
                  <ChatboxEllipsesSharp />
                </n-icon>
                <span>回复</span>
              </div>
            </span>
          </div>
          <!-- 评论回复的起点 -->
          <div class="sub-comment-list">
            <div v-for="j of 3" :key="j" class="sub-list-item">
              <n-avatar
                circle
                :size="25"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                @click="pushInfo"
              />
              <div class="sub-content-box">
                <div class="sub-meta-box">
                  徐小夕
                  <n-tag type="error" size="small">LV6</n-tag>
                  <span>掘金签约作者 @公众|趣谈前端</span>
                </div>
                <div class="sub-content">是时候学习一波真正的技术了</div>
                <div class="sub-reply-stat">
                  <span>2小时前</span>
                  <span>
                    <div>
                      <n-icon size="16" color="#8a93a0">
                        <ThumbsUp />
                      </n-icon>
                    </div>
                    <div>
                      <n-icon size="16" color="#8a93a0">
                        <ChatboxEllipsesSharp />
                      </n-icon>
                      <span>回复</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ThumbsUp, ChatboxEllipsesSharp, HappyOutline, ImageOutline } from '@vicons/ionicons5'
import { useNotification } from 'naive-ui'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  name: 'Comment',
  components: {
    ThumbsUp,
    ChatboxEllipsesSharp,
    HappyOutline,
    ImageOutline
  },
  setup() {
    const notification = useNotification()
    const value = ref('')
    const router = useRouter()
    const pushInfo = () => {
      router.push({
        name: 'UserInfo'
      })
    }
    const buttonEvent = () => {
      notification.success({
        title: '通知',
        content: '回复成功~',
        duration: 1000
      })
      value.value = ''
    }
    return {
      pushInfo,
      buttonEvent,
      value
    }
  },
  data() {
    return {
      unfoldStatus02: false
    }
  },
  computed: {
    valueStatus() {
      return !this.value
    },
    unfoldStatus01() {
      return !!this.value
    }
  },
  methods: {
    focusEvent() {
      this.unfoldStatus02 = true
    },
    blurEvent() {
      this.unfoldStatus02 = false
    }
  }
}
</script>

<style scoped lang="scss">
#Comment {
  width: 100%;
  padding: 15px 0 0 0;
  border-top: 1px solid #ebebeb;
  .comment-form {
    padding: 12px 15px 0 15px;
    margin: 0 19px;
    height: 37px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .n-avatar {
      flex: none;
      margin-right: 12px;
    }
    .n-input {
      flex: auto;
    }
  }
  .replyModel {
    height: 30px;
    margin: 8px 35px 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .L-content {
      display: flex;
      align-items: center;
      > span {
        color: #18a058;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        .n-icon {
          margin-right: 5px;
        }
      }
      > span:last-child {
        margin-left: 20px;
      }
    }
    .R-content {
      display: flex;
      align-items: center;
      > span {
        font-size: 1.3rem;
        color: #c2c2c2;
        margin-right: 8px;
      }
      .n-button {
        height: 30px;
        width: 60px;
      }
    }
  }
  .comment-list {
    margin: 25px 19px 0 78px;
    min-height: 500px;
    .list-item {
      min-height: 82px;
      margin-bottom: 15px;
      //   border: 1px solid black;
      display: flex;
      .n-avatar {
        flex: none;
        margin-right: 10px;
        cursor: pointer;
      }
      .content-box {
        flex: auto;
        // border: 1px solid black;
        font-size: 1.3rem;
        border-bottom: 1px solid #ebebeb;
        .meta-box {
          height: 17px;
          font-size: 1.3rem;
          text-align: start;
          color: #333333;
          display: flex;
          align-items: center;
          ::v-deep(.n-tag) {
            transform: scale(0.7);
          }
          > span {
            font-size: 1.32rem;
            color: #909090;
            font-weight: 500;
          }
        }
        .content {
          margin-top: 6px;
          height: 21px;
          font-size: 1.3rem;
          line-height: 22px;
          text-align: start;
          color: #505050;
        }
        .reply-stat {
          margin-top: 7px;
          height: 16px;
          font-size: 1.2rem;
          text-align: start;
          color: #8a9aa9;
          > span {
            float: left;
            > div {
              display: flex;
              align-items: center;
              cursor: pointer;
            }
            &:last-child {
              width: 105px;
              height: 16px;
              margin-left: 360px;
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              align-items: center;
            }
          }
        }
        .sub-comment-list {
          padding-left: 12px;
          margin: 12px 0;
          .sub-list-item {
            height: 84px;
            // border: 1px solid black;
            display: flex;
            .n-avatar {
              flex: none;
              margin-right: 10px;
              cursor: pointer;
            }
            .sub-content-box {
              flex: auto;
              padding-top: 5px;
              // border: 1px solid black;
              border-top: 1px solid #ebebeb;
              .sub-meta-box {
                height: 17px;
                font-size: 1.3rem;
                text-align: start;
                color: #333333;
                display: flex;
                align-items: center;
                ::v-deep(.n-tag) {
                  transform: scale(0.7);
                }
                > span {
                  font-size: 1.32rem;
                  color: #909090;
                  font-weight: 500;
                }
              }
              .sub-content {
                margin-top: 6px;
                height: 21px;
                font-size: 1.3rem;
                line-height: 22px;
                text-align: start;
                color: #505050;
              }
              .sub-reply-stat {
                margin-top: 7px;
                height: 16px;
                font-size: 1.2rem;
                text-align: start;
                color: #8a9aa9;
                > span {
                  float: left;
                  > div {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                  }
                  &:last-child {
                    width: 105px;
                    height: 16px;
                    margin-left: 313px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

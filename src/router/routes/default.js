export const defaultRoute = [
  {
    path: '/',
    name: 'layout',
    meta: {
      title: '整体布局'
    },
    component: () => import('layouts/index.vue'),
    redirect: { name: 'Login' },
    children: [
      {
        path: 'home',
        name: 'Home',
        hidden: false,
        meta: {
          title: '标题占位'
        },
        component: () => import('views/home/index.vue'),
        redirect: { name: 'Recommend' },
        children: [
          {
            path: 'android',
            name: 'Android',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/home/components/android.vue')
          },
          {
            path: 'homeAttention',
            name: 'HomeAttention',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/home/components/attention.vue')
          },
          {
            path: 'behind',
            name: 'Behind',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/home/components/behind.vue')
          },
          {
            path: 'coding',
            name: 'Coding',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/home/components/coding.vue')
          },
          {
            path: 'development',
            name: 'Development',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/home/components/development.vue')
          },
          {
            path: 'front',
            name: 'Front',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/home/components/front.vue')
          },
          {
            path: 'intelligence',
            name: 'Intelligence',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/home/components/intelligence.vue')
          },
          {
            path: 'iOS',
            name: 'IOS',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/home/components/ios.vue')
          },
          {
            path: 'read',
            name: 'Read',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/home/components/read.vue')
          },
          {
            path: 'recommend',
            name: 'Recommend',
            hidden: false,
            meta: {
              title: '首页'
            },
            component: () => import('views/home/components/recommend.vue')
          }
        ]
      },
      {
        path: 'detail',
        name: 'Detail',
        hidden: true,
        meta: {
          title: '详细页'
        },
        component: () => import('views/detail/index.vue')
      },
      {
        path: 'news',
        name: 'News',
        hidden: false,
        meta: {
          title: '资讯页'
        },
        component: () => import('views/news/index.vue')
      },
      {
        path: 'boilingPoint',
        name: 'BoilingPoint',
        hidden: false,
        meta: {
          title: '沸点'
        },
        component: () => import('views/boilingPoint/index.vue')
      },
      {
        path: 'booklet',
        name: 'Booklet',
        hidden: false,
        meta: {
          title: '小册'
        },
        component: () => import('views/booklet/index.vue')
      },
      {
        path: 'activity',
        name: 'Activity',
        hidden: false,
        meta: {
          title: '活动页'
        },
        component: () => import('views/activity/index.vue')
      },
      {
        path: 'notification',
        name: 'Notification',
        hidden: false,
        meta: {
          title: '通知页'
        },
        component: () => import('views/notification/index.vue'),
        children: [
          {
            path: 'attention',
            name: 'Attention',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/notification/components/attention.vue')
          },
          {
            path: 'comment',
            name: 'Comment',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/notification/components/comment.vue')
          },
          {
            path: 'like',
            name: 'Like',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/notification/components/like.vue')
          },
          {
            path: 'position',
            name: 'Position',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/notification/components/position.vue')
          },
          {
            path: 'system',
            name: 'System',
            hidden: false,
            meta: {
              title: '标题占位'
            },
            component: () => import('views/notification/components/system.vue')
          }
        ]
      },
      {
        path: 'userInfo',
        name: 'UserInfo',
        hidden: true,
        meta: {
          title: '用户信息'
        },
        component: () => import('views/userInfo/index.vue')
      },
      {
        path: 'subscribe',
        name: 'Subscribe',
        hidden: true,
        meta: {
          title: '标签管理'
        },
        component: () => import('views/subscribe/index.vue')
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '404页'
        },
        component: () => import('views/404.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: false,
    meta: {
      title: '登录页'
    },
    component: () => import('views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*', // vue3新写法，使用正则
    name: '404redirect',
    meta: {
      title: '其他页'
    },
    redirect: { name: '404' }
  }
]

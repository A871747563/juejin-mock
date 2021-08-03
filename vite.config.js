// vue 插件
import vue from '@vitejs/plugin-vue'
// mock 插件
import { viteMockServe } from 'vite-plugin-mock'
// 路径解析
import path from 'path'

export default {
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      supportTs: false
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      components: pathResolve('src/components'),
      views: pathResolve('src/views'),
      api: pathResolve('src/api'),
      store: pathResolve('src/store'),
      utils: pathResolve('src/utils'),
      styles: pathResolve('src/styles'),
      layouts: pathResolve('src/layouts'),
      assets: pathResolve('src/assets')
    }
  },
  // 公共样式
  css: {
    // 此处添加全局scss
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: '@import "./src/styles/index.scss";'
    //   }
    // }
  },
  // 服务
  server: {
    open: true,
    port: 9100
    // 代理配置
    // proxy: {
    //   '/api': {
    //     target: 'https://suggest.taobao.com/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  build: {
    target: 'modules',
    outDir: 'dist', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: []
  },
  // 生产环境路径，类似webpack的assetsPath
  base: './',
  // 静态资源服务的文件夹，默认public
  publicDir: 'public'
}

// 路径解析方法
function pathResolve(dir) {
  return path.resolve(__dirname, dir)
}

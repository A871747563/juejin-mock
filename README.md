# juejin-mock

> ✨这是一个基于Vue3.0+Vite2+NaiveUI+Mock的仿掘金项目

## 🍻一些废话

* 2020年Vue迎来全新的3.0版本，其引入的Composition API让我们更好地进行代码组织。
  * 采用了TS来编写
  * 支持 Composition API
  * Vue3中响应式数据原理改成proxy
  * VD的对比算法更新，只更新VD的绑定了动态数据的部分
  * 使用`hook函数`代替`mixin`
* 2021年Vite迎来全新的2.0版本，更加贴近于Webpack的配置方式但比其快速。
  * 配置选项变化：`vue特有选项`、创建选项、css选项、jsx选项等
  * `别名行为变化`：不再要求`/`开头或结尾
  * `Vue支持`：通过[@vitejs/plugin-vue]插件支持
  * React支持
  * HMR API变化
  * 清单格式变化
  * `插件API重新设计`
* Naive-UI 是一款基于Vue 3.0/TypeScript 技栈开发的前端 UI 组件库，个人很喜欢其UI风格。

## 🎓项目说明

* 前后端分离促使了Mock数据方式的出现。
* 前端工程化的需求让Vue2.0转变向3.0版本（主要是Composition API的出现）。
* Naive-UI从项目构建起就基于比较流行的TS和Vue3进行开发，从底层上和Vue3十分兼容。
* 个人和掘金的简约布局和色调布置方式十分兼容，于是进行一个仿造（绿化），巩固一下css基础以及熟悉新技术。项目的完成度并不高，只是简单进行仿造，布局上基本实现，功能上只实现一小部分，因为功能比较依赖于后端数据（Mock不是万能的）。当然，往后有打算通过Node搭建后端环境进行完整的开发。

## 💻项目演示

![01.jpg](https://i.loli.net/2021/08/03/YFNEn2bcqaXAmKr.jpg)

![02.jpg](https://i.loli.net/2021/08/03/merPZLj3fc5oC7p.jpg)

## 💻启动方式

> 一、项目依赖配置

```js
yarn install
// or
npm install
```

> 二、启动服务器

```js
yarn run dev
// or
npm run dev
```

> 三、打包

```js
yarn run build
// or
npm run build
```




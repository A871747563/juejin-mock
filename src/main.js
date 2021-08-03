import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import VCalendar from 'v-calendar'
import 'styles/index.scss'
import Particles from 'particles.vue3'

createApp(App).use(router).use(store).use(VCalendar, {}).use(naive).use(Particles).mount('#app')

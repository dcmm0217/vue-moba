import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './assets/icon/iconfont.css'
import './assets/scss/style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
import Card from './components/Card'
Vue.component('m-card',Card)
import ListCard from './components/ListCard'
Vue.component('m-list-card',ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:"http://localhost:3000/web/api"
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
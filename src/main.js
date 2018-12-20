/* 入口 */
import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
// 引入初始样式
import '../static/css/reset.css'
import '../static/css/iconfont.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
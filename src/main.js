import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from "components/common/toast/index.js";
import fastclick from 'fastclick'
import vuelazyload from 'vue-lazyload'

Vue.use(toast)

Vue.use(vuelazyload,{
  loading:require('./assets/img/common/placeholder.png')
})

Vue.config.productionTip = false
// 解决移动端300ms延迟
fastclick.attach(document.body)
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,

}).$mount('#app')

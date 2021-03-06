import Vue from "vue"
import VueRouter from "vue-router";

const home = ()=>import('../views/home/home')
const category= ()=>import('../views/category/category')
const cart = ()=>import('../views/cart/cart')
const profile = ()=>import('../views/profile/profile')
const detail = ()=>import('views/detail/detail')
//安装插件
Vue.use(VueRouter)
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/detail/:iid',   // :idd 动态路由
    component:detail
  }
]
//创建router
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

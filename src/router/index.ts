import { createWebHashHistory, createRouter } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import Home from 'views/Home/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  { path: '/home', component: Home },
  { path: '/chat', component: () => import('views/Chat/index.vue') },
  { path: '/login', component: () => import('views/Login/index.vue') },
  { path: '/shop-cart', component: () => import('views/ShopCart/index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

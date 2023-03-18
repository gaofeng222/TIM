import { createWebHashHistory, createRouter } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  { path: '/chat', component: () => import('views/Chat/index.vue') },
  { path: '/login', component: () => import('views/Login/index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import router from '@/router'
import nprogress from 'nprogress'
// const whiteLists = ['/login', '/home']
router.beforeEach((to, from, next) => {
  // const token = localStorage.getItem('token')
  nprogress.start()
  next()
  //后台的拦截
  // if (token) {
  //   if (to.path == '/login') {
  //     next('/')
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (whiteLists.includes(to.path)) {
  //     next()
  //   } else if (to.path == '/login') {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
})

router.afterEach((to, from) => {
  nprogress.done()
})

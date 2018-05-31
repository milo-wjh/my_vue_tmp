import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/balance',
      name: 'balance',
      component: () => import('@/views/balance/')
    },
    {
      path: '/myCoupon',
      name: 'myCoupon',
      component: () => import('@/views/coupon/myCoupon')
    },
    {
      path: '/integral',
      name: 'integral',
      component: () => import('@/views/integral/')
    },
    { path: '/404', component: () => import('@/views/404') },
    { path: '*', redirect: '/404' }
  ]
})


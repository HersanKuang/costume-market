import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/home/Home')
  },
  {
    path: '/category',
    name: 'Caregory',
    component: () => import('views/category/Category')
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: () => import('views/shopcart/Shopcart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/profile/Profile')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 修改导航标签标题，to对象中的matched数组中的第一个对象中的meta对象才是子组件对应的父组件中的meta
// beforeEach 注册一个全局前置守卫：当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中
// router.beforeEach((to, from ,next) => {
//   document.title = to.matched[0].meta.title
//   // console.log(to);
//   next()
// })

export default router

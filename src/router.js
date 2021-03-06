import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/videodemo',
      name: 'videodemo',
      component: () => import('./components/videodemo.vue')
    },
    {
      path:'/dropdemo',
      name: 'dropdemo',
      component: () => import('./components/dropdemo.vue')
    },
    {
      path:'/canvasdemo',
      name:'canvasdemo',
      component: () => import('./components/canvasdemo.vue')
    },
    {
      path:'/svgdemo',
      name:'svgdemo',
      component: () => import('./components/svgdemo.vue')
    },
    {
      path: '/storagedemo',
      name: 'storagedemo',
      component: () => import('./components/storagedemo.vue')
    },
    {
      path: '/vueworkerdemo',
      name: 'vueworkerdemo',
      component: () => import('./components/vueworkerdemo.vue')
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/world',
    name: 'World',
    component: () => import(/* webpackChunkName: "about" */ '../views/World.vue')
  },
  {
    path: '/india',
    name: 'India',
    component: () => import(/* webpackChunkName: "about" */ '../views/India.vue')
  },
  {
    path: '/testing',
    name: 'Testing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Testing.vue')
  },
  {
    path: '/hospitals',
    name: 'Hospitals',
    component: () => import(/* webpackChunkName: "about" */ '../views/Hospitals.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notifications.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

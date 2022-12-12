import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',

    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',

    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetails.vue')
  },
  {
    path: '/checkout/:id',
    name: 'checkout',

    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue')
  },
  {
    path: '/basket',
    name: 'basket',

    component: () => import(/* webpackChunkName: "about" */ '../views/Basket.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListingView from '../views/ListingView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listing',
    name: 'listing',
    component: ListingView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

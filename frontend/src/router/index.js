import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListingView from '../views/ListingView.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

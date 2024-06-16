import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/read/:slug',
      name: 'read',
      component: () => import('../views/ReadView.vue')
    },  
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/search-read/:id',
      name: 'search-read',
      component: () => import('../views/ReadSearchArticle.vue')
    }
  ]
})

export default router

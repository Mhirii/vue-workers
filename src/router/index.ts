import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuth } from '@/stores/auth'

const auth = JSON.parse(localStorage.getItem('auth') || '{}').access_token ? true : false

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/LoginView.vue'),
      meta: {
        require_auth: false
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),

      meta: {
        require_auth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.require_auth)) {
    if (!auth) {
      next({ name: 'auth' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

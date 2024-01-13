import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/pages/master/dashboard.vue'
import home from '@/pages/home.vue'
import profile from '@/pages/profile.vue'
import messege from '@/pages/messege.vue'
import settings from '@/pages/settings.vue'

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: dashboard,
    children: [
      {
        name: 'Home',
        path: '/home',
        component: home
      },
      {
        name: 'Profile',
        path: '/profile',
        component: profile
      },
      {
        name: 'messege',
        path: '/messege',
        component: messege
      },
      {
        name: 'settings',
        path: '/settings',
        component: settings
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory('process.env.BASE_URL')
})

export default router

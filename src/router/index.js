import { createRouter, createWebHashHistory } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/createArticle',
    name: 'createArticle',
    //component: CreateArticle
  },
  {
    path: '/settings',
    name: 'settings',
    //component: Settings
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    //omponent: UserProfile
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

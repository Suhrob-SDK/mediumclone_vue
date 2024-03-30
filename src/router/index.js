import { createRouter, createWebHashHistory } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'

const routes = [
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
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/feed',
    name: 'yourfeed',
    //component: CreateArticle
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    //component: CreateArticle
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    //component: CreateArticle
  },
  {
    path: '/articles/:slug',
    name: 'article',
    //component: CreateArticle
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    //component: CreateArticle
  },
  {
    path: '/settings',
    name: 'settings',
    //component: Settings
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    //component: UserProfile
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    //component: UserProfile
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

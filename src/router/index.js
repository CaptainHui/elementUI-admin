import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from '../views/ListArticle.vue'
import CreateArticle from '../views/CreateArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/articles/index'
  },
  {
    path: '/articles/index',
    name: 'List-Article',
    component:ListArticle
  },
  {
    path: '/articles/create',
    name: 'Create-Article',
    component:CreateArticle
  }
]

const router = new VueRouter({
  routes
})

export default router

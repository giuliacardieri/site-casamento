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
    path: '/a-festa',
    name: 'A Festa',
    component: () => import(/* webpackChunkName: "about" */ '../views/Festa.vue')
  },
  {
    path: '/guia-de-sorocaba',
    name: 'Guia de Sorocaba',
    component: () => import(/* webpackChunkName: "about" */ '../views/Guia.vue')
  },
  {
    path: '/lista-de-presentes',
    name: 'Lista de Presentes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Presentes.vue')
  },
  {
    path: '/mural-de-mensagens',
    name: 'Mural de Mensagens',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mural.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return window.scrollTo(0, 0)
  }
})

export default router

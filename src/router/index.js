import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/DashboardComponent.vue'
import Login from '../views/LoginComponent.vue'
import IndexUser from '../views/user/IndexComponent';
import Register from '../views/user/RegisterComponent.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user',
    name: 'user',
    component: IndexUser,
  },
  {
    path: '/user/registro',
    name: 'registro',
    component: Register,
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

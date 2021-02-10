import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Whether from '../views/Whether'
import page404 from '../views/page404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'Whether',
    component: Whether,
  },
  {
    path: '*',
    name: 'page404',
    component: page404
  }
]

const scrollBehavior = function () {
  return {x: 0, y: 0};
};

const router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes
})

export default router

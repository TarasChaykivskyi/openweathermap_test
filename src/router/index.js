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

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

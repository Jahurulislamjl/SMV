import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: require('../views/Home').default
    },

    {
       path: '/about',
        name: 'about',
        component: require('../views/About').default
    },
    {
        path: '/contact',
        name: 'contact',
        component: require('../views/Contact').default
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

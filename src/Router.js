import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './Index.vue'
import About from './About.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    }
];

const router = new VueRouter({
    routes,
});

export default router

import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Detailsbase from '../views/Details-Base.vue'

const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/details-base/:id',
        name: 'Detailsbase',
        component: Detailsbase
    }
]

const router = createRouter({ history,routes })
export default router
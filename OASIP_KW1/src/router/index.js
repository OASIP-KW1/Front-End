import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Detailsbase from '../views/Details-Base.vue'
import EventListAll from '../views/EventListAll.vue'

const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/details-base/:id',
                name: 'Detailsbase',
                component: Detailsbase
            }
        ]
    },
    {
        path: '/event',
        name: 'EventListAll',
        component: EventListAll
    }
]

const router = createRouter({ history,routes })
export default router
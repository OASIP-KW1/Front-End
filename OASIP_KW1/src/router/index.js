import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Detailsbase from '../views/Details-Base.vue'
import EventListAll from '../views/EventListAll.vue'
import EventCategory from '../views/EventCategory.vue'
import AddEvents from '../views/AddEvents.vue'
import Abouts from '../views/Abouts.vue'

// const history = createWebHistory('/kw1/')
const history = createWebHistory('')
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/event',
        name: 'EventListAll',
        component: EventListAll
    },
    {
        path: '/details-base/:id',
        name: 'Detailsbase',
        component: Detailsbase
    },
    {
        path: '/eventCategory',
        name: 'EventCategory',
        component: EventCategory
    },
    {
        path: '/addevent',
        name: 'AddEvents',
        component: AddEvents
    },
    {
        path: '/aboutsus',
        name: 'Abouts',
        component: Abouts
    }
    
]

const router = createRouter({ history,routes })
export default router
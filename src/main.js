import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'

const routes = [
    {
        path:'/',
        name:"Home",
        component:()=>import('./components/HelloWorld.vue')
    },
    {
        path:'/users',
        name:"users",
        component:()=>import('./pages/users/UserList.vue')
    },
    {
        path:'/products',
        name:"products",
        component:()=>import('./pages/Product.vue')
    },
    {
        path:'/categories',
        name:"categories",
        component:()=>import('./pages/Category.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')

//Routing Module
import {createRouter, createWebHistory} from "vue-router";

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name:'home', component:()=>import('../public/pages/login.component.vue')},
        {path:'/user', name:'user', component:()=>import('../public/pages/user.component.vue')},
    ]

})




export default router;
//Routing Module
import {createRouter, createWebHistory} from "vue-router";

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name:'home', component:()=>import('../public/pages/login.component.vue')},
    ]

})




export default router;
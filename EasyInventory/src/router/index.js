//Routing Module
import {createRouter, createWebHistory} from "vue-router";

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/customers', name:'customers', component:()=>import('../customers/components/register-customer.component.vue')},
    ]

})




export default router;
//Routing Module
import {createRouter, createWebHistory} from "vue-router";

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name:'home', component:()=>import('../public/pages/home.component.vue')}
    ]

})




export default router;
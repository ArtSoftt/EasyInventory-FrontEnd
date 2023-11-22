//Routing Module
import {createRouter, createWebHistory} from "vue-router";

const router= createRouter({
    history: createWebHistory(),
    routes:[
      
        {path:'/', name:'home', component:()=>import('../public/pages/login.component.vue')},
        {path:'/user', name:'user', component:()=>import('../public/pages/user.component.vue')},
        {path:'/sign-up',name:'signUp',component:()=>import('../public/pages/signup.component.vue')},
        {path:'/home',name:'dashboard',component:()=>import('../inventory/components/home.component.vue')},
        {path:'/products', name:'table', component:()=>import('../products/pages/products.component.vue')},
         {path:'/customers', name:'customers', component:()=>import('../customers/components/register-customer.component.vue')},

        {path:"/new-products",name:"newProducts", component:()=>import('../products/pages/product-item-add.component.vue')}

    ]

})




export default router;
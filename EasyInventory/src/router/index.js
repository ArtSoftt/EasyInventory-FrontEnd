//Routing Module
import {createRouter, createWebHistory} from "vue-router";
import userComponent from "@/public/pages/user.component.vue";
import homeComponent from "@/inventory/components/home.component.vue";
import signUpComponent from "../public/pages/signup.component.vue";
import loginComponent from "@/public/pages/login.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: homeComponent, meta: {title: 'Home'}},
        {path: '/user', component: userComponent},
        {path: '/sign-up',component: signUpComponent},
        {path: '/login',component: loginComponent},
        {path: '/', redirect: '/login'}
    ]

})


export default router;
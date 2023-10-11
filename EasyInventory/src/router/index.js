//Routing Module
import {createRouter, createWebHistory} from "vue-router";
import userComponent from "@/public/pages/user.component.vue";
import homeComponent from "@/inventory/components/home.component.vue";
import signUpComponent from "@/public/pages/signup.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/user', name: 'user', userComponent},
        {path: '/sign-up', name: 'signUp', signUpComponent},
        {path: '/home', name: 'dashboard', homeComponent},
        {path: '/', name: 'home', homeComponent},

    ]

})


export default router;
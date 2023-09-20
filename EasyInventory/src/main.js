
import { createApp } from 'vue'
import App from './App.vue'


//Router
import router from "./router/index"

//PrimeVue
import PrimeVue from "primevue/config";

//Theme
import "./assets/theme.css"

//PrimeVue Material Design Theme
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

//Toast Service
import ToastService from "primevue/toastservice";

//PrimeVue Components
import Toolbar from "primevue/toolbar";

createApp(App)
    .use(router)
    .use(PrimeVue, {ripple:true})
    .use(ToastService)
    .component("pv-toolbar",Toolbar)
    .mount('#app')

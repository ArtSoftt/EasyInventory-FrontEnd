import { createApp } from 'vue'
import App from './App.vue'


//Router
import router from "./router/index"

//PrimeVue
import PrimeVue from "primevue/config";

//Theme
import '../src/assets/theme.css'
import "primevue/resources/primevue.min.css"

//PrimeVue Material Design Theme
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

//Toast Service
import ToastService from "primevue/toastservice";

//PrimeVue Components
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";
import SelectButton from "primevue/selectbutton";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider"
import Avatar from "primevue/avatar";
import Dialog from "primevue/dialog";
import Message from "primevue/message";

//i18n support
import i18n from "./i18n"
createApp(App)
    .use(router)
    .use(PrimeVue, {ripple:true})
    .use(ToastService)
    .use(i18n)
    .component("pv-input-text",InputText)
    .component("pv-button",Button)
    .component("pv-toolbar",Toolbar)
    .component("pv-avatar", Avatar)
    .component("pv-divider",Divider)
    .component("pv-select-button", SelectButton)
    .component("pv-card",Card)
    .component("pv-dialog",Dialog)
    .component("pv-message",Message)
    .mount('#app')

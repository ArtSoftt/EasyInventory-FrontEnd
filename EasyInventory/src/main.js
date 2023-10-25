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


import InputText from 'primevue/inputtext';

import Divider from "primevue/divider"
import Avatar from "primevue/avatar";
import Dialog from "primevue/dialog";
import Message from "primevue/message";
import Sidebar from "primevue/sidebar";
import Listbox from "primevue/listbox";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Calendar from 'primevue/calendar';
import MultiSelect from 'primevue/multiselect';


//i18n support
import i18n from "./i18n"
createApp(App)
    .use(router)
    .use(PrimeVue, {ripple:true})
    .use(ToastService)
    .use(i18n)
    .component("pv-calendar",Calendar)
    .component("pv-multiSelect",MultiSelect)

    .component("pv-datatable",DataTable)
    .component("pv-colum",Column)
    .component("pv-row-from",Row)
    .component("pv-colum-group",ColumnGroup)
    .component("pv-list-box",Listbox)
    .component('pv-splitter',Splitter)
    .component('pv-splitter-panel',SplitterPanel)
    .component("pv-sidebar",Sidebar)
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

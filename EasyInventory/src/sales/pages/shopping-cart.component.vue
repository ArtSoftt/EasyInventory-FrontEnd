<script>

import {SalesApiService} from "@/sales/services/sales-api.service";
import {ProductApiService} from "@/products/services/product-api.service";
import {CustomerApiService} from "@/customers/services/customer-api.service";
import {ProductEntity} from "@/sales/model/Product-entity";

export default {
  name: "shopping-cart.component",

  methods:{
    EditSale(sales){
      this.temp = sales;
    },

    getNameCustomer(codigo){
      const customer = this.customers.find(customer => customer.id === codigo);
      return customer ? customer.name : "N/A";

    },

    DeleteSale(codigo){
      console.log(codigo)
      if(confirm("Quiere eliminar este Elemento")){
        this.sales = this.sales.filter(sale=>sale.id!==codigo);

        /*this.list_sales.sales = this.sales*/
        console.log("ServivioPUT");
        this.salesApi.deleteSaleById(codigo)
            .then(response=>{
              console.log("Eliminado");
              console.log(response.data);
            })
            .catch(error => {
              if (error.response.status === 404) {
                // Manejar el error 404 específicamente
                console.error('Recurso no encontrado:', error);
              } else {
                // Manejar otros errores
                console.error('Error en la solicitud:', error);
              }
            });
      }
    }
  },
  data(){
    return{
      sales:[],
      temp:[],

      search:'',
      user:{},

      customers:[],
      list_sales:[],
      salesApi:new SalesApiService(),
      productsApi: new ProductApiService(),
      CustomerApi: new CustomerApiService()

    }
  },
  created() {

    this.user=(JSON.parse(localStorage.getItem('user')));
    this.sales= this.salesApi.getSaleByIdUser(this.user.id)
        .then((response)=>{
          console.log("SALES")
          this.sales=response.data;
        });
    this.customers=this.CustomerApi.getCustomerById(this.user.id)
        .then((response)=>{
          console.log("SALES")
          this.customers=response.data.customers;
          console.log(this.customers)
        });

  }
}
</script>

<template>
  <div class=" w-full" >
    <div class="w-full" >
      <h1>New Sales</h1><hr>
    </div>

    <div class="flex justify-content-between">
      <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <pv-input-text v-model="search" placeholder="Search" />
      </span>
      <router-link to="sales">
        <pv-button icon="pi pi-plus" rounded outlined aria-label="Filter" />
      </router-link>
    </div>

    <div>
      <pv-datatable :value="sales" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                 paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                 currentPageReportTemplate="{first} to {last} of {totalRecords}">
        <template #paginatorstart>
          <pv-button type="button" icon="pi pi-refresh" text />
        </template>
        <template #paginatorend>
          <pv-button type="button" icon="pi pi-download" text />
        </template>
        <pv-colum field="id" header="Id" style="width: 25%"></pv-colum>
        <pv-colum field="id_user" header="UserID" style="width: 25%"></pv-colum>
        <pv-colum field="customer_id" header="Customer" style="width: 25%">
          <template #body="slotProps">
            <p>
              {{getNameCustomer(slotProps.data.id)}}</p>



          </template>

        </pv-colum>
        <pv-colum field="date" header="Date" style="width: 25%"></pv-colum>
        <pv-colum field="totalCost" header="Total Cost" style="width: 25%"></pv-colum>
        <pv-colum header="Products" style="width: 25%">
          <template #body="slotProps">
            <div class="flex align-items-center gap-2">
              <span v-for="item in slotProps.data.listOfProducts ">ID:{{ item.id_product    }}</span>
            </div>
          </template>
        </pv-colum>
        <pv-colum header="Acciones" style="width: 25%">
            <template #body="slotProps">
              <div class="flex align-items-center gap-2">
                <router-link to="/sales">
                  <pv-button label="Edit" @click="EditSale(slotProps.data)" severity="success" class="border-round-md"></pv-button>
                </router-link>
                <pv-button label="Delete" @click="DeleteSale(slotProps.data.id)" severity="danger" class="border-round-md"></pv-button>


              </div>
            </template>
        </pv-colum>
      </pv-datatable>
      <span>{{customers}}</span><br>









    </div>

  </div>

</template>

<style scoped>



</style>
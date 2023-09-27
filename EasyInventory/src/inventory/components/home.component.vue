<template>
  <toolbar-component />
  <pv-list-box>

  </pv-list-box>


</template>

<script>
import ToolbarComponent from "@/public/pages/toolbar.component.vue";
import {CustomerApiService} from "@/customers/services/customer-api.service";
import {ProviderApiService} from "@/providers/services/provider-api.service";
import {ProductApiService} from "@/products/services/product-api.service";
import {SalesApiService} from "@/sales/services/sales-api.service";
export default{
  name:"home-component",
  components:{ ToolbarComponent},
  data(){
    return{
      sales:[],
      shops:[],
      user:{},
      providers:[],
      products:[],
      bestProduct:[],
      salesApi: new SalesApiService(),
      customerApi: new CustomerApiService(),
      providerApi: new ProviderApiService(),
      productApi: new ProductApiService()
    }
  },
   async created() {
    this.user=(JSON.parse(localStorage.getItem('user')));
    console.log(this.user.id);
    this.sales= this.salesApi.getSalesById(this.user.id)
        .then((response)=>{
          this.sales=response.data;
          console.log(this.sales);
        })
  },
  methods:{

  }
}
</script>
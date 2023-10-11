<template>

</template>

<script>
import {CustomerApiService} from "@/customers/services/customer-api.service";
import {ProviderApiService} from "@/providers/services/provider-api.service";
import {ProductApiService} from "@/products/services/product-api.service";
import {SalesApiService} from "@/sales/services/sales-api.service";
import {ShopApiService} from "@/shops/services/shop-api.service";
export default{
  name:"home",

  data(){
    return{
      sales:[],
      shops:[],
      user:{},
      providers:[],
      products:[],
      bestProduct:[],
      saleApi: new SalesApiService(),
      shopApi: new ShopApiService(),
      customerApi: new CustomerApiService(),
      providerApi: new ProviderApiService(),
      productApi: new ProductApiService()
    }
  },
  created() {
    this.user=(JSON.parse(localStorage.getItem('user')));
    // this.sales= this.saleApi.getSalesById(this.user.idListSales)
    //     .then((response)=>{
    //       console.log('HOLA');
    //       this.sales=response.data.sales;
    //     })

    console.log(this.user);
    // this.shops =this.shopApi.getById(this.user.idListShops)
    //     .then((response)=>{
    //       this.shops=response.data.shops;
    //     })
    // this.providers=this.providerApi.getProviderById(this.user.idListProviders)
    //     .then((response)=>{
    //       this.providers=response.data.providers;
    //     })
    // this.products=this.productApi.getProductById(this.user.idListProducts)
    //     .then((response)=>{
    //       this.products=response.data.products;
    //     })
    // this.sales=this.saleApi.getSalesById(this.user.idListSales)
    //     .then((response)=>{
    //       this.sales=response.data.sales;
    //     })
  },
  methods:{

  }
}
</script>
<style>
.card{
  background:white;
}
</style>
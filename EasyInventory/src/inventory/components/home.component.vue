<template>
<div class="w-full px-5">
  <div class="flex">
    <div class="col-6">
      <pv-card>
        <template #title>
          Last sales
        </template>
        <template #content>
          <pv-card v-for="sale in sales" class="card my-1">
            <template #content>
             <p>Date: {{sale.date}}</p>
             <p>Total Cost: $  {{sale.totalCost }}</p>
            </template>
          </pv-card>
        </template>
      </pv-card>
    </div>
    <div class="col-6">
      <pv-card>
        <template #title>
          Most Selled Product
        </template>
        <template #content>
          <pv-card  class="card my-1">
            <template #content>
              <p>Id: {{this.productmostselled.id}}</p>
              <p>Cantidad: {{this.productmostselled.quantity}}</p>
            </template>
          </pv-card>
        </template>
      </pv-card>
    </div>
  </div>

  <div class="flex">
    <div class="col-4">
      <pv-card>
        <template #title>
          Last Shoppings
        </template>
        <template #content>
          <pv-card v-for="shop in shops" class="card my-2 ">
            <template #content>
              <div class="flex">
                {{ shop.title }}
                <span class="example-spacer"></span>
                {{ shop.totalPrice }}
              </div>
            </template>
          </pv-card>
        </template>
      </pv-card>
    </div>
    <div class="col-4 ">
      <pv-card class="main-card">
        <template #title>
          Providers
        </template>
        <template #content>
          <div class="content">

            <pv-card v-for="provider in providers" class="card my-1 ">
              <template #content>
                {{ provider.name }}
              </template>
            </pv-card>
          </div>

        </template>
      </pv-card>
    </div>
    <div class="col-4">
      <pv-card>
        <template #title>
          Products
        </template>
        <template #content>
          <pv-card v-for="product in products" class="card my-1">
            <template #content>
              <p>ID: {{ product.id }}</p>
              <p>Name: {{ product.name }}</p>
              <p> Stock: {{ product.stock }}</p>
              <p> Price: $ {{ product.unitPrice }}</p>
            </template>
          </pv-card>
        </template>
      </pv-card>
    </div>
  </div>
</div>


</template>

<script>
import ToolbarComponent from "@/public/pages/toolbar.component.vue";
import {CustomerApiService} from "@/customers/services/customer-api.service";
import {ProviderApiService} from "@/providers/services/provider-api.service";
import {ProductApiService} from "@/products/services/product-api.service";
import {SalesApiService} from "@/sales/services/sales-api.service";
import {ShopApiService} from "@/shops/services/shop-api.service";
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
      product:{},
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
    this.sales= this.saleApi.getSalesById(this.user.idListSales)
        .then((response)=>{
          this.sales=response.data.sales;
        })
    this.shops =this.shopApi.getById(this.user.idListShops)
        .then((response)=>{
          this.shops=response.data.shops;
        })
    this.providers=this.providerApi.getProviderById(this.user.idListProviders)
        .then((response)=>{
          this.providers=response.data.providers;
        })
    this.products=this.productApi.getProductById(this.user.idListProducts)
        .then((response)=>{
          this.products=response.data.products;
        })
    this.sales=this.saleApi.getSalesById(this.user.idListSales)
        .then((response)=>{
          this.sales=response.data.sales;
        })
    this.getMostSelledProduct();
  },
  methods:{
    async getMostSelledProduct(){
      let max = 5;
      this.products= await this.productApi.getProductById(this.user.idListProducts);
      this.products=this.products.data.products;
      this.products.map(product =>{
      product.stockfinal=product.stock-product.currentStock;
      })
      this.products.forEach(product =>{
        if(max>product.stockfinal){
          max=product.stockfinal;
          this.product=product;
        }
      })
      console.log(this.product);
    }
  },
  computed(){

    //Obtener los datos del local Storage
    this.user = (JSON.parse(localStorage.getItem('user')));
    this.sales = (JSON.parse(localStorage.getItem('sales')));
    this.providers = (JSON.parse(localStorage.getItem('providers')));
    this.products = (JSON.parse(localStorage.getItem('products')));
    this.shops = (JSON.parse(localStorage.getItem('shops')));

    // Hallar el Product mas vendido en sales
    for (const argument of this.sales) {
      for (const argumentElement of argument.listOfProducts) {
        if (argumentElement.quantity > this.productmostselled.quantity) {
          this.productmostselled = argumentElement;
        }
      }
    }



  }
}
</script>
<style>
.example-spacer{
  flex: 1 1 auto;
}
.card{
  background:white;
}
</style>
<template>
<div class="container">
  <div class="flex">
    <div class="col-6">
      <pv-card>
        <template #title>
          Last sales
        </template>
        <template #content>
          <pv-card v-for="sale in sales" class="card my-1">
            <template #content>
<!--              <h1>{{ sale.totalCost}}</h1>-->
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
              <div class="flex">
                {{ product.name }}
                <span class="example-spacer"></span>
                {{ product.stock }}
              </div>
            </template>
          </pv-card>
        </template>
      </pv-card>
    </div>
  </div>
</div>


</template>

<script>
import ToolbarComponent from "@/shared/components/toolbar.component.vue";

export default {
  name: "home-component",
  components: {ToolbarComponent},
  data() {
    return {


    }
  },
  created() {
    this.user = (JSON.parse(localStorage.getItem('user')));
    this.sales = (JSON.parse(localStorage.getItem('sales')));
    this.providers = (JSON.parse(localStorage.getItem('providers')));
    this.products = (JSON.parse(localStorage.getItem('products')));
    this.shops = (JSON.parse(localStorage.getItem('shops')));
    // this.sales = this.saleApi.getSalesById(this.user.idListSales)
    //     .then((response) => {
    //       this.sales = response.data.sales;
    //
    //     })
    // this.shops = this.shopApi.getById(this.user.idListShops)
    //     .then((response) => {
    //       this.shops = response.data.shops;
    //       console.log(this.shops)
    //     })
    // this.providers = this.providerApi.getProviderById(this.user.idListProviders)
    //     .then((response) => {
    //       this.providers = response.data.providers;
    //     })
    // this.products = this.productApi.getProductById(this.user.idListProducts)
    //     .then((response) => {
    //       this.products = response.data.products;
    //     })
    // this.sales = this.saleApi.getSalesById(this.user.idListSales)
    //     .then((response) => {
    //       this.sales = response.data.sales;
    //     })
  },
  methods: {}
}
</script>
<style>
.container {
    height: 100%;
}


</style>
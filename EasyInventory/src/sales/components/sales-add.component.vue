<script>
import {ProductApiService} from "@/products/services/product-api.service";
import {Sale} from "@/sales/model/sales-entity";
import {ProductEntity} from "@/sales/model/Product-entity";
import {SalesApiService} from "@/sales/services/sales-api.service";
import {CustomerApiService} from "@/customers/services/customer-api.service";
export default {
  name: "sales-menu.component",
  methods:{
    summitForm() {
      this.SelectProducts.forEach((SelectProduct, index) => {
        this.newSale.listOfProducts.push(new ProductEntity( index+1, SelectProduct.id, 5))
      });
      this.salesApi.create(this.newSale)
          .then((response)=>{
            console.log("la nueva venta")
            console.log(this.newSale);
          })
    },

    AddId(){
      this.newSale.id=this.Sales.length+1;
      this.newSale.id_user=this.user.id;
    },

    CalculateTotalCost() {
      this.newSale.totalCost = 0;
      this.SelectProducts.forEach((SelectProduct) => {
        this.newSale.totalCost = this.newSale.totalCost + SelectProduct.unitPrice;
      });
      if(this.discount!==0){
        this.newSale.totalCost = this.newSale.totalCost - (this.newSale.totalCost*this.discount/100);}
    },

    addIDCustomer(){
      this.SelectCustomer.forEach((SelectCustomer) => {
        this.newSale.customer_id= SelectCustomer.id

      });

    }

  },
  data() {
    return{
      SelectProducts:[],
      Products:[],

      Sales:[],
      newSale: new Sale(),

      Customers:[],
      SelectCustomer:[],

      user:{},
      discount:0,
      CustomerApi: new CustomerApiService(),
      productsApi: new ProductApiService(),
      salesApi:new SalesApiService()
    }
  },
  created(){
    this.user=(JSON.parse(localStorage.getItem('user')));
    this.Products= this.productsApi.getProductById(this.user.id)
        .then((response)=>{
          this.Products=response.data.products;
        });
    this.Sales= this.salesApi.getSaleByIdUser(this.user.id)
        .then((response)=>{
          this.Sales = response.data;

        })
    this.Customers=this.CustomerApi.getCustomerById(this.user.id)
        .then((response)=>{
          this.Customers=response.data.customers;

        })

  }


}

</script>

<template>
  <div class=" w-full" >

    <div class="w-full" >
      <h1>New Sales</h1><hr>
    </div>

    <div class=" block grip ">
      <div class=" col">
        <form>

        <div class="formgrid grid">

            <div class="col w-9">
              <div class="formgrid grid" >

                <div class="field col" >
                  <label for="name_product">Products</label><br>
                  <pv-multiSelect v-model="SelectProducts" :options="Products" filter optionLabel="name" placeholder="Select the products"
                                  :maxSelectedLabels="5" class="w-full md:w-20rem" />{{ CalculateTotalCost()}}
                </div>
                <div class=" field col">
                  <label for="id_sales">Id</label><br>
                  <pv-input-text id="id_sales" v-model="newSale.id" disabled aria-describedby="username-help" />
                  {{AddId()}}
                </div>
                <div class="field col">
                  <label for="Customer">Customer</label><br>
                  <pv-multiSelect v-model="SelectCustomer" :options="Customers" filter optionLabel="name" placeholder="Select Customer"
                                  :maxSelectedLabels="1" class="w-full md:w-20rem" />{{addIDCustomer()}}
                </div>
              </div>

              <div class=" formgrid grid">
                <div class="field col">
                  <label for="sale-date">Sale Date</label><br>
                  <pv-calendar  v-model="newSale.date"  showIcon dateFormat="dd/mm/yy" /><br>
                  <!--<pv-input-text id="sale-date" v-model="value" aria-describedby="username-help" />-->
                </div>
                <div class="field col">
                  <label for="discount">Discount %</label><br>
                  <pv-input-text id="discount" v-model="discount" aria-describedby="username-help" />
                </div>

              </div>

              <div class=" formgrid grid" >
                <div class="field col">
                  <label for="total_cost">Total Cost</label><br>
                  <pv-input-text id="total_cost" v-model="newSale.totalCost" disabled aria-describedby="username-help" />
                </div>

              </div>

              <div class="pt-6 formgrid grid" >
                <pv-button label="Create" @click="summitForm" severity="success" class="border-round-md"></pv-button>
                <router-link to="shopping_cart">
                  <pv-button label="Update" severity="danger" class="ml-6 border-round-md"></pv-button>
                </router-link>
              </div>
            </div>




          <div class=" pt-3 block col align-items-center " >
            <div class="flex align-items-center justify-content-center" >
              <pv-datatable :value="SelectProducts" tableStyle="min-width: 50rem">
                <pv-colum field="id" header="ID"></pv-colum>
                <pv-colum field="name" header="Name"></pv-colum>
                <pv-colum field="stock" header="Stock"></pv-colum>
                <pv-colum field="unitPrice" header="UnitPrice"></pv-colum>
                <pv-colum header="Amout"></pv-colum>
              </pv-datatable>
            </div>
            <br><br>
            <div class="block p-3 border-dashed border-round-md ">

              <input type="file" @change="onFileSelected">
            </div>
          </div>
        </div>
        </form>
      </div>


      <div class="col">
        <p>Productos seleccionados:{{SelectProducts}}}</p>
        <p>------------------------------</p>
        <span>{{newSale}}</span>
        <p>------------------------------</p>
        <span>{{Sales}}</span>
        <p>------------------------------</p>
        <span>{{SelectCustomer}}</span>



      </div>

    </div>


  </div>
</template>

<style scoped>

</style>



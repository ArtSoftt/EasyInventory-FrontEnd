<template>

  <div class=" w-full">
    <div class="w-full" >
      <h1>New Product</h1><hr>
    </div>
    <!--Formulario-->
    <form>
      <div class="col w-6">
        <!--Primera fila-->
        <div class="formgrid grid">
          <div class="field col">
            <label for="name_product">Name</label><br>
            <pv-input-text id="id_sales" v-model="product.name"   />
          </div>

          <div class="field col">
            <label for="name_product">Id</label><br>
            <pv-input-text id="id_sales" v-model="product.id" disabled/>
          </div>
        </div>
        <!--Segunda fila-->
        <div class="formgrid grid">
          <div class="field col">
            <label for="name_product">Type</label><br>
            <pv-input-text  v-model="product.type"  />
          </div>

          <div class="field col">
            <label for="name_product">Date Of Purchase</label><br>
            <pv-calendar v-model="product.dateOfPurchase" showIcon />
          </div>
        </div>
        <!--Tercera fila-->
        <div class="formgrid grid">
          <div class="field col">
            <label for="name_product">Unit Price</label><br>
            <pv-input-number  v-model="product.unitPrice" inputId="stacked-buttons" showButtons :min="0" mode="currency" currency="USD" />
          </div>

          <div class="field col">
            <label for="name_product">Real Price</label><br>
            <pv-input-number v-model="product.realPrice" inputId="stacked-buttons" showButtons :min="0" mode="currency" currency="USD" />
          </div>
        </div>
        <!--Cuarta fila-->
        <div class="formgrid grid">
          <div class="field col">
            <label for="name_product">Discount</label><br>
            <pv-input-number v-model="product.discount" inputId="percent" prefix="%" :min="0" />
          </div>

          <div class="field col">
            <label for="name_product">Stock</label><br>
            <pv-input-number id="id_sales" v-model="product.stock" inputId="stacked-buttons" showButtons :min="0"  />
          </div>
        </div>

        <div class="pt-6 formgrid grid" >

          <router-link to="products">
            <pv-button label="Ok" @click="summitForm" severity="success" class="border-round-md p-2"></pv-button>
          </router-link>
        </div>

      </div>
    </form>
  </div>




</template>

<script>
import {User} from "@/inventory/model/user.entity";
import {ProductApiService} from "@/products/services/product-api.service";
import {Product} from "@/products/model/products-entity";


export default{
  name:"product-add-or-edit-dialog",
  props:{
    visible:Boolean,
    product:null
  },
  data(){
    return{
      submitted:false,
      product: new Product(),
      Products: []=[],
      user:{},
      productsApi: new ProductApiService()
    }

  },
  methods:{
    onSave(){
      this.submitted=true;
      if(this.product.name){
        this.$emit('save',this.product);
      }

    },
    onCancel(){
      this.$emit('cancel');
    },
    
    summitForm() {
      console.log("Producto capturado: ",this.product);
      this.Products.products.push(this.product);
      this.productsApi.putProductById(this.user.idListProducts,this.Products)
          .then((response) => {
            console.log("Nuevo Producto Registrado");
            console.log(this.Products);
          })

    }

  },
  created() {
    // 1. Obtener el usuario actual del localStorage y asignarlo a la propiedad 'user'
    this.user = JSON.parse(localStorage.getItem('user'));

    // 2. Obtener los productos asociados al usuario actual usemos su id de listas
    this.Products = this.productsApi.getProductById(this.user.idListProducts)
        .then((response) => {
          this.Products = response.data;
          this.product.id = this.Products.products.length+1
          console.log(this.Products);
        });




  }
}
</script>

<style>

#hhh{
    background-color: red;
}

#iii{
  background-color: green;
}
</style>
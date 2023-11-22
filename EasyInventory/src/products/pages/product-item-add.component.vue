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
            <pv-input-text  v-model="product.category"  />
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
            <pv-input-number id="id_sales" v-model="product.stock"   inputId="stacked-buttons" showButtons :min="0"  />
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
      this.product.currentStock = this.product.stock;
      this.product.userId = parseInt(localStorage.getItem('profileId'));

       this.productsApi.postProduct(this.product)
          .then((response) => {
            console.log("Nuevo Producto Registrado");
            console.log(response.data);
            this.$emit('productAdded',response.data);
          })
          .catch((error=>{
            console.error('Error ',error.message);
          }))

    }

  },
  created() {




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
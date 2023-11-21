<template>
<div class="products">
  <div class="card">
    <!-- Products Toolbar Section -->
    <pv-toolbar class="my-6 full-width-toolbar">
      <template #start>
        <router-link to="/new-products">
          <pv-button class="mr-2" icon="pi pi-plus" label="New" severity="success" />
        </router-link>


        <pv-button :disable="!selectedProducts|| selectedProducts.length" icon="pi pi-trash" label="Delete"
                   severity="danger" @click="confirmDeleteSelected"/>
      </template>
      <template #end>
        <pv-button icon="pi pi-download" label="Export" severity="help" @click="exportToCsv($event)"/>
      </template>
    </pv-toolbar>
  </div>
  <!-- Products Table Container -->
  <pv-data-table ref="dt" v-model:selection="selectedProducts"
                :filters="filters" :paginatpr="true" :rows="10" :rows-per-page-options="[5,10,25]"
  :value="listproducts.products"
  current-page-report-template="Showing {first} to {last} of {totalResource} products"
  data-key="id"
  paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
  responsive-layout="scroll">
    <template #header>
      <div class="table-header gap-2 align-items-center justify-content-between">
        <h4 class="m-0"> Manage Products</h4>
        <span class="p-input-icon-left">
          <i class="pi pi-search"/>
          <pv-input-text v-model="filters['global'].value" placeholder="Search..."></pv-input-text>
        </span>
      </div>
    </template>
    <pv-column :exportable="false" selectionMode="multiple" style="width: 3rem"/>
    <pv-column :sortable="true" field="id" header="Id" style="min-width:4rem"/>
    <pv-column :sortable="true" field="name" header="Name" style="min-width:9rem"/>
    <pv-column :sortable="true" field="category" header="Category" style="min-width:7rem"/>
    <pv-column :sortable="true" field="stock" header="Stock" style="min-width:5rem"/>
    <pv-column :sortable="true" field="unitPrice" header="Price Unit" style="min-width:5rem"/>
    <pv-column :sortable="true" field="realPrice" header="Price to Sell" style="min-width:5rem"/>
    <pv-column :sortable="true" field="dateOfPurchase" header="Date Of Purchase" style="min-width:5rem"/>
    <pv-column :exportable="false" style="min-width:8rem">
      <template #body="slotProps">
        <pv-button class="mr-2" icon="pi pi-pencil" outlined rounded @click="editProduct(slotProps.data)"/>
        <pv-button icon="pi pi-trash" outlined rounded severity="danger"
                   @click="confirmDeleteProduct(slotProps.data)"/>
      </template>
    </pv-column>
  </pv-data-table>

<!-- Add/Edit Product Dialog -->
  <!--
  <product-add-or-edit-dialog :product="product"
                              v-bind:visible="productDialog"
                              v-on:cancel="onAddOrUpdateItemCancel" v-on:save="onSaveItem"/>-->

  <!-- Delete Products Dialog
  <product-item-delete-confirmation-dialog
    :item="product" v-bind:visible="deleteProductDialog"
    v-on:cancel="onDeleteItemCancel" v-on:confirm="onDeleteItemConfirm"/>-->

  <!-- Delete Selected Products Confirmation Dialog -->
  <product-edit-dialog
    :items="selectedProducts" v-bind:visible="productDialog"
    v-on:cancel="onDeleteSubsetCancel" v-on:confirm="onDeleteSubsetConfirm"/>
</div>
</template>
<script>

import {FilterMatchMode} from "primevue/api";
import ProductAddOrEditDialog from "@/products/pages/product-item-add.component.vue";
import ProductItemDeleteConfirmationDialog
  from "@/products/components/product-item-delete-confirmation-dialog.component.vue";
import ProductSubsetDeleteConfirmationDialog
  from "@/products/components/product-edit-dialog.component.vue";
import {ProductApiService} from "@/products/services/product-api.service";

export default {
  name:"products-component",
  components:{ProductSubsetDeleteConfirmationDialog, ProductItemDeleteConfirmationDialog, ProductAddOrEditDialog},
  data(){
    return{
      deleteProductsDialog:false,
      productDialog:false,
      deleteProductDialog:false,
      product:{},

      listproducts:{},
      selectedProducts:[],
      filters:{},
      productsApi: new ProductApiService()
    }
  },
  created(){
    this.initFilters();
    this.user = JSON.parse(localStorage.getItem('user'));

    // 2. Obtener los productos asociados al usuario actual usemos su id de listas
    this.listproducts = this.productsApi.getProductById(this.user.idListProducts)
        .then((response) => {
          this.listproducts = response.data;


        });

  },
  methods:{
    initFilters(){
      this.filters={global: {value:null,matchMode:FilterMatchMode.CONTAINS}};
    },
    openNew(){

    },
    confirmDeleteSelected(){
      this.listproducts.products = []
      this.productsApi.putProductById(this.user.idListProducts,this.listproducts)
          .then((response) => {
            console.log("Lista de Productos eliminada");
            console.log(this.listproducts);
          })

    },
    exportToCsv(){
      this.$refs.dt.exportToCsv();
    },
    editProduct(product){
      this.product={...product};
      this.productDialog=true;

    },
    confirmDeleteProduct(product){
      this.deleteProductDialog=true;

      //Verifica si el producto esta en el arreglo d productos de la listadeproductos del ususario
      if(this.listproducts.products.includes(product)){
        this.listproducts.products.splice(this.listproducts.products.indexOf(product),1);
      } else {
        //Si no hay un producto en el arreglo de productos del usuario
        alert("El producto no existe en la lista de productos del usuario");
        return;
      }

      this.productsApi.putProductById(this.user.idListProducts,this.listproducts)
          .then((response) => {
            console.log("Producto Eliminado");
            console.log(this.listproducts);
          })
      this.product=product;

    },
    onDeleteSubsetCancel(){

    },
    onDeleteSubsetConfirm(){

    },
    onDeleteItemCancel(){

    },
    onDeleteItemConfirm(){

    },
    onAddOrUpdateItemCancel(){

    },
    onSaveItem(){

    }
  }

}
</script>
<style>
.table-header{
  display: flex;
  align-items:center;
  justify-content: space-between;
}
.full-width-toolbar{
  width: 60vw;
}

</style>
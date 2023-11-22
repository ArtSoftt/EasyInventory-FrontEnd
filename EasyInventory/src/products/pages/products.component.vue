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
  :value="products"
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
    <pv-column :sortable="true" field="discount" header="Discount" style="min-width:5rem"/>
    <pv-column :sortable="true" field="unitPrice" header="Price Unit" style="min-width:5rem"/>
    <pv-column :sortable="true" field="realPrice" header="Price to Sell" style="min-width:5rem"/>
    <pv-column :sortable="true" field="currentStock" header="Current Stock" style="min-width:5rem"/>
    <pv-column :exportable="false" style="min-width:8rem">
      <template #body="slotProps">
        <pv-button class="mr-2" icon="pi pi-pencil" outlined rounded @click="editProduct(slotProps.data)"/>
        <pv-button icon="pi pi-trash" outlined rounded severity="danger"
                   @click="confirmDeleteProduct(slotProps.data)"/>
      </template>
    </pv-column>
  </pv-data-table>


  <product-edit-dialog-component
    :visible="editDialogVisible"
    :editedProduct="editedProduct"
    @saveEdit="saveProductEdit"
    @cancelEdit="cancelProductEdit"></product-edit-dialog-component>
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
</div>
</template>
<script>

import {FilterMatchMode} from "primevue/api";
import ProductEditDialogComponent from "@/products/components/product-edit-dialog.component.vue";
import ProductAddOrEditDialog from "@/products/pages/product-item-add.component.vue";
import ProductItemDeleteConfirmationDialog
  from "@/products/components/product-item-delete-confirmation-dialog.component.vue";
import ProductSubsetDeleteConfirmationDialog
  from "@/products/components/product-edit-dialog.component.vue";
import {ProductApiService} from "@/products/services/product-api.service";

export default {
  name:"products-component",
  components:{ProductSubsetDeleteConfirmationDialog, ProductItemDeleteConfirmationDialog, ProductAddOrEditDialog,ProductEditDialogComponent},
  data(){
    return{
      deleteProductsDialog:false,
      editDialogVisible:false,
      editedProduct:null,
      deleteProductDialog:false,
      product:{},
      deleteProducts:[],
      products:[],
      selectedProducts:[],
      filters:{},
      productsApi: new ProductApiService()
    }
  },
  created(){
    this.initFilters();

    // 2. Obtener los productos asociados al usuario actual usemos su id de listas

    this.productsApi.getProductById(parseInt(localStorage.getItem('profileId')))
        .then((response) => {
          console.log(response);
          this.products=response.data;
        })
        .catch((error=>{
          console.error('Error' ,error.message);
        }))

  },
  methods:{
    initFilters(){
      this.filters={global: {value:null,matchMode:FilterMatchMode.CONTAINS}};
    },
    saveProductEdit(editedProduct){
      console.log("Producto editado: ",editedProduct);
      this.editDialogVisible=false;
    },
    cancelProductEdit(){
      this.editDialogVisible=false;
    },
    confirmDeleteSelected(){
      this.productsApi.putProductById(parseInt(localStorage.getItem('profileId')),this.product)
          .then((response) => {
            console.log("Lista de Productos eliminada");
            console.log(this.products);
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
      this.productsApi.deleteProduct(parseInt(product.id))
          .then((response) => {
            console.log("Producto Eliminado");
            this.products=this.products.filter(p=>p.id!==product.id);
          })

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
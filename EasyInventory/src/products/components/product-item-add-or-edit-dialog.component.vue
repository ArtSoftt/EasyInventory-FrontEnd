<template>
  <!-- Edit Tutorial Dialog-->
  <pv-dialog v-bind:visible="visible" :modal="true" :style="{width:'450px'}" class="p-fluid"
             header="Product Information">
    <div class="field mt-3">
          <span class="p-float-label">
            <pv-input-text v-model.trim="product.title" :class="{ 'p-invalid': submitted && !product.title }"
                           autofocus required="true" type="text"/>
            <label for="title">Title</label>
            <small v-if="submitted && !product.title" class="p-error">Title is required</small>
          </span>
    </div>
    <div class="field">
          <span class="p-float-label">
            <pv-input-text v-model.trim="product.description" cols="20" required="false" rows="2" type="text"/>
            <label for="description">Description</label>
          </span>
    </div>
    <template #footer>
      <pv-button label="Cancel" class="p-button-text" icon="pi pi-times" @click="onCancel"/>
      <pv-button label="Save" class="p-button-text" icon="pi pi-check" @click="onSave"/>
    </template>

  </pv-dialog>
</template>

<script>
export default{
  name:"product-add-or-edit-dialog",
  props:{
    visible:Boolean,
    product:null
  },
  data(){
    return{
      submitted:false,
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
    }
  }
}
</script>

<style>

</style>
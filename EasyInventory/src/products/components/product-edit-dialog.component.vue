<template>
  <div>
    <pv-dialog v-bind="visible" :modal="true" :closable="true" :resizable="false" :style="{'width': '30vw'}">
      <div class="p-fluid">
        <h5>Edit Product</h5>
        <div class="p-field">
          <label for="name">Name</label>
          <pv-input-text v-model="editedProduct.name" />
        </div>
        <div class="p-field">
          <label for="category">Category</label>
          <pv-input-text v-model="editedProduct.category" />
        </div>
        <!-- Agrega más campos según tus necesidades -->

        <div class="p-field">
          <pv-button label="Save" @click="saveEdit" class="p-button-success" />
          <pv-button label="Cancel" @click="cancelEdit" class="p-button-secondary" />
        </div>
      </div>
    </pv-dialog>
  </div>
</template>

<script>
export default{
  name:"product-edit-dialog",
  props: {
    visible: Boolean,
    editedProduct: Object,
  },
  methods: {
    saveEdit() {
      // Agrega lógica para guardar la edición del producto
      // Puedes emitir un evento para notificar al componente padre
      this.$emit('saveEdit', this.editedProduct);
    },
    cancelEdit() {
      // Agrega lógica para cancelar la edición del producto
      // Puedes emitir un evento para notificar al componente padre
      this.$emit('cancelEdit');
    },
  },
};
</script>

<style>

</style>
<template>
  <div>
    <h1>Buscar Datos</h1>

    <div class="p-field p-grid">
      <div class="p-col-12 p-md-4">
        <label for="searchInput">Buscar:</label>
        <input
            id="searchInput"
            v-model="searchText"
            @input="filterData"
            class="p-inputtext"
        />
      </div>
    </div>

    <div class="mt-4 p-grid">
      <div class="p-col">
        <pv-data-table :value="products">
          <pv-column field="id" header="Id"></pv-column>
          <pv-column field="name" header="Name"></pv-column>
          <pv-column field="unitPrice" header="Price"></pv-column>
        </pv-data-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
let user = JSON.parse(localStorage.getItem('user'));
let products = ref(JSON.parse(localStorage.getItem('products')))
</script>

<style scoped>

</style>
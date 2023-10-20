<template>
  <div>
    <h1>Buscar Datos</h1>
    <div class="p-field p-grid">
      <div class="p-col-12 p-md-4">
        <label for="searchInput">Buscar:</label>
        <input
            id="searchInput"
            v-model="searchText"
            @input="searchData"
            class="p-inputtext"
        />
      </div>
    </div>
    <div class="p-grid">
      <div class="p-col">
        <pv-data-table :value="filteredData">
          <pv-column field="customer" header="Customer"></pv-column>
          <pv-column field="provider" header="Provider"></pv-column>
          <pv-column field="product" header="Product"></pv-column>
        </pv-data-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
let user = JSON.parse(localStorage.getItem('user'));

</script>

<style scoped>

</style>
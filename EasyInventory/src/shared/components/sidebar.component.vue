<template>
  <pv-menu :model="items" >

    <template #end>
      <br>

      <router-link to="/login"  >
        <pv-button  class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
          <i class="pi pi-sign-out" />
          <span class="ml-2">Log Out</span>
        </pv-button>
      </router-link>

    </template>
  </pv-menu>
</template>



<script setup>
import { ref } from "vue";

const items = ref([
  { label: 'Home', icon: 'pi pi-fw pi-home', to: "/user" },
  { label: 'Search', icon: 'pi pi-fw pi-search' },
  { label: 'Customers', icon: 'pi pi-fw pi-user' },
  { label: 'Provider', icon: 'pi pi-fw pi-user' },
  { label: 'Products', icon: 'pi pi-fw pi-book' },
  { label: 'Shopping', icon: 'pi pi-fw pi-cart-plus' },
  { label: 'Sales', icon: 'pi pi-fw pi-chart-line' },
]);
</script>

<style scoped>

</style>
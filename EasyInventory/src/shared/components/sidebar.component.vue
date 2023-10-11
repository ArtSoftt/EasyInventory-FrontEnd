<script setup>
import { ref } from "vue";

const items = ref([
  { label: 'New', icon: 'pi pi-fw pi-plus' },
  { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);
</script>

<template>
  <Menu :model="items" />
</template>

<style scoped>

</style>
<script setup>
import toolbarComponent from "@/public/pages/toolbar.component.vue";
</script>

<template>
  <header>
    <toolbar-component></toolbar-component>
  </header>

  <h1>Hi User</h1>
  <div class="flex align-content-center justify-content-center">
    <pv-card style="width: 50rem">
      <template #content>
        <div class="flex flex-row align-content-center justify-content-evenly">
          <div class="flex justify-content-center align-items-center">
            <img class="fixed w-10rem" src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
                 alt="user">
          </div>

          <div>
            <h1 id="user-name">User Name</h1>
            <p><i class="pi pi-id-card"></i> Birthday</p>
            <p><i class="pi pi-phone"></i> Phone</p>
            <p><i class="pi pi-envelope"></i> Email</p>
          </div>
        </div>
      </template>

    </pv-card>
  </div>
</template>

<style scoped>
#user-name {
  font-size: 2rem;
  margin: 0;
}

</style>
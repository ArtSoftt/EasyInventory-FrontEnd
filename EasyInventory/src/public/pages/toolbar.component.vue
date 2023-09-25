<template>
  <header>
    <pv-toolbar class="bg-primary flex-wrap">
      <template #start>
        <pv-button class="sidebar-button" @click="drawer = !drawer">
          <img alt="logo" src="../../assets/logo.png" class="h-4rem">
        </pv-button>
        <h3><b>EasyInventory</b></h3>
      </template>


      <template #end>
        <language-switcher-component></language-switcher-component>
        <pv-button style="color:black" class="mx-3"  size="large" severity="info" icon="pi pi-user" rounded outlined aria-label="user"/>
      </template>
    </pv-toolbar>
  </header>
</template>

<script>
import languageSwitcherComponent from "@/public/pages/language-switcher.component.vue";
export default{
  name:"toolbar.component.vue",
  components: { languageSwitcherComponent},
  data(){
    return{
      toggleState:false,
      drawer: false,
      items:[
        {label: "language", visibility:"true" },
        {label:"avatar", visibility:"true"},
      ],
    };
  }
}
</script>
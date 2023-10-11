<template>
  <header>
    <pv-toolbar class="bg-primary flex-wrap">
      <template #start>
        <pv-button class="sidebar-button" @click="setDrawer">
          <img alt="logo" src="../../assets/Logo.png" class="h-4rem">
        </pv-button>
        <h3><b>EasyInventory</b></h3>
      </template>

      <template #end>
        <language-switcher-component></language-switcher-component>
        <router-link to="/user">
          <pv-button  style="color:black" class="mx-3"  size="large" severity="info" icon="pi pi-user" rounded outlined aria-label="user"/>
        </router-link>

      </template>
    </pv-toolbar>
  </header>

</template>

<script>
import languageSwitcherComponent from "@/public/pages/language-switcher.component.vue";
export default{
  name:"toolbar",
  components: { languageSwitcherComponent},
  data(){
    return{
      toggleState:false,
      visible: false,
    };
  },
  methods:{
    setDrawer(){
      this.visible=!this.visible;
      console.log(this.visible);
    }
  }
}
</script>
<style>
</style>
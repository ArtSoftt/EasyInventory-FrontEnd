<template>
  <header>
    <pv-toolbar class="bg-primary flex-wrap">
      <template #start>
        <pv-sidebar v-model:visible="visible" class="flex justify-content-center align-content-center align-items-center">
          <template #header>
            <h1 >EasyInventory</h1>
          </template>
          <router-link v-for="item in items" :to="`/${item.to}`" custom v-slot="{navigate, href}" :key="item.label" >
            <pv-button class="p-button-text text-black" :href="href" @click="navigate">
              <div class="field col flex-wrap px-8 ">
                <div class="field row text-2xl">
                  <b class="mr-2">{{item.label}}</b>
                    <i :class="item.icon"></i>
                </div>
              </div>
            </pv-button>
          </router-link>
          <div class="fixed bottom-0 flex pl-3 ml-8 mb-6 align-items-center" >
              <pv-button size="large" >Logout</pv-button>
          </div>
        </pv-sidebar>
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
  <div  class="card primaryContainer flex justify-content-start align-items-center">
    <pv-list-box :options="items" optionLabel="name" class="mt-6 ml-5 w-19rem container "  >
      <template #option="slotProps">
       <div class="justify-content-center flex mt-3">
          <router-link  :to="`/${slotProps.option.to}`" :key="slotProps.option.label">
            <div v-if="slotProps.option.label==='Log out'" >
              <pv-button  size="large" class="buttonContainer1   mt-8" >

                <i class="pi pi-sign-out mr-4"></i>
                <b  > {{slotProps.option.label}}</b>
              </pv-button>
            </div>
            <pv-button v-else  size="large" class="buttonContainer ">

              <i :class="slotProps.option.icon" class="mr-4"></i>
              <b   > {{slotProps.option.label}}</b>
            </pv-button>
          </router-link>
        </div>
      </template>

    </pv-list-box>


  </div>
</template>

<script>
import languageSwitcherComponent from "@/public/pages/language-switcher.component.vue";
export default{
  name:"toolbar.component.vue",
  components: { languageSwitcherComponent},
  data(){
    return{
      toggleState:false,
      visible: false,
      items:[
        {label:"Home", icon:"pi pi-home",to:"home"},
        {label:"Search", icon:"pi pi-search",to:"search"},
        {label:"Customer", icon:"pi pi-user",to:"customer"},
        {label:"Provider", icon:"pi pi-users",to:"providers"},
        {label:"Products", icon:"pi pi-user",to:"products"},
        {label:"Shopping", icon:"pi pi-shopping-cart",to:"shop"},
        {label:"Sales", icon:"pi pi-money-bill",to:"sales"},
        {label:"Log out", icon:"pi pi-sales",to:""}
      ]
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
.primaryContainer{
  position:absolute;

}
.buttonContainer{
  height: 2.4rem;
  width:10.5rem;
  color:#2a5fb4;
  background-color: #FFFFFF0F;
  border-color: #FFFFFF0F;
}
.buttonContainer1{
  height: 2.4rem;
  width:10.5rem;
  color:#ffffff;
  background-color: #2a5fb4;
  border-color: #ffffff;
}
</style>
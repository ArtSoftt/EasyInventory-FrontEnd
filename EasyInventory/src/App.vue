<template>
  <div v-if="checkroute()">
    <toolbar-component />
      <pv-splitter layout="none">
        <pv-splitter-panel class="flex justify-content-center body" :size="30" >

            <pv-list-box :options="items" optionLabel="name" class="mt-6 container "  >
              <template #option="slotProps">
                <div class="mt-3">
                  <router-link  :to="`/${slotProps.option.to}`" :key="slotProps.option.label">
                    <div v-if="slotProps.option.label==='Log out'" class="flex  justify-content-center" >
                      <pv-button class="w-9 flex  h-2rem  justify-content-center mt-8">
                        <i class="pi pi-sign-out mr-4 "></i>
                        <p>{{slotProps.option.label}}</p>
                      </pv-button>
                    </div>
                    <div v-else  class="flex h-2rem justify-content-center">
                      <pv-button  class="w-9  flex justify-content-center" >
                        <i :class="slotProps.option.icon" class="mr-4"></i>
                        <p> {{slotProps.option.label}}</p>
                      </pv-button>
                    </div>
                  </router-link>
                </div>
              </template>

            </pv-list-box>
        </pv-splitter-panel>
        <pv-splitter-panel class="flex w-full " :size="70">

          <RouterView/>
        </pv-splitter-panel>
      </pv-splitter>
    </div>
  <div v-else>
    <RouterView/>

  </div>




</template>

<script>
import ToolbarComponent from "@/shared/components/toolbar.component.vue";
export default{
  name:'app',
  components:{ToolbarComponent},
  data(){
    return{
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
    }
  },
  created() {
    console.log(this.$route.path)
  },
  methods:{
    checkroute(){
      return !(this.$route.path==='/'||this.$route.path==='/sign-up')

    }
  }


}
</script>
<style>
.body{
  height: 80vh;
}
.container{
  width: 65%;
}

</style>
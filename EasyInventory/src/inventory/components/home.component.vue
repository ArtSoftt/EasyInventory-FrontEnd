<template>
  <pv-splitter layout="vertical">
    <pv-splitter-panel >
     <div class="flex">
       <div class="col-6">
         <pv-card>
           <template #title>
             Last sales
           </template>
           <template #content>
             <pv-card v-for="sale in sales" class="card my-1">
               <template #content>
                 
               </template>
             </pv-card>
           </template>
         </pv-card>
       </div>
       <div class="col-6">
         <pv-card>
           <template #title>
             Most Selled Product
           </template>
           <template #content>

           </template>
         </pv-card>
       </div>
     </div>
    </pv-splitter-panel>
    <pv-splitter-panel >
        <div class="flex">
          <div class="col-4">
            <pv-card >
              <template #title>
                Last Shoppings
              </template>
              <template #content>
                    <pv-card v-for="shop in shops" class="card my-2 ">
                      <template #content>
                        <div class="flex">
                          {{shop.title}}
                          <span class="example-spacer"></span>
                          {{shop.totalPrice}}
                        </div>
                      </template>
                    </pv-card>
              </template>
            </pv-card>
          </div>
          <div class="col-4 ">
            <pv-card class="main-card">
              <template #title>
                Providers
              </template>
              <template #content>
                <div class="content">

                  <pv-card v-for="provider in providers" class="card my-1 ">
                    <template #content>
                      {{provider.name}}
                    </template>
                  </pv-card>
                </div>

              </template>
            </pv-card>
          </div>
          <div class="col-4">
            <pv-card>
              <template #title>
                Products
              </template>
              <template #content>
                <pv-card v-for="product in products" class="card my-1">
                  <template #content>
                    <div class="flex">
                      {{product.name}}
                      <span class="example-spacer"></span>
                      {{product.stock}}
                    </div>
                  </template>
                </pv-card>
              </template>
            </pv-card>
          </div>
        </div>
    </pv-splitter-panel>
  </pv-splitter>
</template>

<script>
import ToolbarComponent from "@/public/pages/toolbar.component.vue";
export default{
  name:"home-component",
  components:{ ToolbarComponent},
  data(){
    return{
      sales:[],
      shops:[],
      user:{},
      providers:[],
      products:[],
      bestProduct:[],
    }
  },
  created() {

  },
  methods:{

  }
}
</script>
<style>
.card{
  background:white;
}
</style>
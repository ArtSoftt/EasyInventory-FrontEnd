<template>
  <toolbar-component/>
  <h1 class="flex flex-column align-items-center "> Hi {{ user.name }}</h1>
  <div class="flex flex-column align-items-center ml-8">
    <pv-card style="width: 50rem">
      <template #content>
        <div class="flex flex-row align-content-center justify-content-evenly">
          <div class="flex justify-content-center align-items-center">
            <img class="w-10rem" src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
                 alt="user">
          </div>

          <div>
            <h1 id="user-name">{{ user.name }}</h1>
            <p><i class="pi pi-id-card"></i> {{ user.birthday }}</p>
            <p><i class="pi pi-phone"></i> {{ user.phone }}</p>
            <p><i class="pi pi-envelope"></i> {{ user.email }}</p>
          </div>
        </div>
      </template>

    </pv-card>


    <pv-card style="width: 50rem; margin-top: 2rem">
      <template #content>
        <div class="flex justify-content-evenly w-50rem">
          <div class="flex align-items-center">
            <p><i class="pi pi-credit-card"></i> {{user.subscription}}</p>
          </div>
          <div class="flex align-items-center">
            <pv-button>Change</pv-button>
          </div>
        </div>

      </template>
    </pv-card>

  </div>


</template>
<script>
import ToolbarComponent from "@/public/pages/toolbar.component.vue";
export default {
  name:"user-profile",
  components:{ToolbarComponent},
  data(){
    return{
      user:{},
    }
  },
  created() {
    this.user =JSON.parse(localStorage.getItem('user'));
  }
}
</script>

<style >
#user-name {
  font-size: 2rem;
  margin: 0;
}

</style>
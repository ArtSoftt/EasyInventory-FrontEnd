<template>
  <div class="body">

    <h1 class="flex flex-column justify-content-center align-items-center "> Hi {{ user.firstName }} {{user.lastName}}</h1>
    <div class="flex flex-column align-items-center justify-content-center">
      <pv-card class="w-10" >
        <template #content>
          <div class="flex flex-row align-content-center ">
            <div class="flex  justify-content-center align-items-center">
              <img class="w-3 mr-8" src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
                   alt="user">

              <div class="flex flex-column">
                <h1 id="user-name">{{ user.name }}</h1>
                <p>Company Name: {{ user.companyName }}</p>
                <p> Street: {{ user.street }}</p>
                <p> City: {{ user.city }}</p>
                <p>State:  {{ user.state }}</p>
                <p>Email: {{ user.email }}</p>
              </div>
            </div>

            <div>
            </div>
          </div>
        </template>

      </pv-card>


      <pv-card class="w-10 mt-6">
        <template #content>
          <div class="flex justify-content-evenly w-50rem">
            <div class="flex align-items-center ">
              <h2><i class="pi pi-credit-card"></i> {{user.subscription}}</h2>
            </div>
            <div class="flex align-items-center">
              <pv-button>Change</pv-button>
            </div>
          </div>

        </template>
      </pv-card>

    </div>
  </div>


</template>
<script>
import ToolbarComponent from "@/public/pages/toolbar.component.vue";
import {ProfileApiService} from "@/public/services/profile-api.service";

export default {
  name:"user-profile",
  components:{ToolbarComponent},
  data(){
    return{
      user:{},
      profileApi: new ProfileApiService()
    }
  },
  created() {
    this.fetchUser();
  },
  methods:{
    fetchUser(){
       this.profileApi.getProfileById(parseInt(localStorage.getItem('profileId')),localStorage.getItem('token'))
          .then(response=>{
            this.user=response.data;
            console.log(this.user);
          })

    }
  }
}
</script>

<style >
.body{
  width:100%;
}
</style>
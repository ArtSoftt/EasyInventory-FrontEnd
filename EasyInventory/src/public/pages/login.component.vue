<template >
  <pv-toolbar class="bg-primary flex-wrap">
    <template #start>
      <pv-button class="sidebar-button" @click="drawer = !drawer">
        <img alt="logo" src="../../assets/logo.png" class="h-4rem">
      </pv-button>
      <h3><b>EasyInventory</b></h3>
    </template>


    <template #end>
      <language-switcher-component></language-switcher-component>
    </template>
  </pv-toolbar>
  <div class="flex justify-content-center container mt-7 ">
    <pv-card class=" justify-content-start border-round-3xl w-26rem align-items-center  h-fit ">
      <template #title >
        <div class="pl-5 pt-5 pb-3 text-4xl">
          Log in
        </div>
      </template>
      <template #content >
        <div class="formgrid text-2xl pl-5">
          <div class="field col">

            <div class="field row">
              Username
            </div>
            <div class="field row">
              <pv-input-text class="w-18rem" type="text"  v-model="username" placeholder="username"></pv-input-text>
            </div>
            <div class="field row ">
              <div class="field row">
                Password
              </div>
              <div class="field row">
                <pv-input-text type="password" class="w-18rem" v-model="password" placeholder="password"/>
              </div>

            </div>
          </div>
        </div>
        <pv-message :style="{
          border:'solid #696cff',
          borderWidth:' 0 0 0 6px',
          color:'#696cff',
        }" :closable="false" severity="error" v-if="visible">User and password invalid</pv-message>
          <div class=" flex justify-content-center my-6">
            <pv-button @click.prevent="onSubmit()" type="button" class="w-10rem active:border-primary-700 transition-all hover:bg-primary-600 transition-duration-200 btn-login border-2 border-round" label="Login">
            </pv-button>
          </div>
          <pv-divider/>
          <div class=" flex justify-content-center mt-5">
            <pv-button @click.prevent="signUp()" type="button" class="w-17rem active:border-primary-700 transition-all hover:bg-primary-600 transition-duration-200 btn-login border-2 border-round" label="login with Google Account">
            </pv-button>
          </div>
          <div class=" flex justify-content-center">
            <p>Forgot the password
            </p>

          </div>
          <div class=" flex justify-content-center">
            <p>Do not have account an account? <a >Sign Up</a></p>
          </div>
      </template>
    </pv-card>

    <pv-dialog></pv-dialog>

  </div>
</template>

<script>
import toolbarComponent from "@/public/pages/toolbar.component.vue";
import {AuthServiceApi} from "@/shared/services/auth-service.api";
import {User} from "@/inventory/model/user.entity.js"
import languageSwitcherComponent from "@/public/pages/language-switcher.component.vue";
export default{
  name: "login.component.vue",
  components:{
    languageSwitcherComponent,
     toolbarComponent
  },
  data(){
    return{
      visible:false,
      username:"",
      password:"",
      authApi: new AuthServiceApi(),
      user: {}
    }

  },
  methods:{
    onSubmit(){
      this.login()
    },
     login(){
      const body={
        username:this.username,
        password:this.password
      }
      this.authApi.loginIn(body)
          .then(response=>{
            if(response.data[0] != null ){
              this.user = User.toDisplayableUser(response.data[0]);
              localStorage.setItem('user',this.user);
              /*
              * this.$router.push('/test');*/
            }
            else{
              this.visible=true;
            }
          })
    }
  }
}

</script>

<style>
.container{
  height: 80vh;
}
</style>
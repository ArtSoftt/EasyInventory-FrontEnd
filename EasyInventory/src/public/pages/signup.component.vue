<template>
  <pv-toolbar class="bg-primary flex-wrap">
    <template #start>
      <pv-button class="sidebar-button">
        <img alt="logo" src="../../assets/logo.png" class="h-4rem">
      </pv-button>
      <h3><b>EasyInventory</b></h3>
    </template>
    <template #end>
      <language-switcher-component></language-switcher-component>
    </template>
  </pv-toolbar>
<div class="justify-content-center flex w-fit mt-8 ml-8 container">

  <pv-card class="w-8 h-9 flex color-white align-content-center">
    <template #title>Create your account</template>
    <template #content>
      <form class="form">

        <div class="form grid grid">
          <div class="field col">

            <div class="form-group-inline">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <pv-input-text type="text" class=" border-color-700 border-solid p-3 border-round w-full" id="firstName" v-model="firstname" required/>
              </div>
            </div>

          </div>

          <div class="field col">

            <div class="form-group-inline">
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="lastname" v-model="lastname" required/>
              </div>
            </div>

          </div>

          <div class="field col">

            <div class="form-group-inline">
              <div class="form-group">
                <label for="username">Username</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="username" v-model="username" required/>
              </div>
            </div>

          </div>
        </div>

        <div class="form grid grid">

          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="companyName">Company Name</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="companyName" v-model="companyName" required/>
              </div>
            </div>
          </div>
          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="street">Street</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="street" v-model="street" required/>
              </div>
            </div>
          </div>
          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="city">City</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="city" v-model="city" required/>
              </div>
            </div>
          </div>
          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="state">State</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="state" v-model="state" required/>
              </div>
            </div>
          </div>
          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="zipCode">Zip Code</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="zipCode" v-model="zipCode" required/>
              </div>
            </div>
          </div>

        </div>

        <div class="form grid grid">
          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="email">Email</label>
                <pv-input-text type="text" class="b border-solid p-3 border-round w-full" id="email" v-model="email" required/>
              </div>
            </div>
          </div>

        </div>

        <div class="form grid grid">
          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="password">Password</label>
                <pv-input-text type="password" class=" border-solid p-3 border-round w-full" id="password" v-model="password" required/>
              </div>
            </div>
          </div>

          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="repeatPassword">Repeat Password</label>
                <pv-input-text type="password" class="b border-solid p-3 border-round w-full" id="repeatPassword" v-model="repeatPassword" required/>
                <p v-if="passwordMismatch" class="error-message">Passwords do not match.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="form grid grid ">
          <div class="field col">
            <pv-button @click="submitForm ">Submit</pv-button>
          </div>

          <div class="field col">
            <router-link to="/">
              <pv-button type="button" class="text-white text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Cancel</pv-button>
            </router-link>
          </div>
        </div>

      </form>

    </template>


  </pv-card>
</div>
</template>
<script>
import languageSwitcherComponent from "@/public/pages/language-switcher.component.vue";
import {ProfileApiService} from "@/public/services/profile-api.service";
import {AuthApiService} from "@/public/services/auth-api.service";

export default{
  name:'sign-up',
  components: { languageSwitcherComponent},
  data(){
    return{
      username:"",
      firstname:"",
      password:"",
      lastname:"",
      userFail: false,
      email:"",
      repeatPassword:"",
      companyName:"",
      street:"",
      city:"",
      state:"",
      zipCode:"",
      userCreated:false,
      authApi: new AuthApiService(),
      profileApi: new ProfileApiService()
    }
  },
  computed:{
    isFormEmpty(){
      return(
          this.username===''||
          this.firstname===''||
          this.lastname===''||
          this.email===''||
          this.password===''||
          this.repeatPassword===''||
          this.companyName===''||
          this.street===''||
              this.city===''||
              this.state===''||
              this.zipCode===''
      );
    },
    passwordMismatch() {
      return this.password !== this.repeatPassword;
    },

  },
  methods:{
    submitForm() {
      if (!this.isFormEmpty && !this.passwordMismatch) {
        this.signUp();
      }
    },
    async signUp() {

      let profileData = {
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        street:this.street,
        city:this.city,
        state:this.state,
        zipCode:this.zipCode,
        companyName: this.companyName,
      };
      console.log(profileData);
       await this.profileApi.createProfile(profileData)
          .then((response=>{
            console.log(response);
            localStorage.setItem('profileId',response.data.id);
          }))
          .catch((error)=>{
            console.error('Error ',error.message);
          })

      let userData={
        username : this.username,
        password:this.password,
        profileId:parseInt(localStorage.getItem('profileId'))
      };
       await this.authApi.signUp(userData)
           .then((response=>{
             console.log(response)
           }))
           .catch((error=>{
             console.error('Error ',error.message);
           }))







    },

  }
}
</script>
<style>
.container{
  height: 60vh;
}
</style>
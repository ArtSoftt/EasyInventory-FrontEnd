<template>

<div class="flex align-content-center justify-content-center mt-8">

  <pv-card  class="container">
    <template #title>Create your account</template>
    <template #content>
      <form class="form">

        <div class="form grid grid">
          <div class="field col">

            <div class="form-group-inline">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <pv-input-text type="text" class=" border-color-700 border-solid p-3 border-round w-full" id="firstname" v-model="firstname" required/>
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
                <label for="birthday">Birthday</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="birthday" v-model="birthday" required/>
              </div>
            </div>
          </div>
          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="birthday">Company Name</label>
                <pv-input-text type="text" class=" border-solid p-3 border-round w-full" id="companyName" v-model="companyName" required/>
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

          <div class="field col">
            <div class="form-group-inline">
              <div class="form-group">
                <label for="phone">Phone</label>
                <pv-input-text type="text" class="border-solid p-3 border-round w-full" id="phone" v-model="phone" required/>
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
import {CustomerApiService} from "@/customers/services/customer-api.service";
import {ProviderApiService} from "@/providers/services/provider-api.service";
import {ProductApiService} from "@/products/services/product-api.service";
import {SalesApiService} from "@/sales/services/sales-api.service";
import {ShopApiService} from "@/shops/services/shop-api.service";
import {AuthServiceApi} from "@/shared/services/auth-service.api";

export default{
  name:'sign-up',
  components: { languageSwitcherComponent},
  data(){
    return{
      username:"",
      firstname:"",
      password:"",
      lastname:"",
      email:"",
      birthday:"",
      phone:"",
      repeatPassword:"",
      companyName:"",
      apiCustomer:new CustomerApiService(),
      apiProduct:new ProductApiService(),
      apiProvider:new ProviderApiService(),
      apiShop: new ShopApiService(),
      apiSale: new SalesApiService(),
      authApi: new AuthServiceApi(),

    }
  },
  computed:{
    isFormEmpty(){
      return(
          this.username===''||
          this.firstname===''||
          this.lastname===''||
          this.birthday===''||
          this.email===''||
          this.phone===''||
          this.password===''||
          this.repeatPassword===''||
          this.companyName===''
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

      let product = {
        id: 0,
        products: []
      }
      let customer = {
        id: 0,
        customers: []
      }
      let provider = {
        id: 0,
        customer: []
      }
      let sale = {
        id: 0,
        sales: []
      }
      let shop = {
        id: 0,
        sales: []
      }

      const userdata = {
        firstName: this.firstName,
        lastName: this.lastName,
        genre: this.genre,
        birthday: this.birthday,
        company: this.companyName,
        email: this.email,
        phone: this.phone,
        username: this.username,
        password: this.password,
        idListCustomers: (await this.apiCustomer.create(customer)).data.id,
        idListProviders: (await this.apiProvider.create(provider)).data.id,
        idListSales: (await this.apiSale.create(sale)).data.id,
        idListShops: (await this.apiShop.create(shop)).data.id,
        idListProducts: (await this.apiProduct.create(product)).data.id
      };
      this.authApi.signUpUser(userdata)
          .then((response) => {
            console.log(response.data);
          })

    },

  }
}
</script>
<style>

</style>
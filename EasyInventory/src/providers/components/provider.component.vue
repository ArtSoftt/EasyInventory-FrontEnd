<template>
  <div class="container">
    <h1>New Provider</h1>
    <pv-divider/>

    <!--  Form-->
    <div class="">
      <form @submit="onSubmit" class="flex flex-column gap-2">


        <label for="value">Name Company</label>
        <pv-input-text id="value" v-model="nameCompany" type="text" :class="{ 'p-invalid': errorMessage }"
                       aria-describedby="text-error"/>
        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>

        <label for="value">Phone</label>
        <pv-input-text id="value" v-model="phone" type="text" :class="{ 'p-invalid': errorMessage }"
                       aria-describedby="text-error"/>
        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>

        <label for="value">RUC</label>
        <pv-input-text id="value" v-model="ruc" type="text" :class="{ 'p-invalid': errorMessage }"
                       aria-describedby="text-error"/>
        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>

        <label for="value">Email</label>
        <pv-input-text id="value" v-model="email" type="text" :class="{ 'p-invalid': errorMessage }"
                       aria-describedby="text-error"/>
        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>


        <label for="value">Address</label>
        <pv-input-text id="value" v-model="address" type="text" :class="{ 'p-invalid': errorMessage }"
                       aria-describedby="text-error"/>
        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>


        <label for="value">City</label>
        <pv-input-text id="value" v-model="city" type="text" :class="{ 'p-invalid': errorMessage }"
                       aria-describedby="text-error"/>
        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>


        <pv-button type="submit" label="Create"/>
      </form>
      <pv-toast/>

    </div>

  </div>
</template>

<script setup>
import {useToast} from 'primevue/usetoast';
import {useField, useForm} from 'vee-validate';

const {handleSubmit, resetForm} = useForm();
const {nameCompany,phone,ruc,email,address,city, errorMessage} = useField('value', validateField);
const toast = useToast();

function validateField(value) {
  if (!value) {
    return 'Name - Surname is required.';
  }

  return true;
}

const onSubmit = handleSubmit((values) => {
  if (values.value && values.value.length > 0) {
    toast.add({severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000});
    resetForm();
  }
});
</script>



<!--

// Define cada campo con su propia validación
const {value: nameCompany, errorMessage: nameCompanyError} = useField('nameCompany', value => {
  if (!value) {
    return 'El nombre de la empresa es obligatorio.';
  }
  return true;
});


-->



<style scoped>
  .container{
    width: 100%;

  }

  .pv-input-text{
    background-color: #0e8174;
  }
</style>

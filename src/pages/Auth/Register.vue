<style scoped>
@import "auth.css";
</style>

<template>
  <div class="text-box">
    <h1>facebook</h1>
    <p>
      Connect with friends and the world <br />
      around you and Facebook.
    </p>
  </div>

  <div class="form-box">
    <div v-if="alert.show">
      <AlertVue :alert="alert" />
    </div>

    <form @submit.prevent="submitForm">
      <input
        type="text"
        v-model="registerFormdata.name"
        placeholder="Nom"
        required
      />
      <input
        type="email"
        v-model="registerFormdata.email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        v-model="registerFormdata.password"
        placeholder="Mot de passe"
        required
      />
      <div class="links">
        <button class="login" type="submit">Inscription</button>
        <router-link class="connexion" to="/login">Connexion</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import AlertVue from "@/components/Alerte.vue";

import { reactive } from "vue";

const registerFormdata = reactive({
  name: "",
  email: "",
  username: "", // Champ ajouté
  password: "",
});
const alert = reactive({
  show: false,
  class: "",
  msg: "",
});

const submitForm = async () => {
  await axios
    .post("http://127.0.0.1:8000/api/register", {
      name: registerFormdata.name,
      username: registerFormdata.username, // Champ ajouté
      email: registerFormdata.email,
      password: registerFormdata.password,
    })
    .then((response) => {
      if (response.data.status == 201) {
        alert.class = "alert-success";
        alert.msg =response.data.message;
        alert.show = true;
        // Gérer la réponse du serveur, par exemple afficher un message de succès.
        console.log("response :", response.data);
      }else{
        alert.class = "alert-primary";
        alert.msg = response.data.message;
        alert.show = true;
      }
    });
};
</script>

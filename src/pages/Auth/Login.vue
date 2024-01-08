<!-- Login.vue -->
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
    <form @submit.prevent="submitFormLogin">
      <input
        type="text"
        placeholder="Email"
        v-model="loginFormdata.email"
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        v-model="loginFormdata.password"
        required
      />
      <div class="links">
        <button class="login" type="submit">Connexion</button>
        <router-link class="connexion" to="/home"
          >Mot de passe oublié?</router-link
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import AlertVue from "@/components/Alerte.vue";
import { reactive } from "vue";

const loginFormdata = reactive({
  email: "",
  password: "",
});

const alert = reactive({
  show: false,
  class: "",
  msg: "",
});

const submitFormLogin = async () => {
  console.log("response :", loginFormdata);

  await axios
    .post("http://127.0.0.1:8000/api/login", loginFormdata)
    .then((response) => {
      if (response.data.status == 200) {
        sessionStorage.setItem("accessToken", response.data.token);

        alert.class = "alert-success";
        alert.msg = response.data.message;
        alert.show = true;
        // Gérer la réponse du serveur, par exemple afficher un message de succès.
        // showAlert("alert-success", data.message);
        console.log("response :", response.data);
      } else {
        // showAlert("alert-danger", data.message)
        alert.class = "alert-danger";
        alert.msg = response.data.message;
        alert.show = true;
      }
    });
};

const showAlert = (cssClass, message) => {
  alert.class = cssClass;
  alert.msg = message;
  alert.show = true;
};
</script>

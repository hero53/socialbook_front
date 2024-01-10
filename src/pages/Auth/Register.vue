<style scoped>
/* @import "auth.css"; */
</style>

<template>
  <div class="p-5">
    <div class="container">
      <div class="row pt-5">
        <div class="col-xl-7 col-lg-6 col-md-12">
          <div class="text-center pb-3">
            <h1 class="text-primary facebook">facebook</h1>
            <h1 class="text-description">Inscription</h1>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-12">
          <div class="card shadow border-0 card-body">
            <form @submit.prevent="submitFormRegister">
              <div v-if="alert.show">
                <AlertVue :alert="alert" />
              </div>
              <div class="mb-3">
                <label for="emailOrPhone">Email or phone number</label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="registerFormdata.name"
                  placeholder="Nom"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="emailOrPhone">Email or phone number</label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="registerFormdata.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password">Password</label>
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Mot de passe"
                  v-model="registerFormdata.password"
                  required
                />
              </div>
              <div class="d-grid gap-2 col-12 mx-auto">
                <button
                  class="btn btn-primary text-light fw-bold btn-lg border-0 btn-h-primary"
                  type="submit"
                >
                  Inscription
                </button>
                <div class="text-center">
                  <router-link class="connexion" to="/login">
                    J'ai déjà un compte
                  </router-link>
                </div>
                <hr />
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 text-center pt-3">
          Cette page est un clone de facebook, pour m'exercer en Vue js
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import AlertVue from "@/components/Alerte.vue";

import { reactive } from "vue";

const registerFormdata = reactive({
  name: "",
  email: "",
  username: "",
  password: "",
});

const alert = reactive({
  show: false,
  class: "",
  msg: "",
});

const submitFormRegister = async () => {
  await axios
    .post("http://127.0.0.1:8000/api/register", registerFormdata)
    .then((response) => {
      if (response.data.status == 201) {
        alert.class = "alert-success";
        alert.msg = response.data.message;
        alert.show = true;
        // Gérer la réponse du serveur, par exemple afficher un message de succès.
        console.log("response :", response.data);
      } else {
        alert.class = "alert-primary";
        alert.msg = response.data.message;
        alert.show = true;
      }
    });
};
</script>

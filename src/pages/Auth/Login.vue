<!-- Login.vue -->
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
            <h1 class="text-description">Connexion</h1>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-12">
          <div class="card shadow border-0 card-body">
            <form>
              <div v-if="alert.show">
                <AlertVue :alert="alert" />
              </div>
              <div class="mb-3">
                <label for="emailOrPhone">Email or phone number</label>
                <input
                class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="loginFormdata.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password">Password</label>
                <input
                class="form-control form-control-lg"
                  type="password"
                  placeholder="Mot de passe"
                  v-model="loginFormdata.password"
                  required
                />
              </div>
              <div class="d-grid gap-2 col-12 mx-auto">
                <button
                  class="btn btn-primary text-light fw-bold btn-lg border-0 btn-h-primary"
                  type="submit"
                >
                  Connexion
                </button>
                <div class="text-center">
                  <router-link class="connexion" to="/home">
                    Mot de passe oublié?
                  </router-link>
                </div>
                <hr />
                <div class="text-center pb-2">
                  <router-link  class="btn btn-success text-light fw-bold btn-lg border-0 btn-h-success" to="/">
                    Créer un compte
                  </router-link>
                </div>
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
import { reactive, ref } from "vue";

const loginFormdata = reactive({
  email: "",
  password: "",
});

const alert = reactive({
  show: false,
  class: "",
  msg: "",
});

const loading = ref(false);

const submitFormLogin = () => {
  console.log("response :", loginFormdata);
  loading.value = true;
  axios
    .post("http://127.0.0.1:8000/api/login", loginFormdata)
    .then((response) => {
      if (response.data.status == 200) {
        sessionStorage.setItem("accessToken", response.data.token);

        // alert.class = "alert-success";
        // alert.msg = response.data.message;
        // alert.show = true;
        showAlert("alert-success", response.data.message);

        // Gérer la réponse du serveur, par exemple afficher un message de succès.
        // showAlert("alert-success", data.message);
        console.log("response :", response.data);
      } else {
        // showAlert("alert-danger", data.message)
        // alert.class = "alert-danger";
        // alert.msg = response.data.message;
        // alert.show = true;
        showAlert("alert-danger", response.data.message);
      }
    })
    .catch((e) => {
      showAlert("alert-danger", "response.data.message");
    })
    .finally(() => {
      loading.value = false;
    });
};

const showAlert = (cssClass, message) => {
  alert.class = cssClass;
  alert.msg = message;
  alert.show = true;
};
</script>

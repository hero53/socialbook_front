<!-- Login.vue -->
<style scoped>
@import "auth.css";
</style>
<template>
  <div class="text-box">
    <h1>facebook</h1>
    <p>Connect with friends and the world <br>
      around you and Facebook.
    </p>
  </div>

  <div class="form-box">
    
    <form action="">
      <input type="text" placeholder="Email" required>
      <input type="password" placeholder="Mot de passe" required>
      <div class="links">
        <button class="login">Connexion</button>
        <router-link class="connexion" to="/home">Mot de passe oublié?</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
</script>

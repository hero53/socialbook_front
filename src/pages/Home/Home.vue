<!-- Login.vue -->
<style scoped>
@import "home.css";
</style>
<template>
  <nav>
   <NavLeft />
    <NavRight />

    <!----------------Settings Menu"----------------------->
    <NavSettingsMenu/>
  </nav>

  <div class="container">
    <!----------------Left Sidebar----------------------->
    <Left />
    <!----------------Main Sidebar----------------------->
    <Base />

    <!----------------Right Sidebar----------------------->
    <Right />
  </div>
  <div class="footer">
    <p>Copyright 2022 - Vkive Tutorials</p>
  </div>
</template>

<script setup>
import Right from "./build/Right.vue";
import Base from "./build/Base.vue";
import Left from "./build/Left.vue";
import NavSettingsMenu from "./build/NavSettingsMenu.vue";
import NavRight from "./build/NavRight.vue";
import NavLeft from "./build/NavLeft.vue";

const home = () => {
  var settingsmenu = document.querySelector(".settings-menu");
  var darkBtn = document.getElementById("dark-btn");

  function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
  }
  darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
  } else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
  } else {
    localStorage.setItem("theme", "light");
  }
};
</script>

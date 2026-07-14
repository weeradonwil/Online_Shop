<template>
  <div class="app-container">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
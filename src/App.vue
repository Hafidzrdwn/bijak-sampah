<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <NavbarComponent />
  <div id="container" class="mt-4 container">
    <router-view></router-view>
  </div>
  <FooterComponent />
</template>

<style scoped></style>

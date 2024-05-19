<script setup>
import NavbarComponent from './components/NavbarComponent.vue';

</script>

<template>
  <div>
    <NavbarComponent />
    <main>  
      <router-view ></router-view>  
    </main>
  </div>
</template>

<style scoped>

</style>

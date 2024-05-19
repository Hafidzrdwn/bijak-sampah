<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 border-bottom border-web-primary fixed-top">
      <div class="container">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="/webicon.png" alt="Icon Website" width="40" height="40">
          <span class="ms-2 fw-bold text-web-primary">BijakSampah</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto gap-lg-5 gap-2 pt-3 pt-lg-0 text-uppercase text-center text-md-start">
            <router-link class="nav-link" :class="{ 'active': this.$route.path == '/' }" to="/">Home</router-link>
            <router-link class="nav-link" :class="{ 'active': this.$route.path == '/materi' }" to="/materi">Daftar
              Materi</router-link>
            <router-link class="nav-link" :class="{ 'active': this.$route.path == '/quiz' }"
              to="/quiz">Quiz</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>

</script>

<style></style>
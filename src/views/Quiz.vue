<template>
  <div class="py-5">
    <div class="header-wrapper mb-5">
      <h6 class="mb-2">
        Kerjakan Quiz
      </h6>
      <h2>
        Daftar Quiz
      </h2>
    </div>

    <div class="row justify-content-center align-items-start row-gap-4">
      <div class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6" v-for="q in quizzes" :key="q.id">
        <div class="card" id="card-materi">
          <img src="/images/quiz.webp" class="card-img-top" alt="Background Materi">
          <div class="card-body text-center pb-4">
            <h5 class="mb-4">{{ q.title }}</h5>
            <router-link :to="'/quiz/' + q.id" class="btn btn-web-primary">Kerjakan Sekarang</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const quizzes = [
  {
    id: 1,
    title: 'Quiz 1'
  },
  {
    id: 2,
    title: 'Quiz 2'
  },
  {
    id: 3,
    title: 'Quiz 3'
  },
]
</script>
<style></style>
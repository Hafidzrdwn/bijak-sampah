<template>
  <div class="py-5">
    <div class="header-wrapper mb-5">
      <h6 class="mb-2">
        Tersedia beberapa materi menarik
      </h6>
      <h2>
        Daftar Materi
      </h2>
    </div>

    <div class="row justify-content-center align-items-start row-gap-4">
      <div class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-6" v-for="c in clasess" :key="c.id">
        <div class="card" id="card-materi">
          <img src="/images/materi-bg.jpg" class="card-img-top" alt="Background Materi">
          <div class="card-body text-center pb-4">
            <h5 class="mb-4">{{ c.title }}</h5>
            <router-link :to="'/materi/' + c.id" class="btn btn-web-primary">Baca Sekarang</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const clasess = [
  {
    id: 1,
    title: 'Membuang Sampah dan Mendaur Ulang Sampah Sesuai Dengan Jenisnya',
  },
  {
    id: 2,
    title: 'Mengelola Sampah Organik di Rumah',
  },
  {
    id: 3,
    title: 'Daur Ulang Sampah Plastik: Langkah Kecil yang Berdampak Besar',
  },
]
</script>
<style></style>
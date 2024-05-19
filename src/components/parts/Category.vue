<template>
  <div class="pb-5 pt-4">

    <div class="header-wrapper mb-4">
      <h6 class="mb-2">
        Wawasan dasar
      </h6>
      <h2>
        Mengenal Kategori Sampah
      </h2>
    </div>

    <div class="row justify-content-center justify-content-xl-between justify-content-lg-between align-items-center">
      <div class="col-lg-6">
        <div
          class="row justify-content-between ju align-items-start align-items-xl-center flex-wrap row-gap-3 row-gap-xl-5 row-gap-lg-4 row-gap-md-4">
          <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6" v-for="c in categories" :key="c.id">
            <div class="card py-2 border-0 text-center shadow-sm">
              <div class="card-body">
                <img :src="c.image" alt="Category 1" width="60" height="60">
                <p class="card-title mt-3
                ">{{ c.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-6 col-lg-6 col-md-12">
        <img src="/images/category.png" alt="Category Image" class="w-100 img-fluid rounded">
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    id: 1,
    name: 'Sampah Organik',
    image: '/images/organic.png'
  },
  {
    id: 2,
    name: 'Sampah Anorganik',
    image: '/images/plastic.png'
  },
  {
    id: 3,
    name: 'Sampah B3 (Bahan Berbahaya dan Beracun)',
    image: '/images/b3.png'
  },
  {
    id: 4,
    name: 'Sampah Elektronik (E-Waste)',
    image: '/images/e-waste.png'
  }
]
</script>

<style></style>
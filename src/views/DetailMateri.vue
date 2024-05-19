<template>
  <div class="pt-5 pb-4">


    <div class="header-wrapper mb-4">
      <h2 class="text-web-primary">
        {{ details.find((d) => d.id == $route.params.id).title }}
      </h2>
    </div>

    <div class="row">
      <div class="col-lg-12 w-100">
        <iframe class="rounded" width="100%" height="500" :src="details.find((d) => d.id == $route.params.id).link"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-lg-12">
        <p class="mt-4" v-html="details.find((d) => d.id == $route.params.id).text">
        </p>
      </div>
    </div>

    <router-link to="/materi" class="btn btn-sm btn-web-primary">
      <i class="fas fa-arrow-left"></i> &laquo; Kembali ke Daftar Materi
    </router-link>

  </div>
</template>

<script setup>
const details = [
  {
    id: 1,
    link: 'https://www.youtube.com/embed/CGd3lgxReFE?si=9-g5WBHv18ldERAk',
    title: 'Membuang Sampah dan Mendaur Ulang Sampah Sesuai Dengan Jenisnya',
    text: "<p class='mb-3'>Membuang sampah sesuai dengan jenisnya dan mendaur ulangnya merupakan tindakan penting untuk menjaga kebersihan lingkungan dan mendukung keberlanjutan. Dampak positif dari membuang sampah dan mendaur ulang sampah berdasarkan jenisnya yaitu, mengurangi penggunaan energi dan emisi karbon, mengurangi penggunaan sumber daya alam baru, dan mengurangi pencemaran lingkungan. Dampak negatif jika tidak membuang sampah dan mendaur ulang sampah berdasarkan jenisnya yaitu, terjadinya kerusakan pada habitat satwa liar, kerusakan ekosistem, pencemaran lingkungan.</p> <h4>Jenis - Jenis Sampah:</h4> <ul class='mt-3'><li><h6>Sampah Organik :</h6> <p>Sampah yang mudah terurai, seperti sisa makanan, sayuran, dan daun. Sampah ini bisa dijadikan kompos.</p></li> <li><h6>Sampah Anorganik :</h6> <p>Sampah yang tidak mudah terurai dan biasanya terdiri dari bahan - bahan seperti plastik, kaca, logam, dan kertas. Sampah ini seringkali bisa didaur ulang.</p></li> <li><h6>Sampah B3(Bahan Berbahaya dan Beracun) :</h6> <p>Sampah yang mengandung bahan berbahaya seperti baterai, lampu neon, obat - obatan kadaluarsa, dan bahan kimia rumah tangga.</li></ul><h4 class='mt-4 mb-3'>Manfaat Memisahkan dan Mendaur Ulang Sampah</h4><p><strong>Mengurangi Penggunaan Energi dan Emisi Karbon:</strong> Daur ulang sampah anorganik seperti plastik dan logam dapat mengurangi kebutuhan energi dalam proses produksi bahan baku baru, serta mengurangi emisi karbon yang dihasilkan.</p><p><strong>Menghemat Sumber Daya Alam:</strong> Dengan mendaur ulang kertas dan kaca, kita dapat mengurangi penebangan pohon dan penggunaan pasir silika, yang merupakan bahan baku utama pembuatan kaca.</p><p><strong>Mengurangi Pencemaran Lingkungan:</strong> Pembuangan sampah yang tidak tepat dapat mencemari tanah, air, dan udara. Dengan memisahkan dan mendaur ulang sampah, kita dapat mengurangi risiko pencemaran dan kerusakan ekosistem.</p><h4 class='mt-4 mb-3'>Langkah-Langkah Memisahkan dan Mendaur Ulang Sampah</h4><p><strong>Pilah Sampah di Sumbernya:</strong> Sediakan tempat sampah terpisah untuk sampah organik, anorganik, dan B3 di rumah atau tempat kerja.Pastikan setiap anggota keluarga atau rekan kerja mengetahui cara memisahkan sampah dengan benar.</p><p><strong>Bersihkan Sampah yang Akan Didaur Ulang:</strong> Sebelum mengirimkan sampah anorganik ke fasilitas daur ulang, pastikan sampah tersebut bersih dari kotoran dan sisa makanan.</p><p><strong> Edukasi dan Sosialisasi:</strong> Edukasi diri sendiri dan orang lain tentang pentingnya memisahkan sampah dan mendaur ulang.Kampanyekan kebiasaan ini di komunitas sekitar agar semakin banyak orang yang terlibat.</p><h4 class='mt-4 mb-3'>Kesimpulan</h4><p>Dengan memisahkan sampah sesuai jenisnya dan mendaur ulangnya, kita dapat berkontribusi dalam menjaga kebersihan lingkungan dan mendukung keberlanjutan.Langkah kecil yang kita lakukan hari ini dapat memberikan dampak besar bagi generasi mendatang.Mari bersama- sama menjadi bagian dari solusi dan menjadikan bumi tempat yang lebih baik untuk kita semua.</p>"
  },
  {
    id: 2,
    link: 'https://www.youtube.com/embed/PkYgN3xfJ2I?si=HXpDq19C_XIWKbLu',
    title: 'Mengelola Sampah Organik di Rumah',
    text: "<p class='mb-4'>Pengelolaan sampah organik di rumah adalah langkah penting untuk mengurangi jumlah sampah yang dikirim ke tempat pembuangan akhir. Sampah organik seperti sisa makanan, daun, dan potongan sayur dapat diubah menjadi kompos yang bermanfaat bagi tanaman. Proses pengomposan tidak hanya mengurangi volume sampah, tetapi juga menghasilkan pupuk alami yang kaya nutrisi.</p><p class='mb-4'>Untuk memulai pengomposan, Anda dapat menggunakan wadah khusus yang dapat ditempatkan di halaman rumah atau bahkan di dapur.Pastikan untuk mencampur sisa makanan dengan bahan kering seperti daun kering atau kertas untuk menjaga keseimbangan karbon dan nitrogen.Proses ini akan membantu sampah terurai lebih cepat dan mengurangi bau yang tidak sedap.</p><p>Selain itu, pengelolaan sampah organik juga dapat dilakukan dengan metode vermikompos, yaitu menggunakan cacing tanah untuk mempercepat proses dekomposisi.Metode ini sangat efektif dan dapat menghasilkan kompos dalam waktu yang lebih singkat.Dengan memanfaatkan sampah organik secara bijak, kita dapat mengurangi dampak negatif terhadap lingkungan dan mendukung pertanian berkelanjutan.</p>"
  },
  {
    id: 3,
    link: 'https://www.youtube.com/embed/CI-69iV1mE4?si=v8E2uh2YuahktWPb',
    title: 'Daur Ulang Sampah Plastik: Langkah Kecil yang Berdampak Besar',
    text: "<p class='mb-4'>Sampah plastik merupakan salah satu masalah lingkungan terbesar di dunia saat ini. Plastik yang tidak terurai dan terbuang sembarangan dapat mencemari tanah, air, dan udara. Oleh karena itu, daur ulang plastik menjadi langkah penting yang harus kita lakukan untuk mengurangi dampak negatif tersebut.</p><p class='mb-4'>Daur ulang plastik dimulai dengan memilah jenis- jenis plastik sesuai dengan kode daur ulang yang tertera pada kemasannya.Plastik yang sudah dipilah kemudian dibersihkan dan dihancurkan menjadi serpihan kecil yang siap diolah kembali menjadi produk baru.Proses ini membantu mengurangi kebutuhan akan plastik baru dan menghemat sumber daya alam yang digunakan dalam produksi plastik.</p><p>Selain daur ulang, kita juga dapat mengurangi penggunaan plastik dengan cara membawa tas belanja sendiri, menggunakan botol minum yang dapat diisi ulang, dan menghindari produk sekali pakai.Langkah - langkah kecil ini, jika dilakukan secara konsisten oleh banyak orang, dapat memberikan dampak besar bagi kelestarian lingkungan kita.Dengan kesadaran dan tindakan nyata, kita bisa mengatasi masalah sampah plastik secara bersama - sama.</p>"
  },
]
</script>
<style></style>
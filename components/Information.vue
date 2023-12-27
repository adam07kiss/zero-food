<script setup>
import infoBg from '../assets/img/pages-images/info-bg.webp'
</script>

<template>
  <div class="h-[483px] bg-cover bg-center bg-no-repeat bg-infoColor grayscale flex items-center justify-center "
       :style="{ backgroundImage: `url(${infoBg})` }"
  >
    <div
        class="p-8 flex flex-col items-center justify-center md:py-4 md:p-0 lg:w-[960px] xl:w-[1140px] md:my-0 mx-auto">
      <img src="../assets/img/pages-images/zero-logo.webp" alt="logo"/>
      <div class="font-comfortaa font-medium text-white py-6">Szeged, Petőfi Sándor sgt. 7.</div>
      <div class="font-poppins text-h2 text-white font-bold text-center"><a href="tel:+36702243939">+36 70 224
        3939</a></div>
    </div>
  </div>
</template>

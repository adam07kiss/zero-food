<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';

import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";
</script>

<template>
  <div class="pb-10">
    <swiper
        effect="coverflow"
        :slidesPerView="1"
        :grabCursor="true"
        :centeredSlides="true"
        :breakpoints="{
      '768': {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }"
        :coverflowEffect="{
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    }"
        navigation
        :pagination="{ clickable:true,
          dynamicBullets: true,}"
        :modules="[Navigation, Pagination, EffectCoverflow]"
        class="flex justify-center items-center pb-8 xl:w-[1236px] lg:my-0 mx-auto ">

      <swiper-slide><nuxt-img format="webp" src="/img/restaurant-images/N2PH0785.jpg" alt=""/></swiper-slide>
      <swiper-slide><nuxt-img format="webp" src="/img/restaurant-images/N2PH0784.jpg" alt=""/></swiper-slide>
      <swiper-slide><nuxt-img format="webp" src="/img/restaurant-images/N2PH1023.jpg" alt=""/></swiper-slide>
      <swiper-slide><nuxt-img format="webp" src="/img/restaurant-images/N2PH1026.jpg" alt=""/></swiper-slide>
      <swiper-slide><nuxt-img format="webp" src="/img/restaurant-images/N2PH1030.jpg" alt=""/></swiper-slide>
      <swiper-slide><nuxt-img format="webp" src="/img/restaurant-images/N2PH1036.jpg" alt=""/></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>

import Navbar from "~/components/Navbar.vue";
import RestaurantMenu from "~/components/RestaurantMenu.vue";
import Footer from "~/components/Footer.vue";

import brickBottom from "assets/img/pages-images/brick-bottom.webp";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

useHead({
  title: 'ZeroFood',
  htmlAttrs: {
    lang: 'hu'
  },
  meta: [
    {
      name: 'description',
      content: 'Zero Streetfood Restaurant'
    }
  ]
})

const isMenuOpen = ref(false);
watch(isMenuOpen, v => document.body.style.overflow = v ? 'hidden' : 'auto')
</script>

<template>
  <section id="header" :class="{'open': isMenuOpen}">
    <Navbar @open-menu="isMenuOpen = true" />

    <MobileMenu @close="isMenuOpen = false" :is-open="isMenuOpen"/>

  </section>
  <section id="home" class="pt-20 bg-zero-gray-light">
    <Home/>
  </section>
  <section id="separator-top" class="bg-zero-gray-light">
    <SeparatorTop/>
  </section>
  <section id="information">
    <Information/>
    <div class="py-10  flex flex-row items-center justify-center bg-zero-gray-light">
      <a
          href="tel:+36702243939"
          class="bg-accent px-6 rounded-[50px] flex items-center justify-center p-3 gap-2.5 font-bold font-comfortaa text-h4"
      >
        <img src="/assets/svg/icons/order-menu.svg" alt="order-menu">
        <span>{{ $t('order-menu') }}</span>
      </a>
    </div>
  </section>
  <section id="weekly-menu" class="bg-zero-gray-light  ">
    <div
        class="flex relative flex-col items-center justify-between md:lg:w-[960px] xl:w-[1140px] md:my-0 mx-auto bg-white transition-all duration-500 ">
      <WeeklyMenu/>
    </div>

    <div class="py-10 flex flex-row items-center justify-center">
      <a
          href="https://zerofood.us4.list-manage.com/subscribe?u=b39e108369aeb0885a231f31e&id=2b96bda0e7"
          class=" bg-zero-gray-light px-6 rounded-[50px] flex items-center justify-center p-3 gap-2.5 font-bold font-comfortaa text-h5 border-2"
          target="_blank"
      >
        <img src="/assets/svg/icons/notification.svg" alt="notification">
        <span>{{ $t('notification') }}</span>
      </a>
    </div>
  </section>
  <section id="separator-bottom" class="bg-zero-gray-light">
    <SeparatorBottom/>
  </section>
  <section id="menu-section" class="bg-zero-gray-light">
    <RestaurantMenu/>
    <div class="py-10 flex flex-row items-center justify-center">
      <a
          href="tel:+36702243939"
          class="bg-accent px-6 rounded-[50px] flex items-center justify-center p-3 gap-2.5 font-bold font-comfortaa text-h4"
      >
        <img src="/assets/svg/icons/book-a-table.svg" :alt="$t('table-reserve')">
        <span>{{ $t('table-reserve') }}</span>
      </a>
    </div>


  </section>
  <section id="gallery" class="bg-zero-gray-light">
    <div class="pt-5 pb-10 font-comfortaa text-h3 font-bold flex items-center justify-center uppercase">{{
        $t('gallery')
      }}
    </div>

    <GalleryComp/>
    <div
        class="bg-auto md:bg-center bg-bottom 2xl:bg-cover bg-no-repeat bg-zero-gray-light bg-blend-multiply flex flex-col items-center justify-center"
        :style="{ backgroundImage: `url(${brickBottom})` }"
    >

      <div class="flex px-8 pb-20 pt-10 lg:px-0 lg:w-[960px] xl:w-[1140px] md:my-0 mx-auto text-h5 font-roboto">
        {{ $t('gallery-text') }}
      </div>
    </div>
  </section>
  <section id="footer" class="bg-black">
    <Footer/>
  </section>

</template>

<style lang="scss">
@import url('assets/scss/main.scss');
</style>

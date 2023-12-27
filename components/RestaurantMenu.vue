<script setup>
import axios from 'axios';
import logo from '../assets/img/pages-images/logo.webp';
import AllergensList from './AllergensList.vue';

const menu = ref([])

axios.get(import.meta.env.VITE_MENU_URL)
    .then(response => {
      menu.value = response.data
    })
    .catch(error => {
      console.log(error)
    })

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div
      class="flex relative flex-col items-center justify-between md:lg:w-[960px] xl:w-[1140px] md:my-0 mx-auto bg-white transition-all duration-500">
    <div class="text-h3 flex items-center justify-center py-5 text-accent uppercase font-comfortaa shadow-2xl w-full cursor-pointer"
         @click="toggleMenu">{{ $t('restaurant-menu') }}
    </div>
    <div class="absolute right-[15px] top-7 transition-transform duration-500 cursor-pointer" :class="{'rotate-180': isMenuOpen}" @click="toggleMenu">
      <img src="/assets/svg/icons/menu-arrow.svg" alt="menu-arrow">
    </div>
    <div
        class="flex flex-col transition-all duration-500 overflow-hidden mt-[2px] pl-3 pr-6 lg:w-[960px] xl:w-[1140px] md:mx-auto bg-white items-start"
        :class="{'max-h-[80vh]': !isMenuOpen, 'max-h-0': isMenuOpen}">
      <div class="overflow-y-auto px-3 pb-3 bg-no-repeat bg-center lg:bg-[length:727px_423px]"
           :style="{ backgroundImage: `url(${logo})` }"
      >
        <RestaurantMenuCategory
            v-for="category in menu"
            :category="category"
            :key="category.id"
        />
        <AllergensList :allergens="Array.from({ length: 14 }, (v, index) => index+1)"/>
      </div>
    </div>
  </div>
</template>

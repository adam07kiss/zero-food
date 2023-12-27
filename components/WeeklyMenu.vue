<script setup>
import axios from 'axios';
import logo from '../assets/img/pages-images/logo.webp'
import AllergensList from "~/components/AllergensList.vue";

const weeklyMenu = ref([])

axios.get(import.meta.env.VITE_WEEKLY_MENU_URL)
    .then(response => {
      weeklyMenu.value = response.data
    })
    .catch(error => {
      console.log(error)
    })

const menuAllergens = computed(() => {
  return [
    ...new Set(
        weeklyMenu.value.reduce(
            (acc, category) =>
                acc.concat(
                    category.items.reduce(
                        (acc, item) => item.allergens !== null ? acc.concat(item.allergens) : acc,
                        []
                    )
                ),
            []
        )
    )
  ]
})
</script>

<template>
  <div
      class="flex flex-col transition-all duration-500 overflow-hidden mt-[2px] pl-3 pr-3 lg:w-[960px] xl:w-[1140px]  md:mx-auto bg-white items-start ">
    <div class=" px-3 pb-3 bg-no-repeat bg-center lg:bg-[length:727px_423px] w-full"
         :style="{ backgroundImage: `url(${logo})` }">
      <div
          class="font-comfortaa text-h3 text-black font-bold items-center flex justify-center flex-wrap text-center py-4 uppercase whitespace-break-spaces"
          v-html="$t('weekly-menu')">
      </div>
      <div class="font-roboto text-menu text-gray items-center flex justify-center text-center flex-wrap py-2">
        {{ $t('weekly-menu-description') }}
      </div>
      <WeeklyMenuCategory v-for="category in weeklyMenu" :category="category"/>
      <AllergensList :allergens="menuAllergens"/>
    </div>
  </div>
</template>

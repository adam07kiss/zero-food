<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['close'])
</script>

<template>
  <nav class="flex top-0 right-0 flex-col justify-start items-center pt-32 text-white fixed h-full font-comfortaa font-bold w-64 text-h5 uppercase gap-12 bg-accent
               ease-in-out duration-[300ms] overflow-auto z-30 transition-all transform lg:hidden"
       id="menu">
    <button id="burger-sidebar" class="text-white fixed top-10 left-[194px]" @click="emits('close')">
      <img src="/assets/svg/icons/hamburger-close.svg" alt="hamburger-close">
    </button>


    <a class="hover:text-black" href="#home"><span>{{ $t('restaurant') }}</span></a>
    <a class="hover:text-black" href="#weekly-menu"><span>{{ $t('weekly-menu-nav') }}</span></a>
    <a class="hover:text-black" href="#menu-section"><span>{{$t('restaurantMenu')}}</span></a>
    <a class="hover:text-black" href="#gallery"><span>{{ $t('gallery') }}</span></a>

    <div class="flex">
      <div>
        <button class="uppercase" :key="locale"
                :class="{ 'text-black': $i18n.locale === 'hu' }" @click="$i18n.locale = 'hu'">
          hu
        </button>
      </div>
      <div class="w-3.5 mx-2 h-3 border-b border-white"></div>
      <div>
        <button class="uppercase" :key="locale"
                :class="{ 'text-black': $i18n.locale === 'en' }" @click="$i18n.locale = 'en'">
          en
        </button>
      </div>
    </div>
  </nav>
  <div v-if="isOpen" class="fixed w-full h-screen inset-0 bg-black z-20" @click="emits('close')"></div>

</template>

<script setup>
import granite from "assets/img/pages-images/granite1.webp";

const isSticky = ref(false)

const scroll = function () {
  isSticky.value = window.pageYOffset > 0
}

onMounted(() => {
  window.addEventListener('scroll', scroll)
  const navbarHeight = document.querySelector('nav').offsetHeight;

  const links = document.querySelectorAll('#header a, #home a');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const targetOffset = targetSection.offsetTop - navbarHeight + 46;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    });
  });
})

const emits = defineEmits(['openMenu'])
</script>

<template>
  <nav
      id="navbar"
      :class="{'sticky':isSticky}"
      class="h-28 lg:h-32 bg-no-repeat fixed inset-0 bg-cover bg-granite-color bg-blend-multiply z-10 transition-all duration-100"
      :style="{ backgroundImage: `url(${granite})` }"
  >
    <header id="navbarMenu"
            class="flex justify-between items-center px-8 py-7 lg:py-4 lg:p-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto transition-all h-full">
      <a href="#home" class="h-full" aria-label="nav-logo">
        <img class="h-full" src="/assets/img/pages-images/zero-logo.webp" alt="">
      </a>
      <button id="hamburger-button" class="text-accent" @click="emits('openMenu')" aria-label="hamburger">
        <img class="lg:hidden" src="/assets/svg/icons/hamburger-menu.svg" alt="hamburger-menu">
      </button>
      <div class="text-white font-comfortaa font-bold text-h5 uppercase
         flex-row justify-end items-center hidden gap-14 bg-accent
         lg:flex md:bg-transparent ">
        <a class="hover:text-accent" href="#home"><span>{{ $t('restaurant') }}</span></a>
        <a class="hover:text-accent" href="#weekly-menu"><span>{{ $t('weekly-menu-nav') }}</span></a>
        <a class="hover:text-accent" href="#menu-section"><span>{{ $t('restaurantMenu') }}</span></a>
        <a class="hover:text-accent" href="#gallery"><span>{{ $t('gallery') }}</span></a>
        <div class="flex">
          <div>
            <button
                class="uppercase"
                :class="{ 'text-accent': $i18n.locale === 'hu' }"
                @click="$i18n.locale = 'hu'"
            >
              hu
            </button>
          </div>
          <div class="w-3.5 mx-2 h-3 border-b border-white"></div>
          <div>
            <button
                class="uppercase"
                :class="{ 'text-accent': $i18n.locale === 'en' }"
                @click="$i18n.locale = 'en'"
            >
              en
            </button>
          </div>
        </div>
      </div>
    </header>
  </nav>

</template>

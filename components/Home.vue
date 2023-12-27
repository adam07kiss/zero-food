<script setup>
import brickTop from '../assets/img/pages-images/brick-top.webp';
import bgImg from '../assets/img/pages-images/bg-img.webp';
</script>

<template>
  <div>

    <div class="h-[480px] lg:h-[520px] pt-10 lg:pt-[52px] bg-cover bg-no-repeat "
         :style="{ backgroundImage: `url(${bgImg})` }"
    >
      <div class="flex items-center h-full md:py-4 md:p-0 lg:w-[960px] xl:w-[1140px] md:my-0 mx-auto ">
        <div class="w-[150px] h-[390px] bg-black/[.7] lg:w-[570px]">
          <div class="flex items-center flex-col px-8 py-8 gap-8 lg:items-start">
            <div class="text-white flex items-center">
              <img src="../assets/svg/pages-icons/gluten.svg" alt="gluten">
              <div class="pl-6 hidden lg:flex flex-col">
                <h3 class="text-h3 font-bold font-comfortaa uppercase">{{ $t('gluten-free') }}</h3>
                <div class="text-body font-roboto font-bold">{{ $t('gluten-description') }}</div>
              </div>
            </div>
            <div class="text-white flex items-center">
              <img src="../assets/svg/pages-icons/milk.svg" alt="milk">
              <div class="pl-6 hidden lg:flex flex-col">
                <h3 class="text-h3 font-bold font-comfortaa uppercase">{{ $t('milk-free') }}</h3>
                <div class="text-body font-roboto italic">{{ $t('milk-description') }}</div>
              </div>
            </div>
            <div class="text-white flex items-center">
              <img src="../assets/svg/pages-icons/egg.svg" alt="egg">
              <div class="pl-6 hidden lg:flex flex-col">
                <h3 class="text-h3 font-bold font-comfortaa uppercase">{{ $t('egg-free') }}</h3>
                <div class="text-body font-roboto italic">{{ $t('egg-description') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-auto bg-top xl:bg-cover bg-no-repeat bg-zero-gray-light bg-blend-multiply"
         :style="{ backgroundImage: `url(${brickTop})` }"
    >
      <div
          class="flex flex-col px-8 pt-11 pb-11 font-roboto text-h5 gap-7 lg:py-[60px] lg:p-0 lg:w-[960px] xl:w-[1140px] md:my-0 mx-auto">
        <div v-html="$t('restaurant-description')"></div>
        <div v-html="$t('restaurant-description2')"></div>
      </div>
    </div>
  </div>

</template>

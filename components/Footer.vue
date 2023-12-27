<script setup>

</script>

<template>
  <div class="pt-6 lg:pt-10 lg:pb-12 flex flex-col lg:flex-row transition-all lg:py-4 lg:p-0 lg:gap-32 ">
    <div class="bg-accent w-full lg:w-[55%] flex items-center lg:items-end flex-col text-white pt-3.5">
      <div class="font-comfortaa text-[18px] lg:px-[15%] text-center">{{ $t('footer-order') }}</div>
      <div class="font-poppins text-[44px] font-bold lg:px-[15%] text-center"><a href="tel:+36702243939">+36 70 224
        3939</a></div>
      <div
          class="text-white text-[13px] font-comfortaa flex justify-center lg:justify-end bg-black lg:pr-[15%] w-full py-1.5">
        {{ $t('all-rights') }}
      </div>
    </div>
    <div class="py-8 flex items-center justify-center gap-6">
      <a href="https://www.facebook.com/zerofood.hu/">
        <img class="w-[50px] h-[50px] lg:w-[65px] lg:h-[65px]" src="/assets/svg/pages-icons/facebook.svg" alt="facebook">
      </a>
      <a href="https://www.instagram.com/streetfoodzero/">
        <img class="w-[50px] h-[50px] lg:w-[65px] lg:h-[65px]" src="/assets/svg/pages-icons/instagram.svg" alt="instagram">
      </a>
    </div>
  </div>
  <div class="bg-zero-gray-light flex flex-row items-center justify-center pt-2 gap-[7px]">
    <img class="w-[35px] h-[36px] lg:w-[70px] lg:h-[70px]" src="/assets/svg/pages-icons/mastercard.svg" alt="payment-methods">

    <img class="w-[36px] h-[36px] lg:w-[70px] lg:h-[70px]" src="/assets/svg/pages-icons/maestro.svg" alt="payment-methods">

    <img class="w-[36px] h-[36px] lg:w-[70px] lg:h-[70px]" src="/assets/svg/pages-icons/visa.svg" alt="payment-methods">

    <img class="w-[36px] h-[36px] lg:w-[70px] lg:h-[70px]" src="/assets/svg/pages-icons/visaelectron.svg" alt="payment-methods">

    <img class="w-[36px] h-[36px] lg:w-[70px] lg:h-[70px]" src="/assets/svg/pages-icons/unionpay.svg" alt="payment-methods">

    <img class="w-[36px] h-[36px] lg:w-[70px] lg:h-[70px]" src="/assets/svg/pages-icons/vpay.svg" alt="payment-methods">

    <img class="w-[36px] h-[36px] lg:w-[70px] lg:h-[70px]" src="/assets/svg/pages-icons/jcb.svg" alt="payment-methods">

    <img class="w-[36px] h-[36px] lg:w-[70px] lg:h-[70px]" src="/assets/svg/pages-icons/wireless.svg" alt="payment-methods">
  </div>
</template>

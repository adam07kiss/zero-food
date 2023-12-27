<script setup>

const images = ref([
    '/img/gallery/N2P_6500.jpg',
    '/img/gallery/N2P_9227.jpg',
    '/img/gallery/N2P_9257.jpg',
    '/img/gallery/N2PH0776.jpg',
    '/img/gallery/N2PH0784.jpg',
    '/img/gallery/N2PH0790.jpg',
    '/img/gallery/N2PH0802.jpg',
    '/img/gallery/N2PH0829.jpg',
    '/img/gallery/N2PH0837.jpg',
    '/img/gallery/N2PH0863.jpg',
    '/img/gallery/N2PH0926.jpg',
    '/img/gallery/N2PH0944.jpg',
    '/img/gallery/N2PH0993.jpg',
    '/img/gallery/N2PH1025.jpg',
    '/img/gallery/N2PH1030.jpg',
    '/img/gallery/N2PH1868.jpg'
]);

const index = ref(null);
</script>
<template>
  <div class="flex flex-row justify-center xl:justify-between gap-2.5 sm:gap-6 flex-wrap items-center px-8 pb-7 lg:pb-4 lg:p-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto">
    <nuxt-img
        alt="gallery-img"
        format="webp"
        loading="lazy"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        :src="image"
        class="image flex w-[140px] h-[100px] xs:w-[150px] xs:h-[110px] lg:w-[250px] lg:h-[188px] cursor-pointer"
        @click="() => index = imageIndex"
    />
    <gallery :images="images" :index="index" @close="() => index = null"></gallery>
  </div>
</template>


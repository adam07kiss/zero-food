export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['@/assets/scss/main.scss'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image'
    ],

    // ssr: true,
    // target: 'static',
    // buildModules: [
    //     // Next Image module https://image.nuxtjs.org/components/nuxt-img
    //     ['@nuxt/image', {
    //         provider: 'static',
    //         dir: "public",
    //     }],
    // ],
})

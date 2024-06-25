// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/image', 'nuxt-swiper', 'nuxt-icon'],
  experimental: {
    viewTransition: true
  }
})

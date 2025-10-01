// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Copagri Ogliastra - Confederazione Produttori Agricoli',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Copagri Ogliastra rappresenta e sostiene le imprese agricole dell\'Ogliastra, valorizzando la terra, le persone e i prodotti che la rendono unica.' }
      ]
    }
  }
})

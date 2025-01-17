import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    /* pageTransition: { name: 'page', mode: 'out-in' }, */
    head: {
      title: 'Giulia Faraon',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [ {
        src: 'https://consent.cookiebot.com/uc.js?cbid=4bd74c92-0741-42ce-9cc5-f752aa890ed4',
        id: 'Cookiebot',
        type: 'text/javascript'
      }]
    },
  },

  modules: ['@nuxtjs/prismic', '@nuxt/image'],

  prismic: {
    endpoint: 'giulia-faraon',
    preview: false,
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
      ]
    }
  },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
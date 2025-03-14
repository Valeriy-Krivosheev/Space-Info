// https://nuxt.com/docs/api/configuration/nuxt-config
const env = require("dotenv").config();
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/eslint"],
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
    },
  },
  imports: {
    presets: [
      {
        from: "pinia",
        imports: ["defineStore", "storeToRefs", "acceptHMRUpdate"],
      },
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  app: {
    head: {
      title: "World news",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
    // baseURL: "/Nuxt-Vue-News/",
    // buildAssetsDir: 'assets'
  },
});

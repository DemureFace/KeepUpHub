// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    lazy: false,
    langDir: "locales/",
    strategy: "no_prefix",
    defaultLocale: "uk",
    locales: [
      { code: "uk", iso: "uk-UA", file: "uk-UA.json" },
      { code: "en", iso: "en-US", file: "en-US.json" },
    ],
  },
  css: ["~/assets/css/global.css"],
  components: {
    dirs: ["~/components/base"],
  },
});

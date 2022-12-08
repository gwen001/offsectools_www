// NODE_OPTIONS=--openssl-legacy-provider

// import dotenv from "dotenv";
// dotenv.config();

export default defineNuxtConfig({
  // https://nuxtjs.org/docs/concepts/server-side-rendering
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_NAME,
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "X-UA-Compatible", content: "IE=edge" },
      { name: "format-detection", content: "telephone=no" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A vast collection of security tools",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "offsec, security, bug bounty, tools",
      },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: process.env.APP_NAME },
      { property: "og:site_name", content: process.env.APP_NAME },
      {
        property: "og:description",
        content: "A vast collection of security tools",
      },
      { property: "og:url", content: process.env.APP_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: process.env.APP_NAME },
      {
        name: "twitter:description",
        content: "A vast collection of security tools",
      },
      // { name: 'twitter:image', content: process.env.CDN_STATIC+'/img/banner.png' },
      // { property: 'og:image', content: process.env.CDN_STATIC+'/img/banner.png' },
    ],
    link: [
      { hid: "canonical", rel: "canonical", href: process.env.APP_URL },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },

  basePath: "/",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/custom.css"],

  // Loading bar https://nuxtjs.org/docs/2.x/features/loading
  loading: {
    color: "#4ADE80",
    height: "2px",
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/foo.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/image",
    // '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@pinia/nuxt",
    "@nuxt/image-edge",
    // https://go.nuxtjs.dev/axios
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue-3/nuxt",
    "@funken-studio/sitemap-nuxt-3",
  ],

  imports: {
    dirs: ["stores"],
  },

  sitemap: {
    hostname: process.env.APP_URL,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // public vars
  publicRuntimeConfig: {
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,
    APP_ENV: process.env.APP_ENV,
  },

  generate: {
    fallback: "404.html",
    // trailingSlash: true,
    // shallow: true,
    // mode: 'history',
    // crawler: true,
    // subFolders: true,
    // routes: dynamicRoutes,
  },

  dev: process.env.NODE_ENV !== "production",
});

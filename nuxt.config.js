import { resolve } from 'path'
import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()

const isDev = process.env.NODE_ENV === 'development'
console.log('process.env.BE_URI', process.env.BE_URI)

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hồ Trung Anh',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          'Hồ Trung Anh, Anh Hồ, dev, FE, front-end, developer, Đà Nẵng, Việt Nam',
      },
      { name: 'HandheldFriendly', content: 'True' },
      { property: 'og:site_name', content: 'Hồ Trung Anh' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '@bobross' },
      { name: 'twitter:card', content: 'summary_large_image' },
      ...meta,
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '~/static/reset.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BE_URI,
    credentials: 'include',
  },
  globalName: 'TrungAnhPortfolio',
  globals: {
    id: (globalName) => `__${globalName}App`,
    context: (globalName) => `__${globalName.toUpperCase()}_INITIAL_STATE__`,
  },

  alias: {
    '@components': resolve(__dirname, './components'),
    '@api': resolve(__dirname, './api'),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    loaders: {
      cssModules: {
        modules: {
          localIdentName: isDev ? '[local]_[hash:base64:5]' : '[hash:base64:5]',
        },
      },
    },
  },
}

module.exports = {
  css: [
    { src: '~assets/scss/main.scss', lang: 'sass' },
  ],
  head: {
    title: 'isoppp.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DESCRIPTION_HERE' },
      { hid: 'og:image', property: 'og:image', content: 'YOUR_DOMAIN/og.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  loading: { color: '#aaa' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

    },
  },
  modules: [
    ['@nuxtjs/pwa'],
    ['@nuxtjs/sitemap'],
    // ['nuxt-sass-resources-loader', ['SOME.scss']],
    // ['@nuxtjs/google-tag-manager', { id: 'GTM-XXXXXX' }],
  ],
  manifest: {
    // for @nuxtjs/pwa
    short_name: 'nuxt oreore',
    name: 'nuxt-oreore-starter-kit',
    lang: 'ja',
    background_color: '#aaa',
    theme_color: '#aaa',
    orientation: 'portrait',
  },
  sitemap: {
    // for @nuxtjs/sitemap
    hostname: 'https://nuxt-oreore-starter-kit.com',
    generate: true,
    gzip: true,
    exclude: ['/404'],
  },
}

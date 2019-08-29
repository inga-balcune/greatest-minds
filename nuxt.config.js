
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      // { src: `https://polyfill.io/v3/polyfill.min.js?features=es7%2CSet%2CRegExp.prototype.flags%2CPromise.prototype.finally%2CPromise%2CObject.values%2CObject.setPrototypeOf%2CObject.seal%2CObject.preventExtensions%2CObject.keys%2CObject.isSealed%2CObject.entries%2CArray.prototype.find%2Cdefault%2Ces2015%2Ces2016%2Ces2017%2Ces5%2Ces6%2CArray.from%2CArray.isArray%2CArray.of%2CArray.prototype.copyWithin%2CArray.prototype.entries%2CArray.prototype.every%2CArray.prototype.fill%2CArray.prototype.filter%2CArray.prototype.findIndex%2CArray.prototype.flat%2CArray.prototype.flatMap%2CArray.prototype.forEach%2CArray.prototype.includes%2CArray.prototype.indexOf%2CArray.prototype.keys%2CArray.prototype.lastIndexOf%2CArray.prototype.map%2CArray.prototype.reduce%2CArray.prototype.reduceRight%2CArray.prototype.some%2CArray.prototype.values`, body: true },
      // { src: `https://polyfill.io/v3/polyfill.min.js?features=Object.entries%2CArray.from%2CArray.prototype.find%2CObject.defineProperty`, body: true }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap', format: 'embedded-opentype' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [
  '@/assets/sass/main.scss'
 ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  '~plugins/core-components.js',
  { src: '~/plugins/vue-material' },
 ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      'assets/sass/abstracts/_functions.scss',
      'assets/sass/abstracts/_mixins.scss',
      'assets/sass/abstracts/_variables.scss' // use underscore "_" & also file extension ".scss"
      ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend (config, ctx) {
    }
  }
}

 module.exports = {
   publicPath: process.env.NODE_ENV === 'production' ?
     '/aicad/' :
     './',

   pluginOptions: {
     i18n: {
       locale: 'es',
       fallbackLocale: 'es',
       localeDir: 'locales',
       enableInSFC: false
     }
   },

   chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
  }
 }
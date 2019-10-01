const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist/aicad'),
    outputDir: path.join(__dirname, 'dist/'),
    indexPath: path.join(__dirname, 'dist/aicad', '/index.html'),
    routes: [
       '/aicad/practicas/'
      ,'/aicad/practicas/tres-pasos/'
      ,'/aicad/practicas/buscas-trabajo/'
      ,'/aicad/practicas/contratar-becarios/'
      ,'/aicad/practicas/empresas-vip/'
      ,'/aicad/practicas/empresas-erasmus/'
      ,'/aicad/practicas/agencia-practicas/'
      ,'/aicad/practicas/paises-practicas/'
      ,'/aicad/practicas/universidades-colaboradoras/'
      ,'/aicad/practicas/contratar-becarios-extranjeros/'
      ,'/aicad/practicas/contratar-becarios-aicad/'
      ,'/aicad/practicas/faq-alumnos/'
      ,'/aicad/practicas/faq-empresas/'
      ,'/aicad/practicas/contratar-seguro/'
      ,'/aicad/practicas/agencias-work-and-travel/'
      ,'/aicad/practicas/internacionales-universidad-y-agencias/'
      ,'/aicad/practicas/universidades-career-centre/'
      ,'/aicad/internships/'
      ,'/aicad/internships/three-steps/'
      ,'/aicad/internships/job-search/'
      ,'/aicad/internships/host-interns/'
      ,'/aicad/internships/companies-vip/'
      ,'/aicad/internships/companies-erasmus/'
      ,'/aicad/internships/internship-agency/'
      ,'/aicad/internships/internship-countries/'
      ,'/aicad/internships/partner-universities/'
      ,'/aicad/internships/host-foreign-interns/'
      ,'/aicad/internships/host-interns-aicad/'
      ,'/aicad/internships/faq-students/'
      ,'/aicad/internships/faq-companies/'
      ,'/aicad/internships/employment-insurance/'
      ,'/aicad/internships/companies-work-and-travel/'
      ,'/aicad/internships/internationals-universities-and-agencies/'
      ,'/aicad/internships/universities-career-centre/'
  ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      //renderAfterElementExists: "meta[name='description']",
      inject: {
        isPrerender: true
      },
      headless: false
    }),
  }),
];

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/aicad/' : './',
  publicPath: '/aicad/',
  outputDir: path.join(__dirname, 'dist/aicad/'),
  lintOnSave: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  },

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

};
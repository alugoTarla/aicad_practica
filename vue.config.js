const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist/aicad-practica'),
    outputDir: path.join(__dirname, 'dist/'),
    indexPath: path.join(__dirname, 'dist/aicad-practica', '/index.html'),
    routes: [
       '/aicad-practica/es/'
      ,'/aicad-practica/es/tres-pasos/'
      ,'/aicad-practica/es/buscas-trabajo/'
      ,'/aicad-practica/es/contratar-becarios/'
      ,'/aicad-practica/es/practicas-empresas-vip/'
      ,'/aicad-practica/es/practicas-empresas-erasmus/'
      ,'/aicad-practica/es/agencia-practicas/'
      ,'/aicad-practica/es/paises-practicas/'
      ,'/aicad-practica/es/universidades-colaboradoras/'
      ,'/aicad-practica/es/contratar-becarios-extranjeros/'
      ,'/aicad-practica/es/contratar-becarios-aicad/'
      ,'/aicad-practica/es/faq-alumnos/'
      ,'/aicad-practica/es/faq-empresas/'
      ,'/aicad-practica/es/contratar-seguro/'
      ,'/aicad-practica/es/agencias-work-and-travel/'
      ,'/aicad-practica/es/internacionales-universidad-y-agencias/'
      ,'/aicad-practica/es/universidades-career-centre/'
      ,'/aicad-practica/en/'
      ,'/aicad-practica/en/three-steps/'
      ,'/aicad-practica/en/job-search/'
      ,'/aicad-practica/en/host-interns/'
      ,'/aicad-practica/en/internships-companies-vip/'
      ,'/aicad-practica/en/internships-companies-erasmus/'
      ,'/aicad-practica/en/internship-agency/'
      ,'/aicad-practica/en/internship-countries/'
      ,'/aicad-practica/en/partner-universities/'
      ,'/aicad-practica/en/host-foreign-interns/'
      ,'/aicad-practica/en/host-interns-aicad/'
      ,'/aicad-practica/en/faq-students/'
      ,'/aicad-practica/en/faq-companies/'
      ,'/aicad-practica/en/employment-insurance/'
      ,'/aicad-practica/en/companies-work-and-travel/'
      ,'/aicad-practica/en/internationals-universities-and-agencies/'
      ,'/aicad-practica/en/universities-career-centre/'
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
  publicPath: '/aicad-practica/',
  outputDir: path.join(__dirname, 'dist/aicad-practica/'),
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
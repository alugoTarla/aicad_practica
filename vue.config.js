const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    outputDir: path.join(__dirname, 'dist/aicad-practica'),
    indexPath: path.join(__dirname, 'dist', '/aicad-practica/index.html'),
    routes: ['/'
      ,'/es/'
      ,'/tres-pasos'
      ,'/buscas-trabajo'
      ,'/contratar-becarios'
      ,'/practicas-empresas-vip'
      ,'/practicas-empresas-erasmus'
      ,'/agencia-practicas'
      ,'/paises-practicas'
      ,'/universidades-colaboradoras'
      ,'/contratar-becarios-extranjeros'
      ,'/contratar-becarios-aicad'
      ,'/faq-alumnos'
      ,'/faq-empresas'
      ,'/contratar-seguro'
      ,'/agencias-work-and-travel'
      ,'/internacionales-universidad-y-agencias'
      ,'/universidades-career-centre'
      ,'/en/'
      ,'/three-steps'
      ,'/job-search'
      ,'/host-interns'
      ,'/internships-companies-vip'
      ,'/internships-companies-erasmus'
      ,'/internship-agency'
      ,'/internship-countries'
      ,'/partner-universities'
      ,'/host-foreign-interns'
      ,'/host-interns-aicad'
      ,'/faq-students'
      ,'/faq-companies'
      ,'/employment-insurance'
      ,'/companies-work-and-travel'
      ,'/internationals-universities-and-agencies'
      ,'/universities-career-centre'
  ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: "meta[name='description']",
      inject: {
        isPrerender: true
      },
      headless: false
    }),
  }),
];

module.exports = {
  publicPath: '/aicad-practica',
  outputDir: path.join(__dirname, 'dist/aicad-practica'),
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
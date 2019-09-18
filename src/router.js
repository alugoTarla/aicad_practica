import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

import Page_pe1_es from  '@/views/practica/es/Page1.vue';
import Page_pe2_es from  '@/views/practica/es/Page2.vue';
import Page_pe3_es from  '@/views/practica/es/Page3.vue';
import Page_pe4_es from  '@/views/practica/es/Page4.vue';
import Page_pe5_es from  '@/views/practica/es/Page5.vue';
import Page_pe6_es from  '@/views/practica/es/Page6.vue';
import Page_pe7_es from  '@/views/practica/es/Page7.vue';
import Page_pe8_es from  '@/views/practica/es/Page8.vue';
import Page_pe9_es from  '@/views/practica/es/Page9.vue';
import Page_pe10_es from '@/views/practica/es/Page10.vue';
import Page_pe11_es from '@/views/practica/es/Page11.vue';
import Page_pe12_es from '@/views/practica/es/Page12.vue';
import Page_pe13_es from '@/views/practica/es/Page13.vue';
import Page_pe14_es from '@/views/practica/es/Page14.vue';
import Page_pe16_es from '@/views/practica/es/Page16.vue';
import Page_pe17_es from '@/views/practica/es/Page17.vue';
import Page_pe18_es from '@/views/practica/es/Page18.vue';

import Page_pe1_en from  '@/views/practica/en/Page1.vue';
import Page_pe2_en from  '@/views/practica/en/Page2.vue';
import Page_pe3_en from  '@/views/practica/en/Page3.vue';
import Page_pe4_en from  '@/views/practica/en/Page4.vue';
import Page_pe5_en from  '@/views/practica/en/Page5.vue';
import Page_pe6_en from  '@/views/practica/en/Page6.vue';
import Page_pe7_en from  '@/views/practica/en/Page7.vue';
import Page_pe8_en from  '@/views/practica/en/Page8.vue';
import Page_pe9_en from  '@/views/practica/en/Page9.vue';
import Page_pe10_en from '@/views/practica/en/Page10.vue';
import Page_pe11_en from '@/views/practica/en/Page11.vue';
import Page_pe12_en from '@/views/practica/en/Page12.vue';
import Page_pe13_en from '@/views/practica/en/Page13.vue';
import Page_pe14_en from '@/views/practica/en/Page14.vue';
import Page_pe16_en from '@/views/practica/en/Page16.vue';
import Page_pe17_en from '@/views/practica/en/Page17.vue';
import Page_pe18_en from '@/views/practica/en/Page18.vue';

// import Page_pe15 from './views/practica/Page15.vue'
// import DetallePractica from './views/practica/DetallePractica.vue'

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  // hash: false,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/practica',
      name: 'page_pe1_es',
      component: Page_pe1_es,
    },
    {
      path: '/internship',
      name: 'page_pe1_en',
      component: Page_pe1_en,
    },
    {
      path: '/practica/tres-pasos',
      name: 'page_pe2_es',
      component: Page_pe2_es,
    },
    {
      path: '/internship/three-steps',
      name: 'page_pe2_en',
      component: Page_pe2_en,
    },
    {
      path: '/practica/buscas-trabajo',
      name: 'page_pe3_es',
      component: Page_pe3_es,
    },
    {
      path: '/internship/job-search',
      name: 'page_pe3_en',
      component: Page_pe3_en,
    },
    {
      path: '/practica/contratar-becarios',
      name: 'page_pe4_es',
      component: Page_pe4_es,
    },
    {
      path: '/internship/host-interns',
      name: 'page_pe4_en',
      component: Page_pe4_en,
    },
    {
      path: '/practica/practicas-empresas-vip',
      name: 'page_pe5_es',
      component: Page_pe5_es,
    },
    {
      path: '/internship/internships-companies-vip',
      name: 'page_pe5_en',
      component: Page_pe5_en,
    },
    {
      path: '/practica/practicas-empresas-erasmus',
      name: 'page_pe6_es',
      component: Page_pe6_es,
    },
    {
      path: '/internship/internships-companies-erasmus',
      name: 'page_pe6_en',
      component: Page_pe6_en,
    },
    {
      path: '/practica/agencia-practicas',
      name: 'page_pe7_es',
      component: Page_pe7_es,
    },
    {
      path: '/internship/internship-agency',
      name: 'page_pe7_en',
      component: Page_pe7_en,
    },
    {
      path: '/practica/paises-practicas',
      name: 'page_pe8_es',
      component: Page_pe8_es,
    },
    {
      path: '/internship/internship-countries',
      name: 'page_pe8_en',
      component: Page_pe8_en,
    },
    {
      path: '/practica/universidades-colaboradoras',
      name: 'page_pe9_es',
      component: Page_pe9_es,
    },
    {
      path: '/internship/partner-universities',
      name: 'page_pe9_en',
      component: Page_pe9_en,
    },
    {
      path: '/practica/contratar-becarios-extranjeros',
      name: 'page_pe10_es',
      component: Page_pe10_es,
    },
    {
      path: '/internship/host-foreign-interns',
      name: 'page_pe10_en',
      component: Page_pe10_en,
    },
    {
      path: '/practica/contratar-becarios-aicad',
      name: 'page_pe11_es',
      component: Page_pe11_es,
    },
    {
      path: '/internship/host-interns-aicad',
      name: 'page_pe11_en',
      component: Page_pe11_en,
    },
    {
      path: '/practica/faq-alumnos',
      name: 'page_pe12_es',
      component: Page_pe12_es,
    },
    {
      path: '/internship/faq-students',
      name: 'page_pe12_en',
      component: Page_pe12_en,
    },
    {
      path: '/practica/faq-empresas',
      name: 'page_pe13_es',
      component: Page_pe13_es,
    },
    {
      path: '/internship/faq-companies',
      name: 'page_pe13_en',
      component: Page_pe13_en,
    },
    {
      path: '/practica/contratar-seguro',
      name: 'page_pe14_es',
      component: Page_pe14_es,
    },
    {
      path: '/internship/employment-insurance',
      name: 'page_pe14_en',
      component: Page_pe14_en,
    },
    {
      path: '/practica/agencias-work-and-travel',
      name: 'page_pe16_es',
      component: Page_pe16_es,
      props: true,
    },
    {
      path: '/internship/companies-work-and-travel',
      name: 'page_pe16_en',
      component: Page_pe16_en,
      props: true,
    },
    {
      path: '/practica/internacionales-universidad-y-agencias',
      name: 'page_pe17_es',
      component: Page_pe17_es,
      props: true,
    },
    {
      path: '/internship/internationals-universities-and-agencies',
      name: 'page_pe17_en',
      component: Page_pe17_en,
      props: true,
    },
    {
      path: '/practica/universidades-career-centre',
      name: 'page_pe18_es',
      component: Page_pe18_es,
      props: true,
    },
    {
      path: '/internship/universities-career-centre',
      name: 'page_pe18_en',
      component: Page_pe18_en,
      props: true,
    }
    // {
    //   path: '/practica/Page15',
    //   name: 'page_pe15',
    //   component: Page_pe15,
    //   props: true,
    // },
    // {
    //   path: '/practica/DetallePractica/:idpractica',
    //   name: 'detallePractica',
    //   component: DetallePractica,
    //   props: true,
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },

});

router.beforeEach((to, from, next) => {

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  }).forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
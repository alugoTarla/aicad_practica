import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',  
  base: '/aicad',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('./views/Home.vue')
    },
    {
      path: '/practicas',
      name: 'page_pe1_es',
      component: () => import ('./views/practica/es/Page1.vue')
    },
    {
      path: '/practicas/tres-pasos',
      name: 'page_pe2_es',
      component: () => import ('./views/practica/es/Page2.vue')
    },
    {
      path: '/practicas/buscas-trabajo',
      name: 'page_pe3_es',
      component: () => import ('./views/practica/es/Page3.vue')
    },
    {
      path: '/practicas/contratar-becarios',
      name: 'page_pe4_es',
      component: () => import ('./views/practica/es/Page4.vue')
    },
    {
      path: '/practicas/empresas-vip',
      name: 'page_pe5_es',
      component: () => import ('./views/practica/es/Page5.vue')
    },
    {
      path: '/practicas/empresas-erasmus',
      name: 'page_pe6_es',
      component: () => import ('./views/practica/es/Page6.vue')
    },
    {
      path: '/practicas/agencia-practicas',
      name: 'page_pe7_es',
      component: () => import ('./views/practica/es/Page7.vue')
    },
    {
      path: '/practicas/paises-practicas',
      name: 'page_pe8_es',
      component: () => import ('./views/practica/es/Page8.vue')
    },
    {
      path: '/practicas/universidades-colaboradoras',
      name: 'page_pe9_es',
      component: () => import ('./views/practica/es/Page9.vue')
    },
    {
      path: '/practicas/contratar-becarios-extranjeros',
      name: 'page_pe10_es',
      component: () => import ('./views/practica/es/Page10.vue')
    },
    {
      path: '/practicas/contratar-becarios-aicad',
      name: 'page_pe11_es',
      component: () => import ('./views/practica/es/Page11.vue')
    },
    {
      path: '/practicas/faq-alumnos',
      name: 'page_pe12_es',
      component: () => import ('./views/practica/es/Page12.vue')
    },
    {
      path: '/practicas/faq-empresas',
      name: 'page_pe13_es',
      component: () => import ('./views/practica/es/Page13.vue')
    },
    {
      path: '/practicas/contratar-seguro',
      name: 'page_pe14_es',
      component: () => import ('./views/practica/es/Page14.vue')
    },
    {
      path: '/practicas/agencias-work-and-travel',
      name: 'page_pe16_es',
      component: () => import ('./views/practica/es/Page16.vue')
    },
    {
      path: '/practicas/internacionales-universidad-y-agencias',
      name: 'page_pe17_es',
      component: () => import ('./views/practica/es/Page17.vue')
    },
    {
      path: '/practicas/universidades-career-centre',
      name: 'page_pe18_es',
      component: () => import ('./views/practica/es/Page18.vue')
    },
    {
      path: '/internships',
      name: 'page_pe1_en',
      component: () => import ('./views/practica/en/Page1.vue')
    },    
    {
      path: '/internships/three-steps',
      name: 'page_pe2_en',
      component: () => import ('./views/practica/en/Page2.vue')
    },
    {
      path: '/internships/job-search',
      name: 'page_pe3_en',
      component: () => import ('./views/practica/en/Page3.vue')
    },
    {
      path: '/internships/host-interns',
      name: 'page_pe4_en',
      component: () => import ('./views/practica/en/Page4.vue')
    },
    {
      path: '/internships/companies-vip',
      name: 'page_pe5_en',
      component: () => import ('./views/practica/en/Page5.vue')
    },
    {
      path: '/internships/companies-erasmus',
      name: 'page_pe6_en',
      component: () => import ('./views/practica/en/Page6.vue')
    },
    {
      path: '/internships/internship-agency',
      name: 'page_pe7_en',
      component: () => import ('./views/practica/en/Page7.vue')
    },
    {
      path: '/internships/internship-countries',
      name: 'page_pe8_en',
      component: () => import ('./views/practica/en/Page8.vue')
    },
    {
      path: '/internships/partner-universities',
      name: 'page_pe9_en',
      component: () => import ('./views/practica/en/Page9.vue')
    },
    {
      path: '/internships/host-foreign-interns',
      name: 'page_pe10_en',
      component: () => import ('./views/practica/en/Page10.vue')
    },
    {
      path: '/internships/host-interns-aicad',
      name: 'page_pe11_en',
      component: () => import ('./views/practica/en/Page11.vue')
    },
    {
      path: '/internships/faq-students',
      name: 'page_pe12_en',
      component: () => import ('./views/practica/en/Page12.vue')
    },
    {
      path: '/internships/faq-companies',
      name: 'page_pe13_en',
      component: () => import ('./views/practica/en/Page13.vue')
    },
    {
      path: '/internships/employment-insurance',
      name: 'page_pe14_en',
      component: () => import ('./views/practica/en/Page14.vue')
    },
    {
      path: '/internships/companies-work-and-travel',
      name: 'page_pe16_en',
      component: () => import ('./views/practica/en/Page16.vue')
    },
    {
      path: '/internships/internationals-universities-and-agencies',
      name: 'page_pe17_en',
      component: () => import ('./views/practica/en/Page17.vue')
    },
    {
      path: '/internships/universities-career-centre',
      name: 'page_pe18_en',
      component: () => import ('./views/practica/en/Page18.vue')
    }
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
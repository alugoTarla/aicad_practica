import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
console.log(__dirname);
const router = new Router({
  mode: 'history',  
  // base: '/practicas/',
  base: '/internships/',
  routes: [
    {
      path: '/',
      name: 'page_pe1_es',
      component: () => import ('./views/practica/es/Page1.vue')
    },
    // {
    //   path: '/',
    //   name: 'page_pe1_en',
    //   component: () => import ('./views/practica/en/Page1.vue')
    // },
    {
      path: '/practicas',
      name: 'page_pe1_es',
      component: () => import ('./views/practica/es/Page1.vue')
    },
    {
      path: '/tres-pasos',
      name: 'page_pe2_es',
      component: () => import ('./views/practica/es/Page2.vue')
    },
    {
      path: '/buscas-trabajo',
      name: 'page_pe3_es',
      component: () => import ('./views/practica/es/Page3.vue')
    },
    {
      path: '/contratar-becarios',
      name: 'page_pe4_es',
      component: () => import ('./views/practica/es/Page4.vue')
    },
    {
      path: '/empresas-vip',
      name: 'page_pe5_es',
      component: () => import ('./views/practica/es/Page5.vue')
    },
    {
      path: '/empresas-erasmus',
      name: 'page_pe6_es',
      component: () => import ('./views/practica/es/Page6.vue')
    },
    {
      path: '/agencia-practicas',
      name: 'page_pe7_es',
      component: () => import ('./views/practica/es/Page7.vue')
    },
    {
      path: '/paises-practicas',
      name: 'page_pe8_es',
      component: () => import ('./views/practica/es/Page8.vue')
    },
    {
      path: '/universidades-colaboradoras',
      name: 'page_pe9_es',
      component: () => import ('./views/practica/es/Page9.vue')
    },
    {
      path: '/contratar-becarios-extranjeros',
      name: 'page_pe10_es',
      component: () => import ('./views/practica/es/Page10.vue')
    },
    {
      path: '/contratar-becarios-aicad',
      name: 'page_pe11_es',
      component: () => import ('./views/practica/es/Page11.vue')
    },
    {
      path: '/faq-alumnos',
      name: 'page_pe12_es',
      component: () => import ('./views/practica/es/Page12.vue')
    },
    {
      path: '/faq-empresas',
      name: 'page_pe13_es',
      component: () => import ('./views/practica/es/Page13.vue')
    },
    {
      path: '/contratar-seguro',
      name: 'page_pe14_es',
      component: () => import ('./views/practica/es/Page14.vue')
    },
    {
      path: '/agencias-work-and-travel',
      name: 'page_pe16_es',
      component: () => import ('./views/practica/es/Page16.vue')
    },
    {
      path: '/internacionales-universidad-y-agencias',
      name: 'page_pe17_es',
      component: () => import ('./views/practica/es/Page17.vue')
    },
    {
      path: '/universidades-career-centre',
      name: 'page_pe18_es',
      component: () => import ('./views/practica/es/Page18.vue')
    },
    {
      path: '/internships/',
      name: 'page_pe1_en',
      component: () => import ('./views/practica/en/Page1.vue')
    },    
    {
      path: '/three-steps',
      name: 'page_pe2_en',
      component: () => import ('./views/practica/en/Page2.vue')
    },
    {
      path: '/job-search',
      name: 'page_pe3_en',
      component: () => import ('./views/practica/en/Page3.vue')
    },
    {
      path: '/host-interns',
      name: 'page_pe4_en',
      component: () => import ('./views/practica/en/Page4.vue')
    },
    {
      path: '/companies-vip',
      name: 'page_pe5_en',
      component: () => import ('./views/practica/en/Page5.vue')
    },
    {
      path: '/companies-erasmus',
      name: 'page_pe6_en',
      component: () => import ('./views/practica/en/Page6.vue')
    },
    {
      path: '/internship-agency',
      name: 'page_pe7_en',
      component: () => import ('./views/practica/en/Page7.vue')
    },
    {
      path: '/internship-countries',
      name: 'page_pe8_en',
      component: () => import ('./views/practica/en/Page8.vue')
    },
    {
      path: '/partner-universities',
      name: 'page_pe9_en',
      component: () => import ('./views/practica/en/Page9.vue')
    },
    {
      path: '/host-foreign-interns',
      name: 'page_pe10_en',
      component: () => import ('./views/practica/en/Page10.vue')
    },
    {
      path: '/host-interns-aicad',
      name: 'page_pe11_en',
      component: () => import ('./views/practica/en/Page11.vue')
    },
    {
      path: '/faq-students',
      name: 'page_pe12_en',
      component: () => import ('./views/practica/en/Page12.vue')
    },
    {
      path: '/faq-companies',
      name: 'page_pe13_en',
      component: () => import ('./views/practica/en/Page13.vue')
    },
    {
      path: '/employment-insurance',
      name: 'page_pe14_en',
      component: () => import ('./views/practica/en/Page14.vue')
    },
    {
      path: '/companies-work-and-travel',
      name: 'page_pe16_en',
      component: () => import ('./views/practica/en/Page16.vue')
    },
    {
      path: '/internationals-universities-and-agencies',
      name: 'page_pe17_en',
      component: () => import ('./views/practica/en/Page17.vue')
    },
    {
      path: '/universities-career-centre',
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
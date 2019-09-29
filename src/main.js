import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab);
library.add(fas);
library.add(far);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import VueSilentbox from "vue-silentbox";
Vue.use(VueSilentbox);

var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';  
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,authorization';  

Vue.use(VueAxios, axios);
//

// Bootstrap Vue
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//

// VueI18n
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
// 
import i18n from './i18n';
//

// Smooth Scroll
import vueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(vueSmoothScroll);
//

// Carousel
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
//

// Vue-Charts
import VueCharts from 'vue-chartjs';
Vue.use(VueCharts);
//

// Vue-Head
import VueHead from 'vue-head';
Vue.use(VueHead);
//

// Vue-Paginate
import VuePaginate from 'vue-paginate';
Vue.use(VuePaginate);
//

// Vue-Responsive
import responsive from 'vue-responsive';
Vue.use(responsive);
//

// Vue-Youtube
import VueYoutube from 'vue-youtube';
Vue.use(VueYoutube);
//

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
});

app.$mount('#app');
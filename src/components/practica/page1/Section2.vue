<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container >
          <br />
        <b-row align-h="center">
          <b-col lg="4" md="6" sm="12"
            v-for="(item ,idx) of s2items" :key="idx" >
            <b-card class="p1card cardd" footer-tag="footer" no-body>
              <b-card-header class="text-center p1cardContentH" >
                <h3>
                  {{item.s2title}}
                </h3>
              </b-card-header>
              <b-card-body class="text-center p1cardContentB">
                <div>
                  <p>{{item.s2text}}</p>
                </div>
              </b-card-body>
              <b-card-footer class="text-center p1cardContentF">
                <div id="section2Div">
                  <transition name="bounce">
                    <div v-if="show" style="text-align: center; height: 100px;">
                      <a @click="menuClicked(item.s2url)" class="btn buttonTurqueza">
                        {{item.s2button1}}
                        <br />
                      </a>
                    </div>
                  </transition>
                </div>
                <div class="buttonfix">
                  <strong>{{item.s2button2}}</strong>
                </div>
              </b-card-footer>              
            </b-card>
            <br>
          </b-col>
        </b-row>
        <br>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "s2items": [
      {
        "s2title": "Internship Interview",
        "s2text":
          "You are only 3 steps away from finding internships in companies and getting a company, a start-up or a hotel to become a learning center where you will use your university training, improve your languages and live a 360-degree experience.",
        "s2button1": "Learn in detail",
        "s2button2": "the 3 steps of the process",
        "s2url": "page_pe2"
      },
      {
        "s2title": "Hundreds of internship offers in companies",
        "s2text":
          "At your disposal you will have hundreds of internship offers in companies in countries such as Spain, France, Mexico or Germany in companies and hotels. All the internship offers in companies that you will see here have been published by our consultants and take place in trusted organizations.",
        "s2button1": "Check the internship",
        "s2button2": "offers in available companies",
        "s2url": "page_pe3"
      },
      {
        "s2title": "Transparent information",
        "s2text":
          "We put at your disposal all the important information about the stages of the process, rates and, in short, the details of how we can help you find practices in companies in safe conditions and with the support of respectable companies.",
        "s2button1": "Find out about",
        "s2button2": "our services and rates",
        "s2url": "page_pe4"
      }
    ]
  },
  "es":{
    "s2items": [
      {
        "s2title": "Entrevista de prácticas",
        "s2text":
          "Estás a tan sólo 3 pasos de encontrar prácticas en empresas y conseguir que una empresa, una start-up o un hotel se convierta en un centro de aprendizaje donde harás uso de tu formación universitaria, mejorarás tus idiomas y vivirás una experiencia de 360 grados.",
        "s2button1": "Conoce",
        "s2button2": "Los 3 pasos del proceso",
        "s2url": "page_pe2"
      },
      {
        "s2title": "Cientos de ofertas de prácticas en empresas",
        "s2text":
          "Tienes a tu alcance cientos de ofertas de prácticas en empresas en países como España, Francia, México o Alemania en empresas y hoteles: Todas las ofertas de prácticas en empresas que verás aquí han sido publicadas por nuestros consultores y tiene lugar en organizaciones de confianza.",
        "s2button1": "Consulta",
        "s2button2": "Ofertas de prácticas en empresas disponibles",
        "s2url": "page_pe3"
      },
      {
        "s2title": "Información transparente",
        "s2text":
          "Ponemos a tu disposición toda la información importante sobre las etapas del proceso, tarifas y, en definitiva, los detalles de cómo podemos ayudarte a encontrar prácticas en empresas en condiciones seguras y con el respaldo de empresas respetables.",
        "s2button1": "Infórmate",
        "s2button2": "Nuestros servicios y tarifas",
        "s2url": "page_pe4"
      }
    ]
  }
}
</i18n>

<script>
function elementInViewports2(el) {
  var top = el.offsetTop;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
  }

  return (
    top >= window.pageYOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight)
  );
}
export default {
  data() {
    return {
      show: false
    }
  },
  created() {
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    menuClicked(itemName) {
      itemName += '_'+this.$i18n.locale;
      if (itemName.includes("page_pe")) this.$router.push({ name: itemName });
    },
    handleScroll() {
      const el = document.getElementById("section2Div");
      if(elementInViewports2(el)) {
        this.show = true;
      }
    }
  },
  computed: {
    s2items() {
      return this.$t("s2items");
    }
  }
};
</script>

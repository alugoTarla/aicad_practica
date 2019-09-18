<template>
  <div id="section6">
    <div class="fondoTurquesa" >
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            {{$t("p1s6title1")}}
            <strong>{{$t("p1s6title2")}}</strong>
            {{$t("p1s6title3")}}
          </h2>
          <br />
          <div style="padding: 1rem;">
            <transition name="bounce">
              <div v-if="show">
                <b-row>
                  <b-col
                    md="3"
                    sm="12"
                    class="text-center"
                    v-for="(item ,idx) of p1s6items"
                    :key="idx"
                  >
                    <font-awesome-icon :icon="item.p1s6icon" class="socialIcon8" />
                    <p class="text50gris">{{item.p1s6numero}}</p>
                    <p class="text20gris">{{item.p1s6descrip}}</p>
                  </b-col>
                </b-row>
              </div>
            </transition>
          </div>

          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p1s6title1": "Our",
    "p1s6title2": "figures and global key data",
    "p1s6title3": "of internships in companies",
    "p1s6items": [
      {
        "p1s6icon": ["fas", "thumbs-up"],
        "p1s6numero": "+ 8500",
        "p1s6descrip": "Internships in companies around the world"
      },
      {
        "p1s6icon": ["fas", "globe"],
        "p1s6numero": "+ 2500",
        "p1s6descrip": "Companies have accepted internship agreements"
      },
      {
        "p1s6icon": ["fas", "pencil-alt"],
        "p1s6numero": "+ 80000",
        "p1s6descrip": "Students from different careers and countries follow us on Facebook"
      },
      {
        "p1s6icon": ["fas", "graduation-cap"],
        "p1s6numero": "+ 350",
        "p1s6descrip": "Agreements between AICAD and international universities"
      }
    ]
  },
  "es":{
    "p1s6title1": "Nuestras",
    "p1s6title2": "cifras y datos clave globales",
    "p1s6title3": "de prácticas en empresas",
    "p1s6items": [
      {
        "p1s6icon": ["fas", "thumbs-up"],
        "p1s6numero": "+ 8500",
        "p1s6descrip": "Prácticas en empresas realizadas al rededor del mundo"
      },
      {
        "p1s6icon": ["fas", "globe"],
        "p1s6numero": "+ 2500",
        "p1s6descrip": "Empresas se han acogido a convenios de prácticas"
      },
      {
        "p1s6icon": ["fas", "pencil-alt"],
        "p1s6numero": "+ 80000",
        "p1s6descrip": "Alumnos de diferentes carreras y países nos siguen en Facebook"
      },
      {
        "p1s6icon": ["fas", "graduation-cap"],
        "p1s6numero": "+ 350",
        "p1s6descrip": "Acuerdos entre AICAD y universidades internacionales"
      }
    ]
  }
}
</i18n>

<script>
function elementInViewports6(el) {
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
    handleScroll() {
      const el = document.getElementById("section6");
      if(elementInViewports6(el)) {
        this.show = true;
      }
    }
  },
  computed: {
    p1s6items() {
      return this.$t("p1s6items");
    }
  }
};
</script>

<style>
svg.socialIcon8 {
  font-size: 50px !important;
}
</style>

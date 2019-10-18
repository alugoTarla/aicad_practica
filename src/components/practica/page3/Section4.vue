<template>
  <div id="section4">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <b-row align-h="center">
            <b-col lg="4" md="6" sm="12" class="text-center" v-for="(item, idx) in p3items" :key="idx">
              <b-card :img-src="p3itemsI[idx].p3img" class="p3card cardd1" footer-tag="footer">
                <div class="picon">
                  <font-awesome-icon :icon="['fas','user-circle']"  
                  style="background-color: silver; border-radius: 60px; border: 0.1rem; border-style: solid;" />
                </div>
                <b-card-title class="p3cardtitle">{{item.p3title}}</b-card-title>
                <b-card-body class="p3cardbody">{{item.p3descript}}</b-card-body>
                <b-card-footer class="p3cardfooter" slot="footer">
                  <a :href="item.p3url">
                    {{item.p3link}}
                  </a>
                </b-card-footer>
              </b-card>
            </b-col>
          </b-row>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p3items": [
      {
        "p3url": "https://jobs.aicad.es",
        "p3link": "Send your CV and join us",
        "p3title": "HR and business consultant Junior",
        "p3descript":
          "The consultants create and maintain confiding relationship with partner companies that entrust us with the difficult task of finding potential interns from all over Europe. This position requires commercial and negotiation skills as well as a special human resources and people skills."
      },
      {
        "p3url": "https://jobs.aicad.es",
        "p3link": "Send your CV and join us",
        "p3title": "Talent acquisition and communication",
        "p3descript":
          "The Talent is our selection team and is responsible for disseminating and publishing internship announcements in specialized portals and partner universities to then contact the candidates, present our service and advise them before starting the pre-selection and the most specialized interviews."
      },
      {
        "p3url": "https://jobs.aicad.es",
        "p3link": "Send your CV and join us",
        "p3title": "Digital marketing and social networks specialist",
        "p3descript":
          "In our office there is always room for those who are passionate about social networks, emailing campaigns and graphic design. All this with the aim of favoring our online presence and improving the way we communicate our services to both companies and students."
      }
    ]
  },
  "es":{
    "p3items": [
      {
        "p3url": "https://jobs.aicad.es",
        "p3link": "Envía tu CV y únete",
        "p3title": "HR and business consultant Junior",
        "p3descript":
          "Los consultores crean y mantienen una relación de confianza con las empresas que nos confían la difícil tarea de encontrar becarios de toda Europa que ocupen sus puestos de prácticas en empresas. Es una posición que requiere de habilidades comerciales y de negociación además de un gusto especial por las personas y los recursos humanos."
      },
      {
        "p3url": "https://jobs.aicad.es",
        "p3link": "Envía tu CV y únete",
        "p3title": "Talent acquisition and communication",
        "p3descript":
          "Los Talent son nuestro equipo de selección y se ocupan de difundir y publicar los anuncios de prácticas en empresas en portales especializados y universidades-partner para seguidamente contactar con los candidatos, presentarles nuestro servicio y asesorarles antes de comenzar la preselección y las entrevistas más especializadas."
      },
      {
        "p3url": "https://jobs.aicad.es",
        "p3link": "Envía tu CV y únete",
        "p3title": "Digital marketing and social networks specialist",
        "p3descript":
          "En nuestra oficina siempre hay espacio para los apasionados por las redes sociales, los contenidos optimizados, las campañas de emailing y el diseño gráfico: Todo ello con el objetivo de favorecer nuestra presencia online y mejorar la manera en que comunicamos nuestros servicios tanto para empresas como para estudiantes."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p3itemsI: [
        {
          p3img: require("@/assets/new_imgs/young-woman.png")
        },
        {
          p3img: require("@/assets/new_imgs/1787860.jpg")
        },
        {
          p3img: require("@/assets/new_imgs/business-intern-using-computer-MRC5FSL.jpg")
        }
      ]
    }
  },
  computed: {
    p3items() {
      return this.$t("p3items");
    }
  }
};
</script>

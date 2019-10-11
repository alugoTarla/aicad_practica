<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <h2>
            <span v-for="(item, idx) in p11s2title" :key="idx">
              <strong v-if="item.p11s2titleS"><br />{{item.p11s2titleP}}</strong>
              <span v-else><br />{{item.p11s2titleP}}</span>
            </span>
          </h2>
          <br />
          <b-row align-v="start">
            <b-col md="6" sm="12" class="text-center" v-for="(item ,idx) of p11s2items" :key="idx">
              <div class="d-flex align-items-center">
                <div class="p-1 text-center" style="width: 20%">
                  <b-img :src="p11s2itemsI[idx].p11s2icon" class="p8iconos"></b-img>
                </div>
                <div class="p-1 text-justify " style="width: 80%">
                  <h4><strong>{{item.p11s2title}}</strong></h4>
                </div>                      
              </div>
              <div class>
                <p class="p11s2p text-justify">{{item.p11s2descript}}</p>
              </div>
            </b-col>
          </b-row>
          <br />
          <div>
            <a class="btn buttonTurqueza" :href="p11s4url">
              {{$t("p11s4button")}}
              <strong>{{$t("p11s4buttonS")}}</strong>
            </a>
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
    "p11s2title": [ 
      {
        "p11s2titleP": "We are a recruitment agency specialized in hiring interns and fellow students",
        "p11s2titleS": true
      }
    ],
    "p11s4button": "Check the",
    "p11s4buttonS": "Internship offers in available companies",
      "p11s2items": [
      {
        "p11s2title": "We manage internships in companies since 2010",
        "p11s2descript":
          "Since 2010, at AICAD Business School we have sought to interpret all the wishes of students regarding their professional growth, we have fulfilled the requirements and demands of universities and we have endeavored to meet the interests of partner companies. Due to this, we have completed hundreds of successful selection processes for internships and have supported programs such as Erasmus + and student mobility models."
      },
      {
        "p11s2title":
          "We have a multinational and multicultural team",
        "p11s2descript":
          "At AICAD Business School we have all kinds of multidisciplinary professionals, such as those specialized in psychology, human resources, administrative management and international trade. Due to international selection, our team members come from countries such as France, Spain, Germany, Poland, United States, Italy, Venezuela and Colombia, so the dissemination of published offers and the pre-selection process of students is quite wide and diverse."
      },
      {
        "p11s2title":
          "We advise companies before they publish their offers",
        "p11s2descript":
          "It is important for us to collaborate with reliable and experienced companies, promoting the internship offers for which the main objective is the educational aspect. We consult with companies before starting searches, therefore, all the internship offers in companies that you will find in our portal and in job boards have been reviewed and validated by our team."
      },
      {
        "p11s2title":
          "We assist you before, during and after the search process of the intern",
        "p11s2descript":
          "Not only do we strive to help companies find the interns they are looking for, but we also seek to provide an effective and complete learning experience that can satisfy the student and the requirements of the university. Our team will accompany you throughout the whole process, from the creation and publication of the internship offer to the completion of the procedures of the agreement, including details such as coordinating the first day of the student in the company."
      },
      {
        "p11s2title":
          "We encourage Erasmus + programs and internships in international companies",
        "p11s2descript":
          "AICAD Business School advises companies, SMEs and institutions regarding aid exchanges, paperwork, documentation and administrative processes, in order to properly use European incentives for student mobility and professional internships of the universities."
      },
      {
        "p11s2title":
          "We are the link between students, universities and companies",
        "p11s2descript":
          "There are currently hundreds of companies that are advised by AICAD Business School, and at the same time, hundreds of students who have had the opportunity to undergo internships in companies due to our management in Spain, France, Italy, Japan, Germany and other destinations."
      }
    ]
  },
  "es":{
    "p11s2title": [ 
      {
        "p11s2titleP": "Somos una agencia de selección especializada en contratar becarios y estudiantes de prácticas en empresas",
        "p11s2titleS": true
      }
    ],
    "p11s4button": "Consulta las",
    "p11s4buttonS": "Ofertas de prácticas en empresas disponibles ",
      "p11s2items": [
      {
        "p11s2title": "Gestionamos prácticas en empresas desde 2010",
        "p11s2descript":
          "Desde 2010, en AICAD Business School hemos buscado interpretar todos los deseos de los estudiantes con respecto a su crecimiento profesional, hemos cumplido con los requisitos y exigencias de las universidades y nos hemos esforzado por satisfacer los intereses de las empresas aliadas. Gracias a ello, hemos conseguido centenares de procesos de selección exitosos de prácticas en empresas, a su vez apoyando programas como Erasmus + y modelos de movilidad estudiantil."
      },
      {
        "p11s2title":
          "Nuestro equipo está constituido por personal de varios países del mundo",
        "p11s2descript":
          "En AICAD Business School contamos con todo tipo de profesionales multidisciplinarios, como quellos especializados en psicología, recursos humanos, gestión administrativa y comercio internacional. Además, actualmente nuestro equipo goza de experiencia en selección y relaciones internacionales, y proviene de países como Francia, España, Alemania, Polonia, Estados Unidos, Italia, Venezuela y Colombia, por lo que la difusión de las ofertas publicadas y el proceso de preselección de estudiantes es bastante amplia y diversa"
      },
      {
        "p11s2title":
          "Asesoramos a las empresas antes de que publiquen sus ofertas",
        "p11s2descript":
          "Nos preocupamos por colaborar únicamente con empresas de confianza y de larga trayectoria, promoviendo ofertas de prácticas en empresas que tengan como objetivo el aspecto educativo. Nos asesoramos con las empresas antes de comenzar con las búsquedas, por ello, todas las ofertas de prácticas en empresas que encontrarás en nuestro portal y en bolsas de trabajo han sido revisadas y validadas por nuestro equipo."
      },
      {
        "p11s2title":
          "Asesoramos también antes, durante y después del proceso de búsqueda del estudiante de prácticas",
        "p11s2descript":
          "No solo buscamos ayudar a las empresas a encontrar al becario de prácticas en empresas que buscan, sino también procuramos brindar una experiencia de aprendizaje eficaz y completa, que pueda satisfacer al estudiante y los requerimientos de la universidad. Nuestro equipo te acompañará durante todo el proceso, desde la creación y publicación de la oferta de prácticas en empresas hasta la realización de los trámites del convenio, incluyendo detalles como coordinar el primer día del estudiante en la empresa."
      },
      {
        "p11s2title":
          "Incentivamos los programas Erasmus+ y las prácticas en empresas internacionales",
        "p11s2descript":
          "AICAD Business School asesora a empresas, pymes e instituciones en cuanto a bolsas de ayuda, trámites, documentación y procesos administrativos, con la finalidad de utilizar de forma apropiada los incentivos europeos a la movilidad estudiantil y prácticas profesionales universitarias."
      },
      {
        "p11s2title":
          "Somos el enlace entre estudiantes, universidades y empresas",
        "p11s2descript":
          "Actualmente existen cientos de empresas que son asesoradas por AICAD Business School, y al mismo tiempo, cientos los estudiantes que han tenido la oportunidad de hacer prácticas en empresas por medio de nuestra gestión en España, Francia, Italia, Japón, Alemania y otros destinos."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p11s4url: "https://jobs.aicad.es",
      p11s2itemsI: [
        {
          p11s2icon: require("@/assets/images/vectores/page10/coordinamos.png")
        },
        {
          p11s2icon: require("@/assets/images/vectores/page10/personal-diverso.png")
        },
        {
          p11s2icon: require("@/assets/images/vectores/page10/asesoramos.png")
        },
        {
          p11s2icon: require("@/assets/images/vectores/page10/aconsejamos.png")
        },
        {
          p11s2icon: require("@/assets/images/vectores/page10/promovemos.png")
        },
        {
          p11s2icon: require("@/assets/images/vectores/page10/puente.png")
        }
      ]
    };
  },
  computed: {
    p11s2title(){
      return this.$t("p11s2title");
    },
    p11s2items(){
      return this.$t("p11s2items");
    }
  }
};
</script>

<style>
.p11s2h1d {
  display: table-cell;
  vertical-align: middle;
  padding: 1rem 0.2em;
  text-align: left;
}

.p11s2h1 {
  font-size: 1.5em;
  font-weight: 600;
}
.p11s2p {
  font-size: 0.9em;
}

</style>

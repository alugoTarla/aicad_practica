<template>
  <div id="section4">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <h2>
            <span v-for="(item, idx) in p10s4title" :key="idx">
              <strong v-if="item.p10s4titleS">
                <br />
                {{item.p10s4titleP}}
              </strong>
              <span v-else>
                <br />
                {{item.p10s4titleP}}
              </span>
            </span>
          </h2>
          <br />
          <b-row align-v="start">
            <b-col md="6" sm="12" class="text-center" v-for="(item ,idx) of p10s4items" :key="idx">
              <div class="d-flex align-items-center">
                <div class="p-1 text-center" style="width: 20%">
                  <b-img :src="p10s4itemsI[idx].p10s4icon" class="p8iconos"></b-img>
                </div>
                <div class="p-1 text-justify " style="width: 80%">
                  <h4><strong>{{item.p10s4title}}</strong></h4>
                </div>                      
              </div>
              <div class>
                <p class="p10s4p text-justify">{{item.p10s4descript}}</p>
              </div>
            </b-col>
          </b-row>
          <br />
          <div>
            <a class="btn buttonTurqueza" :href="p10s4url">
              <strong>{{$t("p10s4buttonS")}}</strong>
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
    "p10s4title": [
      {
        "p10s4titleP": "Advice and specialized assistance on internship agreements and social security of the interns",
        "p10s4titleS": true
      }
    ],
    "p10s4buttonS": "Read more about ",
    "p10s4items": [
      {
        "p10s4title":
          "Permanent assistance with agreements and interns",
        "p10s4descript":
          "For a semi-annual fee, your company may have a personal advisor who answers questions and consults your company on procedures, regulations and documentation of internship agreements as well as social security admissions and bonuses for scholarship contributions."
      },
      {
        "p10s4title":
          "You can process an internship agreement and the essential documentation of the intern",
        "p10s4descript":
          "We will help you process the internship files in companies efficiently and in short order. Our experience in the area makes us the best ally for your company to carry out these activities and resolve any doubts and situations that arise."
      },
      {
        "p10s4title":
          "You can ask us about registration and social security contributions of interns",
        "p10s4descript":
          "Learn  when and how you should register your intern in Social Security with our help and do not let the complications of the regulations or the constant changes in the legal framework become a difficulty for your company. We facilitate the entire process."
      },
      {
        "p10s4title":
          "Social security bonuses for contributions from interns",
        "p10s4descript":
          "Request information on the bonus from the contributions made to social security by interns, as well as advice on when and how your company can opt for one."
      },
      {
        "p10s4title":
          "Process internship agreements in foreign companies",
        "p10s4descript":
          "Our multidisciplinary team of professionals from various parts of the world has a close relationship with the numerous universities and business schools in the world and a broad knowledge of academic systems, international regulations and legal precedents on internships abroad. Our daily work is to process internship agreements in foreign companies and our experience is the guarantee of the effectiveness of our work."
      },
      {
        "p10s4title":
          "About health and accident insurance for interns",
        "p10s4descript":
          "It is necessary to determine the coverage which can be applicable for the intern, making sure that they have insurance that complements them and allows them to do internships and protect ts them from an eventual incidence. Learn all about the coverage and insurance to obtain intern that would provide confidence and guarantee."
      }
    ]
  },
  "es":{
    "p10s4title": [
      {
        "p10s4titleP": "Asesoría y asistencia especializada sobre convenios de prácticas en empresas y seguridad social de becarios",
        "p10s4titleS": true
      }
    ],
    "p10s4buttonS": "Más información",
    "p10s4items": [
      {
        "p10s4title":
          "Asesoría permanente sobre convenios y estudiantes de prácticas en empresas",
        "p10s4descript":
          "Por una cuota semestral tu empresa podrá contar con un asesor personal que resuelva dudas y asesore a tu empresa en trámites, normativa y documentación de convenios de prácticas en empresas así como de altas y bonificaciones de la Seguridad Social por cotizaciones de becarios."
      },
      {
        "p10s4title":
          "Podrás tramitar un convenio de prácticas en empresas y la documentación esencial del becario",
        "p10s4descript":
          "Te ayudaremos a tramitar los expedientes de prácticas en empresas de forma eficaz e inmediata. Nuestra experiencia en el área nos convierte en el mejor aliado para tu empresa para realizar estas actividades y resolver cualquier situación que surja, además de todas las dudas que tengas."
      },
      {
        "p10s4title":
          "Podrás consultarnos sobre altas y cotizaciones en la seguridad social de becarios",
        "p10s4descript":
          "Asegúrate de cuándo y cómo deberías tener dado de alta en la Seguridad social al becario de tu práctica a través de nuestra asesoría y no dejes que la volatilidad de la normativa o los constantes cambios en el marco legal se conviertan en una dificultad para tu empresa. Te facilitamos todo el proceso."
      },
      {
        "p10s4title":
          "Bonificaciones de la seguridad social por cotizaciones de becarios en prácticas de empresas",
        "p10s4descript":
          "Solicita información sobre la bonificación a partir de las cotizaciones efectuadas a la seguridad social por estudiantes de prácticas en empresas y becarios, así como garantías, de cuándo y cómo puede tu empresa optar por una."
      },
      {
        "p10s4title":
          "Tramita convenios de prácticas en empresas de estudiantes extranjeros",
        "p10s4descript":
          "Nuestro equipo multidisciplinario de profesionales de varias partes del mundo tiene una cercana relación con las principales universidades y business school del mundo y un amplio conocimiento sobre los sistemas académicos, regulación internacional y precedentes legales sobre prácticas en empresas en el extranjero. Nuestra labor diaria es la de tramitar convenios de prácticas en empresas de estudiantes extranjeros y nuestra experiencia es la garantía de la eficacia de nuestro trabajo."
      },
      {
        "p10s4title":
          "Sobre los seguros de salud y accidentes para estudiantes de prácticas en empresas",
        "p10s4descript":
          "Es necesario determinar las coberturas con las que cuenta un becario de prácticas en empresas, además de asegurarse de tener un seguro que las complemente y le permita hacer prácticas en empresas en condiciones frente a una eventual incidencia. Conoce todo acerca de las coberturas y busca contratar un seguro para becarios que aporte confianza y garantía."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p10s4url: "https://jobs.aicad.es",
      p10s4itemsI: [
        {
          p10s4icon: require("@/assets/images/vectores/page10/asesoriapermanente.png")
        },
        {
          p10s4icon: require("@/assets/images/vectores/page10/tramitarconvenio.png")
        },
        {
          p10s4icon: require("@/assets/images/vectores/page10/consultacotizaciones.png")
        },
        {
          p10s4icon: require("@/assets/images/vectores/page10/bonificacionss.png")
        },
        {
          p10s4icon: require("@/assets/images/vectores/page10/tramitaextranjeros.png")
        },
        {
          p10s4icon: require("@/assets/images/vectores/page10/segurossalud.png")
        }
      ]
    };
  },
  computed: {
    p10s4title() {
      return this.$t("p10s4title");
    },
    p10s4items() {
      return this.$t("p10s4items");
    }
  }
};
</script>

<style>
.p10s4h1d {
  display: table-cell;
  vertical-align: middle;
  padding: 1rem 0.2em;
  text-align: left;
}

.p10s4h1 {
  font-size: 1.3em;
  font-weight: 700;
}
.p10s4p {
  font-size: 0.9em;
}
</style>

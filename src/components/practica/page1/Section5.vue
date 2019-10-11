<template>
  <div id="section5">
    <div class="fondoWhite">
      <b-container fluid>
          <b-container class="text-center">
            <br />
            <h2>
              {{$t("p1s5title1")}}
              <strong>{{$t("p1s5title2")}}</strong>
              {{$t("p1s5title3")}}
            </h2>
            <br />
            <b-row align-h="between" align-v="center">
              <b-col lg="4" md="12">
                <b-row align-v="center">
                  <b-col cols="12" class="text-center" v-for="(item ,idx) of p1s51items" :key="idx">
                    <div class="d-flex align-items-center">
                      <div class="p-1 text-center" style="width: 20%">
                        <b-img :src="p1s51itemsI[idx].p1s5icon" class="p1s5iconos"></b-img>
                      </div>
                      <div class="p-1 text-justify" style="width: 80%">
                        <h4><strong>{{item.p1s5title}}</strong></h4>
                      </div>                      
                    </div>
                    <div class>
                      <p class="p1s5p text-justify">{{item.p1s5descript}}</p>
                      <hr v-if="item.p1s5line" class="p1s5hr" />
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col lg="4" md="12">
                <img :src="p1s52url" />
              </b-col>
              <b-col lg="4" md="12">
                <b-row align-v="center">
                  <b-col cols="12" class="text-center" v-for="(item ,idx) of p1s53items" :key="idx">
                    <div class="d-flex align-items-center">
                      <div class="p-1 text-center" style="width: 20%">
                        <b-img :src="p1s53itemsI[idx].p1s5icon" class="p1s5iconos"></b-img>
                      </div>
                      <div class="p-1 text-justify" style="width: 80%">
                        <h4><strong>{{item.p1s5title}}</strong></h4>
                      </div>                      
                    </div>
                    <div class>
                      <p class="text-justify">{{item.p1s5descript}}</p>
                      <hr v-if="item.p1s5line" class="p1s5hr" />
                    </div>
                  </b-col>
                </b-row>
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
    "p1s5title1": "6 key",
    "p1s5title2": "hints",
    "p1s5title3": "that would make your CV stand out in the interview",
    "p1s51items": [
      {
        "p1s5title": "Concise, clear and brief personal description",
        "p1s5line": true,
        "p1s5line1": false,
        "p1s5descript":
          "A concise personal description, below your contact details gives employers a quick overview of your capabilities and ambitions. For in-company internships demonstrate what you do well. Example, if you know about digital marketing, put links to where your work can see. Remember, a reference is worth a thousand words."
      },
      {
        "p1s5title": "In an interview, sell what you know how to do well and pinpoint the functions you could develop",
        "p1s5line": true,
        "p1s5line1": false,
        "p1s5descript":
          "Be honest, work on your distress and skills. In the interview, show the knowledge and skills that you possess. If asked: “Why do you want to do internship in the company? What do you want to learn? What can you contribute?” Give a sincere response, demonstrate what you know with facts, ask for opportunities to prove them."
      },
      {
        "p1s5title": "Nowadays, whatever there is on internet about you is the key to get job opportunities.",
        "p1s5line": false,
        "p1s5line1": false,
        "p1s5descript":
          "Even if you don't like it, you should show your knowledge and skills in the Net. Take advantage and demonstrate works published on your LinkedIn profile, your blogs or networks that could be beneficial for presenting yourself."
      }
    ],
    "p1s53items": [
      {
        "p1s5title": "Each company is different. Adapt your CV for each interview and put heart into it",
        "p1s5line": true,
        "p1s5line1": true,
        "p1s5descript":
          "Adjust your dress for each situation. Offices require suits, beaches swimsuits. “Dress” your CV for the occasion. You should put your heart and soul into opening doors for internships. Companies always choose the one that shows commitment, maturity and know-how."
      },
      {
        "p1s5title": "Speaking languages improves employability, and opens doors for you in international settings",
        "p1s5line": true,
        "p1s5line1": true,
        "p1s5descript":
          "The best professional opportunities are for people who speak languages. Speaking several languages has always been a competitive advantage, both in the academic field and in the workplace. ... If you speak foreign languages do not hesitate to give them a priority space in your CV. If you don't know languages, you’d better learn some: your future will be thankful."
      },
      {
        "p1s5title": "Seek help from professionals. Let us advise you about your CV",
        "p1s5line": false,
        "p1s5line1": false,
        "p1s5descript":
          "After completing your CV, it is time to ask us for help. We show you a series of tricks to make your CV stand out. We would love to advise you beyond correcting misspellings or semantics errors. As career Coaches, we focus on your person to get the best version of yourself and help you get to the top of your professional success."
      }
    ]
  },
  "es":{
    "p1s5title1": "6 claves",
    "p1s5title2": "que funcionan",
    "p1s5title3": "para que tu CV destaque en la entrevista",
    "p1s51items": [
      {
        "p1s5title": "Descripción personal concisa, clara y breve",
        "p1s5line": true,
        "p1s5line1": false,
        "p1s5descript":
          "Una descripción personal concisa, debajo de tus datos de contacto ofrece a los empleadores una visión rápida de tus capacidades y ambiciones. Para las prácticas en empresas vende tu currículo social de lo que haces bien. Ejemplo, si sabes de marketing digital, pon enlaces a dónde pueden ver tus trabajos. Recuerda, una referencia vale más que mil palabras."
      },
      {
        "p1s5title": "En una entrevista vende lo que sabes hacer o las funciones que podrías desarrollar",
        "p1s5line": true,
        "p1s5line1": false,
        "p1s5descript":
          "Sé honesto, trabaja tus destresas y hablidades, estas siempren se desarrollan de lo que a uno le gusta hacer, en la entrevista muestra lo que sabes, si te preguntan: ¿Por qué te presentas a la oferta de prácticas en empresas, qué quieres aprender, qué puedes aportar?, te una respuesta sincera, demuestra con hechos lo que sabes y pide con humilidad que te la oportunidad de demostrarlo."
      },
      {
        "p1s5title": "Hoy por hoy lo que hay en internet de ti es clave para conseguir oportunidades laborales.",
        "p1s5line": false,
        "p1s5line1": false,
        "p1s5descript":
          "Proporciona pruebas contundentes de los logros. Recuerda que los empleadores están interesados en ver evidencias reales de tus habilidades, no sólo un cv lleno de adjetivos usados en exceso. Aunque no te guste, debes mostrar lo que sabes en Internet. Sácale partido e incluye trabajos publicados en tu perfil de LinkedIn, blogs de tu autoría o redes que te beneficien."
      }
    ],
    "p1s53items": [
      {
        "p1s5title": "Cada empresa es diferente. Adapta tu CV a cada entrevista personal y ponle corazón",
        "p1s5line": true,
        "p1s5line1": true,
        "p1s5descript":
          "Arregla tu vestimenta a cada situación. A la oficina se va con traje, a la playa con bañador: “viste” tu CV para la ocasión. Abrir puertas para las prácticas en empresas es una cuestión que debes poner cabeza y corazón, las empresas eligen siempre al que muestra compromiso, madurez y saber hacer. "
      },
      {
        "p1s5title": "Hablar idiomas mejora la empleabilidad, y te abre las puertas en ámbitos internacionales",
        "p1s5line": true,
        "p1s5line1": true,
        "p1s5descript":
          "Las mejores oportunidades profesionales son para las personas que hablan idiomas. Hablar varios idiomas ha sido hoy y siempre una ventaja muy competitiva, tanto en el ámbito académico como en el medio laboral. ... Laboralmente abre las puertas a la experiencia internaciona. Si hablas idiomas extranjeros no dudes en darles un espacio prioritario en tu CV. Si no sabes idiomas, más vale que te pongas a aprender alguno: tu futuro te lo agradecerá."
      },
      {
        "p1s5title": "Busca ayuda de profesionales. Déjate asesorar sobre tu CV",
        "p1s5line": false,
        "p1s5line1": false,
        "p1s5descript":
          "Después de haber hecho tu CV, es el momento que nos pidas ayuda. Te mostramos una serie de trucos para que tu CV destaque. Nos encantará poder asesorarte, más allá de ver faltas de ortográficas o errores de semánticos, nos centramos como Coachs de carrera en tu persona para sacar la mejor versión de ti mismo y ayudarte a cima del éxito profesional."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p1s51itemsI: [
        {
          p1s5icon: require("@/assets/images/iconos/page1/contacto.png"),
        },
        {
          p1s5icon: require("@/assets/images/iconos/page1/intenciones.png"),
        },
        {
          p1s5icon: require("@/assets/images/iconos/page1/presenciainternet.png"),
        }
      ],
      p1s52url: require("@/assets/new_imgs/circle-girl.png"),
      p1s53itemsI: [
        {
          p1s5icon: require("@/assets/images/iconos/page1/cv.png"),
        },
        {
          p1s5icon: require("@/assets/images/iconos/page1/idiomas.png"),
        },
        {
          p1s5icon: require("@/assets/images/iconos/page1/leecv.png"),
        }
      ]
    }
  }, 
  computed: {
    p1s51items() {
      return this.$t("p1s51items");
    },
    p1s53items() {
      return this.$t("p1s53items");
    }
  }
};
</script>

<style>

.p1s5hr {
  background-image: -webkit-linear-gradient(
    left,
    transparent,
    grey,
    transparent
  );
  background-image: linear-gradient(to right, transparent, grey, transparent);
}

.p1s5iconos {
  padding: 0.5em;
}

</style>

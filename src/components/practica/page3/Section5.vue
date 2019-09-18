<template>
  <div id="section5">
    <div class="fondoGrisClaro">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            {{$t("p3s5title1")}}
          </h2>
          <br />
          <b-row >
            <b-col
              lg="4"
              md="6"
              sm="12"
              class="text-center"
              v-for="(item ,idx) of p3s51items"
              :key="idx"
            >
              <div class="p3s5h1 text-center">
                <!-- <font-awesome-icon :icon="item.p3s5icon" /> -->
                <b-img :src="p3s51itemsI[idx].p3s5icon" class="p3s5icon"/>
              </div>
              <h3>
                <strong>{{item.p3s5title}}</strong>
              </h3>
              <div class>
                <p class="p3s5p text-justify">{{item.p3s5descript}}</p>
              </div>
            </b-col>
          </b-row>
          <br/>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p3s5title1": "Read more about us: Get to know the values and potentials we promote",
    "p3s51items": [
      {
        "p3s5title": "Productivity",
        "p3s5descript":
          "No matter the position of the employee, we always aspire to carry out the work effectively, making the most of each one's potential and generating outcomes that help us meet our objectives."
      },
      {
        "p3s5title": "Capacity to Innovate",
        "p3s5descript":
          "Everything around us is subject to change, including our environment and ourselves. At AICAD Business School we have learned to innovate as times, needs and objectives change. Our experience allows us to renew and start over and take advantage of all the changes."
      },
      {
        "p3s5title": "Cooperation",
        "p3s5descript":
          "We believe in the power of teamwork and that success really becomes apparent when you can share it and enjoy it with everyone involved. Always with the same goal in mind, we strive to work with and for others."
      },
      {
        "p3s5title": "Flexibility",
        "p3s5descript":
          "The ability to adapt is comes from our ability to handle the effects of the changes. We not only innovate, but also adapt to the circumstances that arise in our work."
      },
      {
        "p3s5title": "Honesty",
        "p3s5descript":
          "All our work is a reflection of the honesty of our intentions towards others. We are proud of who we are and we have built a company that always promotes goals and outcomes that are consistent with what society needs to improve."
      },
      {
        "p3s5title": "Always look forward",
        "p3s5descript":
          "No matter what happens, we look for ways to face obstacles, because we know they are a natural part of life and our growth. Eventually, every process will bring us valuable benefits and learning."
      }
    ]
  },
  "es":{
    "p3s5title1": "Lee más sobre nosotros y los valores y potencialidades que promovemos",
    "p3s51items": [
      {
        "p3s5title": "Productividad",
        "p3s5descript":
          "No importa que posición desempeñen nuestros empleados, siempre aspiramos a realizar el trabajo de forma eficaz, aprovechando al máximo el potencial de cada uno y generando resultados que ayuden a cumplir con nuestros objetivos."
      },
      {
        "p3s5title": "Capacidad de inventiva",
        "p3s5descript":
          "Todo a nuestro alrededor está sujeto a cambios, desde nuestro entorno hasta nosotros mismos. En AICAD Business School hemos aprendido a innovar a medida que los tiempos, las necesidades y los objetivos cambian. Nuestra experiencia nos permite renovarnos y sacar provecho de todos los cambios."
      },
      {
        "p3s5title": "Cooperación",
        "p3s5descript":
          "Creemos en el poder del trabajo en equipo y que el éxito realmente se hace patente cuando puedes compartirlo y disfrutarlo con todos los involucrados. Siempre con el mismo objetivo en mente, nos esforzamos en trabajar por y para los demás."
      },
      {
        "p3s5title": "Flexibilidad",
        "p3s5descript":
          "La capacidad para adaptarnos viene dada por nuestro manejo de los efectos de los cambios. No solo innovamos, sino también nos adaptamos a las circunstancias que se nos presenten en nuestro trabajo."
      },
      {
        "p3s5title": "Honestidad",
        "p3s5descript":
          "Todo nuestro trabajo es un reflejo de la honestidad de nuestras intenciones para con los demás. Nos sentimos orgullosos de lo que somos y hemos construido como empresa, siempre promoviendo metas y resultados que vayan acorde a lo que la sociedad necesite para mejorar."
      },
      {
        "p3s5title": "Siempre mirar hacia adelante",
        "p3s5descript":
          "Sin importar lo que suceda, buscamos formas para enfrentar los obstáculos, porque sabemos que son parte natural de la vida y de nuestro crecimiento. Eventualmente, todo proceso nos traerá beneficios y aprendizajes valiosos."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p3s51itemsI: [
        {
          p3s5icon: require("@/assets/images/iconos/page3/eficiencia.png")
        },
        {
          p3s5icon: require("@/assets/images/iconos/page3/innovacion.png")
        },
        {
          p3s5icon: require("@/assets/images/iconos/page3/colaboracion.png")
        },
        {
          p3s5icon: require("@/assets/images/iconos/page3/adaptabilidad.png")
        },
        {
          p3s5icon: require("@/assets/images/iconos/page3/integridad.png")
        },
        {
          p3s5icon: require("@/assets/images/iconos/page3/optimismo.png")
        }
      ]
    }
  },
  computed: {
    p3s51items() {
      return this.$t("p3s51items");
    }
  }
};
</script>

<style>
.p3s5h1 {
  font-size: 2em !important;
  font-weight: bold;
  margin: 0.5rem;
}

.p3s5p {
  font-size: 1.1em !important;
  font-weight: 500 !important;
  margin: 1em;
}

.p3s5icon {
  width: 3rem;
  height: auto;
}
</style>

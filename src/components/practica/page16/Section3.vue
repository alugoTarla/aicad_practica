<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            <span v-for="(item, idx) in p16s3title" :key="idx">
              <strong v-if="item.tituloS">{{item.titulo}}</strong>
              <span v-else>{{item.titulo}}</span>
            </span>
          </h2>
          <b-row align-v="start">
            <b-col md="4" sm="12" class="text-center" v-for="(item ,idx) of p16s3items" :key="idx">
              <div class="d-flex align-items-center">
                <div class="text-center" style="width: 17%">
                  <b-img :src="p16s3itemsI[idx].p16s3icon" class="p8iconos"></b-img>
                </div>
                <div class="p-1 text-left" style="width: 83%">
                  <h4><strong>{{item.p16s3title}}</strong></h4>
                </div>                      
              </div>
              <div class>
                <p class="p16s3p text-justify">{{item.p16s3descript}}</p>
              </div>
              <br />  
            </b-col>
          </b-row>
          <br />
          <div>
            <a class="btn buttonTurqueza" :href="p16s4url" target="_blank">
              {{$t("p16s4button")}}
              <strong>{{$t("p16s4buttonS")}}</strong>
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
    "p16s3title": [ 
      {
        "tituloS": true
        , "titulo": "Become a Partner Agency and enjoy the benefits of collaborating with AICAD Business School"
      }
    ],
    "p16s4button": "Become a partner agency",
    "p16s4buttonS": "Contact us",
    "p16s3items": [
      {
        "p16s3title": "We have offers all year",
        "p16s3descript":
          "We have agreements with hotels throughout Spain and we have available offers for the whole year in the sectors of Work and Travel, gastronomy, A&B, Hospitality and Tourism."
      },
      {
        "p16s3title": "We provide benefits to interns",
        "p16s3descript":
          "The Work and Travel-style internship offers in the sectors of gastronomy, A&B, and Hospitality give internship benefits such as food, lodging and an economic incentive to study."
      },
      {
        "p16s3title": "Internship offers that are valid to apply for a visa",
        "p16s3descript":
          "The internship offers last around 3 to 6 months and should comply to all requirements of the Spanish Consulate and all paperwork corresponding to the study visa."
      },
      {
        "p16s3title": "We manage the selection quickly",
        "p16s3descript":
          "We coordinate the interviews with agility in order to get answers in short order and easily process all the necessary documentation. This is due to our experience and reliable relationships with our taxpayers."
      },
      {
        "p16s3title": "We provide advice on the student visa application",
        "p16s3descript":
          "We can give you all kind of support regarding the documents for the visa application. We complete and sign the internship agreement and take care of the corresponding insurance policy."
      },
      {
        "p16s3title": "We help the client to take advantage of their own talent",
        "p16s3descript":
          "Our consultants guide the interns to create a CV that stands out, as well as helping them with its structure, content and design, which must respond to the requirements and expectations of the hotels."
      }
    ]
  },
  "es":{
    "p16s3title": [ 
      {
        "tituloS": true
        , "titulo": "Hazte Agencia Partner y disfruta de los beneficios de colaborar con AICAD Business School"
      }
    ],
    "p16s4button": "Hazte agencia partner",
    "p16s4buttonS": "CONTÁCTANOS",
    "p16s3items": [
      {
        "p16s3title": "Contamos con ofertas todo el año",
        "p16s3descript":
          "Tenemos convenios con hoteles de toda parte de España y contamos con disponibilidad de ofertas para todo el año, del tipo Work and Travel en áreas de gastronomía, A&B, Hostelería y Turismo."
      },
      {
        "p16s3title": "Le brindamos beneficios a los becarios en prácticas",
        "p16s3descript":
          "Las ofertas de prácticas al estilo Work and Travel en áreas de gastronomía, A&B, y Hotelería le otorgan al becario beneficios como alimentación, alojamiento y un incentivo económico al estudio."
      },
      {
        "p16s3title": "Ofertas de prácticas que son válidas para solicitar el visado",
        "p16s3descript":
          "Las ofertas de prácticas duran entre 3 y 6 meses, además de cumplir con todo lo que el Consulado de España requiere para hacer los trámites correspondientes al visado de estudios."
      },
      {
        "p16s3title": "Gestionamos la selección rápidamente",
        "p16s3descript":
          "Coordinamos con agilidad las entrevistas para así obtener respuestas en el momento y tramitar fácilmente toda la documentación necesaria. Esto es gracias a nuestra experiencia y a la relación de confianza con nuestros contribuyentes."
      },
      {
        "p16s3title": "Brindamos asesoría en la solicitud de la visa de estudiante",
        "p16s3descript":
          "Te podemos dar todo tipo de apoyo en lo concerniente a los documentos para la solicitud del visado. Completamos y hacemos firmar el convenio de prácticas, además de contratar la póliza de seguros correspondiente."
      },
      {
        "p16s3title": "Ayudamos al cliente a sacar provecho de sus talentos",
        "p16s3descript":
          "Nuestros consultores orientan a los becarios para crear un CV que destaque, además de ayudarlos con la estructura, contenido y diseño del mismo, los cuales deben responder a los requerimientos y expectativas de los hoteles."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p16s4url: "https://jobs.aicad.es",
      p16s3itemsI: [
        {
          p16s3icon: require("@/assets/images/vectores/page16/ofertastodoelaño.png")
        },
        {
          p16s3icon: require("@/assets/images/vectores/page16/ayudaeconomica.png")
        },
        {
          p16s3icon: require("@/assets/images/vectores/page16/ofertasvalidasvisado.png")
        },
        {
          p16s3icon: require("@/assets/images/vectores/page16/procesosrapidos.png")
        },
        {
          p16s3icon: require("@/assets/images/vectores/page16/asesoriaestudiante.png")
        },
        {
          p16s3icon: require("@/assets/images/vectores/page16/asesoramoscliente.png")
        }
      ]
    };
  },
  computed: {
    p16s3title() {
      return this.$t("p16s3title");
    },
    p16s3items() {
      return this.$t("p16s3items");
    }
  }
};
</script>

<style>
.p16s3h1d {
  display: table-cell;
  vertical-align: middle;
  padding: 1rem 0.2em;
  text-align: left;
}

.p16s3h1 {
  font-size: 1.5em;
  font-weight: 600;
}
.p16s3p {
  font-size: 0.9em;
}

</style>

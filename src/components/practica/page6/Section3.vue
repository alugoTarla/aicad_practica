<template>
  <div id="section3">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row align-v="start">
            <b-col md="6" sm="12" class="text-center" 
              v-for="(item ,idx) of p6s31items" :key="idx">
              <div class>
                <div class="p6s3h1d text-center">
                  <b-img :src="p6s31itemsI[idx].p6s3icon" style="width: 5em; heigth: auto;" />
                </div> 
                <div class="p6s3h1d p6s3h1">{{item.p6s3title}}</div>
              </div>
              <div class>
                <p class="p6s3p text-justify">{{item.p6s3descript}}</p>
                <hr v-if="item.p6s3line" class="p6s3hr" />
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p6s31items": [
      {
        "p6s3title": "Erasmus Mobility Program Management",
        "p6s3descript":
          "We take care of providing adequate solutions according to the mobility program. We learn the number of students and their trainings, the required destinations, the dates of the transfers, the profiles of the host companies and all the details that have to do with the accommodation, meals and documentation, including travel logistics preferences. All these are important issues to constitute the action plan and determine the required budget."
      },
      {
        "p6s3title": "Travel and visit assistance",
        "p6s3descript":
          "Our consultants are responsible for planning and organizing trips for the whole group that would satisfy the students as well as teachers and project managers. We provide advice to all parties so that visits and travels are enjoyed by everyone, enabling to make the most of them at affordable prices."
      },
      {
        "p6s3title": "Help with student housing",
        "p6s3descript":
          "Having previous experiences and handling important logistic aspects, we have a great understanding of how to determine and organize the best accommodation options for students, thus providing advice regarding hotels, hostels, tourist apartments, university residences or even host families, in order to always offer the best alternative, adapted to the needs of the group and the project."
      },
      {
        "p6s3title": "Language courses for foreigners",
        "p6s3descript":
          "One of the most common objectives in Erasmus + programs and student mobility projects in general is the learning of foreign languages. Therefore, we offer varied alternatives for Spanish, French, English, German and other language courses, for interns thanks to the connections we have with many language schools and academies."
      },
      {
        "p6s3title": "Document Processing",
        "p6s3descript":
          "Organizing and carrying out activities such as European mobility programs or study trips financed by institutions entails having to deal with paperwork that is not easy to handle. That is why our team can handle all types of documents, in addition to providing advice. We cover internship agreements in companies, certificates of completion of internships, post-internship evaluations, international student insurance, residence permits, etc."
      },
      {
        "p6s3title": "Cultural visits for students",
        "p6s3descript":
          "Part of the itinerary of a student’s mobility program is also to discover and learn about the visited sites, in order to guarantee a complete experience. From visits to museums to the most emblematic places of your destination of internships, our coordinators are responsible for turning the experience into something memorable."
      }
    ]
  },
  "es":{
    "p6s31items": [
      {
        "p6s3title": "Gestión de Programas Erasmus movilidad",
        "p6s3descript":
          "Nos encargamos de brindar soluciones adecuadas según el programa de movilidad: Conocer el número de estudiantes y su formación, los destinos requeridos, las fechas de los traslados, los perfiles de las empresas de acogida y todos los detalles que tienen que ver con el alojamiento, las comidas y la documentación, incluyendo las preferencias de la logística de viaje. Todo esto son temas de peso para constituir el plan de acción y determinar cómo será el presupuesto."
      },
      {
        "p6s3title": "Ayuda en desplazamientos y visitas",
        "p6s3descript":
          "Nuestros asesores se encarga de planificar y organizar los viajes para todo el grupo que se conforme, tanto para estudiantes como profesores y responsables del proyecto. Brindamos asesoramiento a todas las partes para que las visitas y desplazamientos sean del agrado de todos, además de que puedan sacar el mayor provecho y a precios accesibles."
      },
      {
        "p6s3title": "Ayuda en el alojamiento para estudiantes",
        "p6s3descript":
          "Al contar con experiencias previas y manejar aspectos logísticos importantes, tenemos un gran entendimiento de cómo determinar y organizar las mejores opciones de alojamientos para los estudiantes, brindando así asesoramiento en cuanto a hoteles, hostales, apartamentos turísticos, residencias universitarias o incluso familias de acogida, con el fin de siempre ofrecer la mejor alternativa, adaptada a las necesidades del grupo y del proyecto."
      },
      {
        "p6s3title": "Cursos de idiomas para extranjeros",
        "p6s3descript":
          "Uno de los objetivos más comunes en los programas de Erasmus+ y proyectos de movilidad estudiantil en general es el aprendizaje de los idiomas extranjeros. Por ello, ofrecemos alternativas variadas en lo concerniente a cursos de idioma español, francés, inglés, alemán y otros, para los estudiantes de prácticas en empresas y becarios, gracias a los vínculos que tenemos con muchas escuelas y academias de idiomas."
      },
      {
        "p6s3title": "Tramitación de documentos",
        "p6s3descript":
          "Organizar y llevar a cabo actividades como los programas europeos de movilidad o viajes de estudios financiados por instituciones trae consigo el tener que lidiar con papeleo que no es fácil de manejar. Es por ello que nuestro equipo puede encargarse de tramitar todo tipo de documentos, además de brindar asesoramiento. Abarcamos convenios de prácticas en empresas, certificados de realización de prácticas en empresas, evaluaciones de fin de prácticas en empresas, seguros de estudiantes internacionales, autorizaciones de residencia, etc."
      },
      {
        "p6s3title": "Visitas culturales para estudiantes",
        "p6s3descript":
          "Parte del itinerario de un programa de movilidad estudiantil es también el poder conocer, descubrir y aprender sobre los sitios que se visitan, para así garantizar una experiencia completa. Desde visitas a museos hasta a los lugares más emblemáticos de su destino de prácticas en empresas, nuestros coordinadores se encargan de convertir la experiencia en algo memorable."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p6s31itemsI: [
        {
          p6s3icon: require("@/assets/images/vectores/page6/programas-de-movilidad.png")
        },
        {
          p6s3icon: require("@/assets/images/vectores/page6/transporte.png")
        },
        {
          p6s3icon: require("@/assets/images/vectores/page6/alojamiento.png")
        },
        {
          p6s3icon: require("@/assets/images/vectores/page6/cursos-idiomas.png")
        },
        {
          p6s3icon: require("@/assets/images/vectores/page6/tramitacion-documentos.png")
        },
        {
          p6s3icon: require("@/assets/images/vectores/page6/visitas-culturales.png")
        }
      ]
    };
  },
  computed: {
    p6s31items() {
      return this.$t("p6s31items");
    }
  }
};
</script>

<style>
.p6s3h1d {
  display: table-cell;
  vertical-align: middle;
  padding: 1rem 0.2em;
  text-align: left;
}

.p6s3h1 {
  font-size: 1.5em;
  font-weight: 600;
}
.p6s3p {
  font-size: 0.9em;
}

.p6s3hr {
  background-image: -webkit-linear-gradient(
    left,
    transparent,
    grey,
    transparent
  );
  background-image: linear-gradient(to right, transparent, grey, transparent);
}
</style>

<template>
  <div id="section6">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <b-row >
            <b-col lg="4" sm="12" class="text-center" v-for="(item, idx) in p7s6items" :key="idx">
              <b-card :img-src="p7s6itemsI[idx].p7s6img" class="p3card">
                <div class="picon">
                  <font-awesome-icon :icon="['fas','user-circle']"  
                  style="background-color: silver; border-radius: 60px; border: 0.1rem; border-style: solid;" />
                </div>
                <b-card-title class="p3cardtitle">{{item.p7s6title}}</b-card-title>
                <b-card-text class="p3cardbody">{{item.p7s6descript}}</b-card-text>
                <b-card-footer class="p3cardfooter">
                  <a :href="item.p7s6url">
                    <strong>{{item.p7s6link}}</strong>
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
    "p7s6title1": "Encuentra estudiantes de prácticas provenientes de toda Europa",
    "p7s6items": [
      {
        "p7s6url": "#",
        "p7s6link": "Read more about ITALIAN STUDENTS",
        "p7s6title": "Italian excellence and qualification",
        "p7s6descript":
          "The Italian fellows we preselected stand out for their excellent training in languages, tourism, sales and other business areas. Their age is around 24 years and they do not have much national experience, this is because the Italian education system requires many hours of class. One of the favorite destinations of Italians is Spain. Italian universities are always ready to provide support when making internship agreements with companies."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Read more about FRENCH STUDENTS",
        "p7s6title": "An ideal mix of French languages and business",
        "p7s6descript":
          "The French interns that we have pre-selected usually have one of two types of training: University and Business School. They have excellent training bases and good English skills, and, most importantly, some work experience, since in France it is mandatory for students to do internships in companies abroad, so Spain becomes an ideal destination for French students to undergo their internships."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Read more about ENGLISH STUDENTS",
        "p7s6title": "Stand out in English style",
        "p7s6descript":
          "The English interns we have pre-selected are around 21-22 years of age and are quite responsible, self-demanding and ambitious people. They have been hardworking and knew how to climb the career ladder due to their determination and dedication. They seek to improve their knowledge of foreign languages and stand out among other candidates being native English speakers which is beneficial for the hosting company."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Read more about GERMAN STUDENTS",
        "p7s6title": "German productivity and efficiency",
        "p7s6descript":
          "The German interns stand out for their ability to optimize their time and for their working methods. In addition to being highly productive and efficient, they are trained from a young age with mentality, that makes them stand out in areas such as marketing, administration, tourism, finance, communication, business strategy or sales, which are exactly the areas of practice that are most sought for in Spain."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Read more about POLISH STUDENTS",
        "p7s6title": "Polish perseverance and adaptability",
        "p7s6descript":
          "Polish interns may be characterized by their determination and desire to show that their country has much to contribute to the labor market, as well as being open to knowledge and foreign languages. They have a great interest in learning new things and easily integrate into a new work environment during their internships in companies abroad."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Read more about IBEROAMERICA STUDENTS",
        "p7s6title": "Spanish and Latin American internships",
        "p7s6descript":
          "The pre-selected Spanish and Latin American interns stand out for their excellent primary training in business, marketing, engineering and communication areas. They are highly sociable, charismatic and eager to learn and demonstrate their skills. They see the internship as an opportunity to put into practice what they have learnt, to integrate into the business culture and they put effort to leave a good impression."
      }
    ]
  },
  "es":{
    "p7s6title1": "Encuentra estudiantes de prácticas provenientes de toda Europa",
    "p7s6items": [
      {
        "p7s6url": "#",
        "p7s6link": "Lee más sobre los ESTUDIANTES ITALIANOS",
        "p7s6title": "Excelencia y preparación italiana",
        "p7s6descript":
          "Los becarios italianos que preseleccionamos resaltan por su excelente formación en idiomas, turismo, comercio y otras áreas empresariales. Sus edades rondan los 24 años y no cuentan con mucha experiencia nacional, esto es debido a que el sistema educativo italiano les exige muchas horas de clase. Uno de los destinos favoritos de los italianos es España y las universidades italianas siempre están prestas a brindar apoyo a la hora de hacer convenios de prácticas con empresas."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Lee más sobre los ESTUDIANTES FRANCESES",
        "p7s6title": "Una mezcla ideal de idiomas y comercio francés",
        "p7s6descript":
          "Los becarios franceses que preseleccionamos suelen tener uno de los dos tipos de formación: universitaria y de Business School. Poseen excelentes bases formativas y con un buen manejo de inglés, rondando los 22 años de edad y con cierta experiencia laboral, ya que en Francia es obligatorio que los estudiantes hagan prácticas en empresas en el extranjero, por lo que España se presta como destino ideal para realizarlas."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Lee más sobre los ESTUDIANTES INGLESES",
        "p7s6title": "Destacar al estilo inglés",
        "p7s6descript":
          "Los becarios ingleses que preseleccionamos rondan los 21-22 años de edad y son personas bastante responsables, auto-exigentes y ambiciosas, además de ser trabajadoras y que saben escalar posiciones dentro de empresas gracias a su empeño y determinación. Buscan mejorar su manejo de idiomas extranjeros y destacan por sobre otros candidatos por la apertura que permiten a las empresas gracias a su inglés nativo."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Lee más sobre los ESTUDIANTES ALEMANES",
        "p7s6title": "Productividad y eficiencia alemana",
        "p7s6descript":
          "Los becarios alemanes destacan por su capacidad de optimizar su tiempo y por sus métodos de trabajo. Además de ser altamente productivos y eficientes, son formados desde pequeños con esta mentalidad, lo que los hace destacar en áreas como marketing, administración, turismo, finanzas, comunicación, estrategia empresarial o ventas, que son las áreas de prácticas que más buscan en España."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Lee más sobre los ESTUDIANTES POLACOS",
        "p7s6title": "La perseverancia y adaptabilidad polaca",
        "p7s6descript":
          "Los becarios polacos se caracterizan por su determinación y deseo de mostrar que su país tiene mucho para aportar al mercado laboral, además de ser personas abiertas al conocimiento y a los idiomas extranjeros. Poseen un gran interés por aprender cosas nuevas y por su facilidad para integrarse fácilmente a cualquier entorno laboral de Europa durante sus prácticas en empresas del extranjero."
      },
      {
        "p7s6url": "#",
        "p7s6link": "Lee más sobre los ESTUDIANTES DE IBEROAMÉRICA",
        "p7s6title": "Españoles y latinoamericanos de prácticas en empresas",
        "p7s6descript":
          "Los becarios tanto españoles como latinoamericanos que preseleccionamos destacan por una excelente base formativa en las áreas empresariales, marketing, ingeniería y comunicación. Son personas altamente sociables, carismáticas y con muchos deseos de aprender y demostrar sus habilidades. Las prácticas en empresas son vistas como una oportunidad para poner en práctica lo aprendido, conocer la cultura empresarial y esforzarse al máximo para dejar una buena impresión."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p7s6itemsI: [
        {
          p7s6img: require("@/assets/images/banners/page7/italia.jpg")
        },
        {
          p7s6img: require("@/assets/images/banners/page7/paris.jpg")
        },
        {
          p7s6img: require("@/assets/images/banners/page7/londres.jpg")
        },
        {
          p7s6img: require("@/assets/images/banners/page7/alemania.jpg")
        },
        {
          p7s6img: require("@/assets/images/banners/page7/polonia.jpg")
        },
        {
          p7s6img: require("@/assets/images/banners/page7/españa.jpg")
        }
      ]
    }
  },
  computed: {
    p7s6items() {
      return this.$t("p7s6items");
    }
  }
};
</script>

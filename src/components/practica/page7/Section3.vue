<template>
  <div id="section3">
    <div class="wrapper">
      <div class="fondoWhite">
        <b-container fluid>
          <b-container class="text-center">
            <b-row align-h="center" >
              <b-col cols lg="4" md="6" sm="12" class="text-center" v-for="(item, idx) in p7s3items" :key="idx">
                <div class="p7s3fondoIconos">
                  <b-img :src="p7s3itemsI[idx].p7s3img" />
                </div>
                <br>
                <h3>{{item.p7s3ititle}}</h3>
                <div class="p7s3ul">
                  <ul>
                    <li
                      class="text-justify p7s3li"
                      v-for="(sitem, idx1) in item.p7s3sub"
                      :key="idx1"
                    >{{sitem.p7s3subi}}</li>
                  </ul>
                </div>
              </b-col>
            </b-row>
          </b-container>
          <br />
        </b-container>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p7s3items": [
      {
        "p7s3ititle": "1. Contact us and publish your offer",
        "p7s3sub": [
          {
            "p7s3subi": "You can contact us by phone, email or by publishing an offer for free through the online form on our portal."
          },
          {
            "p7s3subi": "Define what type of trainee profile you are looking for, the tasks to be developed, the dates of incorporation and duration of internships, education background and language requirements."
          },
          {
            "p7s3subi": "Our team will contact you and take care of your search process, as well as advise you during each stage of the management."
          }
        ]
      },
      {
        "p7s3ititle": "2. Conduct interviews and select the student",
        "p7s3sub": [
          {
            "p7s3subi": "We will take care of spreading the offer in study centers and job boards, in addition to intranets and any other means."
          },
          {
            "p7s3subi": "The selection team will choose the candidates that best suit the profile you are looking for and that have the approval of the Universities."
          },
          {
            "p7s3subi": "Finally, we will introduce you to the ideal candidate to be interviewed so you can decide."
          }
        ]
      },
      {
        "p7s3ititle": "3. Perform the paperwork for documentation",
        "p7s3sub": [
          {
            "p7s3subi": "When you have found the ideal candidate, we will help you with the paperwork for your hiring."
          },
          {
            "p7s3subi": "We will be in charge of contacting the University to request both the academic documentation and the Business Internship Agreement."
          },
          {
            "p7s3subi": "Finally, we will advise you on any questions or problems that arise to ensure that everything is prepared before the start of internship"
          }
        ]
      }
    ]
  },
  "es":{
    "p7s3items": [
      {
        "p7s3ititle": "1. Ponte en contacto con nosotros y publica tu oferta",
        "p7s3sub": [
          {
            "p7s3subi": "Puedes contactarnos por teléfono, correo electrónico o publicando una oferta de forma gratuita a través del formulario online de nuestro portal."
          },
          {
            "p7s3subi": "Define qué tipo de perfil de becario buscas, las tareas que deberá desarrollar, las fechas de incorporación y duración de prácticas en empresas, los requisitos de formación e idiomas (si es necesario)."
          },
          {
            "p7s3subi": "Nuestro equipo se pondrá en contacto contigo y se ocupará de llevar tu proceso de búsqueda, además de asesorarte durante cada etapa de la gestión."
          }
        ]
      },
      {
        "p7s3ititle": "2. Realiza las entrevistas y selecciona al estudiante",
        "p7s3sub": [
          {
            "p7s3subi": "Nosotros nos ocuparemos de difundir la oferta en centros de estudios y bolsas de trabajo, además de las intranets y cualquier otro medio."
          },
          {
            "p7s3subi": "El equipo de selección elegirá a los candidatos que más se adaptan al perfil que buscas y que tengan el visto bueno de las Universidades."
          },
          {
            "p7s3subi": "Por último, te presentaremos al candidato ideal para ser entrevistado y así puedas decidir."
          }
        ]
      },
      {
        "p7s3ititle": "3. Realiza los trámites para la documentación",
        "p7s3sub": [
          {
            "p7s3subi": "Cuando ya hayas encontrado al candidato ideal, te ayudaremos con el papeleo y la organización para su contratación."
          },
          {
            "p7s3subi": "Nos encargaremos de contactar con la Universidad para solicitar tanto la documentación académica como el Convenio de prácticas en empresas."
          },
          {
            "p7s3subi": "Finalmente, te asesoraremos frente a cualquier duda o problema que surja para asegurarnos que todo está preparado antes del comienzo de las prácticas en empresas."
          }
        ]
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p7s3itemsI: [
        {
          p7s3img: require("@/assets/images/vectores/page7/contactanosoferta.png")
        },
        {
          p7s3img: require("@/assets/images/vectores/page7/entrevista.png")
        },
        {
          p7s3img: require("@/assets/images/vectores/page7/tramita.png")
        }
      ]
    }
  },
  computed: {
    p7s3items() {
      return this.$t("p7s3items");
    }
  }
};
</script>

<style>
.p7s3fondoIconos img{
  width: auto;
  height: 6rem;
}
.p7s3ul {
  padding: 0 0.9rem;
}
.p7s3li ul li{
  font-size: 0.9em;
  font-weight: 400;
  line-height: 1.2em;
}
</style>

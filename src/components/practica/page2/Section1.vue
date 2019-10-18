<template>
  <div id="section1">
    <div class="fondoGrisClarop2s1">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>{{$t("s1title1")}}</h2>
          <h3>{{$t("s1title2")}}</h3>
          <b-row align-h="center">
            <b-col
              lg="4"
              md="6"
              sm="12"
              class="text-center"
              v-for="(item, idx) in s1items"
              :key="idx"
            >
              <div class="text-center p2s1Card cardd">
                <div class="p2fondoIconos">
                  <b-img :src="s1itemsI[idx].s1img" />
                </div>
                <div>
                  <h2>{{item.s1ititle}}</h2>
                </div>
                <div class="p2s1ol">
                  <ol>
                    <li v-for="(sitem, idx1) in item.s1sub" :key="idx1">{{sitem.s1subi}}</li>
                  </ol>
                </div>
              </div>
              <br />
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
    "s1title1": "Ideal internships for you in just 3 steps",
    "s1title2":
      "Learn how AICAD Business School helps you get the position in record time!",
    "s1items": [
      {
        "s1ititle": "SIGN UP",
        "s1sub": [
          {
            "s1subi": "Make your registration online"
          },
          {
            "s1subi": "Complete your account profile"
          },
          {
            "s1subi": "Receive the call from our team"
          }
        ]
      },
      {
        "s1ititle": "APPROVE",
        "s1sub": [
          {
            "s1subi": "Once you have had the interview, you will receive different proposals for internships."
          },
          {
            "s1subi": "Select the internship offer to which you will send your CV."
          },
          {
            "s1subi": "Approve the interview with the chosen company."
          }
        ]
      },
      {
        "s1ititle": "VERIFY",
        "s1sub": [
          {
            "s1subi": "You will receive the acceptance letter for the internship."
          },
          {
            "s1subi": "Cancel the rates within the next three days."
          },
          {
            "s1subi": "Manage the agreement and immediately start enjoying the experience of your internships."
          }
        ]
      }
    ]
  },
  "es":{
    "s1title1": "Las prácticas en empresas ideales para ti a tan solo 3 pasos",
    "s1title2":
      "¡Conoce la manera en que AICAD Business School te ayuda a obtener el puesto en tiempo record!",
    "s1items": [
      {
        "s1ititle": "REGÍSTRATE",
        "s1sub": [
          {
            "s1subi": "Realiza tu registro online"
          },
          {
            "s1subi": "Completa tu perfil de tu cuenta"
          },
          {
            "s1subi": "Recibe la llamada de nuestro equipo"
          }
        ]
      },
      {
        "s1ititle": "APRUEBA",
        "s1sub": [
          {
            "s1subi": "Una vez hayas realizado la entrevista, recibirás distintas propuestas de prácticas en empresas."
          },
          {
            "s1subi": "Selecciona la oferta de prácticas a la que le enviarás tu CV"
          },
          {
            "s1subi": "Aprueba la entrevista con la empresa elegida."
          }
        ]
      },
      {
        "s1ititle": "VERIFICA",
        "s1sub": [
          {
            "s1subi": "Recibirás la carta de aceptación para la práctica."
          },
          {
            "s1subi": "Cancela las tarifas en los siguientes tres días."
          },
          {
            "s1subi": "Gestiona el convenio y empieza inmediatamente a disfrutar la experiencia de las prácticas en empresas."
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
      s1itemsI: [
        {
          s1img: require("@/assets/images/vectores/page2/registrate.png")
        },
        {
          s1img: require("@/assets/images/vectores/page2/aprueba.png")
        },
        {
          s1img: require("@/assets/images/vectores/page2/confirma.png")
        }
      ]
    };
  },
  computed: {
    s1items() {
      return this.$t("s1items");
    }
  }
};
</script>

<style lang="scss">
.fondoGrisClarop2s1 {
  h2 {
    color: whitesmoke;
  }
  h3 {
    color: whitesmoke;
    background: rgba(200, 200, 200, 0.4);
    border-radius: 20px;
    padding: 20px;
  }
  li {
    color: whitesmoke;
  }
  background: linear-gradient(rgba(0, 0, 0, 0.5)),
    url("~@/assets/new_imgs/Banner-3-pasos.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 500px;
}
</style>

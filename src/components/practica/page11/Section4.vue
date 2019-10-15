<template>
  <div id="section4">
    <div class="wrapper">
      <div class="fondoWhite">
        <b-container fluid>
          <b-container>
            <br />
            <h2 class="text-center">
              <span>{{$t("p11s4title")}}</span>
            </h2>
            <br />
            <b-row align-v="start">
              <b-col md="7">
                <b-row>
                  <b-col md="6" sm="12" v-for="(item, idx) in p11s4list" :key="idx">
                    <div class="text-center">
                        <b-img :src="p11s4listI[idx].p11s4icon" style="width: 6em; heigth: auto; padding-bottom: 1em;"></b-img>
                        
                        <h3>{{item.p11s4title}}</h3>
                      </div>
                    <div class>
                      <p style="padding-bottom: 1em;" class="text-justify"
                        v-for="(item1, idx1) in item.p11s4descrip"
                        :key="idx1"
                      >
                        <strong v-if="item1.p11s4S" >{{item1.p11s4line}}</strong>
                        <span v-else>{{item1.p11s4line}}</span>
                      </p>
                    </div>
                    <br />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6" sm="12" v-for="(item, idx) in p11s4list" :key="idx">
                    <div class="text-center">
                      <a class="btn buttonTurqueza btn-lg" :href="item.p11s1url">
                        {{item.p11s4boton}}
                        <strong>{{item.p11s4botonS}}</strong>
                      </a>
                    </div>
                    <br />
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="5" class="text-center">
                <b-card class="p5card">
                  <b-card-body >
                  <h3>{{$t("p11s4cardTitle")}}</h3>
                    <p class="text-justify">
                      {{$t("p11s4cardText1")}}
                    </p>
                    <hr class="hrFondo2" />
                    <b-tabs pills card no-fade class="p11s4Tab">
                      <b-tab :title="$t('p11s4cardBtt1')" @click="limpiarSeleccion()">
                        <b-card-text>
                          <h4><strong> {{$t("p11s4cardSubTitle2")}} </strong></h4>
                          <br>
                          <b-row>
                            <b-col cols="2" style="padding: 0.1em"
                            v-for="(item, idx) in p11s4DatoB1fre" :key="idx">
                              <a class="btn btnCardp11" :class="{active: isActive1[idx]}" @click="calculoMensualidad(idx, 1)">
                                {{idx+1}}
                              </a>
                            </b-col>
                          </b-row>
                        </b-card-text>
                      </b-tab>
                      <b-tab :title="$t('p11s4cardBtt2')" @click="limpiarSeleccion()">
                        <b-card-text>
                          <h4><strong> {{$t("p11s4cardSubTitle2")}} </strong></h4>
                          <br>
                          <b-row>
                            <b-col cols="2" style="padding: 0.1em"
                            v-for="(item, idx) in p11s4DatoB2fre" :key="idx">
                              <a class="btn btnCardp11" :class="{active: isActive2[idx]}" @click="calculoMensualidad(idx, 2)">
                                {{idx+3}}
                              </a>
                            </b-col>
                          </b-row>
                        </b-card-text>
                      </b-tab>
                    </b-tabs>
                    <b-card >
                      <b-card-body >
                        <p class="text-justify">
                          {{$t("p11s4card2Text1")}}
                        </p>
                        <p class="text-justify">
                          <strong>{{p11s4card2Text2_}}</strong>
                        </p>
                        <p class="text-justify">
                          <strong>{{$t("p11s4card2Text3")}}</strong>
                        </p>
                        <p class="text-justify" v-for="(item, idx) in p11s4card2Text3l" :key="idx" >
                          {{item}}
                        </p>
                      </b-card-body>  
                    </b-card>
                    <br>
                    <a @click="limpiarSeleccion()" style="cursor: pointer">
                      {{$t("p11s4cardBtt3")}}
                    </a>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
            <br />
          </b-container>
        </b-container>
        <br />
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p11s4title": "Fees - How much, when and why to pay?",
    "p11s4list": [
      {
        "p11s4title": "The Caribbean in a 5 star hotel",
        "p11s4descrip": [
          {
            "p11s4S": false,
            "p11s4line":
              "Finding a practice with us is very easy. The registration is free. After the first interview, where we will explain the process in detail, you can have all the detailed information. In this way, it will be easy for you to decide if you want to continue your internship search with our help."
          },
          {
            "p11s4S": true,
            "p11s4line":
              "It is you who decides!"
          },
          {
            "p11s4S": false,
            "p11s4line":
              "If you approve, we will present your profile to the company that offers the internship that interests you. Once you confirm that you will introduce yourself, we will organize a final interview between you and the company. The final decision will be made by the head of the company. If your application is accepted, it is when you will make the payment."
          }
        ],
        "p11s4boton": "Get to know ",
        "p11s4botonS": "the process in detail",
        "p11s4url": "#"
      },
      {
        "p11s4title": "Register with us for free and only pay if you are accepted",
        "p11s4descrip": [
          {
            "p11s4S": false,
            "p11s4line":
              "You will only have the obligation to pay the fees if you are accepted. Only then will your position in the company be guaranteed. At AICAD Business School we do not sell internships. Instead, we offer selection services to companies in various areas and advise students in order to find the ideal internship for them."
          },
          {
            "p11s4S": true,
            "p11s4line":
              "You will only have to pay the fees if the company you chose approves your candidacy and selects you as an intern"
          },
          {
            "p11s4S": false,
            "p11s4line":
              "You will have three business days to pay the fees after learning about your selection. Once we receive your payment, we will begin the collection and signing of documents such as the Internship Agreement, thus facilitating all administrative procedures."
          }
        ],
        "p11s4boton": "Check out the list of",
        "p11s4botonS": "available offers",
        "p11s4url": "#"
      }
    ],
    "p11s4cardTitle": "Calculate your rate",
    "p11s4cardText1": "Select where and for how long you want to do your internship. Indicate your preferences below:",
    "p11s4cardSubTitle1": "Where do you want to do your practice?",
    "p11s4cardBtt1": "In the continent where I live",
    "p11s4cardBtt2": "In a foreign continent",
    "p11s4cardSubTitle2": "For how many months?",
    "p11s4card2Text1": "If your application is approved by the company, according to the destination and duration established by you herein, you should pay:",
    "p11s4card2Text2": "€0.00 taxes included",
    "p11s4card2TextRef": "€0.00 taxes included",
    "p11s4card2Text3": "Important notes:",
    "p11s4card2Text3l": [
      "* The rate shown here is the result of a calculation based on destination and duration preferences.",
      "** This rate could have reductions thanks to promotions or agreements with universities.",
      "*** It could also have increases in particular situations, in which case it will be duly informed before you start the selection process."
    ],
    "p11s4cardBtt3": "Clear Selection"
  },
  "es":{
    "p11s4title": "Tarifas - ¿Cuánto, cuándo y por qué pagar?",
    "p11s4list": [
      {
        "p11s4title": "El caribe en un hotel 5 estrellas",
        "p11s4descrip": [
          {
            "p11s4S": false,
            "p11s4line":
              "Encontrar una práctica con nosotros en AICAD Business School es muy fácil y registrarte es gratis. Luego de la primera entrevista, en donde te explicaremos el proceso a detalle, podrás disponer de toda la información detallada. De esta forma, te resultará fácil decidir si quieres continuar tu búsqueda de prácticas por medio de nuestra asesoría."
          },
          {
            "p11s4S": true,
            "p11s4line":
              "¡Eres tú quien decide!"
          },
          {
            "p11s4S": false,
            "p11s4line":
              "Si das el visto bueno, presentaremos tu perfil a la empresa que ofrece la práctica que te interesa. Una vez nos confirmes que te presentarás, organizaremos una entrevista final entre tú y la empresa. La decisión final la tomará el responsable de la empresa. Si tu candidatura es aceptada, es cuando cancelarás las tarifas"
          },
          {
            "p11s4S": true,
            "p11s4line":
              "¡Así de fácil!"
          }
        ],
        "p11s4boton": "Conoce a detalle",
        "p11s4botonS": "El proceso",
        "p11s4url": "#"
      },
      {
        "p11s4title": "Regístrate con nosotros gratuitamente y sólo paga si eres aceptado",
        "p11s4descrip": [
          {
            "p11s4S": false,
            "p11s4line":
              "Solo tendrás la obligación de pagar las tasas si eres aceptado y solo así se te garantizará tu puesto en la práctica en la empresa. En AICAD Business School no vendemos prácticas. En lugar de eso, ofrecemos servicios de selección a empresas de diversas áreas y asesoramos a estudiantes con el objetivo de que encuentren la práctica ideal para ellos."
          },
          {
            "p11s4S": true,
            "p11s4line":
              "Solo deberás pagar las tasas si la empresa que elegiste aprueba tu candidatura como estudiante de práctica"
          },
          {
            "p11s4S": false,
            "p11s4line":
              "Contarás con tres días laborales para pagar las tasas tras conocer la aprobación de la empresa. Una vez recibamos tu pago, iniciaremos la recopilación y firma de documentos como el Convenio de práctica, facilitando así los trámites administrativos."
          }
        ],
        "p11s4boton": "Visita el listado de",
        "p11s4botonS": "Ofertas disponibles",
        "p11s4url": "#"
      }
    ],
    "p11s4cardTitle": "Calcula tu tarifa",
    "p11s4cardText1": "Selecciona en dónde y por cuánto tiempo quieres hacer tu práctica en empresas. Señala aquí tus preferencias a continuación:",
    "p11s4cardSubTitle1": "¿Dónde quieres hacer tu práctica?",
    "p11s4cardBtt1": "En el continente donde vivo",
    "p11s4cardBtt2": "En un continente extranjero",
    "p11s4cardSubTitle2": "¿Durante cuántos meses?",
    "p11s4card2Text1": "Si tu candidatura fuese aceptada en una empresa, bajo las condiciones de destino y duración establecidas por ti, deberías cancelar:",
    "p11s4card2Text2": "€0.00 impuestos incluidos",
    "p11s4card2TextRef": "€0.00 impuestos incluidos",
    "p11s4card2Text3": "Notas importantes:",
    "p11s4card2Text3l": [
      "*La tarifa aquí reflejada es el resultado de un cálculo basado en preferencias de destino y duración. ",
      "**Esta tarifa podría tener reducciones gracias a promociones o acuerdos con universidades. ",
      "***También podría tener incrementos en situaciones particulares, en cuyo caso se informará debidamente antes de que inicies el proceso de selección."
    ],
    "p11s4cardBtt3": "Limpir Seleccion"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p11s4listI: [
        {
          p11s4icon: require("@/assets/images/vectores/page11/customer-service.png")
        },
        {
          p11s4icon: require("@/assets/images/vectores/page11/route-1.png")
        }
      ],
      p11s4card2Text2_: "",
      p11s4DatoB1base: 390,
      p11s4DatoB1var: 55,
      p11s4DatoB1fre: [0,0,1,2,3,4,5,6,7,8,9,10],
      isActive1: [false,false,false,false,false,false,false,false,false,false,false,false],
      p11s4DatoB2base: 400,
      p11s4DatoB2var: 190,
      p11s4DatoB2fre: [1,2,3,4,5,6,7,8,9,10],
      isActive2: [false,false,false,false,false,false,false,false,false,false]

    };
  },
  methods: {    
    limpiarTodo: function(){
      this.p11s4card2Text2_ = this.$t("p11s4card2TextRef");
      for (let index = 0; index < this.isActive1.length; index++) {
        this.isActive1[index] = false;
      }
      for (let index = 0; index < this.isActive2.length; index++) {
        this.isActive2[index] = false;
      }
    },
    calculoMensualidad: function(idx, opcion){
      var total = 0;
      this.limpiarTodo();
      if(opcion === 1){
        total = this.p11s4DatoB1base + (this.p11s4DatoB1var * this.p11s4DatoB1fre[idx]);
        this.isActive1[idx] = true;
      }
      if(opcion === 2){
        total = this.p11s4DatoB2base + (this.p11s4DatoB2var * this.p11s4DatoB2fre[idx]);
        this.isActive2[idx] = true;
      }      
      this.p11s4card2Text2_ = this.$t("p11s4card2TextRef").replace("0.00",total+".00");
    },
    limpiarSeleccion: function(){
      this.limpiarTodo();
    }
  },
  computed: {
    p11s4card2Text2() {
      this.p11s4card2Text2_ = this.$t("p11s4card2TextRef");
      return this.p11s4card2Text2_;
    },
    p11s4list() {
      return this.$t("p11s4list");
    },
    p11s4card2Text3l() {
      return this.$t("p11s4card2Text3l");
    }
  }
};
</script>

<style>
.p11s4Tab {
  padding: 0.5em;
}
.p11s4Tab > .card-header{
  padding: 0em !important;
  background-color: transparent !important;
  border: 0 !important; 
}
.p11s4Tab .nav-link{ 
  border: 1px !important;
  border-bottom-width: 0.3em !important;
  border-color: gray !important;
  border-style: solid !important; 
  border-radius: 0.5rem !important;
  font-size: 0.9em !important; 
  padding: 0.6em 0.8em !important;
}
.p11s4Tab .nav-link.active{ 
  background-color:  #009090 !important;
  color: white !important;
}

.p11s4Tab a:hover{ 
  text-decoration: none !important;
}

.p11s4Tab .btnCardp11{ 
  border: 1px !important;
  border-bottom-width: 0.3em !important;
  border-color: gray !important;
  border-style: solid !important; 
  border-radius: 0.5rem !important;
  padding: 0.5em !important;
  margin-bottom: 0.5em;
  width: 3rem;
  height: 3rem;
}

.p11s4Tab .btnCardp11:hover{ 
  background-color:  #009090 !important;
  color: white !important;
}

.p11s4Tab .btnCardp11.active{ 
  background-color:  #009090 !important;
  color: white !important;
}
</style>

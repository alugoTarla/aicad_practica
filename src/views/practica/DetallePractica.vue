<template>
  <div class="detallePractica">
    <div class="wrapper" >
      <div class="wrapper" >
        <div class="dpfondoFwhite" :style="'background-image: url(' + practica.urlImg + ');'">
          <div class="overlay">
            <b-container fluid>
              <b-container>
                <br />
                <b-row align-v="center">
                  <b-col class="text-center">
                    <h2>Practica - {{practica.titulo}}, {{practica.destino}}</h2>
                    <br />
                  </b-col>
                </b-row>
                <br />
                <b-row align-v="center">
                  <b-col class="text-center">
                    <router-link :to="{name: 'page_pe15'}" class="btn buttonTurqueza">
                      <span>
                        <font-awesome-icon :icon="['fas','search']" />&nbsp;Buscador de Ofertas
                      </span>
                    </router-link>&nbsp;
                    <router-link
                      :to="{name: 'page_pe15', query: { destino: practica.destino, area: 'Todos'} }"
                      class="btn buttonTurqueza"
                    >
                      <span>
                        <font-awesome-icon :icon="['fas','map-marker-alt']" />
                        &nbsp;{{practica.destino}}
                      </span>
                    </router-link>&nbsp;
                    <router-link
                      :to="{name: 'page_pe15', query: { destino: 'Todos', area: practica.area} }"
                      class="btn buttonTurqueza"
                    >
                      <span>
                        <font-awesome-icon :icon="['fas','university']" />
                        &nbsp;{{practica.area}}
                      </span>
                    </router-link>&nbsp;
                    <router-link
                      :to="{name: 'page_pe15', query: { refPractica: practica.ref} }"
                      class="btn buttonTurqueza"
                    >
                      <span>
                        <font-awesome-icon :icon="['fas','info']" />
                        &nbsp;{{practica.ref}}
                      </span>
                    </router-link>
                    <br />
                  </b-col>
                </b-row>
                <br />
              </b-container>
            </b-container>
          </div>
        </div>
      </div>
      <Section />
      <div class="wrapper" >
        <div class="fondoWhite">
          <b-container fluid>
            <b-container>
              <br>
              <br>
              <h2>
                <span v-for="(item, index) in practica.contenido.pagTitle" :key="index">
                  <strong v-if="item.pagTituloF">{{item.pagTituloT}}</strong>
                  <span v-else>{{item.pagTituloT}}</span>
                </span>
              </h2>
              <b-row>
                <b-col md="8" sm="12">
                  <hr>
                  <h3>
                    {{practica.contenido.pagCont1.pagContTitulo}}
                  </h3>
                  <p class="text-justify" style="padding-bottom: 1em" 
                    v-for="(item, index) in practica.contenido.pagCont1.pagContTexto" 
                    :key="index">
                    {{item.pagContTextoT}}
                  </p>
                  <hr>
                  <h3>
                    {{practica.contenido.pagCont2.pagContTitulo}}
                  </h3>
                  <p class="text-justify" style="padding-bottom: 1em"
                    v-for="(item, index) in practica.contenido.pagCont2.pagContTexto" 
                    :key="index">
                    <span>{{item.pagContTextoT}}</span>
                  </p>
                  <ul style="padding-left: 1em" class="text-justify">
                    <li 
                    v-for="(item, index) in practica.contenido.pagCont2.pagContLista" 
                    :key="index">
                    {{item.pagContListaI}}
                    </li>
                  </ul>
                  <p class="text-justify" style="padding-bottom: 1em"
                    v-for="(item, index) in practica.contenido.pagCont2.pagContTexto1" 
                    :key="index">
                    <span>{{item.pagContTextoT}}</span>
                  </p>
                  <hr>
                  <h3>
                    {{practica.contenido.pagCont3.pagContTitulo}}
                  </h3>
                  <b-row>
                    <b-col md="6" sm="12">
                    <b-row>
                      <b-col sm="12"
                      v-for="(item, index) in practica.contenido.pagCont3.columna1" 
                      :key="index">
                        <div class="d-flex">
                          <div class="p-2">
                            <font-awesome-icon :icon="item.pagContIcon" size="lg"/>
                          </div>
                          <div class="p-2">
                            <strong>{{item.pagContIconT}}</strong>
                            <br>
                            <p class="p-2">
                              {{item.pagContIconD}}
                            </p>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                    </b-col>
                    <b-col md="6" sm="12">
                    <b-row>
                      <b-col sm="12"
                      v-for="(item, index) in practica.contenido.pagCont3.columna2" 
                      :key="index">
                        <div class="d-flex">
                          <div class="p-2">
                            <font-awesome-icon :icon="item.pagContIcon" size="lg"/>
                          </div>
                          <div class="p-2">
                            <strong>{{item.pagContIconT}}</strong>
                            <br>
                            <p class="p-2">
                              {{item.pagContIconD}}
                            </p>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                    </b-col>
                  </b-row>
                  <hr>
                  <h3>
                    {{practica.contenido.pagCont4.pagContTitulo}}
                  </h3>
                  <b-row>
                    <b-col md="6" sm="12">
                    <b-row>
                      <b-col sm="12"
                      v-for="(item, index) in practica.contenido.pagCont4.columna1" 
                      :key="index">
                        <div class="d-flex">
                          <div class="p-2">
                            <font-awesome-icon :icon="item.pagContIcon" size="lg"/>
                          </div>
                          <div class="p-2">
                            <strong>{{item.pagContIconT}}</strong>
                            <br>
                            <p class="p-2">
                              {{item.pagContIconD}}
                            </p>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                    </b-col>
                    <b-col md="6" sm="12">
                    <b-row>
                      <b-col sm="12"
                      v-for="(item, index) in practica.contenido.pagCont4.columna2" 
                      :key="index">
                        <div class="d-flex">
                          <div class="p-2">
                            <font-awesome-icon :icon="item.pagContIcon" size="lg"/>
                          </div>
                          <div class="p-2">
                            <strong>{{item.pagContIconT}}</strong>
                            <br>
                            <p class="p-2">
                              {{item.pagContIconD}}
                            </p>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="4" sm="12">
                  <b-card class="dpcard" >                    
                    <b-card-body class="text-center dpcardContentB">
                      <div class="p-2">
                        <h3>
                          ¿Cuál es la <strong>disponibilidad</strong> de esta oferta de práctica?
                        </h3>
                      </div>
                      <hr class="hrFondo2">
                      <div class="text-left">
                        <div>
                          <div>Referencia: {{practica.id}}</div> 
                          <br />
                          Disponible: <strong>{{practica.fecha}}</strong>
                          Durante : <strong>{{practica.plazo}} de duración</strong>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                  <br>
                  <div class="text-center">
                  <a class="btn buttonTurqueza" :href="dpsurl">
                    {{p15ssubtitlep6}}
                    <strong>{{p15ssubtitlep7}}</strong>
                  </a>
                  </div>
                  <br>
                    <div class="text-center">
                    <h3>
                      Opiniones de otros estudiantes
                    </h3>
                    <yt :idvideo="practica.idvideo"></yt>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/detallePractica/Section";
import yt from "@/components/utils/youtube";

export default {
  name: "DetallePractica",
  props: ["idpractica"],
  components: {
    Section,
    yt
  },
  data() {
    return {
      p15ssubtitlep6: "Regístrate",
      p15ssubtitlep7: "Encuentra tu práctica",
      dpsurl: "#",
      practica: "",
      practicaLoad: false
    };
  },
  methods: {
    buscarPractica: function(idpractica) {
      var urlPractica = "./datos/ofertasPractica.json";
      var config = {
        headers: {
          "cache-control": "no-cache"
        }
      };
      this.axios
        .get(urlPractica, config)
        .then(response => {
          var obj = JSON.parse(JSON.stringify(response.data));
          const practicaF = obj.item.filter(d => d.id == idpractica);
          this.practica = practicaF[0];
          this.practicaLoad = true;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.buscarPractica(this.idpractica);
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/master-postgrado/bootstrap.min.css";
@import "../../assets/css/master-postgrado/main.css";
@import "../../assets/css/stlProyecto.css";

.dpfondoFwhite {
  color: white;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  background-image: url("~@/assets/images/banners/background-aicad.png");
  padding: 0;
  vertical-align: middle;
  width: 100%;
}
.overlay {
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  padding: 2rem 0;
}

div.card.dpcard {
    padding: 0 !important;
    border-top-width: 0.4em; 
    border-top-color: gray; 
    border-top-style: solid; 
    border-radius: 1em;
    background-color: silver;
}

.dpcard .card-body{
  padding: 0.5em !important;
}

.dpcardContentB {
    position: relative;
    height: 40vh;
    top: 0;
    margin: 0;
}
</style>
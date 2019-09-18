<template>
  <div id="section1">
    <div class="p15s1fondoFwhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row align-v="center">
            <b-col>
              <br>
              <h2>
                {{tituloFiltrado}}
              </h2>
              <br>
              <b-row class="justify-content-md-center">
                <b-col md="4" sm="12"> 
                  <strong>{{labelDestino}}</strong>
                  <b-form-select v-model="destino" :options="destinos"></b-form-select>
                </b-col>
                <b-col md="4" sm="12">
                  <strong>{{labelArea}}</strong>
                  <b-form-select v-model="area" :options="areas"></b-form-select>
                </b-col>
              </b-row>
              <br>
            </b-col>
          </b-row>
          <br />
        </b-container>
      </b-container>
    </div>
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br>
          <h3>{{p15s1filtro}}</h3>
          <hr class="hrFondo2">
          <b-row>
            <b-col md="9" sm="12" order-md="2">
              <div v-for="(item, idx) in listaPractica" :key="idx">
                <router-link :to="{name: item.link, params: { idpractica: item.id} }" class="btn btnCard">
                  <b-card no-body class="p15s1card">
                    <b-row no-gutters align-v="center">
                      <b-col md="3" v-responsive.lg.xl>
                        <b-card-img :src="item.urlImgT" 
                          style="width: 10em; height: auto"
                          class="rounded-0" />
                      </b-col>
                      <b-col md="9" sm="12">
                        <b-card-body :title="item.titulo">
                          <b-card-text class="text-left">
                            <a class="btn buttonTurqueza">
                              {{item.destino}}
                            </a>
                            <b-row align-v="center">
                              <b-col style="padding: 0.3em">
                                <font-awesome-icon :icon="['fas','map-marker-alt']" />
                                {{item.ubicacion}}
                              </b-col>
                              <b-col style="padding: 0.3em">
                                <font-awesome-icon :icon="['fas','calendar-check']" />
                                {{item.fecha}}
                              </b-col>
                              <b-col style="padding: 0.3em">
                                <font-awesome-icon :icon="['fas','hourglass']" />
                                {{item.plazo}}
                              </b-col>
                              <b-col style="padding: 0.3em">
                                <font-awesome-icon :icon="['fas','info']" />
                                {{item.id}}
                              </b-col>
                            </b-row>
                            <p class="text-justify">
                              {{item.texto}}
                            </p>
                          </b-card-text>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </router-link>
              </div>
              <br>
              <div class="text-center">
              <b-pagination
                v-model="currentPage"
                :total-rows="nFiltro"
                :per-page="perPage"
              ></b-pagination>
              </div>
            </b-col>
            <b-col md="3" sm="12" order-md="1">
              <b-card no-body>
                <b-card-header>
                  <div class="d-flex">
                    <font-awesome-icon :icon="['fas','users']" />
                    {{filtroBusqT}}
                  </div>
                </b-card-header>
                <b-card-body>
                  <b-card-text>
                    <div class="form-group">
                      <label for="filtroBusqP1">{{filtroBusqP1}}</label>
                      <input type="text" class="form-control" 
                      v-model="filtroBusqP1p" name="filtroBusqP1" id="filtroBusqP1">
                    </div>
                    <div class="form-group">
                      <label for="filtroBusqP2">{{filtroBusqP2}}</label>
                      <b-form-select v-model="filtroBusqP2p" :options="tipos"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label for="filtroBusqP4">{{filtroBusqP4}}</label>
                      <input type="text" class="form-control" 
                      v-model="filtroBusqP4p" name="filtroBusqP4" id="filtroBusqP4">
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p15s1title: "Buscador de ofertas de practicas universitarias",
      p15s1titleBase: "Buscador de ofertas de practicas universitarias",
      p15s1titleCf: "Ofertas de práctica ",
      p15s1filtro: "Filtros aplicados: 0 ofertas disponibles de un total de 0",
      p15s1filtroBase: "Filtros aplicados: #FILTRO# ofertas disponibles de un total de #TOTAL#",
      labelDestino: "Destino",
      labelArea: "Área de práctica",
      destinos: [
        "Todos",
        "Alemania",
        "Austria",
        "España",
        "Francia",
        "Irlanda",
        "Italia",
        "Mexico",
        "Morocco",
        "Netherlands",
        "Portugal",
        "Reino Unido"
      ],
      areas: [
        "Todos",
        "Atención al cliente, RRPP y eventos",
        "Comercio y negociación",
        "Empresariales, finanzas y RRHH",
        "Enseñanza y educación",
        "Informática y tecnología",
        "Logística e Import Export",
        "Marketing, comunicación y networks",
        "Restaurante y cocina",
        "Técnicos e Ingeniería",
        "Traducción",
        "Turismo, recepción y animación"
      ],
      tipos: [
        "Todos",
        "Empresa",
        "Hotel",
        "Tienda"
      ],
      destino: "Todos",
      area: "Todos",
      nFiltro: 0,
      nTotal: 0,
      practicas: [],
      practicaLoad: false,
      currentPage: 1,
      perPage: 5,
      filtroBusqT: "Filtros de búsqueda",
      filtroBusqP1: "Palabras clave",
      filtroBusqP2: "Tipo de empresa",
      filtroBusqP3: "Inicio deseado",
      filtroBusqP4: "Busca por referencia",
      filtroBusqP1p: "",
      filtroBusqP2p: "Todos",
      filtroBusqP3p: "",
      filtroBusqP4p: "",
    }
  },
  methods: {
    filtradoS: function(item){
      var flag = true;
      if(!(item.area === this.area || this.area === "Todos")){
        flag = false;
      }
      if(!(item.destino === this.destino || this.destino === "Todos")){
        flag = false;
      }
      if(!(item.tipo === this.filtroBusqP2p || this.filtroBusqP2p === "Todos")){
        flag = false;
      }
      return flag;
    },
    filtradoP1: function(item){
      var flag = true;
      flag = item.texto.toUpperCase().includes(this.filtroBusqP1p.toUpperCase());
      flag = flag || item.titulo.toUpperCase().includes(this.filtroBusqP1p.toUpperCase());
      return flag;
    },
    filtradoP4: function(item){
      var flag = true;
      flag = item.ref.toUpperCase().includes(this.filtroBusqP4p.toUpperCase());
      return flag;
    },
    filtradoTitulo: function(){
      this.p15s1filtro = this.p15s1filtroBase
        .replace("#FILTRO#",this.nFiltro)
        .replace("#TOTAL#",this.nTotal)
      ;
    },
    setparametros: function(query){
      console.log(query)
      if(query.area && query.area != ""){
        this.area = query.area;
      }
      if(query.destino && query.destino != ""){
        this.destino = query.destino;
      }
      if(query.refPractica && query.refPractica != ""){
        this.filtroBusqP4p = query.refPractica;
      }
    },
    listaPracticaF: function(){
        var list = this.practicas.filter((item) => this.filtradoS(item));
        if(this.filtroBusqP1p != ""){
          list = list.filter((item) => this.filtradoP1(item));
        }
        if(this.filtroBusqP4p != ""){
          list = list.filter((item) => this.filtradoP4(item));
        }
        if(list){
          this.nFiltro = list.length;
        }
        this.filtradoTitulo();
        return list.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        );
    }, 
    buscaPracticas: function(){
      var urlPractica = "./datos/ofertasPractica.json";
      var config = {
        headers: {
          "cache-control": "no-cache"
        }
      };
      this.axios
        .get(urlPractica, config)
        .then(response => {
          const obj = JSON.parse(JSON.stringify(response.data));
          this.practicas = obj.item;
          this.nTotal = obj.item.length;
          this.filtradoTitulo();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    tituloFiltrado(){
      var titulo = "";
      if(this.area === "Todos" && this.destino === "Todos"){
        titulo = this.p15s1titleBase;
      }else if(this.destino != "" && this.area === "Todos"){
        titulo = this.p15s1titleCf + " en " + this.destino;
      }else if(this.area != "" && this.destino === "Todos"){
        titulo = this.p15s1titleCf + " de " + this.area;
      }else{
        titulo = this.p15s1titleCf + " de " + this.area + " en " + this.destino;
      }
      return titulo;
    },
    listaPractica(){
      return this.listaPracticaF();
    }
  },
  mounted() {
    this.buscaPracticas();
    const params = this.$route.query;
    this.setparametros(params);
  }
};
</script>

<style>
.p15s1fondoFwhite {
  color: white;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  background-image: url("~@/assets/images/banners/banner3.jpg");
  padding: 2rem 0;
  vertical-align: middle;
}

.p15s1card {
  margin: 0.5em;
}

.p15s1card .card-title{
  font-weight: bold !important;
  text-align: left !important; 
}

.btnCard:hover{
  text-decoration: none !important;
  opacity: .85;
  background-color: silver;
}
</style>

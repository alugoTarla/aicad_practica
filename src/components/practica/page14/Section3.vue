<template>
  <div id="section3">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            <span v-for="(item, index) in p14s3title" :key="index">
              <strong v-if="item.p14s3titleF">{{item.p14s3titleT}}</strong>
              <span v-else><br>{{item.p14s3titleT}}</span>
            </span>
          </h2>
          <br />
          <b-row>
            <b-col lg="4" md="6" sm="13" 
            v-for="(item, idx) in p14s3list" :key="idx"
            class="text-center" >
              <b-card class="p14card" footer-tag="footer">
                <b-card-header class="text-center p14cardContentH" >
                  <h3>
                    {{item.p14s3t1}}
                  </h3>
                  <h4>
                    {{item.p14s3t2}}
                  </h4>
                  <div class="p14cardImport">
                    {{item.p14s3p1}}
                  </div>
                </b-card-header>
                <b-card-body class="text-center p14cardContentB">
                  <div>
                    <a :href="item.p14s3url" class="btn buttonTurqueza">{{item.p14s3btn}}</a>
                  </div>
                  <br>
                  <div>
                    <h4>
                      <strong>{{item.p14s3p2}}</strong>{{item.p14s3p3}}
                      <span>
                        <b-button v-b-tooltip.left.hover="{ customClass: 'my-tooltip-class14' }" :title="item.p14s3tt" class="p14cardIcon">
                        <font-awesome-icon :icon='["fas","info-circle"]' size="2x"/>
                        </b-button>
                      </span>
                    </h4>
                  </div>
                </b-card-body>
                <b-card-footer class="text-center p14cardContentF">
                  <p>
                    {{item.p14s3p4}} <a @click="$bvModal.show('bm1p14s3')" 
                    style="text-decoration: underline !important;">{{item.p14s3plink}}</a>
                  </p>
                </b-card-footer>
              </b-card>
            </b-col>
          </b-row>
          
          <div>
            <b-modal id="bm1p14s3" 
              hide-footer 
              scrollable centered  >
              <br>
              <br>
              <div v-for="(item, idx) in m1p14s3" :key="idx" style="padding: 0 1em; padding-top: 1em;">
                <h3>
                  {{item.m1p14s3tt}}
                </h3>
                <p>{{item.m1p14s3tp}}</p>
                <ul style="padding-left: 1em;">
                  <li v-for="(item1, idx1) in item.m1p14s3ll" :key="idx1" >
                    {{item1.m1p14s3llitem}}
                    <ul v-if="item1.m1p14s3llitemf" style="padding-left: 1em;">
                      <li v-for="(item2, idx2) in item1.m1p14s3llitemSub" :key="idx2" >
                        {{item2}}                        
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </b-modal>  
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
    "p14s3title": [
      {
        "p14s3titleF": true,
        "p14s3titleT": "Insurance for Spanish in Spain"
      },
      {
        "p14s3titleF": false,
        "p14s3titleT": "No travel insurance"
      }
    ]
    , "p14s3list":[
      {
        "p14s3t1": "Up to 3 months"
        , "p14s3t2": "Insurance for SPANISH in Spain"
        , "p14s3p1": "90,06€"
        , "p14s3btn": "Get your policy!"
        , "p14s3url": "#"
        , "p14s3p2": "70,06€"
        , "p14s3p3": " for students who have obtained their internships through AICAD Business School. Check the conditions of this Insurance"       
        , "p14s3tt": "Any fraudulent use of the promotion by the user can result in the cancellation of the policy and the loss of the payment made"
        , "p14s3p4": "Check the conditions of this "
        , "p14s3plink": "insurance"
      },
      {
        "p14s3t1": "Up to 6 months"
        , "p14s3t2": "Insurance for SPANISH in Spain"
        , "p14s3p1": "94,63€"
        , "p14s3btn": "Get your policy!"
        , "p14s3url": "#"
        , "p14s3p2": "74,63€"
        , "p14s3p3": " for students who have obtained their internships through AICAD Business School. Check the conditions of this Insurance"
        , "p14s3tt": "Any fraudulent use of the promotion by the user can result in the cancellation of the policy and the loss of the payment made"
        , "p14s3p4": "Check the conditions of this "
        , "p14s3plink": "insurance"
      },
      {
        "p14s3t1": "Up to 9 months"
        , "p14s3t2": "Insurance for SPANISH in Spain"
        , "p14s3p1": "100,11€"
        , "p14s3btn": "Get your policy!"
        , "p14s3url": "#"
        , "p14s3p2": "80,11€"
        , "p14s3p3": " for students who have obtained their internships through AICAD Business School. Check the conditions of this Insurance"
        , "p14s3tt": "Any fraudulent use of the promotion by the user can result in the cancellation of the policy and the loss of the payment made"
        , "p14s3p4": "Check the conditions of this "
        , "p14s3plink": "insurance"
      }
    ]
    , "m1p14s3": [
      {
        "m1p14s3tt": "Liability and accident insurance"
        , "m1p14s3tp": ""
        , "m1p14s3ll": [
          {
            "m1p14s3llitem": "Civil Liability of the insured activity; € 150,000 or"
            , "m1p14s3llitemf": true
            , "m1p14s3llitemSub": [
                "Sublimit victim € 60,000 or"
              , "Franchise: € 150 or"
              , "Scope: Liabilities arising from damages incurred in any country in the world, except USA, Canada and Mexico, for claims made before the Courts of those countries"
            ]
          },
          {
            "m1p14s3llitem": "Bail Bonds and Defense"
            , "m1p14s3llitemf": false
            , "m1p14s3llitemSub": []
          },
          {
            "m1p14s3llitem": "Death due to an accident: € 30,000"
            , "m1p14s3llitemf": false
            , "m1p14s3llitemSub": []
          },
          {
            "m1p14s3llitem": "Permanent Partial Disability due to an accident: € 30,000"
            , "m1p14s3llitemf": false
            , "m1p14s3llitemSub": []
          },
          {
            "m1p14s3llitem": "Permanent Complete Disability due to an accident: € 30,000"
            , "m1p14s3llitemf": false
            , "m1p14s3llitemSub": []
          },
          {
            "m1p14s3llitem": "Healthcare assistance due to an accident: or"
            , "m1p14s3llitemf": true
            , "m1p14s3llitemSub": [
               "Unlimited in Concerted Centers. All INSALUD centers are considered concerted or"
              , "€ 1,500 in free choice."              
            ]
          }
        ]
      }
    ]
  },
  "es":{
    "p14s3title": [
      {
        "p14s3titleF": true,
        "p14s3titleT": "Seguros para españoles en España"
      },
      {
        "p14s3titleF": false,
        "p14s3titleT": "Sin cobertura de desplazamiento"
      }
    ]
    , "p14s3list":[
      {
        "p14s3t1": "Hasta 3 meses"
        , "p14s3t2": "Cobertura para ESPAÑOLES en España"
        , "p14s3p1": "90,06€"
        , "p14s3btn": "¡Obtén tu póliza!"
        , "p14s3url": "#"
        , "p14s3p2": "70,06€"
        , "p14s3p3": " para estudiantes que hayan obtenido sus prácticas a través de AICAD Business School."       
        , "p14s3tt": "Cualquier uso fraudulento de la promoción por parte del usuario puede acarrear la cancelación de la póliza y la pérdida del pago realizado"
        , "p14s3p4": "Consulta las condiciones de esta "
        , "p14s3plink": "cobertura"
      },
      {
        "p14s3t1": "Hasta 6 meses"
        , "p14s3t2": "Cobertura para ESPAÑOLES en España"
        , "p14s3p1": "94,63€"
        , "p14s3btn": "¡Obtén tu póliza!"
        , "p14s3url": "#"
        , "p14s3p2": "74,63€"
        , "p14s3p3": " para estudiantes que hayan obtenido sus prácticas a través de AICAD Business School."     
        , "p14s3tt": "Cualquier uso fraudulento de la promoción por parte del usuario puede acarrear la cancelación de la póliza y la pérdida del pago realizado"
        , "p14s3p4": "Consulta las condiciones de esta "
        , "p14s3plink": "cobertura"
      },
      {
        "p14s3t1": "Hasta 9 meses"
        , "p14s3t2": "Cobertura para ESPAÑOLES en España"
        , "p14s3p1": "100,11€"
        , "p14s3btn": "¡Obtén tu póliza!"
        , "p14s3url": "#"
        , "p14s3p2": "80,11€"
        , "p14s3p3": " para estudiantes que hayan obtenido sus prácticas a través de AICAD Business School."      
        , "p14s3tt": "Cualquier uso fraudulento de la promoción por parte del usuario puede acarrear la cancelación de la póliza y la pérdida del pago realizado"
        , "p14s3p4": "Consulta las condiciones de esta "
        , "p14s3plink": "cobertura"
      }
    ]
    , "m1p14s3": [
      {
        "m1p14s3tt": "Cobertura de responsabilidad civil y accidentes"
        , "m1p14s3tp": ""
        , "m1p14s3ll": [
          {
            "m1p14s3llitem": "Responsabilidad Civil de la actividad asegurada; 150.000€ o"
            , "m1p14s3llitemf": true
            , "m1p14s3llitemSub": [
                "Sublímite víctima 60.000€ o"
              , "Franquicia: 150€ o"
              , "Ámbito: responsabilidades derivadas de daños sobrevenidos en cualquier país del mundo, excepto USA, Canadá y México, por reclamaciones formuladas ante Tribunales de dichos países"
            ]
          },
          {
            "m1p14s3llitem": "Fianzas y Defensa"
            , "m1p14s3llitemf": false
            , "m1p14s3llitemSub": []
          },
          {
            "m1p14s3llitem": "Fallecimiento por accidente: 30.000€"
            , "m1p14s3llitemf": false
            , "m1p14s3llitemSub": []
          },
          {
            "m1p14s3llitem": "Invalidez Permanente Parcial por accidente: 30.000€"
            , "m1p14s3llitemf": false
            , "m1p14s3llitemSub": []
          },
          {
            "m1p14s3llitem": "Invalidez Permanente Absoluta por accidente: 30.000€"
            , "m1p14s3llitemf": false
            , "m1p14s3llitemSub": []
          },
          {
            "m1p14s3llitem": "Asistencia Sanitaria por accidente: o"
            , "m1p14s3llitemf": true
            , "m1p14s3llitemSub": [
               "Ilimitada en Centros Concertados. Todos los centros del INSALUD se consideran concertados o"
              , "1.500€ en libre elección."              
            ]
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
    };
  }, 
  computed: {
    p14s3title() {
      return this.$t("p14s3title");
    },
    p14s3list() {
      return this.$t("p14s3list");
    },
    m1p14s3() {
      return this.$t("m1p14s3");
    }
  }
};
</script>


<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            <span v-for="(item, index) in p14s2title" :key="index">
              <strong v-if="item.p14s2titleF">{{item.p14s2titleT}}</strong>
              <span v-else><br>{{item.p14s2titleT}}</span>
            </span>
          </h2>
          <br />
          <b-row>
            <b-col lg="4" md="6" sm="13" 
            v-for="(item, idx) in p14s2list" :key="idx"
            class="text-center" >
              <b-card class="p14card" footer-tag="footer">
                <b-card-header class="text-center p14cardContentH" >
                  <h3>
                    {{item.p14s2t1}}
                  </h3>
                  <h4>
                    {{item.p14s2t2}}
                  </h4>
                  <div class="p14cardImport">
                    {{item.p14s2p1}}
                  </div>
                </b-card-header>
                <b-card-body class="text-center p14cardContentB">
                  <div>
                    <a :href="item.p14s2url" class="btn buttonTurqueza">{{item.p14s2btn}}</a>
                  </div>
                  <br>
                  <div>
                    <h4>
                      <strong>{{item.p14s2p2}}</strong>{{item.p14s2p3}}
                      <span>
                        <b-button v-b-tooltip.left.hover="{ customClass: 'my-tooltip-class14' }" :title="item.p14s2tt" class="p14cardIcon">
                        <font-awesome-icon :icon='["fas","info-circle"]' size="2x"/>
                        </b-button>
                      </span>
                    </h4>
                  </div>
                </b-card-body>
                <b-card-footer class="text-center p14cardContentF">
                  <p>
                    {{item.p14s2p4}} <a @click="$bvModal.show('bm1p14s2')" 
                    style="text-decoration: underline !important;">{{item.p14s2plink}}</a>
                  </p>
                </b-card-footer>
              </b-card>
            </b-col>
          </b-row>
          
          <div>
            <b-modal id="bm1p14s2" 
              hide-footer 
              scrollable centered  >
              <br>
              <br>
              <div v-for="(item, idx) in m1p14s2" :key="idx" style="padding: 0 1em; padding-top: 1em;">
                <h3>
                  {{item.m1p14s2tt}}
                </h3>
                <p>{{item.m1p14s2tp}}</p>
                <ul style="padding-left: 1em;">
                  <li v-for="(item1, idx1) in item.m1p14s2ll" :key="idx1" >
                    {{item1.m1p14s2llitem}}
                    <ul v-if="item1.m1p14s2llitemf" style="padding-left: 1em;">
                      <li v-for="(item2, idx2) in item1.m1p14s2llitemSub" :key="idx2" >
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
    "p14s2title": [
      {
        "p14s2titleF": true,
        "p14s2titleT": "Insurance for foreign and Spanish students in Spain"
      },
      {
        "p14s2titleF": false,
        "p14s2titleT": "With travel coverage"
      }
    ]
    , "p14s2list":[
      {
        "p14s2t1": "Up to 3 months"
        , "p14s2t2": "Insurance for FOREIGNERS and SPANISH in Spain"
        , "p14s2p1": "151,06€"
        , "p14s2btn": "Get your policy!"
        , "p14s2url": "#"
        , "p14s2p2": "131,06€"
        , "p14s2p3": " for students who have obtained their internships through AICAD Business School."
        
        , "p14s2tt": "Any fraudulent use of the promotion by the user can result in the cancellation of the policy and the loss of the payment made"
        , "p14s2p4": "Check the conditions of this "
        , "p14s2plink": "insurance"
      },
      {
        "p14s2t1": "Up to 6 months"
        , "p14s2t2": "Insurance for FOREIGNERS and SPANISH in Spain"
        , "p14s2p1": "180,63€"
        , "p14s2btn": "Get your policy!"
        , "p14s2url": "#"
        , "p14s2p2": "160,63€"
        , "p14s2p3": " for students who have obtained their internships through AICAD Business School."       
        , "p14s2tt": "Any fraudulent use of the promotion by the user can result in the cancellation of the policy and the loss of the payment made"
        , "p14s2p4": "Check the conditions of this "
        , "p14s2plink": "insurance"
      },
      {
        "p14s2t1": "Up to 9 months"
        , "p14s2t2": "Insurance for FOREIGNERS and SPANISH in Spain"
        , "p14s2p1": "230,11€"
        , "p14s2btn": "Get your policy!"
        , "p14s2url": "#"
        , "p14s2p2": "210,11€"
        , "p14s2p3": " for students who have obtained their internships through AICAD Business School."       
        , "p14s2tt": "Any fraudulent use of the promotion by the user can result in the cancellation of the policy and the loss of the payment made"
        , "p14s2p4": "Check the conditions of this "
        , "p14s2plink": "insurance"
      }
    ]
    , "m1p14s2": [
      {
        "m1p14s2tt": "Liability and accident coverage"
        , "m1p14s2tp": ""
        , "m1p14s2ll": [
          {
            "m1p14s2llitem": "Civil Liability of the insured activity; € 150,000 or"
            , "m1p14s2llitemf": true
            , "m1p14s2llitemSub": [
              "Sublimit victim € 60,000 or"
              , "Franchise: € 150 or"
              , "Scope: Liabilities arising from damages incurred in any country in the world, except the USA, Canada and Mexico, for claims made before the Courts of those countries"
            ]
          },
          {
            "m1p14s2llitem": "Bail Bonds and Defense"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Death by accident: € 30,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Permanent Partial Disability due to accident: € 30,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Permanent Complete Disability due to accident: € 30,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Healthcare assistance for accident: or"
            , "m1p14s2llitemf": true
            , "m1p14s2llitemSub": [
              "Unlimited in Concerted Centers. All INSALUD centers are considered concerted or"
              , "€ 1,500 in free choice."
            ]
          }
        ]
      },
      {
        "m1p14s2tt": "Travel Insurance"
        , "m1p14s2tp": "This option adds the following insurance to the standard insurance:"
        , "m1p14s2ll": [
          {
            "m1p14s2llitem": "Medical and healthcare in Spain: € 2,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Medical and health assistance abroad: € 60,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Dental expenses: € 100"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Repatriation or health transport of the injured or sick: The total cost"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Convalescence in hotel: € 1,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Repatriation or transport of the deceased Insured: The total cost"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Early return due to death of a family member: The total cost"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Displacement in case of hospitalization of a family member> 5 days: The total cost"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Expenses of staying abroad: € 1,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Early return because of hospitalization> 5 days of a relative: The total cost"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Search, location and shipment of lost luggage: The total cost"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Urgent message transmission: Included"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Shipping of medicines abroad: The total cost"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Displacement of a family member in case of death: The total cost"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Information service: Included"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Legal information abroad: Included"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "24-hour Accident Death: € 50,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Invalidity Accidents 24 hours: € 50,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Private Civil Liability: € 60,000"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          }
        ]
      }
    ]
  },
  "es":{
    "p14s2title": [
      {
        "p14s2titleF": true,
        "p14s2titleT": "Seguros para estudiantes extranjeros y españoles en España"
      },
      {
        "p14s2titleF": false,
        "p14s2titleT": "Con cobertura de desplazamiento"
      }
    ]
    , "p14s2list":[
      {
        "p14s2t1": "Hasta 3 meses"
        , "p14s2t2": "Cobertura para EXTRANJEROS y ESPAÑOLES en España"
        , "p14s2p1": "151,06€"
        , "p14s2btn": "¡Obtén tu póliza!"
        , "p14s2url": "#"
        , "p14s2p2": "131,06€"
        , "p14s2p3": " para estudiantes que hayan obtenido sus prácticas a través de AICAD Business School."        
        , "p14s2tt": "Cualquier uso fraudulento de la promoción por parte del usuario puede acarrear la cancelación de la póliza y la pérdida del pago realizado"
        , "p14s2p4": "Consulta las condiciones de esta "
        , "p14s2plink": "cobertura"
      },
      {
        "p14s2t1": "Hasta 6 meses"
        , "p14s2t2": "Cobertura para EXTRANJEROS y ESPAÑOLES en España"
        , "p14s2p1": "180,63€"
        , "p14s2btn": "¡Obtén tu póliza!"
        , "p14s2url": "#"
        , "p14s2p2": "160,63€"
        , "p14s2p3": " para estudiantes que hayan obtenido sus prácticas a través de AICAD Business School."      
        , "p14s2tt": "Cualquier uso fraudulento de la promoción por parte del usuario puede acarrear la cancelación de la póliza y la pérdida del pago realizado"
        , "p14s2p4": "Consulta las condiciones de esta "
        , "p14s2plink": "cobertura"
      },
      {
        "p14s2t1": "Hasta 9 meses"
        , "p14s2t2": "Cobertura para EXTRANJEROS y ESPAÑOLES en España"
        , "p14s2p1": "230,11€"
        , "p14s2btn": "¡Obtén tu póliza!"
        , "p14s2url": "#"
        , "p14s2p2": "210,11€"
        , "p14s2p3": " para estudiantes que hayan obtenido sus prácticas a través de AICAD Business School."      
        , "p14s2tt": "Cualquier uso fraudulento de la promoción por parte del usuario puede acarrear la cancelación de la póliza y la pérdida del pago realizado"
        , "p14s2p4": "Consulta las condiciones de esta "
        , "p14s2plink": "cobertura"
      }
    ]
    , "m1p14s2": [
      {
        "m1p14s2tt": "Cobertura de responsabilidad civil y accidentes"
        , "m1p14s2tp": ""
        , "m1p14s2ll": [
          {
            "m1p14s2llitem": "Responsabilidad Civil de la actividad asegurada; 150.000€ o"
            , "m1p14s2llitemf": true
            , "m1p14s2llitemSub": [
              "Sublímite víctima 60.000€ o"
              , "Franquicia: 150€ o"
              , "Ámbito: responsabilidades derivadas de daños sobrevenidos en cualquier país del mundo, excepto USA, Canadá y México, por reclamaciones formuladas ante Tribunales de dichos países"
            ]
          },
          {
            "m1p14s2llitem": "Fianzas y Defensa"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Fallecimiento por accidente: 30.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Invalidez Permanente Parcial por accidente: 30.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Invalidez Permanente Absoluta por accidente: 30.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Asistencia Sanitaria por accidente: o"
            , "m1p14s2llitemf": true
            , "m1p14s2llitemSub": [
              "Ilimitada en Centros Concertados. Todos los centros del INSALUD se consideran concertados o"
              , "1.500€ en libre elección."
            ]
          }
        ]
      },
      {
        "m1p14s2tt": "Cobertura en desplazamientos"
        , "m1p14s2tp": "Esta opción agrega a la cobertura estándar las coberturas siguientes:"
        , "m1p14s2ll": [
          {
            "m1p14s2llitem": "Asistencia médica y sanitaria en España: 2.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Asistencia médica y sanitaria en el Extranjero: 60.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Gastos odontológicos: 100€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Repatriación o transporte sanitario de heridos o enfermos: La totalidad de su coste"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Convalecencia en hotel: 1.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Repatriación o transporte del Asegurado fallecido: La totalidad de su coste"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Regreso anticipado por fallecimiento de un familiar: La totalidad de su coste"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Desplazamiento de un familiar caso de hospitalización > 5 días: La totalidad de su coste"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Gastos de estancia en extranjero: 1.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Regreso anticipado por hospitalización > 5 días de un familiar: La totalidad de su coste"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Búsqueda, localización y envío de equipajes extraviados: La totalidad de su coste"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Transmisión de mensajes urgentes: Incluido"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Envío de medicamentos en el extranjero: La totalidad de su coste"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Desplazamiento de un familiar en caso de fallecimiento: La totalidad de su coste"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Servicio de información: Incluido"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Información legal en el extranjero: Incluido"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Fallecimiento Accidentes 24 horas: 50.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Invalidez Accidentes 24 horas: 50.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
          },
          {
            "m1p14s2llitem": "Responsabilidad Civil Privada: 60.000€"
            , "m1p14s2llitemf": false
            , "m1p14s2llitemSub": []
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
    p14s2title() {
      return this.$t("p14s2title");
    },
    p14s2list() {
      return this.$t("p14s2list");
    },
    m1p14s2() {
      return this.$t("m1p14s2");
    }
  }
};
</script>

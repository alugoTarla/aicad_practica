<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            <span v-for="(item, index) in p14s4title" :key="index">
              <strong v-if="item.p14s4titleF">{{item.p14s4titleT}}</strong>
              <span v-else><br>{{item.p14s4titleT}}</span>
            </span>
          </h2>
          <br />
          <b-row>
            <b-col lg="4" md="6" sm="13" 
            v-for="(item, idx) in p14s4list" :key="idx"
            class="text-center" >
              <b-card class="p14card" footer-tag="footer">
                <b-card-header class="text-center p14cardContentH" >
                  <h3>
                    {{item.p14s4t1}}
                  </h3>
                  <h4>
                    {{item.p14s4t2}}
                  </h4>
                  <div class="p14cardImport">
                    {{item.p14s4p1}}
                  </div>
                </b-card-header>
                <b-card-body class="text-center p14cardContentB">
                  <div>
                    <a :href="item.p14s4url" class="btn buttonTurqueza">{{item.p14s4btn}}</a>
                  </div>
                  <br>
                  <div>
                    <h4>
                      <strong>{{item.p14s4p2}}</strong>{{item.p14s4p3}}
                      <span>
                        <b-button v-b-tooltip.left.hover="{ customClass: 'my-tooltip-class14' }" :title="item.p14s4tt" class="p14cardIcon">
                        <font-awesome-icon :icon="item.p14s4icon" size="2x"/>
                        </b-button>
                      </span>
                    </h4>
                  </div>
                </b-card-body>
                <b-card-footer class="text-center p14cardContentF">
                  <p>
                    {{item.p14s4p4}} <a @click="$bvModal.show('m1p14s4')" 
                    style="text-decoration: underline !important;">{{item.p14s4plink}}</a>
                  </p>
                </b-card-footer>
              </b-card>
            </b-col>
          </b-row>
          
          <div>
            <b-modal id="m1p14s4" 
              hide-footer hide-header
              scrollable centered  >
              <div v-for="(item, idx) in m1p14s4" :key="idx" style="padding: 0 1em; padding-top: 1em;">
                <h3>
                  {{item.m1p14s4tt}}
                </h3>
                <p>{{item.m1p14s4tp}}</p>
                <ul style="padding-left: 1em;">
                  <li v-for="(item1, idx1) in item.m1p14s4ll" :key="idx1" >
                    {{item1.m1p14s4llitem}}
                    <ul v-if="item1.m1p14s4llitemf" style="padding-left: 1em;">
                      <li v-for="(item2, idx2) in item1.m1p14s4llitemSub" :key="idx2" >
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
    "p14s4title": [
      {
        "p14s4titleF": true,
        "p14s4titleT": "Insurance for Spaniards outside Spain"
      },
      {
        "p14s4titleF": false,
        "p14s4titleT": "With travel coverage"
      }
    ]
    , "p14s4list":[
      {
        "p14s4t1": "Up to 3 months"
        , "p14s4t2": "Insurance for SPANISH outside of Spain (within European Union)"
        , "p14s4p1": "166,06€"
        , "p14s4btn": "Get your policy!"
        , "p14s4url": "#"
        , "p14s4p2": "146,06€"
        , "p14s4p3": " for students who have obtained their internships through AICAD Business School."
        , "p14s4icon": ["fas","info-circle"]
        , "p14s4tt": "Any fraudulent use of the promotion by the user can result in the cancellation of the policy and the loss of the payment made"
        , "p14s4p4": "Check the conditions of this "
        , "p14s4plink": "insurance"
        , "p14s4lmodal": "m1p14s4"
      },
      {
        "p14s4t1": "Up to 6 months"
        , "p14s4t2": "Insurance for SPANISH outside of Spain (within European Union)"
        , "p14s4p1": "200,63€"
        , "p14s4btn": "Get your policy!"
        , "p14s4url": "#"
        , "p14s4p2": "180,63€"
        , "p14s4p3": " for students who have obtained their internships through AICAD Business School."
        , "p14s4icon": ["fas","info-circle"]
        , "p14s4tt": "Any fraudulent use of the promotion by the user can result in the cancellation of the policy and the loss of the payment made"
        , "p14s4p4": "Check the conditions of this "
        , "p14s4plink": "insurance"
        , "p14s4lmodal": "m1p14s4"
      },
      {
        "p14s4t1": "Up to 9 months"
        , "p14s4t2": "Insurance for SPANISH outside of Spain (within European Union)"
        , "p14s4p1": "230,11€"
        , "p14s4btn": "Get your policy!"
        , "p14s4url": "#"
        , "p14s4p2": "210,11€"
        , "p14s4p3": " for students who have obtained their internships through AICAD Business School."
        , "p14s4icon": ["fas","info-circle"]
        , "p14s4tt": "Any fraudulent use of the promotion by the user can result in the cancellation of the policy and the loss of the payment made"
        , "p14s4p4": "Check the conditions of this "
        , "p14s4plink": "insurance"
        , "p14s4lmodal": "m1p14s4"
      }
    ]
    , "m1p14s4": [
      {
        "m1p14s4tt": "Liability and accident insurance"
        , "m1p14s4tp": ""
        , "m1p14s4ll": [
          {
            "m1p14s4llitem": "Civil Liability of the insured activity; € 150,000 or"
            , "m1p14s4llitemf": true
            , "m1p14s4llitemSub": [
              "Sublimit victim € 60,000 or"
              , "Franchise: € 150 or"
              , "Scope: Liabilities arising from damages incurred in any country in the world, except USA, Canada and Mexico, for claims made before the Courts of those countries"
            ]
          },
          {
            "m1p14s4llitem": "Bail Bonds and Defense"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Death due to an accident: € 30,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Permanent Partial Disability due to an accident: € 30,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Permanent Complete Disability due to an accident: € 30,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Healthcare assistance due to an accident: or"
            , "m1p14s4llitemf": true
            , "m1p14s4llitemSub": [
              "Unlimited in Concerted Centers. All INSALUD centers are considered concerted or"
              , "€ 1,500 in free choice."
            ]
          }
        ]
      },
      {
        "m1p14s4tt": "Travel Insurance"
        , "m1p14s4tp": "This option adds the following insurance to the standard insurance:"
        , "m1p14s4ll": [
          {
            "m1p14s4llitem": "Medical and healthcare in Spain: € 2,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Medical and health assistance abroad: € 60,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Dental expenses: € 100"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Repatriation or health transport of the injured or sick: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Convalescence in hotel: € 1,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Repatriation or transport of the deceased Insured: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Early return due to death of a family member: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Displacement in case of hospitalization of a family member> 5 days: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Expenses of staying abroad: € 1,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Early return because of hospitalization> 5 days of a relative: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Search, location and shipment of lost luggage: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Urgent message transmission: Included"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Shipping of medicines abroad: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Displacement of a family member in case of death: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Information service: Included"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Legal information abroad: Included"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "24-hour Accident Death: € 50,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Invalidity Accidents 24 hours: € 50,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Private Civil Liability: € 60,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          }
        ]
      }
    ]
  },
  "es":{
    "p14s4title": [
      {
        "p14s4titleF": true,
        "p14s4titleT": "Seguros para españoles fuera de España"
      },
      {
        "p14s4titleF": false,
        "p14s4titleT": "Con cobertura de desplazamiento"
      }
    ]
    , "p14s4list":[
      {
        "p14s4t1": "Hasta 3 meses"
        , "p14s4t2": "Cobertura para ESPAÑOLES fuera de España (dentro de la Unión Europea)"
        , "p14s4p1": "166,06€"
        , "p14s4btn": "¡Obtén tu póliza!"
        , "p14s4url": "#"
        , "p14s4p2": "146,06€"
        , "p14s4p3": " para estudiantes que hayan obtenido sus prácticas a través de AICAD Business School."
        , "p14s4icon": ["fas","info-circle"]
        , "p14s4tt": "Cualquier uso fraudulento de la promoción por parte del usuario puede acarrear la cancelación de la póliza y la pérdida del pago realizado"
        , "p14s4p4": "Consulta las condiciones de esta "
        , "p14s4plink": "cobertura"
        , "p14s4lmodal": "m1p14s4"
      },
      {
        "p14s4t1": "Hasta 6 meses"
        , "p14s4t2": "Cobertura para ESPAÑOLES fuera de España (dentro de la Unión Europea)"
        , "p14s4p1": "200,63€"
        , "p14s4btn": "¡Obtén tu póliza!"
        , "p14s4url": "#"
        , "p14s4p2": "180,63€"
        , "p14s4p3": " para estudiantes que hayan obtenido sus prácticas a través de AICAD Business School."
        , "p14s4icon": ["fas","info-circle"]
        , "p14s4tt": "Cualquier uso fraudulento de la promoción por parte del usuario puede acarrear la cancelación de la póliza y la pérdida del pago realizado"
        , "p14s4p4": "Consulta las condiciones de esta "
        , "p14s4plink": "cobertura"
        , "p14s4lmodal": "m1p14s4"
      },
      {
        "p14s4t1": "Hasta 9 meses"
        , "p14s4t2": "Cobertura para ESPAÑOLES fuera de España (dentro de la Unión Europea)"
        , "p14s4p1": "230,11€"
        , "p14s4btn": "¡Obtén tu póliza!"
        , "p14s4url": "#"
        , "p14s4p2": "210,11€"
        , "p14s4p3": " para estudiantes que hayan obtenido sus prácticas a través de AICAD Business School."
        , "p14s4icon": ["fas","info-circle"]
        , "p14s4tt": "Cualquier uso fraudulento de la promoción por parte del usuario puede acarrear la cancelación de la póliza y la pérdida del pago realizado"
        , "p14s4p4": "Consulta las condiciones de esta "
        , "p14s4plink": "cobertura"
        , "p14s4lmodal": "m1p14s4"
      }
    ]
    , "m1p14s4": [
      {
        "m1p14s4tt": "Cobertura de responsabilidad civil y accidentes"
        , "m1p14s4tp": ""
        , "m1p14s4ll": [
          {
            "m1p14s4llitem": "Responsabilidad Civil de la actividad asegurada; 150.000€ o"
            , "m1p14s4llitemf": true
            , "m1p14s4llitemSub": [
              "Sublímite víctima 60.000€ o"
              , "Franquicia: 150€ o"
              , "Scope: Liabilities arising from damages incurred in any country in the world, except USA, Canada and Mexico, for claims made before the Courts of those countries"
            ]
          },
          {
            "m1p14s4llitem": "Bail Bonds and Defense"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Death due to an accident: € 30,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Permanent Partial Disability due to accident: € 30,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Permanent Complete Disability due to accident: € 30,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Healthcare assistance by accident: or"
            , "m1p14s4llitemf": true
            , "m1p14s4llitemSub": [
              "Unlimited in Concerted Centers. All INSALUD centers are considered concerted or"
              , "€ 1,500 in free choice."
            ]
          }
        ]
      },
      {
        "m1p14s4tt": "Travel Insurance"
        , "m1p14s4tp": "This option adds the following coverage to the standard insurance:"
        , "m1p14s4ll": [
          {
            "m1p14s4llitem": "Medical and healthcare in Spain: € 2,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Medical and health assistance abroad: € 60,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Dental expenses: € 100"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Repatriation or health transport of the injured or sick: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Convalescence in hotel: € 1,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Repatriation or transportation of the deceased Insured: All of its cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Early return due to death of a family member: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Displacement of a family memeber in case of hospitalization> 5 days: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Foreign stay expenses: € 1,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Early return for hospitalization> 5 days of a relative: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Search, location and shipment of lost luggage: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Urgent message transmission: Included"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Shipping of medicines abroad: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Displacement of a family member in case of death: The total cost"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Information service: Included"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Legal information abroad: Included"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "24-hour Accident Death: € 50,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Invalidity Accidents 24 hours: € 50,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
          },
          {
            "m1p14s4llitem": "Private Civil Liability: € 60,000"
            , "m1p14s4llitemf": false
            , "m1p14s4llitemSub": []
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
    p14s4title() {
      return this.$t("p14s4title");
    },
    p14s4list() {
      return this.$t("p14s4list");
    },
    m1p14s4() {
      return this.$t("m1p14s4");
    }
  }
};
</script>

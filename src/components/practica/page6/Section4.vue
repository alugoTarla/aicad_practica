<template>
  <div id="section4">
    <div class>
      <b-container fluid>
        <b-container class="text-center">
          <div>
            <br>
          <hr class="hrFondo2" />
          <br />
          <h2>{{$t("p6s4Title")}}</h2>
          <b-row class="justify-content-md-center" align-v="center">
            <b-col>
              <DoughnutChart :chartdata="datacollection" :options="options" />
            </b-col>
          </b-row>
          <br>
          <hr class="hrFondo2" />
          </div>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p6s4Title": "Discover the learning areas",
    "labels": [
        "Agriculture, flora and fauna",
        "Beauty and cosmetics",
        "Cooking and culinary",
        "Commerce and sale",
        "Business",
        "Pharmacy and Health",
        "Systems and technology",
        "Technicians and industry",
        "Tourism and hotels"
      ]
  },
  "es":{
    "p6s4Title": "Descubra las áreas de aprendizaje",
    "labels": [
        "Agricultura, flora y fauna",
        "Belleza y cosmética",
        "Cocina y culinaria",
        "Comercio y venta",
        "Empresariales",
        "Farmacia y salud",
        "Sistemas y tecnología",
        "Técnicos e industria",
        "Turismo y hoteles"
      ]
  }
}
</i18n>

<script>
import DoughnutChart from "@/components/charts/DoughnutChart";

export default {
  components: {
    DoughnutChart
  },
  data() {
    return {
      datacollection: {
        labels: this.$t("labels"),
        datasets: [
          {
            backgroundColor: [
              "#5472d2",
              "#50485b",
              "#cec2ab",
              "#fe6c61",
              "#b97ebb",
              "#6dab3c",
              "#5aa1e3",
              "#f4524d",
              "#f7be68"
            ],
            borderWidth: 1,
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10]
          }
        ]
      },
      options: {
        legend: {
          display: true
          , position: 'bottom'
        },
				animation: {
					animateScale: true,
					animateRotate: true
				},
        responsive: true,
        maintainAspectRatio: false
      }
    };
  }, 
  computed: {
    
  }
};
</script>


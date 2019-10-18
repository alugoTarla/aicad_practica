<template>
  <div id="section12">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br />
          <b-row>
            <b-col md="6" sm="12" order-sm="2" order-md="2">
              <hr class="hrFondo" />
              <h3>{{$t("p5s12title1")}}</h3>
              <br />
              <p>{{$t("p5s12desc1")}}</p>
              <p>{{$t("p5s12desc2")}}</p>
            </b-col>
            <b-col md="6" sm="12" order-sm="1" order-md="1">
              <b-img :src="p5s12img" class="p5Imagenes"></b-img>
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
    "p5s12title1": "10. The digital mouth-ear, the best promotion to continue growing",
    "p5s12desc1":
      "The excellence of our services for interns and companies, currently places us in a privileged place of trust, for this reason we take very good care of our support to continue with our professional quality.",
    "p5s12desc2": " " 
  },
  "es":{
    "p5s12title1": "10. El boca-oreja digital, la mejor promoción para seguir creciendo",
    "p5s12desc1":
      "La excelencia de nuestros servicios para becarios en prácticas y empresas, actualmente nos situan en un lugar de confianza privilegiado, por esta razón cuidamos muy bien nuestos soportes para seguir en alto con nuestra calidad profesional",
    "p5s12desc2": " "    
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s12img: require("@/assets/images/banners/bocaoreja.jpg")
    };
  }
};
</script>

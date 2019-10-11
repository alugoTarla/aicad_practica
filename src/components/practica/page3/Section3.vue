<template>
  <div id="section3">
    <div class="fondoWhite">
      <div class="wrapper">
        <b-container fluid>
          <b-container class="text-center">
            <br />
            <b-row>
              <b-col cols="12">
                <h2>{{$t("p3s3Title")}}</h2>
              </b-col>
              <b-col cols="12">
                <p class="text-justify">{{$t("p3s3Texto1")}}</p>
              </b-col>
            </b-row>
            <br />
          </b-container>
        </b-container>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p3s3Title": "Tell us more about yourself and we will help you choose the best position to grow professionally",
    "p3s3Texto1": "In AICAD Business School we offer you the opportunity to get acquainted with our offers that will allow you to enhance your skills and grow in the position that is most appropriate for your skills and knowledge. You will have first-hand working experience where we will help you become a competent and highly trained professional."
  },
  "es":{
    "p3s3Title": "Cuéntanos más sobre ti y te ayudaremos a elegir el mejor puesto para crecer profesionalmente",
    "p3s3Texto1": "En AICAD Business School te brindamos la oportunidad de conocer nuestras ofertas en entornos laborales que te permitirán potenciar tus habilidades y crecer en la posición que sea la más adecuada para tu área y conocimientos. Tendrás de primera mano la experiencia del mundo laboral con nosotros mientras te ayudamos a convertirte en un profesional competente y altamente capacitado."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p3s3Title: "Cuéntanos más sobre ti y te ayudaremos a elegir el mejor puesto para crecer profesionalmente",
      p3s3Texto1: "En AICAD Business School te brindamos la oportunidad de conocer nuestras ofertas en entornos laborales que te permitirán potenciar tus habilidades y crecer en la posición que sea la más adecuada para tu área y conocimientos. Tendrás de primera mano la experiencia del mundo laboral con nosotros mientras te ayudamos a convertirte en un profesional competente y altamente capacitado."
    }
  }
};
</script>

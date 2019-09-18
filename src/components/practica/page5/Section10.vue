<template>
  <div id="section10">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row>
            <b-col md="6" sm="12" class="text-left" order-sm="2" order-md="2">
              <hr class="hrFondo" />
              <h3 class="text-justify">{{$t("p5s10title1")}}</h3>
              <p class="text-justify">{{$t("p5s10desc1")}}</p>
              <br />
              <p class="text-justify">{{$t("p5s10desc2")}}</p>
            </b-col>
            <b-col md="6" sm="12"  order-sm="1" order-md="1">
              <b-img :src="p5s10img" class="p5Imagenes"></b-img>
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
    "p5s10title1": "8. Teachers who serve as ambassadors for AICAD help us publish and promote personalized offers in their live classes",
    "p5s10desc1":
      "Our experience in young talent selection and in search of interns has opened for a the doors of many universities throughout the world.",
    "p5s10desc2":
      "The direct and cordial relationship with professors and academic secretariats allows us to directly transmit to our teachers our announcements of internships and promote the interest of students reaching them through classroom or on the recommendation of their teachers."
  },
  "es":{
    "p5s10title1": "8. Profesores que hacen de embajadores de AICAD nos ayudan a publicar y promover en sus clases en vivo las ofertas personalizadas",
    "p5s10desc1":
      "Nuestros bagaje en procesos de selección de talento joven en busca de estudiantes de prácticas en empresas nos han abierto las puertas de muchas universidades al rededor del mundo.",
    "p5s10desc2":
      "Una relación directa y muy amigable  con profesores y secretarías académicas nos permite trasmitir directamente a los docentes nuestros anuncios de prácticas en empresas y promover el interés de los estudiantes llegando a ellos desde el salón de clases o bajo recomendación de sus enseñantes."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s10img: require("@/assets/images/banners/pexels-photo-1089549.jpg")
    };
  }
};
</script>

<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            {{$t("p5s2title1")}}
          </h2>
          <br />
          <p class="text-justify">
            {{$t("p5s2desc1")}} <strong>{{$t("p5s2desc1_1")}}</strong>
          </p>
          <p class="text-justify">
            {{$t("p5s2desc2")}}
          </p>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p5s2title1": "Ten clear strategies to find the best interns",
    "p5s2desc1":  "There are always faster ways to do things based on priorities. For this purpose, we offer you the VIP services for member companies. Here, we help you find interns that you need through",
    "p5s2desc1_1":  "10 actions aimed at optimizing the process of content creation, publication and promotion of advertisements so that you can then choose the best interns.",
    "p5s2desc2":  "VIP membership is created for companies that prioritize the outcomes and want to accelerate the selection process: Contact our experts or inform us about your interests so as we could help you in the publication processes"
  },
  "es":{
    "p5s2title1": "Diez estrategias claras para encontrar al mejor becario para prácticas",
    "p5s2desc1":  "Siempre hay maneras más rápidas para hacer las cosas y van en función a prioridades, por esta razón, ponemos a tu disposición los servicios para empresas membrería VIP, que te ayudan a encontrar estudiantes de prácticas que necesitas por medio de",
    "p5s2desc1_1":  "10 acciones orientadas a optimizar el proceso de creación del contenido, publicación y promoción de los anuncios para que luego te encargues de elegir a los mejores becarios.",
    "p5s2desc2":  "La membresía VIP están pensadas para las empresas que dan prioridad a los resultados y quieren ir más rápidos el proceso de selección: Contacta con nuestros expertos o infórmanos de tu interés para ayudarte en los procesos de publicación."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
    }
  }
};
</script>
<template>
  <div id="section7">
    <div class="p1s7fondoFwhite">
      <div class="wrapper">
        <b-container fluid class="p1s7carrusel">
          <b-container class="text-center">
            <carousel
              :autoplay="true"
              :autoplayTimeout="3000"
              :autoplayHoverPause="true"
              :loop="true"
              :perPage="1"
            >
              <slide v-for="(item, idx) in p1s7items" :key="idx">
                <div class="text-center carousel-fade">
                  <b-row align-h="end">
                    <b-col>
                      <br />
                      <br />
                      <h1>{{item.p1s7title}}</h1>
                      <br />
                      <blockquote>{{item.p1s7descript}}</blockquote>
                    </b-col>
                  </b-row>
                </div>
              </slide>
            </carousel>
          </b-container>
        </b-container>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p1s7items": [
			{
				"p1s7title":
					"Company seeks journalism fellow as a press and communication assistant",
				"p1s7descript":
					"Would you like to practice journalism in Madrid? register now"
			},
			{
				"p1s7title": "Human resources and personnel selection",
				"p1s7descript": "?"
			},
			{
				"p1s7title":
					"Intern needed for marketing and communication department",
				"p1s7descript":
					"Would you like to become an expert and develop your professional career, working in Madrid?"
			},
			{
				"p1s7title":
					"We are looking for a receptionist for customer service in Madrid hotel",
				"p1s7descript":
					"Are you passionate about the world of tourism, want to do internships in Madrid?"
			},
			{
				"p1s7title": "Marketing and Commercial Management Assistant",
				"p1s7descript":
					"Do you like business, marketing and communication? Start now, register and practice"
			},
			{
				"p1s7title": "Scholarship is sought as an audiovisual production assistant",
				"p1s7descript":
					"Would you like to work in the world of cinema, television or in production? Register and we help you make it possible!"
			}
		]
  },
  "es":{
    "p1s7items": [
			{
				"p1s7title":
					"Empresa busca becario periodista como asistente de prensa y comunicación",
				"p1s7descript":
					"¿Te gustaría hacer prácticas de periodismo en Madrid? ¡Regístrate ahora!"
			},
			{
				"p1s7title": "Recursos humanos y selección de personal",
				"p1s7descript": "¿?"
			},
			{
				"p1s7title":
					"Se selecciona becario para departamento Marketing y Comunicación ",
				"p1s7descript":
					"¿Te gustaría ser un experto y desarrollar tu carrera profesional, trabajando en Madrid?"
			},
			{
				"p1s7title":
					"Buscamos recepcionista para atención al cliente en hotel de Madrid",
				"p1s7descript":
					"¿Te apasiona el mundo del turismo, quierse hacer prácticas en Madrid?"
			},
			{
				"p1s7title": "Asistente de Marketing y gestión Comercial",
				"p1s7descript":
					"¿Te gustan los negocios, el marketing y la comunicación?, empieza ahora regístrate y haz prácticas"
			},
			{
				"p1s7title": "Se busca becario como asistente de producción audivisual",
				"p1s7descript":
					"¿Te gustaría trabajar en el mundo del cine, la televisión o en producción?, ¡regístrate y te ayudamos a hacerlo posible!"
			}
		]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
	},
	computed: {
		p1s7items() {
			return this.$t("p1s7items");
		}
	}
};
</script>

<style>
.p1s7fondoFwhite {
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: #2c3e50;
  background-image: url("~@/assets/images/banners/banner8.jpg");
}

.p1s7carrusel {
  vertical-align: middle;
}
</style>

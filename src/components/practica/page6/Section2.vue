<template>
  <div id="section2">
    <div class>
      <b-container fluid>
        <b-container  class="text-center">
          <br>
          <h2>
            {{$t("p6s2Title")}}
          </h2>
          <br>
          <div>
            <a class="btn buttonTurqueza-outline" rel="shadowbox" @click="displayRef('min1')">
              <span>
                <font-awesome-icon :icon="['fas', 'play-circle']" />
              </span>
              <span>
                {{$t("p6s2text")}}
              </span>
            </a>
            <silentbox-single
              id="min1"
              v-bind:src="p6s2Url"
              :autoplay="true"
              :hideControls="true"
              description>
              <div></div>
            </silentbox-single>
          </div>
          <br>
          <p class="text-justify">{{$t("p6s2descr")}}</p>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p6s2text": "Get to know us better in one minute",
    "p6s2Title": "AICAD Business School - Services, Coordination of Erasmus + programs and student mobility in Europe",
    "p6s2descr": "Receive advice about all the services that AICAD Business School offers regarding the management and organization of student groups, through mobility programs such as Erasmus +, to study centers and universities, State institutions and accredited agencies in Europe."
  },
  "es":{
    "p6s2text": "Conocenos mas en 1 min.",
    "p6s2Title": "AICAD Business School - Servicios, Coordinación de programas Erasmus+ y de movilidad estudiantil en Europa",
    "p6s2descr": "Recibe asesoría con respecto a todos los servicios que AICAD Business School ofrece en cuanto a la gestión y organización de grupos de estudiantes, por medio de programas de movilidad como Erasmus+, a centros de estudios y universidades, instituciones del Estado y agencias acreditadas en Europa."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p6s2Url: "https://www.youtube.com/watch?v=ss6xsz1tw30"
    }
  },
  methods: {
    displayRef(ref) {
      document.getElementById(ref).click();
    }
  }
};
</script>

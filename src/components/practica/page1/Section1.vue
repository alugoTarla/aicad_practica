<template>
  <div id="section1">
    <div class="fondoGrisClaro">
      <b-container fluid>
          <b-container>
            <br>
            <h2>
              <a href="#">{{$t("s1title")}}</a>
            </h2>
            <h4>
              {{$t("s1subtitlep1")}}
              <a
                :href="s1subtitlepurl"
                style="text-decoration: underline;"
              ><strong>{{$t("s1subtitlep2")}}</strong></a>
              {{$t("s1subtitlep3")}}
            </h4>
          </b-container>
        </b-container>
      <div class="wpb_wrapper">
        <iframe id="player" type="text/html" 
          :src="s1urlvideo"  frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "s1title": "Internships in companies anywhere in the world!",
    "s1subtitlep1": "AICAD opens the doors to the world of work!",
    "s1subtitlep2": "Choose the course to start",
    "s1subtitlep3": "and introduce yourself!"
  },
  "es":{
    "s1title": "Práctias en empresas en cualquier lugar del mundo!",
    "s1subtitlep1": "¡AICAD te abre las puertas al mundo laboral!",
    "s1subtitlep2": "Elige el curso para empezar",
    "s1subtitlep3": "y preséntate!"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      s1subtitlepurl: "http://jobs.aicad.es",
      s1urlvideo:
        "https://www.youtube.com/embed/zQxqpyQ4woM?"
        +"autoplay=1"
        +"&playlist=zQxqpyQ4woM"
        +"&loop=1"
        +"&autohide=1"
        +"&rel=1"
        +"&showinfo=0"
        +"&controls=1"
        +"&mute=1"
        +"&disablekb=1"
        +"&modestbranding=1"
        +"&volumen=0"
        +"&enablejsapi=1"
    }
  }
};
</script>

<style>
.wpb_wrapper {
  margin: 0;
  padding: 0;
  bottom: 0;
  width: 100%;
  height: 60vh;
}
.mascaraYT{
  position: relative;
  width: 100%;
  height: 60vh;
  left: 0; 
  box-sizing: border-box; 
}
.mscaraHYT{
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}
#player {
  width: 100%;
  max-width: 1000%; 
  height: 60vh;
}

</style>

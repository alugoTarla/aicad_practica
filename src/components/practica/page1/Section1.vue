<template>
  <div id="section1">
    <div class="fuck">
      <br />
      <b-container class="me pt-2">
        <h1>
          <a href="#">{{$t("s1title")}}</a>
        </h1>
        <h4>
          {{$t("s1subtitlep1")}}
          <a
            :href="s1subtitlepurl"
            style="text-decoration: underline;"
            target="_blank"
          >
            <strong>{{$t("s1subtitlep2")}}</strong>
          </a>
          {{$t("s1subtitlep3")}}
        </h4>
      </b-container>
    </div>
		<div style="background-color: black;">
			<video autoplay muted loop id="myVideo">
				<source src="../../../assets/full-width-video.mp4" type="video/mp4" />
			</video>
			<div class="content">
				<button id="myBtn" v-on:click="myFunction()">Pause</button>
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
      s1subtitlepurl: "https://jobs.aicad.es",
      
    };
  },
  methods: {
    myFunction() {
      var video = document.getElementById("myVideo");
      var btn = document.getElementById("myBtn");
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    }
  }
};
</script>

<style lang="scss">
.fuck {
  .me {
    background-color: rgba(1, 161, 255, 0.4);
  }
  padding: 1.5em 0;
  background-image: url("../../../assets/waves-background.jpg");
  text-align: center;
  a {
    text-decoration: none !important;
    color: white !important;
  }
  h4 {
    color: white !important;
    font-family: "Lato Heavy", sans-serif !important;
    font-size: 2rem;
  }
  h1 {
    color: white !important;
    font-family: "Lato Heavy", sans-serif !important;
    font-size: 2rem;
  }
}
#myVideo {
  position: relative;
  right: 0;
  bottom: 0;
  /*min-width: 100%;*/
  height: 75vh;
  width: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  /*float: right;*/
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 10px 0 10px;
  position: absolute;
  margin-top: -70px;
  max-height: calc(100vh - 100px);
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 15vh;
  max-width: 200px;
  font-size: 1rem;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
  /*cursor: pointer;*/
}

</style>

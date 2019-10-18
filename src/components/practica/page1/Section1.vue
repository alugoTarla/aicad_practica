<template>
  <div id="section1">
    <div class="fondoGrisClaro">
      <div class="mask"></div>
      <video autoplay muted loop id="myVideo">
        <source src="../../../assets/hd-video.mp4" type="video/mp4" />
      </video>
      <div class="content">
        <button id="myBtn" v-on:click="myFunction()">
          <font-awesome-icon :icon="icon" />
        </button>
      </div>
      <div class="fuck">
        <b-container class="me">
          <br />
          <h1>{{$t("s1title")}}</h1>
          <p>
            {{$t("s1subtitlep1")}}
            <a :href="s1subtitlepurl">
              <strong>{{$t("s1subtitlep2")}}</strong>
            </a>
            {{$t("s1subtitlep3")}}
          </p>
        </b-container>
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
      icon: "pause",
      s1subtitlepurl: "http://jobs.aicad.es"
    };
  },
  methods: {
    myFunction() {
      var video = document.getElementById("myVideo");
      if (video.paused) {
        video.play();
        this.icon = "pause";
      } else {
        video.pause();
        this.icon = "play";
      }
    }
  }
};
</script>

<style lang="scss">
.mask {
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(80, 177, 177, 0.5634628851540616) 100%
  ) !important;
  z-index: 1 !important;
  width: 100%;
  height: 100%;
  top: 0;
}
.fuck {
  text-align: center;
  position: absolute;
  z-index: 1;

  .me {
    background-color: rgba(1, 161, 255, 0.2);
    border-radius: 2em !important;
    padding: 0.5em 2.5em;
  }

  bottom: 5em;
  width: 100%;

  a {
    text-decoration: none !important;
    color: white !important;
    font-family: "Lato Black", sans-serif !important;
    font-size: 1em !important;
  }

  p {
    color: whitesmoke !important;
    font-family: "Lato Black", sans-serif !important;
    a {
      font-size: 1em !important;
    }
  }

  h1 {
    color: whitesmoke !important;
  }

  @media (max-width: 774px) {
    a,
    h4 {
      font-size: 1rem !important;
    }
    h1 {
      font-size: 2rem !important;
    }
  }
  @media (max-width: 425px) {
    a,
    h4 {
      font-size: 0.8rem !important;
    }
    h1 {
      font-size: 1.5rem !important;
    }
    .me {
      padding: 1.5em 2em 1.5em 4em;
    }
  }
}

#myVideo {
  margin-top: -1em;
  margin-bottom: -10px;
  position: relative;
  z-index: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  align-self: center;
}

/* Add some content at the bottom of the video/page */
.content {
  /*float: right;*/
  border-radius: 0 50px 50px 0;
  background: rgba(150, 150, 150, 0.5);
  padding: 10px 5px 10px 20px;
  position: absolute;
  z-index: 99;
  margin-top: -90px;
  /*bottom: calc(-150px + 150px + 400px);*/
  max-height: calc(100vh - 50px - 80px);
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 7vh;
  height: 7vh;
  border-radius: 3em;
  font-size: 1rem;
  top: calc(50% - 0.5em);
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

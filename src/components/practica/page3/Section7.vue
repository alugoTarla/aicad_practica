<template>
  <div id="section7">
    <div class="p3s7fondoFwhite">
      <div class="wrapper">
        <b-container>
          <b-container class="text-center">
            <br />
            <b-row align-v="center">
              <b-col>
                <b-row align-v="center">
                  <b-col>
                    <h1>{{$t("p3s7Title")}}</h1>
                    <br />
                    <h3>
                      {{$t("p3s7SubTitle1")}}
                      <strong>{{$t("p3s7SubTitle2")}}</strong>
                    </h3>
                    <br />
                    <b-row align-h="center">
                      <b-col
                        lg="4"
                        md="6"
                        sm="12"
                        class="text-center"
                        v-for="(item ,idx) of p3s7Red"
                        :key="idx"
                      >
                        <a
                          :href="item.s7Url"
                          :title="item.s7Nombre"
                          target="_back"
                          class="btn btnIcon"
                          :class="item.s7style"
                        >
                          <font-awesome-icon :icon="item.s7Icon" class="socialIcon7" />
                        </a>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
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
    "p3s7Title": "Share this with your friends!",
    "p3s7SubTitle1":
      "If you know of people who are potential candidates to fill these vacancies, share this information and tell them about us and what we do.",
    "p3s7SubTitle2": "We will be happy to receive them!"
  },
  "es":{
    "p3s7Title": "¡Comparte esto con tus amigos!",
    "p3s7SubTitle1":
      "Si sabes de personas que son candidatos potenciales para ocupar estas vacantes, comparte esta información y háblales de nosotros y lo que hacemos.",
    "p3s7SubTitle2": "¡Estaremos encantados de recibirlos!"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p3s7Red: [
        {
          s7Nombre: "Facebook",
          s7Url: "https://www.facebook.com/AICADBUSINESSSCHOOL",
          s7Icon: ["fab", "facebook-f"],
          s7style: "socialIcon7_facebook"
        },
        {
          s7Nombre: "Linkedin",
          s7Url: "https://www.linkedin.com/school/aicad-business-school/",
          s7Icon: ["fab", "linkedin-in"],
          s7style: "socialIcon7_linkedin"
        },
        {
          s7Nombre: "Twitter",
          s7Url: "https://twitter.com/ABusinessSchool",
          s7Icon: ["fab", "twitter"],
          s7style: "socialIcon7_twiter"
        }
      ]
    };
  }
};
</script>

<style>
.p3s7fondoFwhite {
  color: white;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  background-image: url("~@/assets/images/banners/background-aicad.png");
  padding: 2rem;
  vertical-align: middle;
}

.btnIcon {
  width: 5rem;
  height: 5rem;
  border-radius: 10em !important;
  background-color: darkgray;
  position: relative;
  margin: 1em;
}

.btnIcon .socialIcon7 {
  margin-top: 1rem;
  font-size: 2rem;
  color: white;
}

.socialIcon7_twiter {
  background-color: #1bb2e9 !important;
}

.socialIcon7_linkedin {
  background-color: #0e76a8 !important;
}

.socialIcon7_facebook {
  background-color: #3b5998 !important;
}
</style>

<template>
  <div class="wrapper">
    <div id="app">
      <div class="footer">
        <svg
          class="kampas-top"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style="background-color: #f3f3f3;margin-bottom:20px; height: 100px;width: 100%;"
        >
          <polygon fill="rgba(0,144,144,0.67)" points="0,100 100,0 0,0"></polygon>
        </svg>
        <div class="mainFooter">
          <div class="container">
            <div class="col-6 col-lg-4 footThreeCols oficinas">
              <div>
                <div class="d-flex">
                  <font-awesome-icon
                    :icon="['fas', 'building']"
                    style="font-size: 2rem; margin-top: 10px;"
                  />
                  <h2 style="font-size: 2rem; margin: 10px 0 0 10px; ">{{$t("office")}}</h2>
                </div>
                <div class="col-6 col-lg-6" style="display:inline-block;">
                  <ul class="officinas">
                    <li>
                      <a target="_blank" href="https://www.aicad.es/granada/"
                        >Granada</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/malaga/"
                        >Málaga</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/valladolid/"
                        >Valladolid</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/larioja/"
                        >La Rioja</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/alicante/"
                        >Alicante</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/coruna/"
                        >Coruña</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/barcelona/"
                        >Barcelona</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/lugones/"
                        >Lugones-Asturias</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-lg-6" style="display:inline-block;">
                  <ul class="officinas">
                    <li>
                      <a target="_blank" href="https://www.aicad.es/tenerife/"
                        >Tenerife</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicadbilbao.com/"
                        >Bilbao</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/castellon/"
                        >Castellón</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="http://www.aicad-madrid.es/"
                        >Madrid Juan-Bravo</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="http://www.aicad.do/"
                        >Rep. Dominicana</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/cuenca/"
                        >Cuenca</a
                      >
                    </li>
                    <li>
                      <a target="_blank" href="http://aicad.cr/">Costa Rica</a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.aicad.es/madrid/"
                        >Madrid</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 footThreeCols noSmallCall">
              <div style="height: 100px"></div>
            </div>
            <div
              class="col-10 col-sm-6 col-md-6 col-lg-4 footThreeCols contacts"
              style="text-align: left; vertical-align: top;"
            >
              <div
                class="footerCols"
                id="contactCol"
                style="margin-right: 0px;"
              >
                <div>
                  <a target="_blank" href="https://twitter.com/abusinessschool">
                    <font-awesome-icon
                      :icon="['fab', 'twitter']"
                      class="socialIcon"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/AICADBUSINESSSCHOOL/"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'facebook']"
                      class="socialIcon"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://es.linkedin.com/school/aicad-business-school/"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'linkedin']"
                      class="socialIcon"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCAAyP3cFOQMINoUAoyLvCIw"
                  >
                    <font-awesome-icon
                      :icon="['fab', 'youtube']"
                      class="socialIcon"
                    />
                  </a>
                </div>
                <div class="phoneDiv">
                  <a href="tel:+5218112593552" class="footerNumber"
                    >+5218112593552</a
                  >
                  <span>MÉXICO</span>
                </div>
                <div class="phoneDiv">
                  <a href="tel:+18496242332" class="footerNumber">849 624 2332</a>
                  <span>REPÚBLICA DOMINICANA</span>
                </div>
                <div class="phoneDiv">
                  <a href="tel:5023315492" class="footerNumber"
                    >+502 33154792</a
                  >
                  <span>GUATEMALA</span>
                </div>
                <div class="phoneDiv">
                  <a href="tel:+593983062916" class="footerNumber"
                    >+593 98 306 2916</a
                  >
                  <span>ECUADOR</span>
                </div>
                <div class="phoneDiv">
                  <a href="tel:+50660287700" class="footerNumber"
                    >+506 6028 7700</a
                  >
                  <span>COSTA RICA</span>
                </div>
                <div class="phoneDiv">
                  <a href="tel:+390256569394" class="footerNumber"
                    >+39 02 5656 9394</a
                  >
                  <span>ITALIA</span>
                </div>
                <div class="phoneDiv">
                  <a href="tel:+4915773344100" class="footerNumber"
                    >+49 15 77 33 44 100</a
                  >
                  <span>ALEMANIA</span>
                </div>
                <div class="btnEnviar formPie"></div>
              </div>
            </div>
            <Map />
          </div>
        </div>
        <svg
          class="kampas"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style="background-color: #f3f3f3;margin-bottom:20px; height: 100px;width: 100%;transform: scale(1, -1);"
        >
          <polygon fill="white" points="0,100 100,0 0,0"></polygon>
        </svg>
        <a class="angleUp" v-scroll-to="'#app'">
          <font-awesome-icon
            class="doubleUpIcon"
            :icon="['fas', 'angle-double-up']"
          />
        </a>
        <div class="subFooter">
          <div class="beforeFooterEnd" style="    margin-bottom: 30px;">
            <div style="width:60%; margin:auto;">
              <div class="twoCols">
                <div class="title-effect">
                  <span
                    class="first"
                    style="display: block;text-transform: uppercase;color: #333; font-size:36px;line-height: 25px;"
                    >Get</span
                  >
                  <!-- <span class="is" style="text-transform: uppercase;font-weight: 700;line-height: 44px;color: #333;font-size:48px">Get the best of</span> -->
                  <div
                    class="rw-words rw-words-1"
                    style="letter-spacing: normal;color: #333;text-transform: uppercase;font-weight: 700;line-height: 44px;font-size:48px;display: inline;"
                  >
                    <span style="position: absolute; animation-delay: 0s"
                      >more</span
                    >
                    <span style="position: absolute; animation-delay: 2s"
                      >the best</span
                    >
                    <span style="position: absolute; animation-delay: 4s"
                      >the best</span
                    >
                  </div>
                  <hr
                    style="margin-top: 25px;visibility: hidden;margin-bottom: 0px;"
                  />
                  <span
                    class="title-effect-sub"
                    style="line-height: 2.4em;font-size: 22px;text-transform: lowercase;color: #666;font-weight: 400;white-space: nowrap;"
                    >of human talent</span
                  >
                </div>
              </div>
              <div class="twoCols" style="text-align: right;">
                <img src="../assets/images/footLogos.png" />
              </div>
            </div>
          </div>
          <div class="footerEnd">
            <div style="width: 60%;margin: auto;display:flex;flex-wrap:wrap;">
              <a
                target="_blank"
                href="https://www.aicad.es/aviso-legal-privacidad/"
                >{{$t("pdp")}}</a
              >
              <a target="_blank" href="https://www.aicad.es/delegaciones/"
                >{{$t("d")}}</a
              >
              <a
                target="_blank"
                href="https://www.aicad.es/condiciones-de-contratacion/"
                >{{$t("cg")}}</a
              >
              <a
                target="_blank"
                href="https://www.aicad.es/politica-de-cookies/"
                >{{$t("pdc")}}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <AcceptCookies />
  </div>
</template>

<i18n>
{
  "en":{
    "office": "Offices",
    "pdp": "Privacy Policy",
    "d": "Delegations",
    "cg": "General conditions",
    "pdc": "Cookies policy"
  },
  "es":{
    "office": "Oficinas",
    "pdp": "Política de privacidad",
    "d": "Delegaciones",
    "cg": "Condiciones generales",
    "pdc": "Política de cookies"
  }
}
</i18n>

<script>
import Map from "./Map";
import AcceptCookies from "@/components/AcceptCookies";

export default {
  components: {
    Map
    , AcceptCookies
  }
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

.ck.ck-content.ck-editor__editable {
  min-height: 250px;
  text-align: left;
}

/* Remove styles from ckeditor */
.contentp h1,
.contentp h2,
.contentp h3 {
  display: none;
}

.rowas {
  width: 100%;
}

.container {
  /* width: 80%; */
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

.title p {
  font-weight: 300;
  font-size: 2em;
  margin: 10px;
  padding: 10px 0;
  color: #232323;
  text-transform: uppercase;
  font-family: "open sans condensed", Arial, sans-serif;
  text-align: left;
  letter-spacing: -4px;
}

.title p span {
  font-weight: 700;
  color: #0070aa;
  margin-top: -12px;
}

figure.image img {
  max-width: 100%;
}

figcaption {
  font-size: 1em;
  color: #696969;
}

figure.image.image-style-side {
  float: right;
  margin: 0px 10px;
}

.content p figure div {
  width: 100%;
}

.routerLink:hover {
  text-decoration: none;
}

.footerEnd {
  line-height: 60px;
  background: #f2f2f2;
  text-align: center;
}

.footerEnd a {
  color: #666;
  font-size: 1em;
  padding: 0 15px 0 0;
}

.subFooter .twoCols {
  display: inline-block;
  width: 49%;
}

.beforeFooterEnd .title-effect .rw-words-1 span {
  animation-name: rotateWordsFirst;
  animation-duration: 6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  opacity: 0;
  margin-left: -4px;
}

/* Change words in botoom footer influence message */
@keyframes rotateWordsFirst {
  0% {
    opacity: 0;
    animation-timing-function: linear;
    height: 0;
  }
  8% {
    opacity: 1;
    /* height: 60px; */
  }
  19% {
    opacity: 1;
    /* height: 60px; */
  }
  40% {
    opacity: 0;
    /* height: 60px; */
  }
  100% {
    opacity: 0;
  }
}

.title-effect {
  text-align: left;
}

@media screen and (max-width: 767px) {
  .twoCols img {
    visibility: hidden;
  }
}

.mainFooter {
  /* height: 380px; */
  /* background: #f3f3f3; */
  margin-top: -120px;
  background: #f3f3f3 url(../assets/images/footerImage.png) no-repeat;
  background-position: 90% 50%;
  background-size: contain;
  margin-top: -70px;
}

.socialIcon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 12px;
  border: 2px solid black;
  color: black;
}

.footerCols a {
  margin-right: 5px;
  line-height: 7px;
}

.footerNumber {
  display: block;
  font-weight: 700;
  color: black;
  letter-spacing: 1px;
  margin-top: 15px;
  font-size: 1em;
  line-height: 1.5rem !important;
}

.phoneDiv {
  margin-bottom: 15px;
}

.footerCols span {
  color: black;
  font-size: 1em;
  letter-spacing: 1px;
}

.footThreeCols {
  display: inline-block;
  margin-top: 30px;
  text-align: right;
}

ul.officinas {
  list-style: none;
}

.officinas a {
  color: black;
  /* font-size: 15px; */
  font-size: 1.2rem;
}

.angleUp {
  position: relative;
  float: right;
  margin-right: 18%;
  margin-top: -60px;
  cursor: pointer;
}

.angleUp .socialIcon {
  color: white;
  border-color: white;
  background: black;
}

.btnEnviar a {
  border: 3px solid black;
  float: left;
  width: 100%;
  padding: 11px 10px;
  text-align: left;
  color: black;
  text-decoration: none;
}

.btnEnviar {
  width: 45%;
  color: black;
  font-size: 1.em;
  background: transparent;
  margin-bottom: 6px;
  float: left;
}

.formPie {
  width: 30%;
  margin-top: 10px;
  margin-right: 12px;
}

@media screen and (max-width: 991px) {
  .noSmallCall {
    display: none;
  }

  .mainFooter {
    background: #f3f3f3;
  }

  .cm-footer__map-container {
    display: none;
  }
}

@media screen and (max-width: 575px) {
  .oficinas {
    display: none;
  }

  .contacts {
    text-align: center !important;
  }

  .formPie {
    width: 50%;
    margin-right: auto;
    margin-left: auto;
  }

  .formPie a {
    text-align: center;
  }
}

.oficinas h1 {
  font-weight: 300;
  font-size: 1.5em;
  margin: 10px;
  color: #232323;
  font-family: "open sans condensed", Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: -2px;
  text-align: left;
}

svg.socialIcon:hover {
  border-color: #333;
  transition: 0.3s ease;
}

svg.socialIcon {
  transition: 0.3s ease;
}

svg.socialIcon.svg-inline--fa.fa-youtube.fa-w-18:hover {
  color: red;
}

svg.socialIcon.svg-inline--fa.fa-facebook.fa-w-14:hover {
  color: #3c5a99;
}

svg.socialIcon.svg-inline--fa.fa-twitter.fa-w-16:hover {
  color: #1bb2e9;
}

svg.socialIcon.svg-inline--fa.fa-linkedin.fa-w-14:hover {
  color: #006699;
}

a.footerNumber {
  text-decoration: none;
  transition: 0.3s ease;
}

a.footerNumber:hover {
  opacity: 0.6;
  transition: 0.3s ease;
}

.btnEnviar a:hover {
  transform: scale(1.05);
  transition: 0.3s ease;
  color: black !important;
}

.btnEnviar a {
  transition: 0.3s ease;
}

.doubleUpIcon {
  border-radius: 50%;
  padding: 12px;
  width: 40px;
  height: 40px;
  color: white;
  background: black;
}

svg.doubleUpIcon:hover {
  opacity: 0.8;
  transition: 0.3s ease;
}

svg.doubleUpIcon {
  transition: 0.3s ease;
}

.officinas a:hover {
  opacity: 0.8;
  transition: 0.3s ease;
}

.officinas a {
  transition: 0.3s ease;
}

@media screen and (max-width: 1219px) {
  .formPie {
    width: 40%;
  }
}

.mainFooter {
  padding-top: 75px;
}
</style>

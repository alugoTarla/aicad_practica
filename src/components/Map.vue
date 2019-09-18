<template>
  <div class="cm-footer__map-container">
    <div class="cm-footer__dot cm-footer__dot--dominicana">
      <a
        class="cm-footer__dot-link"
        v-b-tooltip.hover
        title="Republica Dominicana"
      ></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--mexico">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Mexico"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--ecuador">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Ecuador"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--guatemala">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Guatemala"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--colombia">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Colombia"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--costarica">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Costa Rica"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--peru">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Peru"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--panama">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Panama"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--germany">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Alemania"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--italy">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Italia"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--poland">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Polonia"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--austria">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Austria"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--switzerland">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Suiza"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--romania">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Rumanía"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--madrid">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Madrid"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--alicante">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Alicante"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--barcelona">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Barcelona"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--malaga">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Málaga"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--galicia">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Galicia"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--grancanaria">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Gran Canaria"></a>
    </div>
    <div class="cm-footer__dot cm-footer__dot--tenerife">
      <a class="cm-footer__dot-link" v-b-tooltip.hover title="Tenerife"></a>
    </div>
  </div>
</template>

<style>
.cm-footer__map-container {
  top: 15px;
  left: 90px;
  position: relative;
  width: 730px;
  height: 470px;
  margin: 0 auto;
  background: url("../assets/new_imgs/map.png") no-repeat bottom;
  background-size: 100%;
  pointer-events: none;
}

@media (max-width: 767px) {
  .cm-footer__map-container {
    top: -220px;
  }
}

.cm-footer__map {
  width: 100%;
}

.cm-footer__dot {
  position: relative;
  display: inline-block;
  pointer-events: auto;
}

.cm-footer__dot,
.cm-footer__dot:before {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #017e7c80;
}

.cm-footer__dot:before {
  top: 0;
  left: 0;
  position: absolute;
  content: "";
  z-index: 1;
  display: block;
  animation: dot-ripple 5s linear infinite;
}

.cm-footer__dot--dominicana {
  top: 61.5%;
  left: 26.5%;
  position: absolute;
}

.cm-footer__dot--mexico {
  top: 57.5%;
  left: 16.5%;
  position: absolute;
}

.cm-footer__dot--costarica {
  top: 64.7%;
  left: 21.9%;
  position: absolute;
}

.cm-footer__dot--colombia {
  top: 68%;
  left: 26.3%;
  position: absolute;
}

.cm-footer__dot--ecuador {
  top: 72%;
  left: 24.5%;
  position: absolute;
}

.cm-footer__dot--guatemala {
  top: 62.2%;
  left: 18.9%;
  position: absolute;
}

.cm-footer__dot--peru {
  top: 76.5%;
  left: 26.2%;
  position: absolute;
}

.cm-footer__dot--panama {
  top: 67%;
  left: 24%;
  position: absolute;
}

.cm-footer__dot--germany {
  top: 46%;
  left: 49%;
  position: absolute;
}

.cm-footer__dot--italy {
  top: 50%;
  left: 50.5%;
  position: absolute;
}

.cm-footer__dot--poland {
  top: 44%;
  left: 53%;
  position: absolute;
}

.cm-footer__dot--austria {
  top: 47%;
  left: 52%;
  position: absolute;
}

.cm-footer__dot--switzerland {
  top: 49%;
  left: 48.5%;
  position: absolute;
}

.cm-footer__dot--romania {
  top: 48%;
  left: 54%;
  position: absolute;
}

.cm-footer__dot--madrid {
  top: 51%;
  left: 45%;
  position: absolute;
}

.cm-footer__dot--alicante {
  top: 52.1%;
  left: 46%;
  position: absolute;
}

.cm-footer__dot--barcelona {
  top: 50.4%;
  left: 46.2%;
  position: absolute;
}

.cm-footer__dot--malaga {
  top: 53.4%;
  left: 45%;
  position: absolute;
}

.cm-footer__dot--galicia {
  top: 49.5%;
  left: 44.3%;
  position: absolute;
}

.cm-footer__dot--grancanaria {
  top: 58%;
  left: 41%;
  position: absolute;
}

.cm-footer__dot--tenerife {
  top: 57.8%;
  left: 40.2%;
  position: absolute;
}

.cm-footer__dot:first-of-type::before {
  animation-delay: 0.1s;
}

.cm-footer__dot:nth-of-type(2):before {
  animation-delay: 0.2s;
}

.cm-footer__dot:nth-of-type(3):before {
  animation-delay: 0.3s;
}

.cm-footer__dot:nth-of-type(4):before {
  animation-delay: 0.4s;
}

.cm-footer__dot:nth-of-type(5):before {
  animation-delay: 0.5s;
}

.cm-footer__dot:nth-of-type(6):before {
  animation-delay: 0.6s;
}

.cm-footer__dot:nth-of-type(7):before {
  animation-delay: 0.7s;
}

.cm-footer__dot:nth-of-type(8):before {
  animation-delay: 0.8s;
}

.cm-footer__dot:nth-of-type(9):before {
  animation-delay: 0.9s;
}

.cm-footer__dot:nth-of-type(10):before {
  animation-delay: 1s;
}

.cm-footer__dot:nth-of-type(11):before {
  animation-delay: 1.1s;
}

.cm-footer__dot:nth-of-type(12):before {
  animation-delay: 1.2s;
}

.cm-footer__dot:nth-of-type(13):before {
  animation-delay: 1.3s;
}

.cm-footer__dot:nth-of-type(14):before {
  animation-delay: 1.4s;
}

.cm-footer__dot:nth-of-type(15):before {
  animation-delay: 1.5s;
}

.cm-footer__dot:nth-of-type(16):before {
  animation-delay: 1.6s;
}

.cm-footer__dot:nth-of-type(17):before {
  animation-delay: 1.7s;
}

.cm-footer__dot:nth-of-type(18):before {
  animation-delay: 1.8s;
}

.cm-footer__dot:nth-of-type(19):before {
  animation-delay: 1.9s;
}

.cm-footer__dot:nth-of-type(20):before {
  animation-delay: 2s;
}

.cm-footer__dot:nth-of-type(21):before {
  animation-delay: 2.1s;
}

.cm-footer__dot-link {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1000;
  display: block;
  cursor: pointer;
}

@keyframes dot-ripple {
  to {
    opacity: 0;
    transform: scale(6);
  }
}

.tooltip-inner {
  font-size: 1.4rem;
}
</style>

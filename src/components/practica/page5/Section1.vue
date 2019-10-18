<template>
  <div id="section1">
    <div class="p5s1fondoFwhite">
      <b-container fluid>
        <b-container class="text-center pt-5">
          <br />
          <h1>{{$t("p5s1title1")}}</h1>
          <br>
          <p>
            {{$t("p5s1title2")}}
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
    "p5s1title1": "Get VIP membership!",
    "p5s1title2": "Post multitude offers find interns without borders"
  },
  "es":{
    "p5s1title1": "¡Consigue membresía VIP!",
    "p5s1title2": "Publica multitud de ofertas encuentra becarios sin fronteras"
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

<style lang="scss">
.p5s1fondoFwhite {
  h1 {
    padding: 1em;
  };
  color: whitesmoke;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-image: linear-gradient(rgba(0,0,0,0.50)), url("~@/assets/new_imgs/Banner-membresia-vip2.jpg");
  // background-image: linear-gradient(rgba(0,0,0,0.50)), url("~@/assets/new_imgs/Banner-membresia-vip.jpg");
  min-height: 500px;
}
</style>

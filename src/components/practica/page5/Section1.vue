<template>
  <div id="section1">
    <div class="p5s1fondoFwhite">
      <b-container fluid>
        <b-container>
          <br />
          <b-row align-v="center" align-h="center">
            <b-col md="9" sm="12" class="text-center">
              <br>
              <h1 style="font-size: 3em !important;">{{$t("p5s1title1")}}</h1>
              <br>
              <h1>
                <div>
                  {{$t("p5s1title2")}}
                </div>   
                <div>
                  {{$t("p5s1title3")}}
                </div> 
              </h1>     
              <br>         
            </b-col>
          </b-row>
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
    "p5s1title2": "Post multitude offers",
    "p5s1title3": "Find interns without borders"
  },
  "es":{
    "p5s1title1": "¡Consigue membresía VIP!",
    "p5s1title2": "Publica multitud de ofertas",
    "p5s1title3": "Encuentra becarios sin fronteras"
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
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    /*background: #00000033;*/
    border-radius: 1em;
    padding: 0.5em;
  };
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(0deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.50) 100%), url("~@/assets/new_imgs/Banner-membresia-vip.jpg");
  min-height: 500px;
  height: auto;
}
</style>

<template>
  <div id="section">
    <div class="wrapper">
      <div class="fondoSilver">
        <b-container fluid>
          <b-container>
            <br />
            <b-row align-v="center">
              <b-col md="8">
                <h2>{{p15ssubtitlep4}}</h2>
                <p>{{p15ssubtitlep5}}</p>
              </b-col>
              <b-col md="4" class="text-center">
                <a class="btn buttonTurqueza" :href="p15surl">
                  {{p15ssubtitlep6}}
                  <strong>{{p15ssubtitlep7}}</strong>
                </a>
              </b-col>
            </b-row>
          </b-container>
        </b-container>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p15surl: "http://jobs.aicad.es",
      p15ssubtitlep4: "Envía tu CV y prepárate para una primera entrevista",
      p15ssubtitlep5:
        "Regístrate y abre una cuenta personal, ¡es gratis y te tomará unos segundos!",
      p15ssubtitlep6: "Regístrate",
      p15ssubtitlep7: "Encuentra tu práctica"
    }
  }
};
</script>

<style>

</style>

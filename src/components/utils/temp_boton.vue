<template>
  <div id="tb">
    <div class="wrapper">
      <div class="fondoSilver">
        <b-container fluid>
          <b-container>
            <br />
            <b-row align-v="center">
              <b-col md="8" sm="12">
                <h2>{{TBtxt1}}</h2>
                <p>{{TBtxt2}}</p>
              </b-col>
              <b-col md="4" sm="12" class="text-center">
                <a class="btn buttonTurqueza" :href="TBurl" target="_blank">
                  {{TButton1}}
                  <strong>{{TButton2}}</strong>
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
  props: ["TBtxt1", "TBtxt2", "TButton1", "TButton2", "TBurl"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>

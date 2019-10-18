<template>
  <div id="tb">
    <div class="fondoSilver">
      <b-container fluid>
        <b-container>
          <br />
          <div>
            <div class="text-center">
              <h2>{{TBtxt1}}</h2>
              <p>{{TBtxt2}}</p>
            </div>
            <div class="text-center">
              <a class="btn buttonTurqueza" :href="TBurl" target="_blank">{{TButton1}}</a>
            </div>
            <div class="buttonfix2">
              <strong>{{TButton2}}</strong>
            </div>
          </div>
        </b-container>
      </b-container>
      <br />
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

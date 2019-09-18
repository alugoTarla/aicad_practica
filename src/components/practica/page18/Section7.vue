<template>
  <div id="section7">
    <div class="fondoWhite" >
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            <strong>{{p18s7titulo}}</strong>
          </h2>
          <b-row>
            <b-col md="4" sm="12" class="text-center"
            v-for="(item, idx) in p18s7lista" :key="idx">
              <b-img :src="item.img" style="height: 5em"/>
              <blockquote>
                {{item.text}}
              </blockquote>
              <h4>
                <strong>
                  {{item.suject}}
                </strong>
              </h4>
            </b-col>
          </b-row>
          <br>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p18s7titulo: "Historias de éxito: Las mejores universidades ya cuentan con nuestra colaboración"
      , p18s7lista: [
        {
          img: ""
          , text: ""
          , suject: ""
        },
        {
          img: ""
          , text: ""
          , suject: ""
        },
        {
          img: ""
          , text: ""
          , suject: ""
        },
        {
          img: ""
          , text: ""
          , suject: ""
        },
        {
          img: ""
          , text: ""
          , suject: ""
        },
        {
          img: ""
          , text: ""
          , suject: ""
        }
      ]
    };
  }
};
</script>
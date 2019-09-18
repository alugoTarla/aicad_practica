<template>
  <div id="section8">
    <div class="fondoWhite" >
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row align-h="center" align-v="center">
            <b-col md="7" sm="12">
              <h2 class="text-left">
              <blockquote>
                <span v-for="(item, idx) in p18s8titulo" :key="idx" class="mb-1">
                  <strong v-if="item.textS">
                    {{item.text}}
                  </strong>
                  <span v-else>
                    {{item.text}}
                  </span>
                </span>
              </blockquote>
              </h2>
              <p class="text-justify">
                <span v-for="(item, idx) in p18s8texts" :key="idx">
                  <strong v-if="item.textS">
                    {{item.text}}
                  </strong>
                  <span v-else>
                    {{item.text}}
                  </span>
                </span>
              </p>
              <h3 class="text-left">
                {{p18s8texts1}}
              </h3>
            </b-col>
            <b-col md="5" v-responsive.md.lg.xl
             class="p18s8imgfondo" :style="'background-image: url(' + p18s8Img + ');'">
            </b-col>
          </b-row>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p18s8titulo: [
        {
          textS: false
          , text: ""
        }
      ],
      p18s8texts: [
        {
          textS: true
          , text: ""
        },
        {
          textS: false
          , text: ""
        }
      ],
      p18s8texts1: "",
      p18s8Img: require("@/assets/images/banners/banner_p3_1.jpg")
    };
  }
};
</script>

<style>
.p18s8imgfondo{
    background-size: cover;
    height: 16em;
}
</style>
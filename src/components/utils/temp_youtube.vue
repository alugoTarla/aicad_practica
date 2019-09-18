<template>
  <div id="section">
    <div class="fondoGrisClaro">
      <b-container fluid>
          <b-container class="text-center">
            <br />
            <h2>
              <span v-for="(item, idx) in titles" :key="idx">
                <strong v-if="item.titleS">
                  {{item.title}}
                </strong>
                <span v-else>
                  {{item.title}}
                </span>
              </span>
            </h2>
            <b-row class="justify-content-md-center" align-v="center">
              <b-col lg="4" md="6" sm="12" class="text-center" v-for="(item ,idx) of videos" :key="idx">
                <yt :idvideo="item" :key="idx" :activo="activo"></yt>
              </b-col>
            </b-row>
            <br />
          </b-container>
        </b-container>
    </div>
  </div>
</template>

<script>
import yt from "@/components/utils/youtube";
export default {
  components: {
    yt
  },
  props: ["titles","videos","activo"],
  data() {
    return {
    }  
  }
};
</script>

<template>
  <div id="section">
    <div class="fondoWhite">
      <div class="wrapper">
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
            <div style="margin: 1em;">
              <carousel
                :autoplay="true"
                :autoplayTimeout="2000"
                :autoplayHoverPause="true"
                :loop="true"
                :perPageCustom="[[480, 2], [768, 3], [980, 5], [1500, 7]]"
              >
                <slide v-for="(item, idx) in unis" :key="idx">
                  <div style="padding: 1em;" 
                    v-b-tooltip="{ customClass: 'my-tooltip-class' }" :title="item.uniTitle">
                    <a :href="item.uniUrl" class="if-image" target="_blank">
                    <b-img :src="item.uniImg" ></b-img>  
                    </a>
                  </div>
                </slide>
              </carousel>
            </div>
            <br />
          </b-container>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titles","unis"],
  data() {
    return {
      slide: 0,
      sliding: null
    };
  }
};
</script>

<style>
.my-tooltip-class > div{
  font-size: 1.1em !important;
  font-weight: 500;
}
</style>

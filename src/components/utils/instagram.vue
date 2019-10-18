<template>
  <div class="cardd1" style="background-color: white; padding: 0.5em; border-radius: 1em;">
     <br>
    <iframe :src="urlPublicacion" class="iframeIG"
     frameborder="0" scrolling="no" allowtransparency="true"></iframe>
     <br>
  </div>
</template>

<script>
export default {
  props: ["idinstagram"],
  data: () => ({
    urlPublicacion: ""
  }),
  mounted() {
    this.urlPublicacion = "https://www.instagram.com/p/" + this.idinstagram + "/embed";
  }
};
</script>

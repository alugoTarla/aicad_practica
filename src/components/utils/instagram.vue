<template>
  <div>
    <iframe :src="urlPublicacion" class="iframeIG"
     frameborder="0" scrolling="no" allowtransparency="true"></iframe>
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

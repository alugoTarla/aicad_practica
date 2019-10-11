<template>
  <div class="home">
    <div class="wrapper">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  created() {
    var itemName = 'page_pe1_'+this.$i18n.locale;
    this.$router.push({ name: itemName });
  }
};
</script>
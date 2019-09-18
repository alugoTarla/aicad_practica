<template>
  <div class="nav" :class="[isNavOpen ? 'nav-open' : '']">
    <font-awesome-icon
      :icon="['fas', 'times']"
      class="menu-bars close"
      @click="$emit('toggleMenu')"
    />
    <ul class="main-menu">
      <li v-for="n in page_pe" :key="(n)" 
          @click="menuClicked('page_pe'+n)">{{ $t('message.pe.page'+n) }}</li>      
    </ul>
  </div>
</template>

<script>
export default {
  props: ["isNavOpen"],
  data() {
    return {
      page_pe: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18]
    }
  },
  methods: {
    menuClicked(itemName) {
      if (itemName === "home") this.$router.push({ path: "/" });
      else {
        itemName += '_'+this.$i18n.locale;
        if (itemName.includes("page_pe")) this.$router.push({ name: itemName });
      }
      this.$emit("toggleMenu");
    }
  }
};
</script>

<style scoped lang="scss">
/* Nav styles */
.nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 37vw;
  background: #242424;
  z-index: 2;
  transform: translateX(100%);
  transition: 0.4s ease-in;
  color: white;
  padding-top: 3em;
  padding-left: 5vh;
}

.nav.nav-open {
  transform: translateX(0%);
  text-align: left;
  overflow: auto;
}

.nav li {
  text-transform: uppercase;
  border-bottom: 1px solid #646363;
  width: 100%;
  margin-bottom: 1em;
  cursor: pointer;
}

.nav li:hover {
  color: #646363;
}

.nav ul.main-menu {
  list-style-type: none;
  width: 90%;
}

.nav .close {
  color: white;
  position: absolute;
  top: 0.5em;
  right: 1em;
  cursor: pointer;
}

ul.dropdown {
  list-style-type: none;
  margin-bottom: 0.5em;

  li {
    border-bottom: none;
    text-transform: none;
  }
}

ul.dropdown2 {
  list-style-type: none !important;
  padding: 0 !important;
  width: 100% !important;
  li {
    margin-left: 1em !important;
    border-bottom: none !important;
    text-transform: none !important;
  }
}
ul.dropdown1 {
  padding: 0 !important;
  width: 100% !important;
}

.dropdown1 li {
  text-transform: uppercase !important;
  border-bottom: 1px solid #646363 !important;
  width: 100% !important;
  margin-left: 1em !important;
  cursor: pointer;
}

.icon-down {
  float: right;
}

@media screen and (max-width: 767px) {
  .nav {
    width: 100%;
  }
}
</style>
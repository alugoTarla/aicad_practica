<template>
  <div class="wrapper">
    <header>
      <b-container fluid>
        <div class="icon-menu text-center">
          <div class="text-center" style="margin: 0.5em 0.7em" @click="toggleMenu">
            {{$t('message.menu')}}        
            <br />
            <font-awesome-icon :icon="['fas', 'bars']" size="lg"/>  
          </div>        
        </div>
        <Menu :isNavOpen="isNavOpen" @toggleMenu="toggleMenu" />
        <div class="icon-lang text-center">
          <ul class="idiomas">
            <li>
              <a v-bind:class="[language == 'es' ? 'activeLang' : '']" 
              name="es" @click="changeLanguage('es')" class="langText">
              <b-img src="icon/es.png" />
              </a>
            </li>
            &nbsp;
            <li><a v-bind:class="[language == 'en' ? 'activeLang' : '']" 
              name="en" @click="changeLanguage('en')" class="langText">
              <b-img src="icon/en.png" />
              </a>
            </li>
          </ul>
        </div>
      </b-container>
    </header>
    <!--
    <div class="lang">
      
    </div>
    -->
  </div>
</template>

<script>
import Menu from './Menu';

export default {
  components: {
    Menu
  },
  data() {
    return {
      language: '',
      isNavOpen: false,
    }
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language; 
      this.language = language;  
      let comp = this.$route.name;
      let flag = false;
      if (this.language == "es" && comp.endsWith("_en")){
        comp = comp.replace("_en","_es");
        flag = true;
      } 
      if (this.language == "en" && comp.endsWith("_es")){
        comp = comp.replace("_es","_en");
        flag = true;
      } 
      if(flag){
        this.$router.push({ name: comp });
      }
    },
    toggleMenu() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
  mounted() {
    this.language = this.$i18n.locale;
  }
}
</script>

<style scoped lang="scss">
header {
  background-color: silver;
  //background: url(../assets/images/team-header.jpg) repeat top center;
  //height: 28vh;
  padding: 0 20rem;
}

.cheader {
  text-align: left;
}

header .logo {
  left: 15vw;
  position: absolute;
  padding: 1rem;
  z-index: 8;
}

@supports(object-fit: cover){
    header .logo{
      width: auto;
      height: 25vh;
      padding: 1rem;
      z-index: 8;
      object-fit: cover;
      object-position: center center;
    }
}

.lang {
  position: relative;
  top: -10px;
  margin-bottom: -55px;
  background: transparent;
  text-align: center;
}

.idiomas {
  margin-bottom: 0;
}

.langText {
  cursor: pointer;
}

.idiomas li {
  display: inline-block;
}

.idiomas li a:hover {
  /* color: #e1c9ca !important; */
  text-decoration: underline;
}

.activeLang {
  font-weight: 600;
}

.container {
  display: flex;
  justify-content: space-between;
}

.menu-bars {
  margin: auto 0;
  font-size: 2rem;
  cursor: pointer;
  opacity: 0.8;
  text-align: center;
  line-height: 1.5rem;
}

.menu-bars p {
  margin: 0;
  font-size: 1rem;
}

.menu-bars:hover {
  opacity: 1;
}

header .icon-menu {
  width: auto;
  height: 4.5em;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 12vw;
  z-index: 9;
  background-color: #0088CA;
  border-bottom-left-radius: 1.2em;
  border-bottom-right-radius: 1.2em;
  color: white;
  padding: 0.2em 0 0.4em;
  font-size: 0.75em; 
}

.icon-menu:hover {
  opacity: 0.8;
}

header .icon-lang {
  width: auto;
  height: 1em;
  cursor: pointer;
  // position: absolute;
  position: fixed;
  top: 0;
  left: 12vw;
  z-index: 9;
}
</style>
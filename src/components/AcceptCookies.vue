<template>
  <div
    class="cookies-wrapper"
    :class="isClosed ? 'cookies-wrapper__close' : ''"
  >
    <div class="container d-flex justify-content-center flex-wrap">
      <div class="left text-center">
        {{$t("text1")}}
        <a target="_blank" href="https://www.aicad.es/politica-de-cookies/">
          Cookies.
        </a>
      </div>
      <div class="right">
        <div>
          <span class="btn-accept" @click="accept">
            {{$t("accept")}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "text1": "By continuing to browse, you accept our policy of"
    , "accept": "Accept"
  },
  "es":{
    "text1": "Al seguir navegando, aceptas nuestra política de"
    , "accept": "Aceptar"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      isClosed: false
    };
  },
  methods: {
    accept() {
      localStorage.setItem("acceptedCookies", true);
      this.isClosed = true;
    }
  },
  mounted() {
    if (localStorage.getItem("acceptedCookies")) {
      this.isClosed = localStorage.getItem("acceptedCookies");
    }
  }
};
</script>

<style lang="scss">
.cookies-wrapper {
  background: #2e363f;
  width: 100%;
  position: fixed;
  z-index: 10;
  padding: 10px;
  transition: all 1s ease-out;
  bottom: 0;
  &__close {
    bottom: -105px;
  }
  .left {
    color: white;
    font-size: 1.3rem;
    text-align: left;
    a {
      color: white;
      font-weight: 600;
      text-decoration: underline;
    }
  }
  .btn-accept {
    color: white;
    cursor: pointer;
    border-radius: 3px;
    background: #45ae52;
    padding: 4px 10px;
    font-size: 1.3rem;
    &:hover {
      background: rgb(82, 148, 90);
    }
  }
  @media screen and (min-width: 767px) {
    .left {
      margin-right: 25px;
    }
  }
}
</style>

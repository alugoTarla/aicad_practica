<template>
  <div id="section3">
    <div class="fondoGrisClaro">
      <b-container fluid>
        <b-container>
          <br />
          <b-row align-v="center" align-h="center">
            <b-col md="8" sm="12" class="text-center">
              <h2>{{$t("s3title")}}</h2>
              <br />
              <p>
                {{$t("s3subtitle1")}}
                <br />
                {{$t("s3subtitle2")}}
              </p>
              <br />
              <a class="btn buttonTurqueza-outline" @click="menuClicked('page_pe2')">
                {{$t("s3button")}}
                &nbsp;
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </a>
              <br />
            </b-col>
          </b-row>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "s3title": "Find internships in 3 steps!",
    "s3subtitle1": "Register, approve and confirm",
    "s3subtitle2": "Get your internship in companies in two or three weeks",
    "s3button": "Find out how it works"
  },
  "es":{
    "s3title": "¡Encuentra en 3 pasos prácticas en empresas!",
    "s3subtitle1": "Registrate, aprueba y confirma",
    "s3subtitle2": "Consigue tus prácticas en empresas en dos o tres semanas",
    "s3button": "Infórmate cómo funciona"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    menuClicked(itemName) {
      itemName += '_'+this.$i18n.locale;
      if (itemName.includes("page_pe")) this.$router.push({ name: itemName });
    }
  }
};
</script>

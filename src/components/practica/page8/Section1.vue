<template>
  <div id="section1">
    <div class="fondoGris" style="padding: 0 !important;">
      <div class="wrapper">
        <carousel
          :autoplay="true"
          :autoplayTimeout="3000"
          :autoplayHoverPause="true"
          :loop="true"
          :perPage="1"
					:paginationEnabled="false"
					class=""
        >
          <slide v-for="(item, idx) in p8s1items" :key="idx">
            <div>
              <div class="text-center p8s1sliderIMG">
                <b-img :src="p8s1itemsI[idx].p8s1img"></b-img>
              </div>
              <div class="p8s1sliderFoo">
                <h2>{{item.p8s1title}}</h2>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p8s1items": [
      {
        "p8s1title":
          "Offers of university internships in companies and hotels in Germany"
      },
      {
        "p8s1title":
          "Offers of university internships in companies and hotels in Spain"
      },
      {
        "p8s1title":
          "Offers of university internships in companies and hotels in France"
      },
      {
        "p8s1title":
          "Offers of university internships in companies and hotels in Mexico"
      }
    ]
  },
  "es":{
    "p8s1items": [
      {
        "p8s1title":
          "Ofertas de prácticas universitarias en empresas y hoteles en Alemania"
      },
      {
        "p8s1title":
          "Ofertas de prácticas universitarias en empresas y hoteles en España"
      },
      {
        "p8s1title":
          "Ofertas de prácticas universitarias en empresas y hoteles en Francia "
      },
      {
        "p8s1title":
          "Ofertas de prácticas universitarias en empresas y hoteles en México"
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      p8s1itemsI: [
        {
          p8s1img: require("@/assets/images/banners/page8/alemania.jpg")
				},
        {
          p8s1img: require("@/assets/images/banners/page8/spain.jpg")
        },
        {
          p8s1img: require("@/assets/images/banners/page8/francia.jpg")
        },
        {
          p8s1img: require("@/assets/images/banners/page8/mexico.jpg")
        }
      ]
    };
  },
  computed: {
    p8s1items() {
      return this.$t("p8s1items");
    }
  }
};
</script>

<style lang="scss">
.p8s1sliderIMG {
	top: 0;
	left: 0;
	position: relative;
}

.p8s1sliderIMG img{
	top: 0;
  left: 0;
	width: 100%;
  height: 500px;
	object-fit: cover;
  object-position: center;
  background: rgba(0,0,0,0.5);
}

.p8s1sliderFoo {
  top: -4em;
  bottom: 1em;
  position: relative;
  background: rgba(0,0,0,0.5);
  margin: 0 0 -10em;
  h2 {
    @media (max-width: 1024px) {
      font-size: 1.75em !important;
    }
    @media (max-width: 768px) {
      font-size: 1.5em !important;
    }
    @media (max-width: 425px) {
      font-size: 1.1em !important;
    }
    padding: 1em 0.5em !important;
  }
}
</style>

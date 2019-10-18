<template>
  <div id="section1">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br />
          <h2>
            <span v-for="(item, index) in p13s1title" :key="index">
              <strong v-if="item.p13s1titleF">{{item.p13s1titleT}}</strong>
              <span v-else>{{item.p13s1titleT}}</span>
            </span>
          </h2>
          <br />
          <p class="text-justify">
            {{$t("p13s1Descrip")}}
            <strong>
              <a :href="p13s1Url" target="_blank">{{p13s1Link}}</a>
            </strong>
          </p>
          <br />
          <paginate ref="paginator" name="p13s1Ids" :list="p13s1Ids" :per="8">
            <b-row>
              <b-col lg="3" md="6" sm="12" v-for="idv in paginated('p13s1Ids')" :key="idv.id">
                <yt :idvideo="idv" :key="idv" :activo="true"></yt>
                <br />
              </b-col>
            </b-row>
          </paginate>
          <paginate-links
            for="p13s1Ids"
            :show-step-links="true"
            :simple="{
                prev: $t('prev'),
                next: $t('next')  
            }"
          ></paginate-links>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "prev": "Prev",
    "next": "Next",
    "p13s1title": [
      {
        "p13s1titleF": true,
        "p13s1titleT": "Opinions about AICAD Business School: Real experiences of interns"
      }
    ]
    , "p13s1Descrip": "Learn about the experiences and opinions of other students who have done their internships through AICAD Business School and visit our "
  },
  "es":{
    "prev": "Anterior",
    "next": "Siguiente",
    "p13s1title": [
      {
        "p13s1titleF": true,
        "p13s1titleT": "Opiniones sobre AICAD Business School: Experiencias reales de estudiantes de práctica"
      }
    ]
    , "p13s1Descrip": "Conoce las experiencias y opiniones de otros estudiantes que han hecho sus prácticas por medio de AICAD Business School y visita nuestro "
  }
}
</i18n>

<script>
import yt from "@/components/utils/youtube";
export default {
  components: {
    yt
  },
  data() {
    return {
      p13s1Link: "YouTube Channel.",
      p13s1Url: "https://www.youtube.com/channel/UCXRGE7Ilteyo96Oj0ucX8vw",
      p13s1Urlrss:
        "https://www.googleapis.com/youtube/v3/search" +
        "?part=id" +
        "&channelId=UCXRGE7Ilteyo96Oj0ucX8vw" +
        "&order=date" +
        "&type=video" +
        "&key=" +
        process.env.VUE_APP_KEY_YOUTUBE,
      paginate: ["p13s1Ids"],
      p13s1Ids: []
    };
  },
  methods: {
    rellamadaBuscarVideo: async function(nextPage, config) {
      var nt = "&pageToken=" + nextPage;
      const result = await this.axios
        .get(this.p13s1Urlrss + nt, config)
        .then(response => response.data);
      var obj = JSON.parse(JSON.stringify(result));
      for (let index = 0; index < obj.items.length; index++) {
        const element = obj.items[index].id.videoId;
        this.p13s1Ids.push(element);
      }
      var next_ = "";
      try {
        next_ = obj.nextPageToken;
      } catch (e) {
        next_ = "";
      }
      return next_;
    },
    buscarVideos: async function() {
      var config = {
        headers: {
          "cache-control": "no-cache"
        }
      };
      const result = await this.axios
        .get(this.p13s1Urlrss, config)
        .then(response => response.data)
        .catch(error => {
          console.log(error);
          this.p13s1Ids = [
            "qwg-G75eu7s",
            "SYp0ipioV00",
            "wyRZS84qFtM",
            "75NNhc-6ce0",
            "mT9tRhivkQ8",
            "gkIs4Af6y-I",
            "DiO2q6GgW7s",
            "AMd6f6dbGd8",
            "3LRusFpClek",
            "Uu0E2wbeA9Y",
            "Q3f5Hv6dzog",
            "pEa1Yzhw82Y",
            "89W0Vrwl0t8",
            "udpxArsBiQg",
            "T2bGz5vsX9E",
            "lZYHi-6ebus",
            "fCCMjwPwp4c",
            "xwrzqThkFFc",
            "p0Zmp0favkg",
            "kpFn9hx6pVc",
            "asopZmlhmCA",
            "6EwWA86yrG8",
            "P8AjejrSHpM",
            "IGjT19NU50Q",
            "Snv8MuR-jYU",
            "Qj-SIdkC7Bg",
            "nlu4_RiEtCw",
            "NZufl5IYgP8",
            "WOMXwF8WimI",
            "BbfvY7GwrVc"
          ];
        });
      var obj = JSON.parse(JSON.stringify(result));
      for (let index = 0; index < obj.items.length; index++) {
        const element = obj.items[index].id.videoId;
        this.p13s1Ids.push(element);
      }
      var nextPage = "";
      try {
        var total = obj.pageInfo.totalResults;
        var pag = obj.pageInfo.resultsPerPage;
        if (pag > 0) {
          pag = Math.round(total / pag) - 1;
          nextPage = obj.nextPageToken;
          for (let index = 0; index < pag; index++) {
            nextPage = await this.rellamadaBuscarVideo(nextPage, config);
          }
        }
      } catch (e) {
        nextPage = "";
      }
    }
  },
  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.buscarVideos();
    } else {
      this.p13s1Ids = [
        "qwg-G75eu7s",
        "SYp0ipioV00",
        "wyRZS84qFtM",
        "75NNhc-6ce0",
        "mT9tRhivkQ8",
        "gkIs4Af6y-I",
        "DiO2q6GgW7s",
        "AMd6f6dbGd8",
        "3LRusFpClek",
        "Uu0E2wbeA9Y",
        "Q3f5Hv6dzog",
        "pEa1Yzhw82Y",
        "89W0Vrwl0t8",
        "udpxArsBiQg",
        "T2bGz5vsX9E",
        "lZYHi-6ebus",
        "fCCMjwPwp4c",
        "xwrzqThkFFc",
        "p0Zmp0favkg",
        "kpFn9hx6pVc",
        "asopZmlhmCA",
        "6EwWA86yrG8",
        "P8AjejrSHpM",
        "IGjT19NU50Q",
        "Snv8MuR-jYU",
        "Qj-SIdkC7Bg",
        "nlu4_RiEtCw",
        "NZufl5IYgP8",
        "WOMXwF8WimI",
        "BbfvY7GwrVc"
      ];
    }
  },
  computed: {
    p13s1title() {
      return this.$t("p13s1title");
    }
  }
};
</script>

<style>
.paginate-links {
  width: 100%;
  list-style: none;
  text-align: center;
}
.paginate-links li {
  display: inline;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}

.paginate-links li a {
	border-radius: 22px !important;
	border-color: #009090 !important;
	background-color: #009090 !important;
	color: whitesmoke !important;
	margin: 0 auto;
	letter-spacing: 2px;
	padding: 0.4em 3em !important;
	cursor: pointer;
	font-size: 1.1em !important;
	transition: 0.3s !important;
}

.paginate-links li a:hover {
  opacity: 0.85;
  background-color: #00c8c3 !important;
  text-decoration: inherit !important;
  transform: scale(1.1);
}

.paginate-result {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}
</style>

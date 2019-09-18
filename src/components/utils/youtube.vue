<template>
  <div>
    <b-card img-top footer-tag="footer" class="pytcard" no-body>
      <div class="pytcardContent">
        <div class="pytcardTime" v-if="divload">{{divTime}}</div>
        <div class="pytcardLink">
          <a class="btn btn-default" rel="shadowbox" @click="displayRef(divId)">
            <font-awesome-icon :icon="['fab', 'youtube']" class="fa-2x"/>
          </a>
        </div>
        <b-card-img :src="divImg" />
      </div>  
      <b-card-body v-if="divload">
        <dir class="text-center" style="padding: 0.5em !important;">
        <h3>{{divTitulo}}</h3>
        <p class="text-justify">{{divDescrip}}</p>
        </dir>
      </b-card-body>
      <b-card-footer v-if="divload">
        <b-row>
          <b-col cols="4" class="text-center">
            <font-awesome-icon :icon="['fas','eye']" />
            {{divView}}
          </b-col>
          <b-col cols="4" class="text-center">
            <font-awesome-icon :icon="['fas','heart']" />
            {{divLike}}
          </b-col>
          <b-col cols="4" class="text-center">
            <font-awesome-icon :icon="['fas','comment']" />
            {{divComent}}
          </b-col>
        </b-row>
      </b-card-footer>
    </b-card>
    <silentbox-single
      v-bind:id="divId"
      v-bind:src="divUrl"
      :autoplay="true"
      :hideControls="true"
      description>
      <div></div>
    </silentbox-single>
  </div>
</template>

<script>
export default {
  props: ["idvideo", "activo"],
  data: () => ({
    divId: "sb",
    divImg: require("@/assets/images/banners/bannermini.png"),
    divTime: "0:00",
    divTitulo: "",
    divDescrip: "CARGANDO . . .",
    divView: 0,
    divLike: 0,
    divComent: 0,
    divUrl: "https://www.youtube.com/watch?v=",
    divload: false
  }),
  methods: {
    llamarVideo: async function(idv) {
      // const result = require("./youtube.json");
      var urlVideo = "";
      if(process.env.NODE_ENV === 'production' && this.activo){
        urlVideo = "https://www.googleapis.com/youtube/v3/videos"
        + "?part=id%2Csnippet%2CcontentDetails%2Cstatistics"
        + "&key=" + process.env.VUE_APP_KEY_YOUTUBE
        + "&id=" + idv;
        
        var config = { 
          headers: {
              'cache-control': 'no-cache'
            }
        };
        await this.axios
        .get(urlVideo, config)
        .then(response => {
          var obj = JSON.parse(JSON.stringify(response.data));
          this.divTitulo = (obj.items[0].snippet.title);
          this.divDescrip = this.limDescrip(60,obj.items[0].snippet.description);
          this.divImg = (obj.items[0].snippet.thumbnails.medium.url);
          this.divTime = this.duracion(obj.items[0].contentDetails.duration);
          this.divView = (obj.items[0].statistics.viewCount);
          this.divLike = (obj.items[0].statistics.likeCount);
          this.divComent = (obj.items[0].statistics.commentCount);
          this.divload = true;
        })
        .catch(error => {
          console.log(error);
          this.divImg = "https://i.ytimg.com/vi/"+idv+"/mqdefault.jpg";
          this.divDescrip = "";
        });
      }else{
        this.divImg = "https://i.ytimg.com/vi/"+idv+"/mqdefault.jpg";
        this.divDescrip = "";
      }  
      
      this.divId = idv;
      this.divUrl += idv;
    },
    duracion: function (str) {
      var result = str.replace('PT','').replace('H',':').replace('M',':').replace('S','');
      return result;
    },
    limDescrip: function(op, str) {
      var res = "";
      try{
        for(var i = 0; i < op; i++){
          res += str.charAt(i);
        }
      }catch(e){
        console.log(e);
      }
      return res + "...";
    },
    displayRef(ref) {
      document.getElementById(ref).click();
    }
  },
  mounted() {
    this.llamarVideo(this.idvideo);
  }
};
</script>
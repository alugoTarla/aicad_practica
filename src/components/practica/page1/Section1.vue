<template>
    <div id="section1">
        <div class="fondoGrisClaro">
            <video autoplay muted loop id="myVideo">
                <source src="../../../assets/full-width-video.mp4" type="video/mp4">
            </video>
            <div class="content">
                <button id="myBtn" v-on:click="myFunction()"><font-awesome-icon :icon="icon"/></button>
            </div>
        </div>
        <div class="fuck">
            <b-container class="me">
                <br>
                <h1>
                    <a href="#">{{$t("s1title")}}</a>
                </h1>
                <h4>
                    {{$t("s1subtitlep1")}}
                    <a
                            :href="s1subtitlepurl"
                    ><strong>{{$t("s1subtitlep2")}}</strong></a>
                    {{$t("s1subtitlep3")}}
                </h4>
            </b-container>
        </div>
    </div>
</template>

<i18n>
    {
    "en":{
    "s1title": "Internships in companies anywhere in the world!",
    "s1subtitlep1": "AICAD opens the doors to the world of work!",
    "s1subtitlep2": "Choose the course to start",
    "s1subtitlep3": "and introduce yourself!"
    },
    "es":{
    "s1title": "Práctias en empresas en cualquier lugar del mundo!",
    "s1subtitlep1": "¡AICAD te abre las puertas al mundo laboral!",
    "s1subtitlep2": "Elige el curso para empezar",
    "s1subtitlep3": "y preséntate!"
    }
    }
</i18n>

<script>
    export default {
        data() {
            return {
                icon:'pause',
                s1subtitlepurl: "http://jobs.aicad.es",
                s1urlvideo:
                    "https://www.youtube.com/embed/zQxqpyQ4woM?"
                    + "autoplay=1"
                    + "&playlist=zQxqpyQ4woM"
                    + "&loop=1"
                    + "&autohide=1"
                    + "&rel=1"
                    + "&showinfo=0"
                    + "&controls=1"
                    + "&mute=1"
                    + "&disablekb=1"
                    + "&modestbranding=1"
                    + "&volumen=0"
                    + "&enablejsapi=1"
            }
        },
        methods: {
            myFunction() {
                var video = document.getElementById("myVideo");
                var btn = document.getElementById("myBtn");
                if (video.paused) {
                    video.play();
                    this.icon='pause'
                } else {
                    video.pause();
                    this.icon='play'
                }
            }
        }
    };
</script>

<style lang="scss">
    .fuck{
        position: absolute;
        .me{
            background-color: rgba(1,161,255,0.4);
            border-radius: 40px !important;
            padding: 40px;
        }
        top: 30vw;
        width: 100%;
        height: 100%;
        a{
            text-decoration: none !important;
            color: white !important;
            font-family: "Lato Heavy",sans-serif !important;
            font-size: 3rem;
        }
        h4{
            color: white !important;
            font-family: "Lato Heavy",sans-serif !important;
            font-size: 2rem;
            a{
                font-size: 1rem !important;
            }
        }
        h1{
            color: white !important;
            font-family: "Lato Heavy",sans-serif !important;
            font-size: 3rem;
        }
        @media (max-width: 774px) {
            a,h4,h1{
                font-size: 1rem !important;
            }
        }
    }
    #myVideo {
        margin-top: -120px;
        margin-bottom: -10px;
        position: relative;
        z-index: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        @media (max-width: 770px) {
            height: 500px;
            margin-bottom: -60px;
        }
    }

    /* Add some content at the bottom of the video/page */
    .content {
        /*float: right;*/
        border-radius: 0 50px 50px 0;
        background: rgba(150, 150, 150, 0.5);
        padding: 10px 5px 10px 20px;
        position: absolute;
        margin-top: -90px;
        /*bottom: calc(-150px + 150px + 400px);*/
        max-height: calc(100vh - 50px - 80px);
    }

    /* Style the button used to pause/play the video */
    #myBtn {
        width: 6vh;
        border-radius: 50px;
        max-width: 100px;
        font-size: 1rem;
        padding: 10px;
        border: none;
        background: #000;
        color: #fff;
        cursor: pointer;
    }

    #myBtn:hover {
        background: #ddd;
        color: black;
        /*cursor: pointer;*/
    }

    .wpb_wrapper {
        margin: 0;
        padding: 0;
        bottom: 0;
        width: 100%;
        height: 60vh;
    }

    .mascaraYT {
        position: relative;
        width: 100%;
        height: 60vh;
        left: 0;
        box-sizing: border-box;
    }

    .mscaraHYT {
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 0;
    }

    #player {
        width: 100%;
        max-width: 1000%;
        height: 60vh;
    }

</style>

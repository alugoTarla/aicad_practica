<template>
    <div id="tb">
        <div class="wrapper">
            <div class="fondoSilver">
                <b-container fluid>
                    <b-container>
                        <br/>
                        <h2>{{TBtxt1}}</h2>
                        <p>{{TBtxt2}}</p>
                        <p><strong>{{TButton2}}</strong></p>
                        <a class="btn buttonTurqueza" :href="TBurl" target="_blank">
                            {{TButton1}}
                        </a>
                    </b-container>
                </b-container>
                <br/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["TBtxt1", "TBtxt2", "TButton1", "TButton2", "TBurl"],
        data() {
            return {}
        }
    };
</script>

<style lang="scss">
</style>

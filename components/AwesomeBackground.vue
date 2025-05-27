<template>
    <div id="awesome-background">
        <template v-if="highlighted_tool">
            <div id="awesome-background-image" class="highlighted-tool" :style="'background-position:top center;background-image:url('+$config.ASSETS_URL+'/tools/'+highlighted_tool.images[0]+');'"></div>
            <div id="awesome-background-gradient"></div>
            <div id="awesome-background-gradient-highlighted-tool"></div>
        </template>
        <template v-else>
            <template v-if="awesome_background.background_filename">
                <template v-if="awesome_background.background_author">
                    <div id="awesome-background-copyright">
                        <a :href="awesome_background.background_author_link" target="_blank">credit @{{ awesome_background.background_author }}</a>
                    </div>
                </template>
                <template v-if="awesome_background.is_video == 1">
                    <video id="awesome-background-video" autoplay muted loop  preload="none">
                        <source :src="awesome_background.background_filename" type="video/mp4">
                    </video>
                </template>
                <template v-else>
                    <div id="awesome-background-image" :style="`background-image:url(${awesome_background.background_filename});`"></div>
                </template>
                <div id="awesome-background-gradient"></div>
                <div id="awesome-background-gradient-highlighted-tool"></div>
            </template>
            <!-- <template v-else>
                <div id="awesome-background-gradient-strong">AAAA</div>
            </template> -->
        </template>
    </div>
</template>

<script>

export default {
    name: 'AwesomeBackground',
    computed: {
        highlighted_tool() {
            // var highlighted_tool = this.$store.getters['getCalculatedHighlightedTool'];
            var highlighted_tool = this.$store.getters['getHighlightedTool'];
            return highlighted_tool;
        },
        awesome_background() {
            return this.$store.getters['getAwesomeBackground'];
        }
    },
}
</script>

<style scoped>
#awesome-background {
}
#awesome-background-copyright {
    font-family: InriaSans,Arial,sans-serif;
    font-size: 0.6em;
    right: 15px;
    position: absolute;
    top: 65px;
    /* width: 100%; */
    z-index: 0;
}
#awesome-background-copyright a {
    color: #eee;
}
#awesome-background-copyright a:hover {
    text-decoration: none;
}
#awesome-background-video {
    object-fit: cover;
    height: 100%;
    width: 100%;

    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    top: 65px;
    opacity: 0.8;
    position: absolute;
    top: 0px;
    z-index: -2;
}
#awesome-background-image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    height: 90%;
    left: 0px;
    opacity: 0.8;
    position: absolute;
    top: 65px;
    width: 100%;
    z-index: -2;
}
#awesome-background-image .highlighted-tool {
    background-position: top center !important;
}
#awesome-background-gradient {
    background: linear-gradient(180deg, rgba(10,12,31,0) 0%, rgba(10,12,31,0) 70%, rgba(10,12,31,1) 85%, rgba(10,12,31,1) 100%);

    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: -1;
}
#awesome-background-gradient-strong {
    background: radial-gradient(circle,
        rgba(255,0,0,1) 0%, rgba(255,0,0,1) 10%,
        rgba(200,0,0,1) 11%, rgba(200,0,0,1) 20%,
        rgba(150,0,0,1) 21%, rgba(150,0,0,1) 30%,
        rgba(100,0,0,1) 31%, rgba(100,0,0,1) 40%,
        rgba(50,0,0,1) 41%, rgba(50,0,0,1) 50%,
        rgba(0,0,0,1) 51%, rgba(23,25,36,1) 60%
    );

    border: 1px solid #f00;
    height: 200%;
    left: -50%;
    position: absolute;
    top: -50%;
    width: 200%;
    z-index: -1;
}
#awesome-background-gradient-highlighted-tool {
    background: linear-gradient(-45deg, rgba(10,12,31,0) 0%, rgba(10,12,31,0) 30%, rgba(10,12,31,1) 100%, rgba(10,12,31,1) 100%);

    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: -1;
}
/* #awesome-background-gradient {
    background: linear-gradient(180deg, rgba(10,12,31,0) 0%, rgba(10,12,31,0) 80%, rgba(10,12,31,1) 100%);

    height: 75%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: -1;
} */
</style>

<template>
    <div id="awesome-background">
        <template v-if="awesome_background.background_filename">
            <template v-if="awesome_background.background_author">
                <div id="awesome-background-copyright">
                    <a :href="awesome_background.background_author_link" target="_blank">credit @{{ awesome_background.background_author }}</a>
                </div>
            </template>
        </template>
        <div id="awesome-background-image" :style="`background-image:url(${awesome_background.background_filename});`"></div>
        <div id="awesome-background-gradient"></div>
    </div>
</template>

<script>

export default {
    name: 'AwesomeBackground',
    computed: {
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
#awesome-background-image {
    /* background-image: url('/img/bg-default2.jpg'); */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    /* border: 1px solid #f00; */
    height: 75%;
    left: 0px;
    opacity: 0.8;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: -2;
}
#awesome-background-gradient {
    background: linear-gradient(180deg, rgba(10,12,31,0) 0%, rgba(10,12,31,0) 80%, rgba(10,12,31,1) 100%);

    /* border: 1px solid #00f; */
    height: 75%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: -1;
}
</style>

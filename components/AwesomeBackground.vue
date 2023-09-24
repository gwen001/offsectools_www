<template>
    <div id="awesome-background">
        <div id="awesome-background-copyright">
            <template v-if="awesome_background != ''">
                <a href="https://twitter.com/rez0__" target="_blank">credit @rez0</a>
            </template>
        </div>
        <div id="awesome-background-image" :style="`background-image:url(${awesome_background});`"></div>
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
    font-size: 0.5em;
    right: 15px;
    position: absolute;
    top: 70px;
    /* width: 100%; */
    z-index: 0;
}
#awesome-background-copyright a {
    color: rgba(255,255,255,0.5);
}
#awesome-background-copyright a:hover {
    text-decoration: none;
}
#awesome-background-image {
    /* ('/img/bg-default2.jpg') */

    /* background-image: url('/img/bg-default2.jpg'); */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    /* border: 1px solid #f00; */
    height: 75%;
    left: 0px;
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


h2 {
    color: #bbb;
    font-size: 1.4em !important;
}
.logo {
    font-size: 4.5em !important;
    font-weight: 500;
}
</style>

<template>
    <div class="container-fluid p-0 m-0">
        <div class="row p-0 m-0">
            <Mobilebar ref="mobilebar"></Mobilebar>
            <AwesomeBackground></AwesomeBackground>
            <div id="main" class="col p-0 m-0">
                <Topbar></Topbar>
                <div class="row p-0 m-0">
                    <div class="col p-0 m-0">
                        <MainContent></MainContent>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-0 m-0">
            <div class="col p-0 m-0">
                <Footer></Footer>
            </div>
        </div>
        <template v-if="this.$config.APP_ENV == 'prod'">
            <script async src="https://cdn.splitbee.io/sb.js"></script>
        </template>
    </div>
</template>


<script>
import Topbar from '~/components/Topbar.vue';
import Footer from '~/components/Footer.vue';
import Mobilebar from '~/components/Mobilebar.vue';
import MainContent from '~/components/MainContent.vue';
import AwesomeBackground from '~/components/AwesomeBackground.vue';

export default {
    name: 'default_layout',
    components: {
        Topbar, Footer, Mobilebar, MainContent, AwesomeBackground
    },
    async mounted() {
        await this.$store.dispatch( 'getDb' );
    },
}
</script>

<style scoped>
</style>

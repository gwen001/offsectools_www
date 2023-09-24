<template>
    <div class="container-fluid vh-100 p-0 m-0">
        <div class="row vh-100 p-0 m-0">
            <Mobilebar ref="mobilebar"></Mobilebar>
            <div id="main" class="col p-0 m-0">
                <Topbar></Topbar>
                <div class="row p-0 m-0">
                    <div class="col p-0 m-0">
                        <MainContent></MainContent>
                    </div>
                </div>
            </div>
        </div>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
    </div>
</template>


<script>
import Topbar from '~/components/Topbar.vue';
import Mobilebar from '~/components/Mobilebar.vue';
import MainContent from '~/components/MainContent.vue';

export default {
    name: 'default_layout',
    components: {
        Topbar, Mobilebar, MainContent
    },
    async mounted() {
        await this.$store.dispatch( 'getDb' );
    },
}
</script>

<style scoped>
</style>

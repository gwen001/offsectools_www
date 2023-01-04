<template>
    <div id="home" class="w-100 h-100">
        <div class="row justify-content-center mt-3 mb-0">
            <div class="text-center">
                <span class="logo">{{ $config.APP_NAME }}</span>
            </div>
        </div>
        <div class="row mt-0">
            <div class="col text-center">
                <h1>
                    A vast collection of security tools
                </h1>
            </div>
        </div>
        <div class="row mt-1">
            <div class="col text-center">
                {{ tools.length }} tool<span v-if="tools.length > 1">s</span> filtered
            </div>
        </div>
        <div class="row mt-3 justify-content-center">
            <div class="col-xl-2 col-lg-4 col-sm-4 col-12 mb-1">
                <a href="javascript:;" v-on:click="setSortBy('name')" v-bind:class="[ isSortByName ? 'btn-custom2' : 'btn-outline-custom2', 'btn w-100']">sort by name</a>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-4 col-12 mb-1">
                <a href="javascript:;" v-on:click="setSortBy('date')" v-bind:class="[ isSortByDate ? 'btn-custom1' : 'btn-outline-custom1', 'btn w-100']">sort by last</a>
            </div>
            <!-- <div class="col-xl-2 col-lg-4 col-sm-4 col-12 mb-1">
                <a href="javascript:;" v-on:click="setSortBy('ratings')" v-bind:class="[ isSortByRatings ? 'btn-custom3' : 'btn-outline-custom3', 'btn w-100']">best rated</a>
            </div> -->
        </div>
        <template v-if="tools.length > 0">
            <div class="row mt-5">
                <template v-for="tool,index in tools">
                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                        <ToolCard :tool="tool"></ToolCard>
                    </div>
                </template>
            </div>
        </template>
        <template v-else>
            <div class="row mt-5">
                <div class="col text-center">
                    Nothing there, but feel free to
                    <nuxt-link to="/addtool" class="highlight1">contribute</nuxt-link>
                    if you think something is missing :)
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import ToolCard from '~/components/ToolCard.vue'

export default {
    name: 'Home',
    components: {
        ToolCard
    },
    computed: {
        tools() {
            var p = '';
            if( this.$route.query.p != undefined ) {
                p = this.$route.query.p;
            }
            var q = '';
            if( this.$route.query.q != undefined ) {
                this.$store.commit( 'setSearchTerm', this.$route.query.q );
            }
            return this.$store.getters['searchTools'](p);
        },
        isSortByName() {
            return (this.$store.getters['getSortBy'] == 'name');
        },
        isSortByDate() {
            return (this.$store.getters['getSortBy'] == 'date');
        },
        isSortByRatings() {
            return (this.$store.getters['getSortBy'] == 'ratings');
        },
    },
    methods: {
        setSortBy: function (sort_by) {
            this.$store.commit( 'setSortBy', sort_by );
        },
    },
}
</script>

<style scoped>
h1 {
    font-size: 1.8em !important;
}
.logo {
    font-size: 4.5em !important;
    font-weight: 500;
}
</style>

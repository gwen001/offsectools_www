<template>
    <div id="home" class="w-100 h-100">
        <Logo></Logo>
        <div class="row mt-1">
            <div class="col text-center">
                {{ tools.length }} tool<span v-if="tools.length > 1">s</span> filtered
            </div>
        </div>
        <div class="row mt-3 justify-content-center">
            <div class="col-xl-2 col-lg-4 col-sm-4 col-6 mb-1">
                <a href="javascript:;" v-on:click="setSortBy('name')" v-bind:class="[ isSortByName ? 'btn-custom2' : 'btn-outline-custom2', 'btn w-100']">sort by name</a>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-4 col-6 mb-1">
                <a href="javascript:;" v-on:click="setSortBy('date')" v-bind:class="[ isSortByDate ? 'btn-custom1' : 'btn-outline-custom1', 'btn w-100']">sort by last</a>
            </div>
            <!-- <div class="col-xl-2 col-lg-4 col-sm-4 col-12 mb-1">
                <a href="javascript:;" v-on:click="setSortBy('ratings')" v-bind:class="[ isSortByRatings ? 'btn-custom3' : 'btn-outline-custom3', 'btn w-100']">best rated</a>
            </div> -->
        </div>
        <template v-if="tools.length > 0">
            <div class="d-flex flex-wrap flex-row justify-content-center mt-5">
                <template v-for="tool,index in tools">
                    <div class="d-inline-flexxxx p-2 align-self-stretch">
                        <ToolCard :tool="tool" from="tagpage"></ToolCard>
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
import Logo from '~/components/Logo.vue'
import ToolCard from '~/components/ToolCard.vue'

export default {
    name: 'TagPage',
    components: {
        Logo, ToolCard
    },
    head() {
        var title = '';
        var meta = [];
        var link = [];

        if( this.datag )
        {
            title = this.datag.nicename+' tools on '+this.$config.APP_NAME;
            var url = this.$config.APP_URL+'/tag/'+this.datag.slug;
            var descr = 'list of tools about '+this.datag.nicename;

            link = [
                {
                    'property': 'canonical',
                    'hid': 'canonical',
                    'content': url
                },
            ];

            meta = [
                {
                    'property': 'keywords',
                    'hid': 'keywords',
                    'content': this.$config.APP_KEYWORDS+','+this.datag.slug
                },
                {
                    'property': 'description',
                    'hid': 'description',
                    'content': descr
                },
                {
                    'property': 'og:url',
                    'hid': 'og:url',
                    'content': url
                },
                {
                    'property': 'og:title',
                    'hid': 'og:title',
                    'content': title
                },
                {
                    'property': 'og:description',
                    'hid': 'og:description',
                    'content': descr
                },
                {
                    'property': 'twitter:title',
                    'hid': 'twitter:title',
                    'content': title
                },
                {
                    'property': 'twitter:description',
                    'hid': 'twitter:description',
                    'content': descr
                },
            ];
        }

        return {
            title: title,
            meta,
            link
        };
    },
    computed: {
        tag() {
            return this.$store.getters['getTagFromSlug'](this.$route.params.slug);
        },
        tools() {
            return this.$store.getters['getToolsFromTag'](this.$route.params.slug);

            // var p = '';
            // if( this.$route.query.p != undefined ) {
            //     p = this.$route.query.p;
            // }
            // var q = '';
            // if( this.$route.query.q != undefined ) {
            //     this.$store.commit( 'setSearchTerm', this.$route.query.q );
            // }

            // this.$store.dispatch( 'searchTools', p );

            // // return this.$store.getters['searchTools'](p);
            // return this.$store.getters['getSearchResults'];
        },
        isSortByName() {
            return (this.$store.getters['getSortBy'] == 'name');
        },
        isSortByDate() {
            return (this.$store.getters['getSortBy'] == 'date');
        },
        // isSortByRatings() {
        //     return (this.$store.getters['getSortBy'] == 'ratings');
        // },
    },
    methods: {
        setSortBy: function (sort_by) {
            this.$store.commit( 'setSortBy', sort_by );
        },
    },
    mounted() {
        // document.getElementById('main-content').scrollTo(0,0);
    },
    async asyncData( { store, params } ) {
        var t = await store.getters['getTagFromSlug'](params.slug);
        // console.log( t );
        return {
            datag: t
        };
    }
}
</script>

<style scoped>
</style>

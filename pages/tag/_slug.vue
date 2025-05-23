<template>
    <div id="tagpage" class="w-100 h-100">
        <template v-if="datag">
            <TagName :slug="datag.slug"></TagName>
            <!-- <template v-if="highlighted_tool"> -->
                <HighlightedTool :highlighted_tool="highlighted_tool" ></HighlightedTool>
            <!-- </template>
            <template v-else>
                <div class="mt-5"></div>
            </template> -->
            <template v-if="tools.length > 0">
                <!-- <div class="d-flex justify-content-center" v-if="tools.length > 1 && this.$route.params.slug != 'last7days'"> -->
                <div class="row mt-5" v-if="tools.length > 1 && this.$route.params.slug != 'last7days'">
                    <div class="col-1"></div>
                    <div class="col-11">
                        <ToolsSorter :tools="tools.length"></ToolsSorter>
                    </div>
                </div>
                <ToolsListing ref="toolslisting" from="tagpage" :tools="tools"></ToolsListing>
                <!-- <div class="d-flex flex-wrap flex-row justify-content-center mt-3">
                    <template v-for="tool,index in tools">
                        <div class="toolcard-loop p-3 align-self-stretch" v-if="index == 6">
                            <NewsletterCard from="tagpage"></NewsletterCard>
                        </div>
                        <div class="toolcard-loop p-3 align-self-stretch">
                            <ToolCard :tool="tool" from="tagpage"></ToolCard>
                        </div>
                    </template>
                </div> -->
            </template>
            <template v-else>
                <!-- <template v-if="datag.slug=='last7days'">
                    <div class="col-8 text-center m-auto mt-4">
                        <p>Currently lazy because of holidays, back soon ❤️</p>
                        <img src="/img/cancun.jpg" class="img-fluid" />
                    </div>
                </template>
                <template v-else> -->
                    <div class="row mt-5">
                        <div class="col text-center">
                            Nothing there, but feel free to
                            <nuxt-link to="/addtool" class="highlight1">contribute</nuxt-link>
                            if you think something is missing :)
                        </div>
                    </div>
                <!-- </template> -->
            </template>
        </template>
        <template v-else>
            <NotFound from="tagpage"></NotFound>
        </template>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NotFound from '~/components/NotFound.vue';
import ToolCard from '~/components/ToolCard.vue'
import ToolsSorter from '~/components/ToolsSorter.vue'
import ToolsListing from '~/components/ToolsListing.vue'
import NewsletterCard from '~/components/NewsletterCard.vue';
import TagName from '~/components/TagName.vue';
import HighlightedTool from '~/components/HighlightedTool.vue';

export default {
    name: 'TagPage',
    components: {
        Logo, NotFound, ToolCard, ToolsSorter, ToolsListing, NewsletterCard, TagName, HighlightedTool
    },
    head() {
        var title = '';
        var meta = [];
        var link = [];

        if( this.datag )
        {
            title = this.datag.nicename+' tools on '+this.$config.APP_NAME;
            var url = this.$config.APP_URL+'/tag/'+this.datag.slug;
            var descr = this.$config.APP_DESCR+' about '+this.datag.nicename;

            link = [
                {
                    'property': 'canonical',
                    'content': url
                },
            ];

            meta = [
                {
                    'name': 'keywords',
                    'content': this.$config.APP_KEYWORDS+','+this.datag.slug
                },
                {
                    'name': 'description',
                    'content': descr
                },
                {
                    'property': 'og:url',
                    'content': url
                },
                {
                    'property': 'og:title',
                    'content': title
                },
                {
                    'property': 'og:description',
                    'content': descr
                },
                {
                    'name': 'twitter:title',
                    'content': title
                },
                {
                    'name': 'twitter:description',
                    'content': descr
                },
            ];
        }

        return { title:title, meta, link };
    },
    computed: {
        highlighted_tool() {
            var highlighted_tool = this.$store.getters['getHighlightedTool'];
            // var highlighted_tool = this.$store.getters['getCalculatedHighlightedTool'];
            return highlighted_tool;
        },
        tools() {
            var tag_slug = this.$route.params.slug;
            var search_tools = this.$store.getters['getTagTools'];
            // var search_tools = this.$store.getters['searchTools']( tag_slug );

            // if( search_tools.length && tag_slug!='all' ) {
            //     var highlighted_tool = this.$store.getters['getHighlightedTool']( search_tools );
            //     this.$store.commit( 'setCalculatedHighlightedTool', [highlighted_tool] );
            // }

            return search_tools;
        },
    },
    async asyncData( { store, params, error } ) {
        // console.log('asyncData');
        // if( params.slug == 'last7days' ) {
        if( params.slug == 'all' /*|| params.slug == 'last7days'*/ ) {
            return { datag: {'slug':params.slug, 'nicename':params.slug} };
        } else {
            var t = await store.getters['getTagFromSlug'](params.slug);
            if( t ) {
                // console.log(t.background_filename);
                return { datag:t };
            } else {
                error({ statusCode:404, message:'This page could not be found' })
            }
        }
    },
    beforeRouteLeave(to, from, next) {
        // console.log(to);
        // console.log(from);
        // console.log(next);
        this.$store.commit( 'resetHighlightedTool' );
        next();
        // this.$refs.toolslisting.beforeRouteLeave( to, from, next );
    },
    beforeRouteUpdate(to, from, next) {
        // console.log(to);
        // console.log(from);
        // console.log(next);
        this.$store.commit( 'resetHighlightedTool' );
        next();
        // this.$refs.toolslisting.beforeRouteLeave( to, from, next );
        // if( to.path != from.path ) {
        // }
    },
    mounted() {
        this.$store.dispatch( 'searchTools20240530', [this.$route.params.slug] );
        this.$store.commit( 'setAwesomeBackground', [this.$config.ASSETS_URL+'/tags/'+this.datag.background_filename,this.datag.background_author,this.datag.background_author_link] );
        // this.$store.commit( 'setHighlightedTool', [this.$route.params.slug, this.datag, this.$config] );

        // if( this.$route.params.slug == 'last7days' ) {
        //     this.$store.commit( 'setAwesomeBackground', [this.$config.ASSETS_URL+'/vidz/code.mp4'] );
        //     // this.$store.commit( 'setAwesomeBackground', [this.$config.ASSETS_URL+'/background/surprise.jpg'] );
        // } else if( this.datag.background_filename && this.datag.background_filename.length ) {
        //     this.$store.commit( 'setAwesomeBackground', [this.$config.ASSETS_URL+'/tags/'+this.datag.background_filename,this.datag.background_author,this.datag.background_author_link] );
        // }
    }
}
</script>

<style scoped>
</style>

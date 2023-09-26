<template>
    <div id="tagpage" class="w-100 h-100">
        <template v-if="datag">
            <!-- <Logo></Logo> -->
            <div class="row tagname">
                <div class="col text-center">
                    <h1>#{{ datag.slug }}</h1>
                </div>
            </div>
            <template v-if="tools.length > 0">
                <div class="d-flex justify-content-center" v-if="tools.length > 1">
                    <ToolsSorter :tools="tools.length"></ToolsSorter>
                </div>
                <div class="d-flex flex-wrap flex-row justify-content-center mt-3">
                    <template v-for="tool,index in tools">
                        <div class="toolcard-loop p-2 align-self-stretch" v-if="index == 6">
                            <NewsletterCard from="tagpage"></NewsletterCard>
                        </div>
                        <div class="toolcard-loop p-2 align-self-stretch">
                            <ToolCard :tool="tool" from="tagpage"></ToolCard>
                        </div>
                    </template>
                </div>
                <div class="mt-5 d-flex justify-content-center">
                    <Newsletter></Newsletter>
                </div>
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
import LoadMore from '~/components/LoadMore.vue'
import Newsletter from '~/components/Newsletter.vue';
import NewsletterCard from '~/components/NewsletterCard.vue';

export default {
    name: 'TagPage',
    components: {
        Logo, NotFound, ToolCard, ToolsSorter, LoadMore, Newsletter, NewsletterCard
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

        return { title:title, meta, link };
    },
    computed: {
        tools() {
            return this.$store.getters['searchTools'](this.$route.params.slug);
        },
    },
    async asyncData( { store, params, error } ) {
        // console.log('asyncData');
        if( params.slug == 'all' || params.slug == 'last7days' ) {
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
    mounted() {
        // this.$store.commit( 'resetAwesomeBackground' );
        // console.log(this.datag);
        if( this.datag.background_filename && this.datag.background_filename.length ) {
            this.$store.commit( 'setAwesomeBackground', ['/img/tags/'+this.datag.background_filename,this.datag.background_author,this.datag.background_author_link] );
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 2.5em;
}
</style>

<template>
    <div id="home" class="w-100 h-100">
        <Logo></Logo>
        <div class="row mt-1">
            <div class="col text-center">
                {{ tools.length }} tool<span v-if="tools.length > 1">s</span> filtered
            </div>
        </div>
        <ToolSorter></ToolSorter>
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
            var descr = 'A curated list of tools about '+this.datag.nicename;

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
        },
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

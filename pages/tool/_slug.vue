<template>
    <div class="container h-100 p-3">
        <template v-if="datool">
            <ToolDetails from="toolpage" :tool="datool"></ToolDetails>
        </template>
        <template v-else>
            <NotFound from="toolpage"></NotFound>
        </template>
    </div>
</template>

<script>
import NotFound from '~/components/NotFound.vue';
import ToolDetails from '~/components/ToolDetails.vue';
import ToolDetails2 from '~/components/ToolDetails2.vue';

export default {
    name: 'ToolPage',
    components: {
        NotFound, ToolDetails2, ToolDetails
    },
    head() {
        var title = '';
        var meta = [];
        var link = [];

        if( this.datool )
        {
            title = this.datool.nicename+' on '+this.$config.APP_NAME;
            var url = this.$config.APP_URL+'/tool/'+this.datool.slug;
            var descr = this.datool.short_descr;

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
                    'content': this.$config.APP_KEYWORDS+','+this.datool.tags.join(',')
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

            if( this.datool.images !== null && this.datool.images.length > 0 ) {
                var image = this.$config.ASSETS_URL+'/tools/'+this.datool.images[0];
                meta.push({
                    'property': 'og:image',
                    'hid': 'og:image',
                    'content': image
                });
                meta.push({
                    'property': 'twitter:image',
                    'hid': 'twitter:image',
                    'content': image
                });
            }
        }

        return { title:title, meta, link };
    },
    mounted() {
        document.getElementById('main-content').scrollTo(0,0);
        this.$store.commit( 'resetAwesomeBackground' );
    },
    async asyncData( { store, params, error } ) {
        var t = await store.getters['getToolFromSlug'](params.slug);
        if( t ) {
            return { datool:t };
        } else {
            error({ statusCode:404, message:'This page could not be found' })
        }
    },
}
</script>

<style scoped>
</style>
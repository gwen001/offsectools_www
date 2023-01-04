<template>
    <div class="container h-100 p-3">
        <template v-if="tool">
            <ToolDetails :tool="tool"></ToolDetails>
        </template>
        <template v-else>
            <NotFound from="tools"></NotFound>
        </template>
    </div>
</template>

<script>
import NotFound from '~/components/NotFound.vue';
import ToolDetails from '~/components/ToolDetails.vue';

export default {
    name: 'ToolPage',
    components: {
        NotFound, ToolDetails
    },
    head() {
        var meta = [];
        var link = [];
        var title = '';

        if( this.datool )
        {
            title = this.datool.nicename+' on '+this.$config.APP_NAME;
            var url = this.$config.APP_URL+'/tool/'+this.datool.slug;
            var descr = this.datool.short_descr;
            var image = this.$config.APP_URL+'/assets/img/tools/'+this.datool.picture;

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
                    'content': 'offsec,security,bug bounty,tools,pentest,red team,'+this.datool.tags.join(',')
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

            if( this.datool.picture !== null && this.datool.picture.length > 0 ) {
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

        return {
            title: title,
            meta,
            link
        };
    },
    computed: {
        tool() {
            return this.$store.getters['getToolFromSlug'](this.$route.params.slug);
        },
    },
    async asyncData( { store, params } ) {
        var t = await store.getters['getToolFromSlug'](params.slug);
        // console.log( t );
        return {
            datool: t
        };
    }
}
</script>

<style scoped>
</style>
<template>
    <div class="tool-card h-100" :class="[(from=='tagpage'||from=='index') ? 'ms-2 me-2' : '']">
        <div class="card h-100">
            <img :alt="tool.nicename+' on '+this.$config.APP_NAME" :src="this.$config.ASSETS_URL+'/tools/'+tool.images[0]" class="card-img-top tool-picture" />
            <div class="card-body">
                <template v-if="tool.featured">
                    <Ribbon rstyle="warning" rtext="featured"></Ribbon>
                </template>
                <template v-if="tool.sponsored">
                    <Ribbon rstyle="danger" rtext="sponsor"></Ribbon>
                </template>
                <!-- <span class="badge badge-danger ms-2" v-if="tool.sponsored">Sponsor</span> -->
                <!-- <span class="badge badge-warning ms-2" v-if="tool.featured">Featured</span> -->
                <h6 class="card-title tool-name mt-1 mb-2">
                    <nuxt-link :to="'/tool/'+tool.slug" :class="[tool.sponsored ? 'highlight1' : tool.featured ? 'text-warning': 'highlight2', 'stretched-link']">{{ tool.nicename }}</nuxt-link>
                </h6>
                <nuxt-link :to="'/tool/'+tool.slug" class="fake-link d-none stretched-link"></nuxt-link>
                <p class="card-text tool-descr">{{ tool.short_descr }}</p>
            </div>
            <!-- <template v-if="from != 'contextualisation'">
                <div class="tool-tags">
                    <p class="card-text tool-tags">
                        <template v-for="tag,index in tool.tags">
                            <nuxt-link :to="'/tag/'+tag" class="tag-link" v-on:click.native="resetSearch()">#{{ tag }}</nuxt-link>
                            &nbsp;
                        </template>
                    </p>
                </div>
            </template> -->
            <!-- <template v-if="from != 'contextualisation'">
                <div class="card-footer text-center">
                    <div class="justify-content-around">
                        <template v-for="link,index in tool.links">
                            <ToolLink :link="link" :index="index"></ToolLink>
                        </template>
                    </div>
                </div>
            </template> -->
        </div>
    </div>
</template>

<script>
import ToolLink from '~/components/ToolLink.vue';
import Ribbon from '~/components/Ribbon.vue';

export default {
    name: 'ToolCard',
    props: ['tool','from'],
    components: {
        ToolLink
    },
    methods: {
        resetSearch: function () {
            this.$store.commit( 'resetSearch', 1 );
            // this.$router.push( '/' );
        },
    },
}
</script>

<style scoped>
.card {
    overflow: hidden;
}
.badge {
    font-size: 0.65em;
    position: absolute;
    right: 5px;
    top: 5px;
}
.ratings-container {
    position: absolute;
    right: 5px;
    /* top: 5px; */
    /* bottom: 220px; */
    /* z-index: 99; */
}
.card-footer {
    z-index: 9;
}
</style>

<template>
    <div class="tool-card h-100">
        <div class="card h-100">
            <!-- <nuxt-img :alt="tool.nicename+' on '+this.$config.APP_NAME" :src="'/assets/img/tools/'+tool.picture" placeholder="/assets/img/tools/default.png" class="card-img-top tool-picture" /> -->
            <img :alt="tool.nicename+' on '+this.$config.APP_NAME" :src="'/assets/img/tools/'+tool.picture" class="card-img-top tool-picture" />
            <div class="card-body">
                <!-- <div class="ratings-container" v-if="tool.ratings_count > 0">
                    <Ratings from="toolcard" :tool="tool"></Ratings>
                </div> -->
                <h6 class="card-title tool-name">
                    <nuxt-link :to="'/tool/'+tool.slug" class="highlight1 stretched-link">{{ tool.nicename }}</nuxt-link>
                </h6>
                <p class="card-text mt-3 tool-descr">{{ tool.short_descr }}</p>
            </div>
            <template v-if="from != 'contextualisation'">
                <div class="tool-tags">
                    <p class="card-text tool-tags">
                        <template v-for="tag,index in tool.tags">
                            <nuxt-link :to="'/tag/'+tag" class="tag-link">
                                #{{ tag }}
                            </nuxt-link>
                            &nbsp;
                        </template>
                    </p>
                </div>
            </template>
            <template v-if="from != 'contextualisation'">
                <div class="card-footer text-center" style="z-index:9">
                    <div class="d-flexxxx justify-content-around">
                        <ToolLink :link="tool.homepage"></ToolLink>
                        <ToolLink :link="tool.extra_link" v-if="tool.extra_link"></ToolLink>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import Ratings from '~/components/Ratings.vue';
import ToolLink from '~/components/ToolLink.vue';

export default {
    name: 'ToolCard',
    props: ['tool','from'],
    components: {
        Ratings, ToolLink
    },
    methods: {
        // setSearchTerm: function (slug) {
        //     this.$store.commit( 'setSearchTerm', slug );
        //     this.$router.push( '/' );
        // }
    }
}
</script>

<style scoped>
.ratings-container {
    position: absolute;
    right: 5px;
    /* top: 5px; */
    /* bottom: 220px; */
    /* z-index: 99; */
}
</style>

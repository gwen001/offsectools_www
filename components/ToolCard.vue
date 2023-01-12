<template>
    <div class="tool-card h-100">
        <div class="card h-100">
            <nuxt-img :alt="tool.nicename+' on '+this.$config.APP_NAME" :src="'/assets/img/tools/'+tool.picture" placeholder="/assets/img/tools/default.png" class="card-img-top tool-picture" />
            <!-- <img :alt="tool.nicename+' on '+this.$config.APP_NAME" :src="'/assets/img/tools/'+tool.picture" class="card-img-top tool-picture" /> -->
            <div class="card-body">
                <div class="ratings-container" v-if="tool.ratings_count > 0">
                    <Ratings from="toolcard" :tool="tool"></Ratings>
                </div>
                <h6 class="card-title tool-name">
                    <nuxt-link :to="'/tool/'+tool.slug" class="highlight1 stretched-link">{{ tool.nicename }}</nuxt-link>
                </h6>
                <p class="card-text mt-3 tool-descr">{{ tool.short_descr }}</p>
            </div>
            <div class="tool-tags">
                <p class="card-text tool-tags">
                    <template v-for="tag,index in tool.tags">
                        <a href="javascript:;" class="tag-link" v-on:click="setSearchTerm('#'+tag)">#{{ tag }}</a>&nbsp;
                    </template>
                </p>
            </div>
            <div class="card-footer text-center" style="z-index:9">
                <a :href="tool.homepage" target="_blank" class="tool-link">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Ratings from '~/components/Ratings.vue';

export default {
    name: 'ToolCard',
    props: ['tool'],
    components: {
        Ratings
    },
    methods: {
        setSearchTerm: function (slug) {
            this.$store.commit( 'setSearchTerm', slug );
            this.$router.push( '/' );
        }
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

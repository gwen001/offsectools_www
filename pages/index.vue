<template>
    <div id="home" class="w-100 h-100">
        <HighlightedTool :highlighted_tool="highlighted_tool" ></HighlightedTool>
        <!-- <template v-if="highlighted_tool"> -->
            <!-- <HighlightedTool :highlighted_tool="highlighted_tool" ></HighlightedTool> -->
        <!-- </template>
        <template v-else>
            <div class="mt-5"></div>
        </template> -->
        <template v-if="tools_featured.length > 0">
            <div class="row mt-5">
                <div class="col-1"></div>
                <div class="col-11">
                    <h2>&gt; Featured this week</h2>
                </div>
            </div>
            <ToolsListing ref="toolslisting" from="home" :tools="tools_featured"></ToolsListing>
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
        <!-- <template v-else>
            <div class="row mt-5">
                <div class="col text-center">
                    Nothing there, but feel free to
                    <nuxt-link to="/addtool" class="highlight1">contribute</nuxt-link>
                    if you think something is missing :)
                </div>
            </div>
        </template> -->
        <template v-if="tools_featured.length > 0">
            <div class="row mt-5">
                <div class="col-1"></div>
                <div class="col-11">
                    <h2>&gt; Last added</h2>
                </div>
            </div>
            <ToolsListing ref="toolslisting" from="home" :tools="tools_lastadded"></ToolsListing>
            <!-- <div class="d-flex flex-wrap flex-row justify-content-center mt-3">
                <template v-for="tool,index in tools">
                    <div class="toolcard-loop p-3 align-self-stretch" v-if="indesx == 6">
                        <NewsletterCard from="tagpage"></NewsletterCard>
                    </div>
                    <div class="toolcard-loop p-3 align-self-stretch">
                        <ToolCard :tool="tool" from="tagpage"></ToolCard>
                    </div>
                </template>
            </div> -->
        </template>
        <!-- <template v-else>
            <div class="row">
                <div class="col text-center">
                    Nothing there, but feel free to
                    <nuxt-link to="/addtool" class="highlight1">contribute</nuxt-link>
                    if you think something is missing :)
                </div>
            </div>
        </template> -->
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
        Logo, NotFound, ToolCard, ToolsListing, NewsletterCard, HighlightedTool
    },
    computed: {
        highlighted_tool() {
            var highlighted_tool = this.$store.getters['getHighlightedTool'];
            // var highlighted_tool = this.$store.getters['getCalculatedHighlightedTool'];
            return highlighted_tool;
        },
        tools_featured() {
            return this.$store.getters['getToolsFeatured'];
        },
        tools_lastadded() {
            // return this.$store.getters['getLast7days']();
            return this.$store.getters['getToolsLastAdded'](10);
        },
    },
    beforeRouteLeave(to, from, next) {
        // console.log(window.event.type);
        // console.log(from);
        // console.log(to);
        // console.log(next);
        // this.$refs.toolslisting.beforeRouteLeave( to, from, next );
        this.$store.commit( 'resetHighlightedTool' );
        next();
    },
    mounted() {
        this.$store.dispatch( 'searchTools20240530', ['all'] );
        this.$store.commit( 'setAwesomeBackground', [this.$config.ASSETS_URL+'/vidz/code.mp4'] );

        // this.$store.dispatch( 'searchTools20240530', [this.$route.params.slug] );
        // this.$store.commit( 'setAwesomeBackground', [this.$config.ASSETS_URL+'/tags/'+this.datag.background_filename,this.datag.background_author,this.datag.background_author_link] );
    }
}
</script>

<style scoped>
</style>

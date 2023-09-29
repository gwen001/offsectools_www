<template>
    <div id="tools-listing">
        <ToolModal ref="toolmodal"></ToolModal>
        <!-- <div class="row">
            <div class="col text-center">
                {{ tools.length }} tool<span v-if="tools.length > 1">s</span> found
            </div>
        </div> -->
            <!--  <div class="d-flex justify-content-left" v-if="tools.length > 1">
                <ToolsSorter :tools="tools.length"></ToolsSorter>
            </div> -->
        <div class="d-flex flex-row flex-wrap justify-content-center mt-1">
            <template v-for="tool,index in tools">
                <div class="toolcard-loop p-3 align-self-stretch" v-if="index == 6 && from!='home'">
                    <NewsletterCard from="tagpage"></NewsletterCard>
                </div>
                <div class="toolcard-loop p-3 align-self-stretch">
                    <ToolCard :tool="tool" from="index"></ToolCard>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import ToolCard from '~/components/ToolCard.vue'
import ToolModal from '~/components/ToolModal.vue';
import ToolsSorter from '~/components/ToolsSorter.vue'
import NewsletterCard from '~/components/NewsletterCard.vue';

export default {
    name: 'ToolsListing',
    components: {
        ToolModal, ToolCard, ToolsSorter, NewsletterCard
    },
    props: ['tools','from'],
    data: function () {
        return {
            route_from: null,
            route_to: null,
            route_next: null,
        }
    },
    methods: {
        beforeRouteLeave(to, from, next) {
            // console.log(to);
            // console.log(from);
            // console.log(next);
            this.route_to = to;
            this.route_from = from;
            this.route_next = next;
            if( to.name === 'tool-slug' ) {
                this.displayToolModal( to );
            }
        },
        displayToolModal(route) {
            console.log('modal!!!');
            this.$store.commit( 'setCurrentTool', this.route_to.params.slug );
            window.history.pushState({}, null, this.route_to.path);
        },
        hideToolModal() {
            console.log('close!!!');
            this.$store.commit( 'setCurrentTool', '' );
            window.history.pushState({}, null, this.route_from.path)
        },
    },
}
</script>

<style scoped>
</style>

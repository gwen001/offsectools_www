<template>
    <div id="tool-details">
        <div class="row">
            <div class="col-xl-8 col-lg-10 col-sm-12">
                <div class="row">
                    <div class="col-xl-9 col-lg-10 col-sm-11 col-11">
                        <nuxt-img :alt="tool.nicename+' on '+this.$config.APP_NAME" :src="'/assets/img/tools/'+tool.picture" placeholder="/assets/img/tools/default.png" class="rounded tool-picture img-fluid" />
                    </div>
                    <!-- <div class="col-xl-3 col-lg-2 col-sm-1 col-1 text-end">
                        <a href="javascript:;" v-on:click="doSearch()" class="link-close">
                            <font-awesome-icon icon="far fa-circle-xmark" />
                        </a>
                    </div> -->
                </div>
                <div class="row mt-3">
                    <div class="tool-name col">
                        <h1>{{ tool.nicename }}</h1>
                    </div>
                </div>
                <!-- <div class="row mt-1 mb-4">
                    <div class="col">
                        <Ratings from="tooldetails" :tool="tool"></Ratings>
                    </div>
                </div> -->
                <div class="row mt-2">
                    <div class="col tool-short-descr">
                        <h5 class="m-0">{{ tool.short_descr }}</h5>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="tool-tags col">
                        <template v-for="tag,index in tool.tags">
                            <nuxt-link :to="'/tag/'+tag" class="tag-link highlight1">#{{ tag }}</nuxt-link>
                            &nbsp;
                        </template>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <a :href="tool.homepage" class="tool-link text-custom2" target="_blank">{{ tool.homepage }}</a>
                        <template v-if="tool.extra_link">
                            <br /><a :href="tool.extra_link" class="text-custom2" target="_blank">{{ tool.extra_link }}</a>
                        </template>
                    </div>
                </div>
                <div class="row mt-4" v-if="tool.descr">
                    <div class="tool-descr col">
                        <p v-html="tool.descr.replace(/(?:\r\n|\r|\n)/g, '<br />')"></p>
                    </div>
                </div>
            </div>
            <div class="col col-1 d-none d-xl-block"></div>
            <div class="col col-2 d-none d-xl-block">
                <ToolContextualisation :tool="tool"></ToolContextualisation>
            </div>
        </div>
        <div class="row m-0 p-0 d-block d-xl-none">
            <div class="col m-0 p-0">
                <ToolContextualisation :tool="tool"></ToolContextualisation>
            </div>
        </div>
    </div>
</template>

<script>
import Ratings from '~/components/Ratings.vue';
import ToolContextualisation from '~/components/ToolContextualisation.vue';

export default {
    name: 'ToolDetails',
    props: [ 'tool' ],
    components: {
        Ratings, ToolContextualisation
    },
    methods: {
        // rate( rate_value ) {
        //     this.$store.dispatch( 'rate', [this.tool.id,rate_value] );
        // },
        // keyboardEvent( e ) {
        //     if( e.which === 27 ) {
        //         this.$router.push( '/' );
        //     }
        // },
        // doSearch() {
        //     this.$router.push( '/' );
        // },
        // setSearchTerm: function (slug) {
        //     this.$store.commit( 'setSearchTerm', slug );
        //     this.$router.push( '/' );
        // }
    },
    // beforeDestroy() {
    //     if( process.browser ) {
    //         window.removeEventListener('keyup', this.keyboardEvent);
    //     }
    // },
}
</script>

<style scoped>
</style>
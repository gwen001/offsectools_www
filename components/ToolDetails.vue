<template>
    <div id="tool-details">
        <div style="left:-35px;position:relative;">
            <Sharer :tool=tool></Sharer>
        </div>
        <div class="row">
            <div class="col-xl-8 col-lg-10 col-sm-12">
                <div class="row">
                    <div class="col-xl-9 col-lg-10 col-sm-11 col-11">
                        <img :alt="tool.nicename+' on '+this.$config.APP_NAME" :src="this.$config.ASSETS_URL+'/tools/'+tool.images[0]" class="rounded tool-picture img-fluid" />
                        <!-- <nuxt-img :alt="tool.nicename+' on '+this.$config.APP_NAME" :src="this.$config.ASSETS_URL+'/tools/'+tool.images[0]" placeholder="/img/default-tool.png" class="rounded tool-picture img-fluid" /> -->
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="tool-name col">
                        <h1>{{ tool.nicename }}</h1>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col tool-short-descr">
                        <h5 class="m-0">{{ tool.short_descr }}</h5>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="tool-tags col">
                        <template v-for="tag,index in tool.tags">
                            <nuxt-link :to="'/tag/'+tag" class="tag-link highlight1" @click.native.prevent="resetSearch()">#{{ tag }}</nuxt-link>
                            &nbsp;
                        </template>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <template v-for="link,index in tool.links">
                            <a :href="link" class="text-custom2" target="_blank">{{ link }}</a><br />
                        </template>
                    </div>
                </div>
                <!-- <div class="row mt-2">
                    <div class="col">
                        <a :href="tool.homepage" class="tool-link text-custom2" target="_blank">{{ tool.homepage }}</a>
                        <template v-if="tool.extra_link">
                            <br /><a :href="tool.extra_link" class="text-custom2" target="_blank">{{ tool.extra_link }}</a>
                        </template>
                    </div>
                </div> -->
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
import Sharer from '~/components/Sharer.vue';
import ToolContextualisation from '~/components/ToolContextualisation.vue';

export default {
    name: 'ToolDetails',
    props: [ 'tool' ],
    components: {
        ToolContextualisation, Sharer
    },
    methods: {
        resetSearch: function () {
            // this.$store.commit( 'resetSearch', 1 );
            // this.$router.push( '/' );
        },
        // rate( rate_value ) {
        //     this.$store.dispatch( 'rate', [this.tool.id,rate_value] );
        // },
    },
    mounted() {
        this.$store.dispatch( 'createToolContextualisation', [5,this.tool.tags,this.tool.slug] );
    },
}
</script>

<style scoped>
</style>
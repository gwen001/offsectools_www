<template>
    <div id="tool-details" class="container-fluid p-0">
        <div class="row p-0 m-0">
            <div class="col p-0 m-0" style="border:0px solid #f00;">

<!-- <div id="tool-background-gradient2"></div> -->

<!-- <div id="carouselExampleIndicators" class="carousel slide w-100 h-100" data-bs-ride="carousel" data-bs-interval="true">
<template v-if="tool.images.length > 1">
<div class="carousel-indicators">
<template v-for="img,index in tool.images">
<button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="[index == 0 ? 'active' : '']" :aria-current="[index == 0 ? 'true' : '']" :aria-label="'Slide '+index"></button>
</template>
</div>
</template>
<div class="carousel-inner w-100 h-100">
<template v-for="img,index in tool.images">
<div class="carousel-item" :class="[index == 0 ? 'active' : '']" data-bs-interval="1000">
<img :src="'/img/tools/'+tool.images[index]" class="rounded-top d-block w-100 h-100" :alt="tool.nicename+' on '+$config.APP_NAME">
</div>
</template>
</div>
<template v-if="tool.images.length > 1">
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</template>
</div> -->
                <img :alt="tool.nicename+' on '+this.$config.APP_NAME" :src="'/img/tools/'+tool.images[0]" class="rounded-top tool-picture img-fluid" :class="[from=='modal' ? 'w-100' : 'w-50']" />
            </div>
        </div>
        <div class="row p-3">
            <div class="col">
                <div class="row">
                    <div class="tool-name col">
                        <h2>{{ tool.nicename }}</h2>
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
        </div>
    </div>
</template>

<script>
import ToolContextualisation from '~/components/ToolContextualisation.vue';

export default {
    name: 'ToolDetails',
    props: [ 'tool', 'from' ],
    components: {
        ToolContextualisation
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
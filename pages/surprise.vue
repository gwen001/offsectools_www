<template>
    <div id="home" class="w-100 h-100">
        <!-- <Logo></Logo> -->
        <div class="row tagname">
            <div class="col text-center">
                <h1>Take it like a gift</h1>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col text-center">
                {{ tools.length }} tool<span v-if="tools.length > 1">s</span> found
            </div>
        </div> -->
        <template v-if="tools.length > 0">
            <ToolsListing ref="toolslisting" from="surprise" :tools="tools"></ToolsListing>
            <!--  <div class="d-flex justify-content-left" v-if="tools.length > 1">
                <ToolsSorter :tools="tools.length"></ToolsSorter>
            </div> -->
            <!-- <div class="d-flex flex-row flex-wrap justify-content-center mt-1">
                <template v-for="tool,index in tools">
                    <div class="toolcard-loop p-3 align-self-stretch">
                        <ToolCard :tool="tool" from="index"></ToolCard>
                    </div>
                </template>
            </div> -->
        </template>
        <template v-else>
            <div class="row mt-5">
                <div class="col text-center">
                    Nothing there, but feel free to
                    <nuxt-link to="/addtool" class="highlight1">contribute</nuxt-link>
                    if you think something is missing :)
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToolCard from '~/components/ToolCard.vue'
import ToolsSorter from '~/components/ToolsSorter.vue'
import ToolsListing from '~/components/ToolsListing.vue'

export default {
    name: 'Surprise',
    components: {
        Logo, ToolCard, ToolsSorter, ToolsListing
    },
    computed: {
        tools() {
            return this.$store.getters['getSurprise'](15);
        },
    },
    // beforeRouteLeave(to, from, next) {
    //     console.log(to);
    //     console.log(from);
    //     console.log(next);
    //     this.$refs.toolslisting.beforeRouteLeave( to, from, next );
    // },
    mounted() {
        this.$store.commit( 'setAwesomeBackground', ['/img/background/surprise.jpg','',''] );
    }
}
</script>

<style scoped>
h1 {
    font-size: 2.5em;
}
.flex-row {
    /* border: 2px solid red; */
}
</style>

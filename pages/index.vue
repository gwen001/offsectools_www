<template>
    <div id="home" class="w-100 h-100">
        <Logo></Logo>
        <div class="row mt-4 tagname">
            <div class="col text-center">
                <h1>Featured tools</h1>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col text-center">
                {{ tools.length }} tool<span v-if="tools.length > 1">s</span> found
            </div>
        </div> -->
        <template v-if="tools.length > 0">
            <ToolSorter :tools="tools.length"></ToolSorter>
            <div class="d-flex flex-row flex-wrap justify-content-center mt-1">
                <template v-for="tool,index in tools">
                    <div class="toolcard-loop p-2 align-self-stretch">
                        <ToolCard :tool="tool" from="index"></ToolCard>
                    </div>
                </template>
            </div>
            <div class="mt-5 ms-5 d-flex">
                <Newsletter></Newsletter>
            </div>
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
import ToolSorter from '~/components/ToolSorter.vue'
import Newsletter from '~/components/Newsletter.vue';

export default {
    name: 'Home',
    components: {
        Logo, ToolCard, ToolSorter, Newsletter
    },
    computed: {
        tools() {
            return this.$store.getters['getToolsFeatured'];
        },
    },
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

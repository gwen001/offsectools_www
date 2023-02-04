<template>
    <div id="home" class="w-100 h-100">
        <Logo></Logo>
        <div class="row mt-4 tagname">
            <div class="col text-center">
                <h2>Featured tools</h2>
            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                {{ tools.length }} tool<span v-if="tools.length > 1">s</span> found
            </div>
        </div>
        <ToolSorter></ToolSorter>
        <template v-if="tools.length > 0">
            <div class="d-flex flex-wrap flex-row justify-content-center mt-2">
                <template v-for="tool,index in tools">
                    <div class="d-inline-flexxxx p-2 align-self-stretch">
                        <ToolCard :tool="tool" from="index"></ToolCard>
                    </div>
                </template>
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

export default {
    name: 'Home',
    components: {
        Logo, ToolCard, ToolSorter
    },
    computed: {
        tools() {
            return this.$store.getters['getToolsFeatured'];
        },
    },
}
</script>

<style scoped>
.logo {
    font-size: 4.5em !important;
    font-weight: 500;
}
</style>

<template>
    <div id="contextualisation">
        <template v-if="t_context.length > 0">
            <div class="row mb-2 d-block d-xl-none">
                <div class="col">
                    <h6>You might be interested by:</h6>
                </div>
            </div>
            <div class="d-flex flex-wrap flex-row justify-content-start">
                <template v-for="tool,index in t_context">
                    <div class="d-inline-flexxxx p-2 align-self-stretch mb-1">
                        <ToolCard :tool="tool" from="contextualisation"></ToolCard>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>

<script>
import ToolCard from '~/components/ToolCard.vue'

export default {
    name: 'ToolContextualisation',
    props: [ 'tool' ],
    components: {
        ToolCard
    },
    computed: {
        t_context() {
            return this.$store.getters['getToolContextualisation'];
        }
    },
}
</script>

<style scoped>
</style>
<template>
    <div id="contextualisation">
        <template v-if="t_context.length > 0">
            <div class="row mb-2">
                <div class="col">
                    <h6>You might be interested by:</h6>
                </div>
            </div>
            <div class="d-flex flex-wrap flex-row justify-content-start">
                <template v-for="tool,index in t_context">
                    <div class="d-inline-flexxxx p-2 align-self-stretch">
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
    data: function () {
        return {
            t_context: []
        }
    },
    mounted() {
        this.t_context = this.$store.getters['getToolContextualisation'](5,this.tool.tags,this.tool.slug);
        // console.log(this.t_context);
    }
}
</script>

<style scoped>
</style>
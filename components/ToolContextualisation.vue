<template>
    <div id="contextualisation">
        <div class="row mb-2">
            <div class="col">
                <h6>You might be interested by:</h6>
            </div>
        </div>
        <div class="row">
            <template v-for="tool,index in t_context">
                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                    <ToolCard :tool="tool" from="contextualisation"></ToolCard>
                </div>
            </template>
        </div>
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
        this.t_context = this.$store.getters['getToolContextualisation'](4,this.tool.tags,this.tool.slug);
        console.log(this.t_context);
    }
}
</script>

<style scope>
</style>
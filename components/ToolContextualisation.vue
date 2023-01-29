<template>
    <div id="contextualisation">
        <template v-if="t_context.length > 0">
        <div class="row mb-2">
            <div class="col">
                <h6>You might be interested by:</h6>
            </div>
        </div>
        <div class="row">
            <template v-for="tool,index in t_context">
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 mb-3">
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

<style scope>
#contextualisation div.row:first-of-type {
    margin-top: 100px;
}
#contextualisation .card {
    font-size: 0.75em;
}
/* #contextualisation .tool-name {
    font-size: 1em;
} */
#contextualisation img {
    height: 100px;
}
</style>
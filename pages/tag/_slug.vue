<template>
    <div class="w-100 h-100">
        <template v-if="tag">
            <div class="row">
                <div class="col text-center">
                    <h1>
                        <span class="hashtag">#</span>{{ tag.nicename }}
                    </h1>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col text-center subtitle">
                    {{ tools.length }} tool<span v-if="tools.length > 1">s</span> found
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <template v-for="tool,index in tools">
                    <div class="col-4 mb-3">
                        <ToolCard :tool="tool"></ToolCard>
                    </div>
                </template>
            </div>
        </template>
        <template v-else>
            <NotFound from="tags"></NotFound>
        </template>
    </div>
</template>

<script>
import NotFound from '~/components/NotFound.vue'
import ToolCard from '~/components/ToolCard.vue'

export default {
    name: 'TagPage',
    components: {
        NotFound, ToolCard
    },
    computed: {
        tag() {
            return this.$store.getters['getTagFromSlug'](this.$route.params.slug);
        },
        tools() {
            return this.$store.getters['getToolsFromTag'](this.$route.params.slug);
        },
    },

}
</script>

<style scoped>
h1 {
    font-size: 3em;
}
input {
    color: #fff;
    background-color: #2f3a4c;
    border-color: #162033;
}
input:focus {
    outline: none;
    box-shadow: none;
    color: #fff;
    background-color: #2f3a4c;
    border-color: #162033;
}
.subtitle {
    color: #eee;
    font-size: 1.2em;
}
</style>
<template>
    <div class="container h-100 p-3">
        <template v-if="tool">
            <ToolDetails :tool="tool"></ToolDetails>
        </template>
        <template v-else>
            <NotFound from="tools"></NotFound>
        </template>
    </div>
</template>

<script>
import NotFound from '~/components/NotFound.vue'
import ToolDetails from '~/components/ToolDetails.vue'

export default {
    name: 'ToolPage',
    components: {
        NotFound, ToolDetails
    },
    computed: {
        tool() {
            return this.$store.getters['getToolFromSlug'](this.$route.params.slug);
        },
    },
}
</script>

<style scoped>
</style>
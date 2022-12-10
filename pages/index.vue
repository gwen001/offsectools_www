<template>
    <div id="home" class="w-100 h-100">
        <div class="row">
            <div class="col text-center">
                <span class="logo">
                    {{ $config.APP_NAME }}
                </span>
            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                <h1>
                    A vast collection of security tools
                </h1>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
            <template v-for="tool,index in tools">
                <div class="col-4 mb-3">
                    <ToolCard :tool="tool"></ToolCard>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import ToolCard from '~/components/ToolCard.vue'

export default {
    name: 'Home',
    components: {
        ToolCard
    },
    computed: {
        tools() {
            return this.$store.getters['searchTools'];
        },
    },
}
</script>

<style scoped>
.logo {
    font-size: 4em !important;
}
h1 {
    font-size: 1.8em !important;
}
</style>

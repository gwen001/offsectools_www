<template>
    <div id="home" class="w-100 h-100">
        <div class="row justify-content-center mt-3 mb-0">
            <div class="p-relative text-center">
                <span class="logo">{{ $config.APP_NAME }}</span>
                <!-- <span class="logo2">{{ $config.APP_NAME }}</span>
                <span class="logo3">{{ $config.APP_NAME }}</span> -->
            </div>
        </div>
        <div class="row mt-0">
            <div class="col text-center">
                <h1>
                    A vast collection of security tools
                </h1>
            </div>
        </div>
        <div class="row mt-1">
            <div class="col text-center">
                {{ tools.length }} tool<span v-if="tools.length > 1">s</span> found
            </div>
        </div>
        <template v-if="tools.length > 0">
            <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
                <template v-for="tool,index in tools">
                    <div class="col-4 mb-3">
                        <ToolCard :tool="tool"></ToolCard>
                    </div>
                </template>
            </div>
        </template>
        <!-- <template v-else>
            Nuthing :/
        </template> -->
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
.p-relative {
    position: relative;
}
.logo, .logo2, .logo3 {
    font-size: 5em !important;
    font-weight: 500;
}
/* .logo {
    color: #65d2e9;
    right: 3px;
    top: -3px;
    position: absolute;
    z-index: 4;
}
.logo2 {
    color: #ea445a;
    position: absolute;
    right: -3px;
    top: 3px;
    z-index: 5;
}
.logo3 {
    color: #0a0c1f;
    position: inherit;
    right: 0px;
    top: 0px;
    z-index:5;
} */
h1 {
    font-size: 1.8em !important;
}
</style>

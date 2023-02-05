<template>
    <div>
        <div class="row justify-content-center mt-3 mb-0">
            <div class="text-center">
                <span class="logo">{{ $config.APP_NAME }}</span>
            </div>
        </div>
        <div class="row justify-content-center mt-0">
            <div class="col-5 text-center">
                <h1>
                    {{ $config.APP_DESCR }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToolCard from '~/components/ToolCard.vue'

export default {
    name: 'Logo',
}
</script>

<style scoped>
h1 {
    font-size: 1.8em !important;
}
.logo {
    font-size: 4.5em !important;
    font-weight: 500;
}
</style>

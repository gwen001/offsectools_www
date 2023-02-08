<template>
    <div>
        <div class="row justify-content-center mt-3 mb-0">
            <div class="text-center">
                <span class="logo">{{ $config.APP_NAME }}</span>
            </div>
        </div>
        <div class="row justify-content-center mt-0">
            <div class="col-12 col-sm-9 col-md-7 col-lg-7 col-xl-6 col-xxl-4 text-center">
                <h2>
                    {{ $config.APP_DESCR }}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    name: 'Logo',
}
</script>

<style scoped>
h2 {
    color: #bbb;
    font-size: 1.4em !important;
}
.logo {
    font-size: 4.5em !important;
    font-weight: 500;
}
</style>

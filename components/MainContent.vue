<template>
    <div id="main" class="vh-100 m-0">
        <div class="container-fluid align-items-left justify-content-left">
            <Nuxt />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainContent',
        computed: {
            cssVars() {
                return {
                    '--bg-color': this.$config.CSS1
                }
            }
        }
    }
</script>

<style scoped>
#main {
    background-color: #1E293B;
    overflow-y: auto;
    padding-bottom: 100px;
    padding-top: 10px;
}
</style>

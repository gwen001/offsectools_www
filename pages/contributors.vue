<template>
    <div id="contributors" class="container h-100 p-3">
        <div class="row">
            <div class="col-xl-6 col-lg-8 col-sm-10 col-12">
                <div class="row mb-5">
                    <div class="col">
                        <h1>
                            Contributors
                        </h1>
                    </div>
                </div>
                <template v-for="contributor,index in contributors">
                    <div class="row align-items-center mb-3">
                        <div class="col text-start" style="max-width:65px;">
                            <a :href="'https://github.com/'+contributor.github_contributor" target="_blank"><img :src="'https://github.com/'+contributor.github_contributor+'.png?size=48'" width="48" class="rounded-circle" :alt="contributor.github_contributor" /></a>
                        </div>
                        <div class="col text-start align-middle">
                            <a :href="'https://github.com/'+contributor.github_contributor" target="_blank">{{ contributor.github_contributor }}</a>
                        </div>
                        <div class="col-3 text-end align-middle">
                            {{ contributor.tools_count }}
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'contributors',
    computed: {
        contributors() {
            return this.$store.getters['getContributors'];
        }
    },
    mounted() {
        document.getElementById('main-content').scrollTo(0,0);
        this.$store.commit( 'resetSearch', 1 );
        this.$store.commit( 'setAwesomeBackground', '/img/bg-default2.jpg' );
    }
}
</script>

<style scoped>
</style>


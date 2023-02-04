<template>
    <div id="mobile-menu" class="mb-3 d-block d-lg-none d-xl-none">
        <div class="row mt-2">
            <div class="col text-end">
                <a href="javascript:;" class="lnk-close" v-on:click="hideMobileTarbar">
                    <font-awesome-icon icon="far fa-circle-xmark" />
                </a>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/"><b>Home</b></nuxt-link>
            </div>
            <div class="col text-center">
                <nuxt-link to="/tag/last7days"><b>Last 7 days</b></nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <RandomTool from="mobilemenu"></RandomTool>
            </div>
            <div class="col text-center">
                <nuxt-link to="/contributors"><b>Contributors</b></nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/tag/learning"><b>Learn & Train</b></nuxt-link>
            </div>
            <div class="col text-center">
                <nuxt-link to="/tag/resources"><b>Resources</b></nuxt-link>
            </div>
        </div>
        <div class="d-flex mt-3">
            <nuxt-link to="/addtool" class="btn btn-outline-custom2 w-100">Add tool</nuxt-link>
            <nuxt-link to="/about" class="btn btn-custom2 ms-2">?</nuxt-link>
        </div>
    </div>
</template>

<script>
import RandomTool from '~/components/RandomTool.vue';

export default {
    name: 'MobileMenu',
    components: {
        RandomTool
    },
    methods: {
        // last7days: function () {
        //     this.$store.commit( 'resetSearchTerm' );
        //     this.$router.push( '/?p=last7days' );
        // },
        // resetSearchTerm: function () {
        //     this.$store.commit( 'resetSearchTerm' );
        //     this.$router.push( '/' );
        // },
        // setSearchTerm: function (slug) {
        //     this.$store.commit( 'setSearchTerm', slug );
        //     this.$router.push( '/' );
        // },
        hideMobileTarbar() {
            this.$parent.hideMe();
        },
    },
}
</script>

<style scope>
</style>
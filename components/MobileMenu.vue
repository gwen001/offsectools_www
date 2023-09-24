<template>
    <div id="mobile-menu" class="mb-3 d-block d-lg-none d-xl-none">
        <div class="row mt-2">
            <div class="col text-end">
                <a href="javascript:;" class="lnk-close" v-on:click="hideMobilebar">
                    <font-awesome-icon icon="far fa-circle-xmark" />
                </a>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/">Home</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/tag/last7days">Last 7 days</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <RandomTool from="mobilemenu"></RandomTool>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/tag/learning">Learn & Train</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/tag/resources">Resources</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/contributors">Contributors</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/newsletter">Newsletter</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link :to="browseLink">Tags</nuxt-link>
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
    computed: {
        browseLink() {
            if( this.$store.getters['getTagsSortBy'] == 'categories' ) {
                return '/browse/categories';
            } else {
                return '/browse/alphabet';
            }
        },
    },
    methods: {
        hideMobilebar() {
            this.$parent.hideMe();
        },
    },
}
</script>

<style scope>
</style>
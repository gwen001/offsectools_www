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
                <nuxt-link to="/" :class="[this.$route.path=='/' ? 'fw-bold': '']">Home</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/tag/last7days" :class="[this.$route.path=='/tag/last7days' ? 'fw-bold': '']">Last 7 days</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/tag/learning" :class="[this.$route.path=='/tag/learning' ? 'fw-bold': '']">Learn & Train</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/tag/resources" :class="[this.$route.path=='/tag/resources' ? 'fw-bold': '']">Resources</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/contributors" :class="[this.$route.path=='/contributors' ? 'fw-bold': '']">Contributors</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/newsletter" :class="[this.$route.path=='/newsletter' ? 'fw-bold': '']">Newsletter</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link :to="browseLink" :class="[(this.$route.path=='/browse/alphabet'||this.$route.path=='/browse/categories') ? 'fw-bold': '']">Tags</nuxt-link>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/surprise" :class="[this.$route.path=='/surprise' ? 'fw-bold': '']">Surprise me!</nuxt-link>
                <!-- <RandomTool from="mobilemenu"></RandomTool> -->
            </div>
        </div>
        <div class="d-flex mt-3">
            <nuxt-link to="/addtool" class="btn btn-outline-gradient btn-outline-gradient1 w-100" :class="[this.$route.path=='/addtool' ? 'fw-bold': '']">Add tool</nuxt-link>
        </div>
        <div class="d-flex mt-3">
            <nuxt-link to="/about" class="btn btn-outline-gradient btn-outline-gradient1 w-100" :class="[this.$route.path=='/about' ? 'fw-bold': '']">About</nuxt-link>
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
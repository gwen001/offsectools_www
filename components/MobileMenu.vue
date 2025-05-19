<template>
    <div id="mobile-menu" class="mb-3 d-block d-md-none d-lg-none d-xl-none">
        <div class="row mt-2">
            <div class="col text-end">
                <a href="javascript:;" class="lnk-close" v-on:click="hideMobilebar">
                    <font-awesome-icon icon="far fa-circle-xmark" />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                <div class="w-100">
                    <Logo2></Logo2>
                </div>
            </div>
        </div>
        <div class="menu">
            <div class="row mt-3">
                <div class="col text-center">
                    <nuxt-link to="/" :class="[this.$route.path=='/' ? 'fw-bold': '']">
                        <font-awesome-icon icon="fas fa-house-crack" /> Home
                    </nuxt-link>
                </div>
            </div>
            <!-- <div class="row mt-3">
                <div class="col text-center">
                    <nuxt-link to="/last7days" :class="[this.$route.path=='/last7days' ? 'fw-bold': '']">Last 7 days</nuxt-link>
                </div>
            </div> -->
            <div class="row mt-3">
                <div class="col text-center">
                    <nuxt-link to="/tag/learning" :class="[this.$route.path=='/tag/learning' ? 'fw-bold': '']">
                        <font-awesome-icon icon="fa fa-graduation-cap" /> Learn & Train
                    </nuxt-link>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col text-center">
                    <nuxt-link to="/tag/resources" :class="[this.$route.path=='/tag/resources' ? 'fw-bold': '']">
                        <font-awesome-icon icon="fa fa-database" /> Resources
                    </nuxt-link>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col text-center">
                    <nuxt-link to="/contributors" :class="[this.$route.path=='/contributors' ? 'fw-bold': '']">
                        <font-awesome-icon icon="fa fa-users" /> Contributors
                    </nuxt-link>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col text-center">
                    <nuxt-link to="/newsletter" :class="[this.$route.path=='/newsletter' ? 'fw-bold': '']">
                        <font-awesome-icon icon="fas fa-envelope" /> Newsletter
                    </nuxt-link>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col text-center">
                    <nuxt-link :to="browseLink" :class="[(this.$route.path=='/browse/alphabet'||this.$route.path=='/browse/categories') ? 'fw-bold': '']">
                        <font-awesome-icon icon="fas fa-hashtag" /> Tags
                    </nuxt-link>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col text-center">
                    <nuxt-link to="/advertise" :class="[this.$route.path=='/advertise' ? 'fw-bold': '']">
                        <font-awesome-icon icon="fas fa-bullhorn" /> Advertise!
                    </nuxt-link>
                </div>
            </div>
            <!-- <div class="row mt-3">
                <div class="col text-center">
                    <nuxt-link to="/surprise" :class="[this.$route.path=='/surprise' ? 'fw-bold': '']">Surprise me!</nuxt-link>
                </div>
            </div> -->
        </div>
        <div class="d-flex mt-3">
            <nuxt-link to="/addtool" class="btn btn-outline-gradient btn-outline-gradient1 w-100" :class="[this.$route.path=='/addtool' ? 'fw-bold': '']">
                <font-awesome-icon icon="fa fa-plus" /> Add tool
            </nuxt-link>
        </div>
        <div class="d-flex mt-3">
            <nuxt-link to="/about" class="btn btn-outline-gradient btn-outline-gradient1 w-100" :class="[this.$route.path=='/about' ? 'fw-bold': '']">
                <font-awesome-icon icon="fa fa-question" /> About
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import Logo2 from '~/components/Logo2.vue';
import MobileMenu from '~/components/MobileMenu.vue';

export default {
    name: 'MobileMenu',
    components: {
        Logo2
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
a:hover {
    color: #ddd;
}
</style>
<template>
    <div id="footer" class="">
        <div class="row justify-content-center">
            <div class="col-6 text-left">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xl-8">
                        <Newsletter></Newsletter>
                    </div>
                </div>
            </div>
            <div class="col-2 d-none d-sm-none d-md-block d-lg-block d-xl-block">
                <ul class="list-unstyled p-0 m-0">
                    <li class="mb-4">
                        TOOLS
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="/">Promoted tools</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="/tag/last7days">Added last week</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="/tag/learning">Learn & Train</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="/tag/resources">Resources</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/surprise">Surprise!</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <ul class="list-unstyled p-0 m-0">
                    <li class="mb-4">
                        TOP TAGS
                    </li>
                    <template v-for="tag,index in topTags">
                        <li class="mb-4">
                            <nuxt-link :to="'/tag/'+tag.slug">{{ tag.nicename }}</nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="col-2 d-none d-sm-block d-md-block d-lg-block d-xl-block">
                <ul class="list-unstyled p-0 m-0">
                    <li class="mb-4">
                        LINKS
                    </li>
                    <li class="mb-4">
                        <nuxt-link :to="browseLink">All tags</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="/contributors">Contributors</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="/newsletter">Newsletter</nuxt-link>
                    </li>
                    <li class="mb-4">
                        <nuxt-link to="/addtool">Add a tool</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
import Newsletter from '~/components/Newsletter.vue';

export default {
    name: 'Footer',
    components: {
        Newsletter
    },
    computed: {
        topTags() {
            return this.$store.getters['getTags'].slice(0,5);
        },
        browseLink() {
            if( this.$store.getters['getTagsSortBy'] == 'categories' ) {
                return '/browse/categories';
            } else {
                return '/browse/alphabet';
            }
        },
    },
}
</script>

<style scoped>
</style>

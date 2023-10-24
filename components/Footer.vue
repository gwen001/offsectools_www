<template>
    <div id="footer" class="">
                        <!-- <div class="d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-block">xxl</div>
                        <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-none">xl</div>
                        <div class="d-none d-sm-none d-md-none d-lg-block d-xl-none d-xxl-none">lg</div>
                        <div class="d-none d-sm-none d-md-block d-lg-none d-xl-none d-xxl-none">md</div>
                        <div class="d-none d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none">sm</div>
                        <div class="d-block d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none">xs</div> -->
        <div class="row justify-content-center">
            <div class="text-left mb-5 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
                <div class="row justify-content-center">
                    <div class="col-11">
                        <Newsletter></Newsletter>
                    </div>
                </div>
            </div>
            <div class="break d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none"></div>
            <div class="mb-5 col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 col-xxl-2">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <ul class="list-unstyled p-0 m-0">
                            <li class="mb-4">
                                SITE
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
            <div class="mb-5 col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 col-xxl-2">
                <div class="row justify-content-center">
                    <div class="col-8">
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
                </div>
            </div>
            <div class="mb-5 col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 col-xxl-2">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <ul class="list-unstyled p-0 m-0">
                            <li class="mb-4">
                                TOP TAGS
                            </li>
                            <template v-for="tag,index in topTags">
                                <li :class="[(index<(topTags.length-1)) ? 'mb-4' : '']">
                                    <nuxt-link :to="'/tag/'+tag.slug">{{ tag.nicename }}</nuxt-link>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mb-5 col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 col-xxl-2">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <ul class="list-unstyled p-0 m-0">
                            <li class="mb-4">
                                LINKS
                            </li>
                            <li class="mb-4">
                                <a href="https://github.com/gwen001/offsectools_www" target="_blank">GitHub</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://app.splitbee.io/public/offsec.tools?period=30d" target="_blank">Analytics</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://10degres.net" target="_blank">Author blog</a>
                            </li>
                            <li class="mb-4">
                                <a href="/assets/tags/" target="_blank">Wallpapers</a>
                            </li>
                            <li>
                                <a href="https://www.uneed.best/" target="_blank">Inspired by</a>
                            </li>
                        </ul>
                    </div>
                </div>
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
#footer {
    background-color: #141729;
    /* border: 1px solid #ff0; */
    /* font-size: 0.8em; */
    color: #fff;
    /* bottom: 0; */
    padding-bottom: 0px;
    padding-top: 50px;
    /* position: relative; */
}
#footer a {
    color: #ccc;
}
#footer a:hover {
    color: #fff;
    /* text-decoration: underline; */
}
#footer .col-2 {
    border: 0px solid #f00;
}
</style>

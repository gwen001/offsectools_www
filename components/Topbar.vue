<template>
    <div id="topbar" class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
        <nav class="navbar">
            <div class="container-fluid">
                <div class="">
                    <a href="javascript:;" v-on:click="resetSearchTerm()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                    </a>
                    <a href="/?p=last7days" v-on:click="resetSearchTerm()" class="ms-3">Last 7 days</a>
                    <RandomTool></RandomTool>
                    <nuxt-link to="/contributors" class="ms-3">Contributors</nuxt-link>
                    <a :href="$config.GITHUB_URL" target="_blank" class="ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor" viewBox="0 0 50 50" enable-background="new 0 0 50 50"><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"/></svg>
                    </a>
                </div>
                <div class="col-4 col-md-3">
                    <div class="input-group">
                        <div class="go-search"><svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" viewBox="0 0 20 20"><path d="M14.2 12.8c2.3-2.9 2.1-7.1-.5-9.8C10.8.1 6.1.1 3.2 3 1.8 4.4 1 6.2 1 8.2s.8 3.8 2.2 5.2c1.4 1.4 3.2 2.2 5.2 2.2 1.4 0 2.8-.4 4-1.2L17 19l1.7-1.7-4.5-4.5zm-9.3-1.1c-.9-.9-1.5-2.2-1.5-3.5S4 5.6 4.9 4.7c1-1 2.2-1.5 3.5-1.5 1.3 0 2.6.5 3.5 1.5 1.9 1.9 1.9 5.1 0 7-.9.9-2.2 1.5-3.5 1.5-1.3-.1-2.6-.6-3.5-1.5z"/></svg></div>
                        <input type="text" class="form-control" name="search" placeholder="search..." v-model="search_term" v-on:keyup.13="doSearch()" />
                        <a href="javascript:;" v-on:click="resetSearchTerm()" class="reset-search-term"><svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg></a>
                    </div>
                </div>
                <div class="d-flex">
                    <nuxt-link to="/addtool" class="btn btn-outline-custom2">Add tool</nuxt-link>
                    <nuxt-link to="/about" class="btn btn-custom2 ms-1">?</nuxt-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import RandomTool from '~/components/RandomTool.vue';

export default {
    name: 'Topbar',
    components: {
        RandomTool
    },
    methods: {
        doSearch() {
            // alert('doSearch');
            this.$router.push( '/' );
        },
        randomtool: function (event) {
            const t_tools = this.$store.getters['getTools'];
            const r = Math.floor(Math.random() * t_tools.length);
            const tool = this.tool = t_tools[r];
            this.$store.commit( 'resetSearchTerm' );
            this.$router.push( '/tool/'+tool.slug );
        },
        resetSearchTerm: function () {
            this.$store.commit( 'resetSearchTerm' );
            this.$router.push( '/' );
        }
    },
    computed: {
        search_term: {
            get() {
                return this.$store.getters['getSearchTerm'];
            },
            set(val) {
                if( val.length == 1 && val == '#' ) {
                    ;
                } else {
                    this.$store.commit( 'setSearchTerm', val );
                }
            }
        }
    }
}
</script>

<style scoped>

</style>

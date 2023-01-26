<template>
    <div id="topbar" class="">
        <nav class="navbar">
            <div class="container-fluid">
                <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    <a href="javascript:;" v-on:click="resetSearchTerm()" class="align-middle">
                        <font-awesome-icon icon="fas fa-house" />
                    </a>
                    <a href="javascript:;" v-on:click="last7days()" class="ms-3">Last 7 days</a>
                    <RandomTool></RandomTool>
                    <a href="javascript:;" v-on:click="setSearchTerm('#learning')" class="ms-3">Learning</a>
                    <a href="javascript:;" v-on:click="setSearchTerm('#resources')" class="ms-3">Resources</a>
                    <nuxt-link to="/contributors" class="ms-3">Contributors</nuxt-link>
                    <!-- <a :href="$config.GITHUB_URL" target="_blank" class="ms-3 align-middle">
                        <font-awesome-icon icon="fa-brands fa-github" />
                    </a> -->
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <div class="input-group">
                        <div class="go-search">
                            <font-awesome-icon icon="fas fa-magnifying-glass" />
                        </div>
                        <input type="text" class="form-control" name="search" placeholder="search..." v-model="search_term" v-on:keyup.13="doSearch()" />
                        <a href="javascript:;" v-on:click="resetSearchTerm()" class="reset-search-term">
                            <font-awesome-icon icon="far fa-circle-xmark" />
                        </a>
                    </div>
                </div>
                <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block">
                    <nuxt-link to="/addtool" class="btn btn-outline-custom2">Add a tool</nuxt-link>
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
        last7days: function () {
            this.$store.commit( 'resetSearchTerm' );
            this.$router.push( '/?p=last7days' );
        },
        resetSearchTerm: function () {
            this.$store.commit( 'resetSearchTerm' );
            this.$router.push( '/' );
        },
        setSearchTerm: function (slug) {
            this.$store.commit( 'setSearchTerm', slug );
            this.$router.push( '/' );
        },
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
.input-group {
    padding-left: 20px;
}
</style>

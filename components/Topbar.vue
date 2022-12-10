<template>
    <div id="topbar" class="">
        <nav class="navbar">
            <div class="container-fluid p-0">
                <div class="">
                    <nuxt-link to="/addtool" class="">This week</nuxt-link>
                    <a href="javascript:;" class="ml-3" v-on:click="randomtool">Random tool</a>
                    <nuxt-link to="/contributors" class="ml-3">Contributors</nuxt-link>
                </div>
                <div class="col-3 input-group">
                    <div class="go-search"><svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" viewBox="0 0 20 20"><path d="M14.2 12.8c2.3-2.9 2.1-7.1-.5-9.8C10.8.1 6.1.1 3.2 3 1.8 4.4 1 6.2 1 8.2s.8 3.8 2.2 5.2c1.4 1.4 3.2 2.2 5.2 2.2 1.4 0 2.8-.4 4-1.2L17 19l1.7-1.7-4.5-4.5zm-9.3-1.1c-.9-.9-1.5-2.2-1.5-3.5S4 5.6 4.9 4.7c1-1 2.2-1.5 3.5-1.5 1.3 0 2.6.5 3.5 1.5 1.9 1.9 1.9 5.1 0 7-.9.9-2.2 1.5-3.5 1.5-1.3-.1-2.6-.6-3.5-1.5z"/></svg></div>
                    <input type="text" class="form-control" name="search" placeholder="search..." v-model="search_term" v-on:keyup.13="doSearch()" />
                    <a href="javascript:;" v-on:click="resetSearchTerm()" class="reset-search-term"><svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg></a>
                </div>
                <div class="d-flex">
                    <nuxt-link to="/addtool" class="btn btn-outline-success ml-2">Add tool</nuxt-link>
                    <nuxt-link to="/about" class="btn btn-success ml-2">?</nuxt-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Topbar',
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
        resetSearchTerm: function (slug) {
            this.$store.commit( 'resetSearchTerm' );
            // this.$router.push( '/' );
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
input {
    padding-left: 40px;
}
.go-search {
    color: #4ade80;
    position: absolute;
    padding: 5px 0px 5px 10px;
    z-index: 100;
}
.reset-search-term {
    margin-left: -25px;
    padding-top: 5px;
    z-index: 100;
}
.reset-search-term {
    color: #e2e8f0;
}
</style>

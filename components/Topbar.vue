<template>
    <div id="topbar" class="">
        <nav class="navbar">
            <div class="container-fluid">
                <div class="mobilemenu-icon d-lg-none d-xl-none">
                    <a href="javascript:;" v-on:click="showMobileTarbar">
                        <font-awesome-icon icon="fas fa-bars" />
                    </a>
                </div>
                <div class="d-none d-sm-none d-md-none d-lg-block d-xl-block">
                    <nuxt-link to="/" class="align-middle">
                        <font-awesome-icon icon="fas fa-house" />
                    </nuxt-link>
                    <nuxt-link to="/tag/last7days" class="ms-3">Last 7 days</nuxt-link>
                    <RandomTool from="topbar"></RandomTool>
                    <nuxt-link to="/tag/learning" class="ms-3">Learn & Train</nuxt-link>
                    <nuxt-link to="/tag/resources" class="ms-3">Resources</nuxt-link>
                    <nuxt-link to="/contributors" class="ms-3">Contributors</nuxt-link>
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
            this.$router.push( '/tag/all' );
        },
        randomtool: function (event) {
            const t_tools = this.$store.getters['getTools'];
            const r = Math.floor(Math.random() * t_tools.length);
            const tool = this.tool = t_tools[r];
            this.$store.commit( 'resetSearchTerm' );
            this.$router.push( '/tool/'+tool.slug );
        },
        // last7days: function () {
        //     this.$store.commit( 'resetSearchTerm' );
        //     this.$router.push( '/?p=last7days' );
        // },
        resetSearchTerm: function () {
            this.$store.commit( 'resetSearchTerm' );
            // this.$router.push( '/' );
        },
        // setSearchTerm: function (slug) {
        //     this.$store.commit( 'setSearchTerm', slug );
        //     this.$router.push( '/' );
        // },
        showMobileTarbar() {
            // console.log('showMobileTarbar');
            this.$parent.$refs.tagbar.showMe();
            setTimeout(() => document.addEventListener('click',this.hideMobileTarbar), 0);
        },
        hideMobileTarbar(event) {
            // console.log(event.target.firstChild.data);
            var t_categories = this.$store.getters['getCategories'];
            var ignore_close = ['Categories','All tags','Top tags'];
            t_categories.forEach( elt =>ignore_close.push(elt.nicename) );
            var doClose = !ignore_close.includes(event.target.firstChild.data);
            if( doClose ) {
                this.$parent.$refs.tagbar.hideMe();
                document.removeEventListener('click',this.hideMobileTarbar);
            }
        },
    },
    computed: {
        search_term: {
            get() {
                return this.$store.getters['getSearchTerm'];
            },
            set(val) {
                // if( val.length == 1 && val == '#' ) {
                //     ;
                // } else {
                    this.$store.commit( 'setSearchTerm', val );
                // }
            }
        }
    }
}
</script>

<style scoped>
.mobilemenu-icon {
    left: 10px;
    position: absolute;
    top: 12px;
}
.mobilemenu-icon a:hover {
    color: #ddd;
}
@media all and (max-width: 991px) {
    .input-group {
        padding-left: 20px;
    }
}
@media all and (max-width: 767px) {
    .input-group {
        padding-left: 20px;
    }
}
</style>

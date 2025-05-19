<template>
    <div id="topbar" class="" :style="`background-color: rgba(10,12,31,1);`">
        <nav class="navbar h-100">
            <div class="container-fluid">
                <div id="mobilemenu-icon" class="mobilemenu-icon d-md-none d-lg-none d-xl-none">
                    <a href="javascript:;" v-on:click="showMobilebar">
                        <font-awesome-icon icon="fas fa-bars" />
                    </a>
                </div>
                <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                    <div class="topbar-logo float-start">
                        <Logo2></Logo2>
                    </div>
                    <div class="d-inline ms-4 menu" style="line-height:37px;">
                        <nuxt-link to="/" class="topbar-home" :class="[ this.$route.path=='/' ? 'fw-bold': '']">
                            <font-awesome-icon icon="fas fa-house-crack" /> Home
                        </nuxt-link>
                        <!-- <nuxt-link to="/last7days" class="topbar-last7days ms-3" :class="[this.$route.path=='/last7days' ? 'fw-bold': '']">Last 7 days</nuxt-link> -->
                        <nuxt-link to="/tag/learning" class="topbar-learning ms-3" :class="[this.$route.path=='/tag/learning' ? 'fw-bold': '']">
                            <font-awesome-icon icon="fa fa-graduation-cap" /> Learn & Train
                        </nuxt-link>
                        <nuxt-link to="/tag/resources" class="topbar-resources ms-3" :class="[this.$route.path=='/tag/resources' ? 'fw-bold': '']">
                            <font-awesome-icon icon="fa fa-database" /> Resources
                        </nuxt-link>
                        <nuxt-link to="/contributors" class="topbar-contributors ms-3" :class="[this.$route.path=='/contributors' ? 'fw-bold': '']">
                            <font-awesome-icon icon="fa fa-users" /> Contributors
                        </nuxt-link>
                        <nuxt-link to="/newsletter" class="topbar-newsletter ms-3" :class="[this.$route.path=='/newsletter' ? 'fw-bold': '']">
                            <font-awesome-icon icon="fas fa-envelope" /> Newsletter
                        </nuxt-link>
                        <nuxt-link :to="browseLink" class="topbar-tags ms-3" :class="[(this.$route.path=='/browse/alphabet'||this.$route.path=='/browse/categories') ? 'fw-bold': '']">
                            <font-awesome-icon icon="fas fa-hashtag" /> Tags
                        </nuxt-link>
                        <nuxt-link to="/advertise" class="topbar-advertise ms-3" :class="[this.$route.path=='/advertise' ? 'fw-bold': '']">
                            <font-awesome-icon icon="fas fa-bullhorn" /> Advertise!
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xXl-4">
                    <div class="input-group search-group">
                        <div class="go-search">
                            <font-awesome-icon icon="fas fa-magnifying-glass" />
                        </div>
                        <input type="text" class="form-control" id="search-input" name="search" placeholder="search..." v-model="search_term" v-on:keyup.13="doSearch()" />
                        <a href="javascript:;" v-on:click="resetSearch()" class="reset-search-term">
                            <font-awesome-icon icon="far fa-circle-xmark" />
                        </a>
                    </div>
                </div>
                <div class="topbar-buttons">
                    <!-- <nuxt-link to="/addtool" class="btn btn-outline-gradient btn-outline-gradient1">Add a tool</nuxt-link>
                    <nuxt-link to="/about" class="btn btn-outline-gradient btn-outline-gradient1 ms-1">About</nuxt-link> -->
                    <nuxt-link to="/about"><div class="box-border-gradient float-end ms-3"><div class="box-border-gradient-bg1" :class="[this.$route.path=='/about' ? 'fw-bold': '']">
                        <font-awesome-icon icon="fa fa-question" /> About
                    </div></div></nuxt-link>
                    <nuxt-link to="/addtool"><div class="box-border-gradient float-start"><div class="box-border-gradient-bg1" :class="[this.$route.path=='/addtool' ? 'fw-bold': '']">
                        <font-awesome-icon icon="fa fa-plus" /> Add a tool
                    </div></div></nuxt-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import Logo2 from '~/components/Logo2.vue';

export default {
    name: 'Topbar',
    components: {
        Logo2
    },
    // data: function () {
    //     return {
    //         opacity: 0.15,
    //     }
    // },
    methods: {
        doSearch() {
            // alert('doSearch');
            this.$store.commit( 'resetSearchPage' );
            this.$router.push( '/tag/all' );
        },
        resetSearch: function () {
            this.$store.commit( 'resetSearch' );
            // this.$router.push( '/' );
        },
        // setSearchTerm: function (slug) {
        //     this.$store.commit( 'setSearchTerm', slug );
        //     this.$router.push( '/' );
        // },
        showMobilebar() {
            // console.log('showMobilebar');
            this.$parent.$refs.mobilebar.showMe();
            setTimeout(() => document.addEventListener('click',this.hideMobilebar), 0);
        },
        hideMobilebar(event) {
            // console.log(event.target.firstChild.data);
            var t_categories = this.$store.getters['getCategories'];
            // var ignore_close = ['Categories','All tags','Top tags'];
            var ignore_close = [];
            t_categories.forEach( elt =>ignore_close.push(elt.nicename) );
            var doClose = !ignore_close.includes(event.target.firstChild.data);
            if( doClose ) {
                this.$parent.$refs.mobilebar.hideMe();
                document.removeEventListener('click',this.hideMobilebar);
            }
        },
        // handleScroll() {
        //     if( process.client ) {
        //         let scrollHeight = window.scrollY;
        //         let maxHeight = window.document.body.scrollHeight - window.document.documentElement.clientHeight;
        //         this.opacity = scrollHeight/100;
        //         if( this.opacity <= 0.15 ) {
        //             this.opacity = 0.15;
        //         }
        //         if( this.opacity >= 1 ) {
        //             this.opacity = 1;
        //         }
        //         // console.log(scrollHeight);
        //         // console.log(maxHeight);
        //         if( scrollHeight >= (maxHeight-200) ) {
        //             //this.getPosts();
        //         }
        //     }
        // },
    },
    // created() {
    //     if( process.client ) {
    //         window.addEventListener('scroll', this.handleScroll);
    //         // this.getPosts();
    //     }
    // },
    mounted() {
        document.getElementById('search-input').focus();
    },
    computed: {
        // opacity() {
        //     return this.opacity;
        // },
        browseLink() {
            if( this.$store.getters['getTagsSortBy'] == 'categories' ) {
                return '/browse/categories';
            } else {
                return '/browse/alphabet';
            }
        },
        isSortByCategories() {
            return (this.$store.getters['getTagsSortBy'] == 'categories');
        },
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
#topbar {
    /* border: 1px solid #f00; */
}
.mobilemenu-icon {
    font-size: 1.3em;
    left: 10px;
    position: absolute;
    top: 15px;
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

<template>
    <div class="container-fluid vh-100 p-0 m-0">
        <div class="row vh-100 p-0 m-0">
            <Tagbar ref="tagbar"></Tagbar>
            <div id="main" class="col p-0 m-0">
                <Topbar></Topbar>
                <div class="mobilemenu_icon d-lg-none d-xl-none">
                    <a href="javascript:;" v-on:click="showMobileTarbar">
                        <font-awesome-icon icon="fas fa-bars" />
                    </a>
                </div>
                <div class="row p-0 m-0">
                    <div class="col p-0 m-0">
                        <MainContent></MainContent>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
// import Vue from 'vue';
import Topbar from '~/components/Topbar.vue';
import Tagbar from '~/components/Tagbar.vue';
import MainContent from '~/components/MainContent.vue';

export default {
    name: 'default_layout',
    components: {
        Topbar, Tagbar, MainContent
    },
    methods: {
        showMobileTarbar() {
            // console.log('showMobileTarbar');
            this.$refs.tagbar.showMe();
            setTimeout(() => document.addEventListener('click',this.hideMobileTarbar), 0);
        },
        hideMobileTarbar(event) {
            // console.log(event);
            // console.log(event.target);
            // console.log(event.target.firstChild.data);
            var ignore_close = ['Categories','All tags','Top tags','Cloud','CMS','Informations gathering','Vulnerabilities','Misc'];
            var doClose = !ignore_close.includes(event.target.firstChild.data);
            if( doClose ) {
                this.$refs.tagbar.hideMe();
                document.removeEventListener('click',this.hideMobileTarbar);
            }
        }
    },
    async mounted() {
        this.$store.dispatch( 'getTags' );
        this.$store.dispatch( 'getTools' );
        this.$store.dispatch( 'getContributors' );
        this.$store.dispatch( 'getCategories' );
    },
}
</script>

<style scoped>
a:hover {
    color: #ddd;
}
.mobilemenu_icon {
    left: 10px;
    position: absolute;
    top: 12px;
    z-index: 20;
}
</style>

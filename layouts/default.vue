<template>
    <div class="container-fluid vh-100 p-0 m-0">
        <div class="row vh-100 p-0 m-0">
            <Tagbar ref="tagbar"></Tagbar>
            <div id="main" class="col p-0 m-0">
                <Topbar></Topbar>
                <div class="mobilemenu_icon d-lg-none d-xl-none">
                        <a href="javascript:;" v-on:click="showMobileTarbar"><svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 448 512" fill="currentColor" stroke="#0a0c1f" stroke-width="20"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></a>
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
    left: 8px;
    position: absolute;
    top: 8px;
    z-index: 20;
}
.mobilemenu_icon svg {
    /* border: 2px solid #f00; */
}
</style>

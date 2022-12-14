<template>
    <div class="container-fluid vh-100 p-0 m-0">
        <div class="row vh-100 p-0 m-0">
            <Tagbar ref="tagbar"></Tagbar>
            <div id="main" class="col p-0 m-0">
                <Topbar></Topbar>
                <div class="row d-block d-lg-none d-xl-none">
                    <div class="col ms-3 mt-3">
                        <a href="javascript:;" v-on:click="showMobileTarbar"><svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 448 512" fill="currentColor"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></a>
                    </div>
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
            // alert(1);
            this.$refs.tagbar.showMe();
        }
    },
    // keyboardEvent (e) {
    //     // console.log(e.which);
    //     if( e.which === 27 ) {
    //         this.$refs.tagbar.hideMe();
    //         // this.$parent.hideMe();
    //         // this.$router.push( '/' );
    //     }
    // },
    async mounted() {
        this.$store.dispatch( 'getTags' );
        this.$store.dispatch( 'getTools' );
        this.$store.dispatch( 'getContributors' );
    },
    // created() {
    //     window.addEventListener('keyup', this.keyboardEvent);
    // },
    // beforeDestroy() {
    //     window.removeEventListener('keyup', this.keyboardEvent);
    // }
}
</script>

<style scoped>
a:hover {
    color: #ddd;
}
</style>

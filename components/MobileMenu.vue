<template>
    <div id="mobile-menu" class="mb-3 d-block d-lg-none d-xl-none">
        <div class="row mt-2">
            <div class="col text-end">
                <svg xmlns="http://www.w3.org/2000/svg" v-on:click="hideMobileTarbar" width="25" viewBox="0 0 512 512" fill="currentColor"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H448C456.8 432 464 424.8 464 416V96C464 87.16 456.8 80 448 80H64C55.16 80 48 87.16 48 96z"/></svg>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <a href="javascript:;" v-on:click="last7days()" class="ms-3">Last 7 days</a>
            </div>
            <div class="col text-center">
                <RandomTool></RandomTool>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <a href="javascript:;" v-on:click="setSearchTerm('#learning')" class="ms-3">Learning</a>
            </div>
            <div class="col text-center">
                <a href="javascript:;" v-on:click="setSearchTerm('#resources')" class="ms-3">Resources</a>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col text-center">
                <nuxt-link to="/contributors">Contributors</nuxt-link>
            </div>
        </div>
        <div class="d-flex mt-3">
            <nuxt-link to="/addtool" class="btn btn-outline-custom2 w-100">Add tool</nuxt-link>
            <nuxt-link to="/about" class="btn btn-custom2 ms-2">?</nuxt-link>
        </div>
    </div>
</template>

<script>
import RandomTool from '~/components/RandomTool.vue';

export default {
    name: 'MobileMenu',
    components: {
        RandomTool
    },
    methods: {
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
        hideMobileTarbar() {
            // alert(3);
            this.$parent.hideMe();
        },
    },
}
</script>

<style scope>
</style>
<template>
    <div id="mobilebar" ref="mobilebar" class="vh-100">
        <MobileMenu></MobileMenu>
    </div>
</template>

<script>
import MobileMenu from '~/components/MobileMenu.vue';

export default {
    name: 'Mobilebar',
    computed: {
    },
    methods: {
        showMe() {
            this.$refs.mobilebar.classList.add('show');
        },
        hideMe() {
            this.$refs.mobilebar.classList.remove('show');
        },
        resetSearch: function () {
            this.$store.commit( 'resetSearch', 1 );
            // this.$router.push( '/' );
        },
        // setSearchTerm: function (slug) {
        //     this.$store.commit( 'setSearchTerm', slug );
        //     this.$router.push( '/' );
        // },
    },
}
</script>

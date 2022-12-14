<template>
    <div id="tagbar" ref="tagbar" class="vh-100">
        <MobileMenu></MobileMenu>
        <ul class="list-group mt-3">
            <li>
                <a href="javascript:;" v-on:click="resetSearchTerm()" class="list-group-item btn text-start d-flex justify-content-between align-items-center">
                    <span class="hashtag">#</span>
                    <span class="nicename w-100">all</span>
                    <span class="badge rounded-pill">{{ getToolsN }}</span>
                </a>
            </li>
            <template v-for="tag,index in tags">
                <li v-if="tag.tools_count > 0 && tag.status == 1">
                    <a href="javascript:;" v-on:click="setSearchTerm('#'+tag.slug)" class="list-group-item btn text-start d-flex justify-content-between align-items-center">
                        <span class="hashtag">#</span>
                        <span class="nicename w-100">{{ tag.nicename }}</span>
                        <span class="badge rounded-pill">{{ tag.tools_count }}</span>
                    </a>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import MobileMenu from '~/components/MobileMenu.vue';

export default {
    name: 'Tagbar',
    components: {
        MobileMenu
    },
    computed: {
        tags() {
            return this.$store.getters['getTags'];
        },
        getToolsN() {
            return this.$store.getters['getTools'].length;
        },
    },
    methods: {
        showMe() {
            // alert(2);
            this.$refs.tagbar.classList.add('show');
        },
        hideMe() {
            // alert(4);
            this.$refs.tagbar.classList.remove('show');
        },
        resetSearchTerm: function (slug) {
            this.$store.commit( 'resetSearchTerm' );
            this.$router.push( '/' );
        },
        setSearchTerm: function (slug) {
            this.$store.commit( 'setSearchTerm', slug );
            this.$router.push( '/' );
        },
    },
}
</script>

<style scoped>
a:hover {
    color: #fff;
}
</style>

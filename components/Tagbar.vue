<template>
    <div id="tagbar" class="vh-100">
        <nav class="navbar">
            <div class="container-fluid p-0">
                <a href="javascript:;" v-on:click="resetSearchTerm()">{{ $config.APP_NAME }}</a>
            </div>
        </nav>
        <ul class="list-group">
            <template v-for="tag,index in tags">
                <li aria-current="true" v-if="tag.tools_count > 0">
                    <a href="javascript:;" v-on:click="setSearchTerm('#'+tag.slug)" class="list-group-item btn text-left d-flex justify-content-between align-items-center">
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
export default {
    name: 'Tagbar',
    computed: {
        tags() {
            return this.$store.getters['getTags'];
        },
    },
    methods: {
        resetSearchTerm: function (slug) {
            this.$store.commit( 'resetSearchTerm' );
            this.$router.push( '/' );
        },
        setSearchTerm: function (slug) {
            this.$store.commit( 'setSearchTerm', slug );
            this.$router.push( '/' );
        }
    }
}
</script>

<style scoped>
a:hover {
    color: #fff;
}
</style>

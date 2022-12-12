<template>
    <div id="tagbar" class="vh-100">
        <!-- <nav class="navbar">
            <div class="container-fluid p-0">
                <a href="javascript:;" v-on:click="resetSearchTerm()">{{ $config.APP_NAME }}</a>
            </div>
        </nav> -->
        <a href="javascript:;" v-on:click="setSortBy('name')" v-bind:class="[ isSortByName ? 'btn-custom2' : 'btn-outline-custom2', 'btn w-100']" style="margin-top:0.5rem;">sort by name</a>
        <a href="javascript:;" v-on:click="setSortBy('date')" v-bind:class="[ isSortByDate ? 'btn-custom1' : 'btn-outline-custom1', 'btn w-100 mt-1']">sort by last</a>
        <ul class="list-group mt-3">
            <li>
                <a href="javascript:;" v-on:click="resetSearchTerm()" class="list-group-item btn text-left d-flex justify-content-between align-items-center">
                    <span class="hashtag">#</span>
                    <span class="nicename w-100">all</span>
                    <span class="badge rounded-pill">{{ getToolsN }}</span>
                </a>
            </li>
            <template v-for="tag,index in tags">
                <li v-if="tag.tools_count > 0">
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
        // sort_by() {
        //     return this.$store.getters['getSortBy'];
        // },
        isSortByName() {
            return (this.$store.getters['getSortBy'] == 'name');
        },
        isSortByDate() {
            return (this.$store.getters['getSortBy'] == 'date');
        },
        getToolsN() {
            return this.$store.getters['getTools'].length;
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
        },
        setSortBy: function (sort_by) {
            this.$store.commit( 'setSortBy', sort_by );
        },
    }
}
</script>

<style scoped>
a:hover {
    color: #fff;
}
</style>

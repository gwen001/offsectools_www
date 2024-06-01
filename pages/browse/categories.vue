<template>
    <div id="browse-categories" class="container h-100 p-3">
        <div class="row mb-5">
            <div class="col">
                <TagsSorter></TagsSorter>
            </div>
        </div>
        <div class="row categories" style="border:1px solid #00f;">
            <template v-for="cat,index in categories">
                <div class="column col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5 col-12" style="border:1px solid #f00;">
                    <div class="title">{{ cat.nicename }}</div>
                    <template v-for="tag,index in cat.tags">
                        <nuxt-link :to="'/tag/'+tag.slug" v-on:click.native="resetSearch()" class="">
                            {{ tag.nicename }}<br>
                        </nuxt-link>
                    </template>
                </div>
            </template>
        </div>
    </div>
</template>


<script>
import TagsSorter from '~/components/TagsSorter.vue';

export default {
    name: 'tags',
    components: {
        TagsSorter
    },
    computed: {
        isSortByName() {
            this.sort_by = 'name';
            return (this.$store.getters['getTagsSortBy'] == 'name');
        },
        isSortByCategories() {
            this.sort_by = 'categories';
            return (this.$store.getters['getTagsSortBy'] == 'categories');
        },
        categories() {
            return this.$store.getters['getCategories'];
        },
        tags() {
            return this.$store.getters['getTagsByName'];
        },
    },
    methods: {
        resetSearch: function () {
            this.$store.commit( 'resetSearch', 1 );
            // this.$router.push( '/' );
        },
        // setSearchTerm: function (slug) {
        //     this.$store.commit( 'setSearchTerm', slug );
        //     this.$router.push( '/' );
        // },
    },
    mounted() {
        this.$store.commit( 'resetAwesomeBackground' );
        let masonry = new Masonry('#browse-categories .categories', {
            // columnWidth: "200",
            percentPosition: true,
            gutter: 0,
            horizontalOrder: true,
            itemSelector: ".column"
        });
    }
}
</script>

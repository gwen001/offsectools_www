<template>
    <div id="browse-alphabet" class="container h-100 p-3">
        <div class="row mb-5">
            <div class="col-2">
                <TagsSorter></TagsSorter>
            </div>
        </div>
        <div class="row alphabet">
            <template v-for="t_fl,fl in tags">
                <div class="column col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="title">{{ fl }}</div>
                    <template v-for="tag in t_fl">
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
        let masonry = new Masonry('#browse-alphabet .alphabet', {
            // columnWidth: "200",
            percentPosition: true,
            gutter: 0,
            horizontalOrder: true,
            itemSelector: ".column"
        });
    }
}
</script>

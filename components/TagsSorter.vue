<template>
    <div id="tags-sorter" class="position-relative mt-5">
        <div id="dropdown" class="d-flex dropdown">
            <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{{ currentSortTitle }}</a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li v-for="v,k in sort_values">
                    <a class="dropdown-item" href="javascript:;" v-on:click="setSortBy(k)">
                        <template v-if="v == currentSortTitle">
                            <span class="item-icon"><font-awesome-icon icon="fas fa-check" /></span>
                        </template>
                        <template v-else>
                            <span class="spacer"></span>
                        </template>
                        {{ v }}
                    </a>
                </li>
            </ul>
        </div>
        </div>
</template>

<script>
export default {
    name: 'TagsSorter',
    data() {
        return {
            sort_values: {
                name: 'sort by name',
                categories: 'sort by categories',
            }
        }
    },
    computed: {
        currentSortTitle() {
            return this.sort_values[ this.$store.getters['getTagsSortBy'] ];
        },
        isSortByName() {
            return (this.$store.getters['getTagsSortBy'] == 'name');
        },
        isSortByCategories() {
            return (this.$store.getters['getTagsSortBy'] == 'categories');
        },
    },
    methods: {
        setSortBy: function (sort_by) {
            // console.log(sort_by);
            this.$store.commit( 'setTagsSortBy', sort_by );
            if( sort_by == 'categories' ) {
                this.$router.push( '/browse/categories' );
            } else {
                this.$router.push( '/browse/alphabet' );
            }
        },
    },
}
</script>

<style scoped>
select, option {
    background-color: ;
}
</style>

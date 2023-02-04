<template>
    <div class="d-flex flex-wrap flex-row justify-content-center mt-5">
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{{ currentSortTitle }}</a>
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
        <!-- <div class="col-xl-2 col-lg-4 col-sm-4 col-6 mb-1">
            <a href="javascript:;" v-on:click="setSortBy('name')" v-bind:class="[ isSortByName ? 'btn-custom2' : 'btn-outline-custom2', 'btn w-100']">sort by name</a>
        </div>
        <div class="col-xl-2 col-lg-4 col-sm-4 col-6 mb-1">
            <a href="javascript:;" v-on:click="setSortBy('date')" v-bind:class="[ isSortByDate ? 'btn-custom1' : 'btn-outline-custom1', 'btn w-100']">sort by last</a>
        </div> -->
        <!-- <div class="col-xl-2 col-lg-4 col-sm-4 col-12 mb-1">
            <a href="javascript:;" v-on:click="setSortBy('ratings')" v-bind:class="[ isSortByRatings ? 'btn-custom3' : 'btn-outline-custom3', 'btn w-100']">best rated</a>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'ToolSorter',
    data() {
        return {
            sort_values: {
                name_asc: 'sort by name (A-Z)',
                name_desc: 'sort by name (Z-A)',
                rand: 'sort by rand',
                date_desc: 'newest first',
                date_asc: 'oldest first',
            }
        }
    },
    computed: {
        currentSortTitle() {
            // console.log(this.$store.getters['getSortBy']);
            // console.log( this.sort_values[ this.$store.getters['getSortBy'] ] );
            return this.sort_values[ this.$store.getters['getSortBy'] ];
        },
        isSortByName() {
            return (this.$store.getters['getSortBy'] == 'name');
        },
        isSortByDate() {
            return (this.$store.getters['getSortBy'] == 'date');
        },
        // isSortByRatings() {
        //     return (this.$store.getters['getSortBy'] == 'ratings');
        // },
    },
    methods: {
        setSortBy: function (sort_by) {
            console.log(sort_by);
            this.$store.commit( 'setSortBy', sort_by );
        },
    },
}
</script>

<style scoped>
select, option {
    background-color: ;
}
</style>

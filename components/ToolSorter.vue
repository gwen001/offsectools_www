<template>
    <div class="row mt-3 justify-content-center">
        <div class="col-xl-2 col-lg-4 col-sm-4 col-6 mb-1">
            <a href="javascript:;" v-on:click="setSortBy('name')" v-bind:class="[ isSortByName ? 'btn-custom2' : 'btn-outline-custom2', 'btn w-100']">sort by name</a>
        </div>
        <div class="col-xl-2 col-lg-4 col-sm-4 col-6 mb-1">
            <a href="javascript:;" v-on:click="setSortBy('date')" v-bind:class="[ isSortByDate ? 'btn-custom1' : 'btn-outline-custom1', 'btn w-100']">sort by last</a>
        </div>
        <!-- <div class="col-xl-2 col-lg-4 col-sm-4 col-12 mb-1">
            <a href="javascript:;" v-on:click="setSortBy('ratings')" v-bind:class="[ isSortByRatings ? 'btn-custom3' : 'btn-outline-custom3', 'btn w-100']">best rated</a>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'ToolSorter',
    computed: {
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
            this.$store.commit( 'setSortBy', sort_by );
        },
    },
}
</script>

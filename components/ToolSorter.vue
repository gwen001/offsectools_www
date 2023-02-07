<template>
    <div class="position-relative mt-5">
        <div id="counter" class="d-flex">
            {{ tools }} tool<span v-if="tools > 1">s</span>&nbsp;found
        </div>
        <div id="sorter" class="d-flex position-relative mt-1">
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
    </div>
</template>

<script>
export default {
    name: 'ToolSorter',
    props:['tools'],
    data() {
        return {
            sort_values: {
                date_desc: 'newest first',
                date_asc: 'oldest first',
                name_asc: 'sort by name (A-Z)',
                name_desc: 'sort by name (Z-A)',
                rand: 'random sort',
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.getDimensions);
        this.getDimensions();
    },
    unmounted() {
        window.removeEventListener('resize', this.getDimensions);
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
    watch: {
        tools(new_value,old_value) {
            this.getDimensions();
        }
    },
    methods: {
        getDimensions() {
            var t_cards = document.getElementsByClassName('toolcard-loop');
            var min_left = -1;
            var max_left = -1;
            for( var i=0 ; i<t_cards.length ; i++ ) {
                var rect = t_cards[i].getBoundingClientRect();
                if( min_left<0 || rect.left<min_left ) {
                    min_left = rect.left;
                }
                if( max_left<0 || rect.left>max_left ) {
                    max_left = rect.left;
                }
            }
            var x_left, x_right;
            var mmi = document.getElementById('mobilemenu-icon');
            if( mmi.checkVisibility() ) {
                // mobile icon visible so tagbar is NOT visible
                x_left = (min_left-8);
                x_right = (max_left-170+250+8);
            } else {
                // mobile icon NOT visible so tagbar IS visible
                x_left = (min_left-250-8);
                x_right = (max_left-170+8);
            }
            if( (max_left-min_left)<10 ) {
                // 1 column
                document.getElementById("sorter").style.justifyContent = 'center';
                document.getElementById("sorter").style.left = '0px';
                document.getElementById("sorter").style.width = 'inherit';
                document.getElementById("counter").style.justifyContent = 'center';
                document.getElementById("counter").style.left = '0px';
                document.getElementById("counter").style.top = '0px';
                document.getElementById("counter").style.position = 'relative';
            } else {
                // more than 1 column
                document.getElementById("sorter").style.justifyContent = 'inherit';
                document.getElementById("sorter").style.left = x_right+'px';
                document.getElementById("sorter").style.width = 'fit-content';
                document.getElementById("counter").style.justifyContent = 'inherit';
                document.getElementById("counter").style.left = x_left+'px';
                document.getElementById("counter").style.top = '10px';
                document.getElementById("counter").style.position = 'absolute';
            }
            if( this.tools <= 1 ) {
                document.getElementById("sorter").style.setProperty('display', 'none', 'important');
            } else {
                document.getElementById("sorter").style.display = 'block';
            }
        },
        setSortBy: function (sort_by) {
            // console.log(sort_by);
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

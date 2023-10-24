<template>
    <div id="loadmore" class="d-flex justify-content-center mt-4 mb-5">
        <button class="form-control" v-on:click="setSearchPage()">Load more {{ search_page }}</button>
    </div>
</template>

<script>
export default {
    name: 'LoadMore',
    props:['tools'],
    computed: {
        search_page() {
            return this.$store.getters['getSearchPage'];
        }
    },
    methods: {
        setSearchPage() {
            this.$store.commit( 'incrSearchPage' );
        }
    }
}
</script>

<style scoped>
.form-control {
    width: 200px;
}
</style>

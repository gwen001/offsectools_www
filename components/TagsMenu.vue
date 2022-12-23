<template>
    <div id="mobile-menu" class="mb-3">
        <div class="row mt-1">
            <div class="col">
                <a href="javascript:;" v-on:click="showTagsCategories" v-bind:class="[ isTagsCategories ? 'btn-custom3' : 'btn-outline-custom3', 'btn w-100']">Categories</a>
            </div>
        </div>
        <div class="row mt-1">
            <div class="col">
                <a href="javascript:;" v-on:click="showTopTags" v-bind:class="[ isTopTags ? 'btn-custom2' : 'btn-outline-custom2', 'btn w-100']">Top tags</a>
            </div>
        </div>
        <div class="row mt-1">
            <div class="col">
                <a href="javascript:;" v-on:click="showAllTags" v-bind:class="[ isAllTags ? 'btn-custom1' : 'btn-outline-custom1', 'btn w-100']">All tags</a>
            </div>
        </div>
    </div>
</template>

<script>
import RandomTool from '~/components/RandomTool.vue';

export default {
    name: 'MobileMenu',
    components: {
        RandomTool
    },
    computed: {
        isTagsCategories() {
            return (this.$store.getters['getTagsDisplay'] == 'categories');
        },
        isTopTags() {
            return (this.$store.getters['getTagsDisplay'] == 'top');
        },
        isAllTags() {
            return (this.$store.getters['getTagsDisplay'] == 'all');
        },
    },
    methods: {
        showTagsCategories() {
            this.$store.commit( 'setTagsDisplay', 'categories' );
        },
        showTopTags() {
            this.$store.commit( 'setTagsDisplay', 'top' );
        },
        showAllTags() {
            this.$store.commit( 'setTagsDisplay', 'all' );

        },
    },
}
</script>

<style scope>
</style>
<template>
    <div id="tagbar" ref="tagbar" class="vh-100">
        <MobileMenu></MobileMenu>
        <TagsMenu></TagsMenu>
        <template v-if="isTagsCategories">
            <div class="accordion accordion-flush" id="accordion">
                <template v-for="cat,index in categories">
                        <div class="accordion-item">
                            <h2 class="accordion-header" :id="'panelsStayOpen-heading'+cat.id">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#panelsStayOpen-collapse'+cat.id" aria-expanded="true" :aria-controls="'panelsStayOpen-collapse'+cat.id">
                                    {{ cat.nicename }}
                                </button>
                            </h2>
                            <div :id="'panelsStayOpen-collapse'+cat.id" class="accordion-collapse collapse show" :aria-labelledby="'panelsStayOpen-heading'+cat.id">
                                <div class="accordion-body">
                                    <!-- <ul class="list-group">
                                        <template v-for="tag,index in cat.tags">
                                            <li>
                                                <a href="javascript:;" v-on:click="setSearchTerm('#'+tag.slug)" class="list-group-item btn text-start d-flex justify-content-between align-items-center">
                                                    <span class="hashtag">#</span>
                                                    <span class="nicename flex-fill">{{ tag.nicename }}</span>
                                                    <span class="badge rounded-pill">{{ tag.tools_count }}</span>
                                                </a>
                                            </li>
                                        </template>
                                    </ul> -->
                                    <template v-for="tag,index in cat.tags">
                                        <a href="javascript:;" v-on:click="setSearchTerm('#'+tag.slug)" class="">
                                            <span class="hashtag m-0">#</span>
                                            <span class="nicename">{{ tag.nicename }}</span>
                                        </a><br>
                                    </template>
                                </div>
                            </div>
                        </div>
                </template>
            </div>
        </template>
        <template v-else>
            <ul class="list-group mt-3">
                <li>
                    <a href="javascript:;" v-on:click="resetSearchTerm()" class="list-group-item btn text-start d-flex justify-content-between align-items-center">
                        <span class="hashtag">#</span>
                        <span class="nicename flex-fill">all</span>
                        <span class="badge rounded-pill">{{ getToolsN }}</span>
                    </a>
                </li>
                <template v-for="tag,index in tags">
                    <li>
                        <a href="javascript:;" v-on:click="setSearchTerm('#'+tag.slug)" class="list-group-item btn text-start d-flex justify-content-between align-items-center">
                            <span class="hashtag">#</span>
                            <span class="nicename flex-fill">{{ tag.nicename }}</span>
                            <span class="badge rounded-pill">{{ tag.tools_count }}</span>
                        </a>
                    </li>
                </template>
            </ul>
        </template>
    </div>
</template>

<script>
import MobileMenu from '~/components/MobileMenu.vue';
import TagsMenu from '~/components/TagsMenu.vue';

export default {
    name: 'Tagbar',
    components: {
        MobileMenu, TagsMenu
    },
    computed: {
        categories() {
            return this.$store.getters['getCategories'];
        },
        tags() {
            return this.$store.getters['getTags'];
        },
        getToolsN() {
            return this.$store.getters['getTools'].length;
        },
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
        showMe() {
            // alert(2);
            this.$refs.tagbar.classList.add('show');
        },
        hideMe() {
            // alert(4);
            this.$refs.tagbar.classList.remove('show');
        },
        resetSearchTerm: function () {
            this.$store.commit( 'resetSearchTerm' );
            this.$router.push( '/' );
        },
        setSearchTerm: function (slug) {
            this.$store.commit( 'setSearchTerm', slug );
            this.$router.push( '/' );
        },
    },
    mounted() {
        // alert(1);
    }
}
</script>

<style scoped>
.accordion-item a:hover .hashtag {
    color: #22d3ee;
}
.accordion-item a:hover .nicename {
    color: #fff;
}
.accordion-item {
    background-color: #0a0c1f;
    border: 0px;
    /* border-color: #f00; */
    margin-bottom: 5px;
}
.accordion-button {
    background-color: #141729;
    border-radius: .25rem !important;
    color: #fff;
    font-size: 0.95rem !important;
    padding: 10px;
}
.accordion-body {
    font-size: 0.95em !important;
    /* padding: 5px; */
}
.accordion-button:after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
  /* transform: rotate(-90deg); */
    transform: rotate(-90deg);
}
.accordion-button:not(.collapsed):after {
    transform: rotate(0deg);
}
</style>
